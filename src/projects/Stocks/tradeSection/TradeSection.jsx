import React, { useState } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';
import CompanyNews from './CompanyInfo/CompanyNews';
import CompanyInfo from './CompanyInfo';

const TradeSection = () => {
    const [symbol, setSymbol] = useState('');
    const [shares, setShares] = useState('');
    const [stockData, setStockData] = useState(null);

    const handleChangeSymbol = (event) => {
        setSymbol(event.target.value);
    };

    const handleChangeShares = (event) => {
        setShares(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const apiKey = import.meta.env.VITE_POLYGON_KEY;

        // Fetch stock data from Polygon.io API
        const apiUrl = `https://api.polygon.io/v2/aggs/ticker/${symbol}/prev?adjusted=true&apiKey=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            const responseData = await response.json();

            // Extracting relevant data from the response
            const stockData = responseData.results[0];
            const latestStockValue = stockData.c;
            const fiftyTwoWeekHigh = stockData.h;
            const fiftyTwoWeekLow = stockData.l;

            // Update stock data state
            setStockData({
                symbol: symbol,
                latestValue: latestStockValue,
                shares: shares,
                totalPrice: latestStockValue * shares,
                fiftyTwoWeekHigh: fiftyTwoWeekHigh,
                fiftyTwoWeekLow: fiftyTwoWeekLow,
            });
        } catch (error) {
            console.error("Error fetching stock data:", error);
        }
    };

    return (
        <Container style={{}}>
            <h2>Trade Section</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formSymbol">
                    <Form.Label>Stock Ticker Symbol</Form.Label>
                    <Form.Control type="text" placeholder="Enter symbol" value={symbol} onChange={handleChangeSymbol} />
                </Form.Group>
                <Form.Group controlId="formShares">
                    <Form.Label>Number of Shares</Form.Label>
                    <Form.Control type="number" placeholder="Enter number of shares" value={shares} onChange={handleChangeShares} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Get Stock Data
                </Button>
            </Form>
            {stockData && (
                <div>
                    <CompanyInfo symbol={symbol} />
                    {/* <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Symbol</th>
                                <th>Latest Value</th>
                                <th>Number of Shares</th>
                                <th>Total Price</th>
                                <th>52-Week High</th>
                                <th>52-Week Low</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{stockData.symbol}</td>
                                <td>{stockData.latestValue}</td>
                                <td>{stockData.shares}</td>
                                <td>{stockData.totalPrice}</td>
                                <td>{stockData.fiftyTwoWeekHigh}</td>
                                <td>{stockData.fiftyTwoWeekLow}</td>
                            </tr>
                        </tbody>
                    </Table> */}
                </div>
            )}
        </Container>
    );
};

export default TradeSection;

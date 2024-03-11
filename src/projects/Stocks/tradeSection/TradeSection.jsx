import React, { useState, useEffect } from 'react';
import { Card, Container, Form, Button, Row, Col } from 'react-bootstrap';
import CompanyInfo from './CompanyInfo/CompanyInfo';
import Papa from 'papaparse'; // Import PapaParse library for CSV parsing
import './TradeSection.css'; // Import custom CSS for styling

function TradeSection({ userInfo }) {
    const [symbol, setSymbol] = useState('');
    const [tempSymbol, setTempSymbol] = useState('');
    const [shares, setShares] = useState('');
    const [transactionType, setTransactionType] = useState('buy');
    const [stockData, setStockData] = useState(null);
    const [stockTickers, setStockTickers] = useState([]); // Store stock tickers and names from CSV
    const [selectedCompanyName, setSelectedCompanyName] = useState('');

    useEffect(() => {
        // Load stock tickers from CSV file when component mounts
        fetchStockTickers();
    }, []);

    const fetchStockTickers = () => {
        // Fetch stock tickers from CSV file
        fetch('/portfolio/games/stocktickers.csv')
            .then(response => response.text())
            .then(csv => {
                // Parse CSV using PapaParse library
                const { data } = Papa.parse(csv);
                // Extract tickers and names from CSV data
                const tickers = data.map(row => ({
                    symbol: row[0],
                    name: row[1]
                }));
                // Update state with tickers and names
                setStockTickers(tickers);
            })
            .catch(error => console.error('Error fetching stock tickers:', error));
    };

    const handleConfirmTrade = () => {
        // Confirm trade logic
    };

    const handleChangeSymbol = () => {
        setSymbol(tempSymbol);
    };

    const handleChangeTempSymbol = (event) => {
        const inputSymbol = event.target.value;
        setTempSymbol(inputSymbol);
        // Find company name corresponding to selected ticker
        const selectedTicker = stockTickers.find(ticker => ticker.symbol === inputSymbol);
        if (selectedTicker) {
            setSelectedCompanyName(selectedTicker.name);
        } else {
            setSelectedCompanyName('');
        }
    };

    const handleChangeShares = (event) => {
        setShares(event.target.value);
    };

    const handleTransactionTypeChange = (event) => {
        setTransactionType(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Simulate fetching stock data
        const simulatedStockData = { /* Simulated stock data */ };
        setStockData(simulatedStockData);
    };

    return (
        <Card className="trade-section-card">
            <Card.Body>
                <Container>
                    <Row>
                        <Col lg={6} md={12} className="trade-form-column">
                            <h2 className="trade-section-title">Trade Section</h2>
                            <Form onSubmit={handleSubmit} className="trade-form">
                                <Form.Group controlId="formSymbol">
                                    <Form.Label className="trade-label">Stock Symbol</Form.Label>
                                    <Form.Control type="text" placeholder="Enter symbol" value={tempSymbol}
                                        onChange={handleChangeTempSymbol} list="tickerList" className="trade-input" />
                                    {tempSymbol.length > 0 && (
                                        <datalist id="tickerList">
                                            {stockTickers.map((ticker, index) => (
                                                <option key={index} value={ticker.symbol}>{ticker.name}</option>
                                            ))}
                                        </datalist>
                                    )}
                                </Form.Group>

                                <Form.Group controlId="formShares">
                                    <Form.Label className="trade-label">Number of Shares</Form.Label>
                                    <Form.Control type="number" placeholder="Enter number of shares" value={shares} onChange={handleChangeShares} className="trade-input" />
                                </Form.Group>
                                <Form.Group controlId="formTransactionType">
                                    <Form.Label className="trade-label">Transaction Type</Form.Label>
                                    <Form.Control as="select" value={transactionType} onChange={handleTransactionTypeChange} className="trade-input">
                                        <option value="buy">Buy</option>
                                        <option value="sell">Sell</option>
                                    </Form.Control>
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={handleChangeSymbol} className="trade-button">
                                    Get Stock Data
                                </Button>
                                {stockData && <Button variant="success" type="submit" onClick={handleConfirmTrade} className="trade-button">
                                    Confirm Trade
                                </Button>}
                            </Form>
                        </Col>
                        <Col lg={6} md={12}>
                            <CompanyInfo userInfo={userInfo} shares={shares} symbol={symbol} stockData={stockData} />
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
};

export default TradeSection;

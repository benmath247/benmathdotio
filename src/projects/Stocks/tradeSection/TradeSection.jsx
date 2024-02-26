import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import CompanyInfo from './CompanyInfo/CompanyInfo';

const TradeSection = () => {
    const [symbol, setSymbol] = useState('');
    const [shares, setShares] = useState('');
    const [transactionType, setTransactionType] = useState(null); // Default transaction type is buy
    const [stockData, setStockData] = useState(null);

    const handleChangeSymbol = (event) => {
        setSymbol(event.target.value);
    };

    const handleChangeShares = (event) => {
        setShares(event.target.value);
    };

    const handleTransactionTypeChange = (event) => {
        setTransactionType(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStockData({});
        // Remaining code for fetching stock data...
    };

    return (
        <Container>
            <Row>
                <Col lg={4} md={12}>
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
                        <Form.Group controlId="formTransactionType">
                            <Form.Label>Transaction Type</Form.Label>
                            <Form.Control as="select" value={transactionType} onChange={handleTransactionTypeChange}>
                                <option value="buy">Buy</option>
                                <option value="sell">Sell</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Get Stock Data
                        </Button>
                    </Form>
                </Col>
                <Col lg={8} md={12}>
                    {stockData && (
                        <div>
                            <CompanyInfo symbol={symbol} stockData={stockData} />
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default TradeSection;

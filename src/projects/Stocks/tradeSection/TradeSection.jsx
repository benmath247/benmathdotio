import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import CompanyInfo from './CompanyInfo/CompanyInfo';

const TradeSection = () => {
    const [symbol, setSymbol] = useState('');
    const [tempSymbol, setTempSymbol] = useState('');
    const [shares, setShares] = useState('');
    const [transactionType, setTransactionType] = useState('buy'); // Default transaction type is buy
    const [stockData, setStockData] = useState(null);

    const handleChangeSymbol = (event) => {
        setSymbol(tempSymbol);
    };
    const handleChangeTempSymbol = (event) => {
        setTempSymbol(event.target.value);
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
                            <Form.Label className="styled-label">Stock Ticker Symbol</Form.Label>
                            <Form.Control type="text" placeholder="Enter symbol" value={tempSymbol}
                                onChange={handleChangeTempSymbol} />
                        </Form.Group>
                        <Form.Group controlId="formShares">
                            <Form.Label className="styled-label">Number of Shares</Form.Label>
                            <Form.Control type="number" placeholder="Enter number of shares" value={shares} onChange={handleChangeShares} />
                        </Form.Group>
                        <Form.Group controlId="formTransactionType">
                            <Form.Label className="styled-label">Transaction Type</Form.Label>
                            <Form.Control as="select" value={transactionType} onChange={handleTransactionTypeChange}>
                                <option value="buy">Buy</option>
                                <option value="sell">Sell</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleChangeSymbol}>
                            Get Stock Data
                        </Button>
                    </Form>
                </Col>
                <Col lg={8} md={12}>
                    {stockData && (
                        <div>
                            <CompanyInfo shares={shares} symbol={symbol} stockData={stockData} />
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default TradeSection;

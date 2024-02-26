import React from 'react';
import { Table } from 'react-bootstrap';

const Quote = ({ stockData }) => {
    // console.log(stockData)
    return (
        <Table striped bordered hover>
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
        </Table>
    );
};

export default Quote;

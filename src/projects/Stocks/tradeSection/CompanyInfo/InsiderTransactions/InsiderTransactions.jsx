import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

const apiKey = import.meta.env.VITE_FINNHUB_KEY;

function InsiderTransactions({ symbol }) {
    const [transactionsData, setTransactionsData] = useState(null);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get(`https://finnhub.io/api/v1/stock/insider-transactions?symbol=${symbol}&limit=20&token=${apiKey}`);
                setTransactionsData(response.data.data);
            } catch (error) {
                console.error('Error fetching insider transactions:', error);
            }
        };

        fetchTransactions();
    }, [symbol]);


    return (
        <Card>
            <Card.Header>{symbol} Insider Transactions</Card.Header>
            <Card.Body>
                <div style={{ overflowX: 'auto' }}>
                    {transactionsData && (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Shares</th>
                                    <th>Change</th>
                                    <th>Filing Date</th>
                                    <th>Transaction Date</th>
                                    <th>Transaction Code</th>
                                    <th>Transaction Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactionsData.map((transaction, index) => (
                                    <tr key={index}>
                                        <td>{transaction.name}</td>
                                        <td>{transaction.share}</td>
                                        <td>{transaction.change}</td>
                                        <td>{transaction.filingDate}</td>
                                        <td>{transaction.transactionDate}</td>
                                        <td>{transaction.transactionCode}</td>
                                        <td>{transaction.transactionPrice}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}

export default InsiderTransactions;

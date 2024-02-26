import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import './EPSSurprises.css'; // Import custom CSS file

const apiKey = import.meta.env.VITE_FINNHUB_KEY;

function EPSSurprises({ symbol }) {
    const [earningsData, setEarningsData] = useState(null);

    useEffect(() => {
        const fetchEarnings = async () => {
            try {
                const response = await axios.get(`https://finnhub.io/api/v1/stock/earnings?symbol=${symbol}&token=${apiKey}`);
                setEarningsData(response.data);
            } catch (error) {
                console.error('Error fetching earnings data:', error);
            }
        };

        fetchEarnings();
    }, [symbol]);

    return (
        <Card>
            <Card.Header>{symbol} EPS Surprises</Card.Header>
            <Card.Body>
                <div className="custom-table-responsive">
                    {earningsData && (
                        <table className="custom-table">
                            <thead className="custom-thead">
                                <tr>
                                    <th>Period</th>
                                    <th>Actual</th>
                                    <th>Estimate</th>
                                    <th>Surprise</th>
                                    <th>Surprise Percent</th>
                                    <th>Quarter</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {earningsData.map((earnings, index) => (
                                    <tr key={index} className={earnings.surprise >= 0 ? 'positive-surprise' : 'negative-surprise'}>
                                        <td>{earnings.period}</td>
                                        <td>{earnings.actual}</td>
                                        <td>{earnings.estimate}</td>
                                        <td>{earnings.surprise}</td>
                                        <td>{earnings.surprisePercent}</td>
                                        <td>{earnings.quarter}</td>
                                        <td>{earnings.year}</td>
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

export default EPSSurprises;

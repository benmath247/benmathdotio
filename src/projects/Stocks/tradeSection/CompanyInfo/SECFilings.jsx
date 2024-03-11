import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

const apiKey = import.meta.env.VITE_FINNHUB_KEY;

function SECFilings({ symbol }) {
    const [filingsData, setFilingsData] = useState(null);

    useEffect(() => {
        const fetchFilings = async () => {
            try {
                const response = await axios.get(`https://finnhub.io/api/v1/stock/filings?symbol=${symbol}&token=${apiKey}`);
                setFilingsData(response.data);
            } catch (error) {
                console.error('Error fetching filings data:', error);
            }
        };

        fetchFilings();
    }, [symbol]);

    return (
        <Card>
            <Card.Header>{symbol} SEC Filings</Card.Header>
            <Card.Body>
                <div className="custom-table-responsive">
                    {filingsData && (
                        <table className="custom-table">
                            <thead className="custom-thead">
                                <tr>
                                    <th>Access Number</th>
                                    <th>Form</th>
                                    <th>Filing Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filingsData.map((filing, index) => (
                                    <tr key={index}>
                                        <td>{filing.accessNumber}</td>
                                        <td><a href={filing.reportUrl} target="_blank" rel="noopener noreferrer">{filing.form}</a></td>
                                        <td><a href={filing.filingUrl} target="_blank" rel="noopener noreferrer">{filing.filedDate}</a></td>
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

export default SECFilings;

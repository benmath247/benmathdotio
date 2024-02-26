import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import '../EPSSurprises/EPSSurprises.css'; // Import the provided CSS file

const apiKey = import.meta.env.VITE_FINNHUB_KEY;

function Quote({ symbol, shares }) {
    const [quoteData, setQuoteData] = useState(null);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`);
                setQuoteData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching quote data:', error);
            }
        };

        fetchQuote();
    }, [symbol]);

    return (
        <Card className="custom-table-responsive">
            <Card.Header className="custom-positive-surprise">Stock Quote for {symbol}</Card.Header>
            <Card.Body>
                {quoteData && (<div>
                    <table className='custom-table'>
                        <tbody>
                            <tr>
                                <td>Available Cash</td>
                                <td>$1000000</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <table className='custom-table'>
                        <tbody>
                            <tr>
                                <td>Shares</td>
                                <td>{shares}</td>
                            </tr>
                            <tr>
                                <td>Total Cost</td>
                                <td>${shares * quoteData.c}</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <table className="custom-table">
                        <tbody>
                            <tr>
                                <td><strong>Current Price:</strong></td>
                                <td>{quoteData.c}</td>
                            </tr>
                            <tr>
                                <td><strong>Change:</strong></td>
                                <td>{quoteData.d}</td>
                            </tr>
                            <tr>
                                <td><strong>Percent Change:</strong></td>
                                <td>{quoteData.dp}%</td>
                            </tr>
                            <tr>
                                <td><strong>High Price of the Day:</strong></td>
                                <td>{quoteData.h}</td>
                            </tr>
                            <tr>
                                <td><strong>Low Price of the Day:</strong></td>
                                <td>{quoteData.l}</td>
                            </tr>
                            <tr>
                                <td><strong>Open Price of the Day:</strong></td>
                                <td>{quoteData.o}</td>
                            </tr>
                            <tr>
                                <td><strong>Previous Close Price:</strong></td>
                                <td>{quoteData.pc}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
            </Card.Body>
        </Card >
    );
}

export default Quote;

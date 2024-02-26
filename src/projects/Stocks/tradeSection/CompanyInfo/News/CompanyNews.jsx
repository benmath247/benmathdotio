import React, { useEffect, useState } from 'react';
import * as finnhub from 'finnhub';
import NewsList from './NewsList';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CompanyNews({ symbol }) {
    const [newsData, setNewsData] = useState(null);

    useEffect(() => {
        const getCompanyNews = async () => {
            const api_key = finnhub.ApiClient.instance.authentications['api_key'];
            api_key.apiKey = import.meta.env.VITE_FINNHUB_KEY;
            const finnhubClient = new finnhub.DefaultApi();

            // Calculate date range for the last 3 months
            const endDate = new Date();
            const startDate = new Date();
            startDate.setMonth(startDate.getMonth() - 3);

            try {
                const data = await new Promise((resolve, reject) => {
                    finnhubClient.companyNews(symbol, startDate.toISOString().split('T')[0], endDate.toISOString().split('T')[0], (error, data, response) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    });
                });

                setNewsData(data.slice(0, 8));
            } catch (error) {
                console.error('Error fetching company news:', error);
            }
        };

        getCompanyNews();
    }, [symbol]); // Dependency array includes the symbol variable

    return (
        <Card>
            <Card.Header>{symbol} News</Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    {newsData && <NewsList newsList={newsData} />}
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default CompanyNews;

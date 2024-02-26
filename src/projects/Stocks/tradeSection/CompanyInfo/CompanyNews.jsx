import React, { useEffect, useState } from 'react';
import * as finnhub from 'finnhub';
import NewsList from './NewsList';

function CompanyNews({ symbol }) {

    const [newsData, setNewsData] = useState(null)

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
                // Here you can set the state with the fetched data or perform other actions
            } catch (error) {
                console.error('Error fetching company news:', error);
            }
        };

        getCompanyNews();
    }, [symbol]); // Dependency array includes the symbol variable
    console.log(newsData)

    return (
        <div>
            {newsData && <NewsList newsList={newsData} />}
        </div>

    )

}
export default CompanyNews;

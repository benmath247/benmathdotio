import React from 'react';
import NewsCard from './NewsCard'; // Assuming NewsCard component is in a separate file
import { Row, Col } from 'react-bootstrap';

const NewsList = ({ newsList }) => {
    return (
        <div>
            <Row>
                {newsList.slice(0, 4).map((news) => (
                    <Col key={news.id} md={3} sm={6}>
                        <NewsCard news={news} />
                    </Col>
                ))}
            </Row>
            <Row>
                {newsList.slice(4, 8).map((news) => (
                    <Col key={news.id} md={3} sm={6}>
                        <NewsCard news={news} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default NewsList;

import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const NewsCard = ({ news }) => {
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={news.image} /> */}
      <Card.Body style={{ height: '400px' }}>
        <Card.Title>{news.headline}</Card.Title>
        <Card.Text>
          {news.summary}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {/* <ListGroup.Item>Category: {news.category}</ListGroup.Item> */}
        {/* <ListGroup.Item>Source: {news.source}</ListGroup.Item> */}
        {/* <ListGroup.Item>Related: {news.related}</ListGroup.Item> */}
      </ListGroup>
      <Card.Body>
        <Card.Link href={news.url}>Read More</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;

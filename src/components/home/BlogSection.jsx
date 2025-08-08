import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function BlogSection() {
    const navigate = useNavigate();

    const blogs = [
        {
            title: 'Overhauling my Website',
            excerpt: 'My website hadn\'t been updated in a while, so I decided to give it a complete overhaul. This post covers the changes I made, the technologies I used, and the lessons learned along the way...',
            slug: 'overhauling-my-website'
        },
    ];

    return (
        <Container className="my-5">
            <h2 className="mb-4 text-center">Latest Blog Posts</h2>
            <Row xs={1} md={3} className="g-4">
                {blogs.map((blog, idx) => (
                    <Col key={blog.title}>
                        <Card className="h-100">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{blog.title}</Card.Title>
                                <Card.Text className="mb-4">{blog.excerpt}</Card.Text>
                                <div className="mt-auto d-flex justify-content-end">
                                    <Button variant="outline-primary" size="sm" onClick={() => navigate('/blog')}>
                                        Read More
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
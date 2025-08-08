import { useNavigate } from 'react-router-dom';
import { Col, Card, Button } from 'react-bootstrap';

export default function BlogItem({ blog, }) {
    const navigate = useNavigate();
    return (
        <Col key={blog.title}>
            <Card className="h-100">
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text className="mb-4">{blog.excerpt}</Card.Text>
                    <div className="mt-auto d-flex justify-content-end">
                        <Button variant="outline-primary" size="sm" onClick={() => navigate(`/blog/${blog.slug}`)}>
                            Read More
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}
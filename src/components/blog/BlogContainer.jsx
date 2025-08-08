import { Card, Row, Col } from 'react-bootstrap';

export default function BlogContainer({ title, date, photo, children }) {
    return (
        <div className='container py-4'>
            <Card className='shadow-sm mb-4'>
                <Card.Body>
                    <Row className='align-items-center'>
                        {photo && (
                            <Col xs='auto'>
                                <img src={photo} alt={title} className='img-fluid rounded border' style={{ maxHeight: 100, maxWidth: 100 }} />
                            </Col>
                        )}
                        <Col>
                            <h1 className='mb-1'>{title}</h1>
                            {date && <div className='text-muted'>{date}</div>}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className='shadow-sm'>
                <Card.Body>
                    {children}
                </Card.Body>
            </Card>
        </div>
    );
}
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BlogItem from './BlogItem';

export default function BlogSection() {
    const blogs = [
        {
            id: '1',
            title: 'Overhauling my Website',
            excerpt: 'My website hadn\'t been updated in a while, so I decided to give it a complete overhaul. This post covers the changes I made, the technologies I used, and the lessons learned along the way...',
            slug: 'overhauling-my-website',
            date: '2025-07-15',
            image: '/images/website-overhaul.jpg', // Add image support
            category: 'Web Development'
        },
        {
            id: '2',
            title: 'Winter Catch Up',
            excerpt: 'A personal and professional update covering my time at Drexel, teaching Python at the library, getting engaged, and plans to revamp this website.',
            slug: 'winter-catch-up',
            date: '2025-01-20',
            image: '/images/winter-update.jpg',
            category: 'Personal'
        },
        {
            id: '3',
            title: 'Learning From Failure',
            excerpt: 'How a failed travel plan during the pandemic led to a successful bike business and valuable lessons in resilience and adaptation.',
            slug: 'learning-from-failure',
            date: '2024-11-10',
            image: '/images/bike.jpg',
            category: 'Entrepreneurship'
        }
    ];

    return (
        <Container className="py-5">
            <div className="text-center mb-5">
                <h2 className="display-4 fw-bold">Latest Blog Posts</h2>
                <p className="text-muted lead">Discover my latest thoughts and experiences</p>
            </div>
            <Row xs={1} md={2} lg={3} className="">
                {blogs.map((blog) => (
                    <Col key={blog.id}>
                        <BlogItem blog={blog} />
                    </Col>
                ))}
            </Row>
            <div className="text-center mt-5">
                <Button
                    as={Link}
                    to="/blog"
                    variant="primary"
                    size="lg"
                    className="px-4 py-2"
                >
                    View All Posts
                </Button>
            </div>
        </Container>
    );
}
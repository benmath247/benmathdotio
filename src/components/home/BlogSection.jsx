import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import BlogItem from './BlogItem';

export default function BlogSection() {

    const blogs = [
        {
            title: 'Overhauling my Website',
            excerpt: 'My website hadn\'t been updated in a while, so I decided to give it a complete overhaul. This post covers the changes I made, the technologies I used, and the lessons learned along the way...',
            slug: 'overhauling-my-website'
        },
        {
            title: 'Winter Catch Up',
            excerpt: 'A personal and professional update covering my time at Drexel, teaching Python at the library, getting engaged, and plans to revamp this website.',
            slug: 'winter-catch-up'
        }
    ];

    return (
        <Container className="my-5">
            <h2 className="mb-4 text-center">Latest Blog Posts</h2>
            <Row xs={1} md={3} className="g-4">
                {blogs.map((blog, idx) => (
                    <BlogItem blog={blog} key={idx} />
                ))}
            </Row>
        </Container>
    );
}
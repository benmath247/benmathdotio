import React, { useState } from 'react';
import { Container, Row, Col, Form, ListGroup } from 'react-bootstrap';
import BlogPreview from './BlogPreview'; // Import the BlogPreview component

function Blog({ allPostsData }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortDirection, setSortDirection] = useState('asc');

    const filteredPosts = allPostsData.filter((post) =>
        selectedCategory === 'All' ? true : post.category === selectedCategory
    );

    const sortPosts = () => {
        const sorted = [...filteredPosts]; // Create a new array to avoid mutating the original

        sorted.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);

            if (sortDirection === 'asc') {
                return dateA - dateB;
            } else {
                return dateB - dateA;
            }
        });

        return sorted;
    };

    const categories = ['All', ...new Set(allPostsData.map((post) => post.category))];

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleSortChange = () => {
        // Toggle sort direction when changing the sorting criteria
        setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'));
    };

    const sortedPosts = sortPosts();

    return (
        <Container style={{ marginTop: '100px' }}>
            <Row>
                <Col>
                    <h1>Blog</h1>
                    <Row style={{ marginTop: '25px', marginBottom: '25px' }}>
                        <Col>
                            <Form.Group>
                                <Form.Control
                                    as="select"
                                    value={selectedCategory}
                                    onChange={handleCategoryChange}
                                >
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <div onClick={handleSortChange}>
                                    {sortDirection === 'asc' ? `Date: \u2193` : `Date: \u2191`}
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <ListGroup>
                        {sortedPosts.reverse().map((post, index) => (
                            <BlogPreview
                                key={index}
                                title={post.title}
                                subtitle={post.subtitle}
                                date={post.date}
                                content={post.content}
                            />
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default Blog;

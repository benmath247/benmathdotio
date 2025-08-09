import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// --- Constants ---
const IMAGE_STYLE = {
    width: '100%',
    height: '500px',
    objectFit: 'contain',
    background: 'transparent',
    display: 'block'
};

const CARD_STYLE = {
    cursor: 'pointer',
    overflow: 'hidden'
};


function BlogItem({ blog }) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        window.scrollTo(0, 0);
        navigate(`/blog/${blog.slug}`);
    };

    return (
        <Card
            className="h-100 shadow-sm border-0"
            style={CARD_STYLE}
        >
            <Card.Img
                src={blog.image}
                alt={blog.title}
                loading="lazy"
                style={IMAGE_STYLE}
                onClick={handleNavigate}
                aria-label={`Read blog: ${blog.title}`}
            />
            <Card.Body className="p-4">
                <div className="mb-2">
                    <Badge bg="secondary" className="me-2">{blog.category}</Badge>
                    <small className="text-muted">
                        {new Date(blog.date).toLocaleDateString()}
                    </small>
                </div>
                <Card.Title
                    className="fw-bold text-primary"
                    style={{ cursor: 'pointer' }}
                    onClick={handleNavigate}
                    aria-label={`Read blog: ${blog.title}`}
                >
                    {blog.title}
                </Card.Title>
                <Card.Text className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>
                    {blog.excerpt}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

BlogItem.propTypes = {
    blog: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired
    }).isRequired
};

export default BlogItem;

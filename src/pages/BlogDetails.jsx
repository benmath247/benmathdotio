import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { allPostsData } from '../components/allPostsData';

function BlogDetails() {
    const [postData, setPostData] = useState(null);
    const [htmlContent, setHtmlContent] = useState(null)
    const { title } = useParams(); // Get the title parameter from the URL

    useEffect(() => {
        // Find the blog post data by matching the title
        const postData = allPostsData.find(post => post.title === title);
        console.log(postData)
        setPostData(postData);
    }, [title]);

    useEffect(() => {
        // Fetch HTML content only if postData exists
        if (postData) {
            const fetchHtmlContent = async () => {
                try {
                    const response = await fetch(postData.content);
                    if (response.ok) {
                        const html = await response.text();
                        console.log(html)
                        setHtmlContent(html);
                    } else {
                        console.error('Failed to fetch HTML content');
                    }
                } catch (error) {
                    console.error('Error fetching HTML content', error);
                }
            };

            fetchHtmlContent();
        }
    }, [postData]);


    return (
        <Container style={{ marginTop: '100px' }}>
            <Row>
                <Col>
                    <div className="card mb-4 position-relative">
                        <div className="card-body bg-dark" style={{ padding: '50px' }}>
                            <h1 className="card-title" style={{ color: 'aqua' }}>{title}</h1>
                            {
                                postData && <>
                                    <h6 className='card-date mb-2' style={{ color: 'aqua' }}>{postData.date}</h6>
                                    <p className="card-text" style={{ color: 'aqua' }}>{postData.subtitle}</p>
                                    <hr />
                                    <p className="card-text text-light" dangerouslySetInnerHTML={{ __html: htmlContent }} />
                                    {/* <p className="card-text" style={{ color: 'aqua' }}>Category: {postData.category}</p> */}
                                </>
                            }
                            <Button variant="primary" onClick={() => window.history.back()}>Back to All Blogs</Button>
                            <div className="diagonal-decoration"></div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container >
    );
}

export default BlogDetails;

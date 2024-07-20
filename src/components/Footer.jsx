import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import axios from 'axios';

function Footer(hideFrom) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subscribe, setSubscribe] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!subscribe) {
            setAlertMessage('Please check the subscription box to subscribe.');
            setAlertVariant('danger');
            setShowAlert(true);
            return;
        }

        try {
            const response = await axios.post('https://your-mailchimp-endpoint.com/subscribe', {
                name,
                email,
                message,
            });

            if (response.status === 200) {
                setAlertMessage('Subscribed successfully!');
                setAlertVariant('success');
            } else {
                setAlertMessage('Failed to subscribe. Please try again.');
                setAlertVariant('danger');
            }
        } catch (error) {
            setAlertMessage('An error occurred. Please try again.');
            setAlertVariant('danger');
        }

        setShowAlert(true);
    };

    return (
        // <footer className="">
        <Container>
            <Row>
                <Col style={{ background: 'grey', padding: '20px' }} md={6}>
                    <h5 style={{ color: 'white' }}>Subscribe to our newsletter</h5>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group className="" controlId="formName">
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col className='border border-secondary'>
                                <Form.Group className="mb-2" controlId="formEmail">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-2" controlId="formMessage">
                            <Form.Control
                                as="textarea"
                                rows={2}
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </Form.Group>
                        <Row className="align-items-center">
                            <Col>
                                <Form.Group className="mb-2" controlId="formSubscribe">
                                    <Form.Check
                                        type="checkbox"
                                        label="Subscribe to email updates and communications"
                                        checked={subscribe}
                                        style={{ color: 'white' }}
                                        onChange={(e) => setSubscribe(e.target.checked)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col className="text-end">
                                <button className="primary" type="submit" size="sm">
                                    Subscribe
                                </button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col md={6} className="text-md-end p-4">
                    <h5>Follow Me</h5>
                    <a href="https://github.com" className="me-2 text-black">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://linkedin.com" className="me-2 text-black">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="/document" className="me-2 text-black">
                        <FaFilePdf />
                    </a>
                </Col>
            </Row>
        </Container >
    );
};

export default Footer;

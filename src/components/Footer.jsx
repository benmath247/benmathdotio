import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { GITHUB_URL, LINKEDIN_URL, GOOGLE_DOCS_URL } from './../constants';

function Footer({ hideForm }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVariant, setAlertVariant] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setAlertMessage('Please fill out the form');
            setAlertVariant('danger');
            setShowAlert(true);
            return
        }

        const templateParams = {
            name: name,
            email: email,
            message: message,
        };

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_USER_ID
        ).then((result) => {
            setAlertMessage('Message sent successfully!');
            setAlertVariant('success');
            setShowAlert(true);
        }, (error) => {
            setAlertMessage('An error occurred. Please try again.');
            setAlertVariant('danger');
            setShowAlert(true);
        });

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <Container>
            <Row>

                {hideForm ? <Col></Col> : <Col style={{ background: 'grey', padding: '20px' }} md={6}>
                    <h5 style={{ color: 'white' }}>Contact Me</h5>
                    {showAlert && <Alert variant={alertVariant}>{alertMessage}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group controlId="formName">
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formEmail">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col>
                                <Form.Group className='my-2' controlId="formMessage">
                                    <Form.Control
                                        as="textarea"
                                        rows={2}
                                        placeholder="Message"
                                        name="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col className="text-end">
                                <button className="primary m-2" type="submit" size="sm">
                                    Submit
                                </button>
                            </Col>
                        </Row>
                    </Form>
                </Col>}
                <Col md={6} className="text-md-end">
                    <h5>Follow Me</h5>
                    <a href={GITHUB_URL} className="me-2 text-black">
                        <FaGithub size={20} />
                    </a>
                    <a href={LINKEDIN_URL} className="me-2 text-black">
                        <FaLinkedin size={20} />
                    </a>
                    <a href={GOOGLE_DOCS_URL} className="me-2 text-black">
                        <FaFilePdf />
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;

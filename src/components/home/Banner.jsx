import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ParallaxBackground from '../ParallaxBackground';

export default function Banner() {
    return (
        <ParallaxBackground>
            <section className="p-5 bg-white bg-opacity-50">
                <div className="text-center">
                    <Row className="justify-content-center mb-4">
                        <Col xs="auto">
                            <img
                                src="images/me/me.png"
                                alt="Ben Math"
                                className="rounded-circle grow-on-hover border border-secondary border-2 img-fluid"
                                style={{ maxWidth: "300px", width: "100%" }}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-center mb-3">
                        <Col xs={12} md={8}>
                            <h1 className="text-center">WELCOME TO BENMATH.COM</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={12} md={8}>
                            <p className="lead text-muted mb-4">
                                I'm a <span className="fw-semibold text-primary">Full-Stack Software Engineer</span> at Inmar Intelligence, building apps with <span className="fw-semibold">Python (Django)</span>, <span className="fw-semibold">JavaScript (React, Node.js)</span>, and <span className="fw-semibold">AWS</span> for world class brands. I love solving problems—whether it’s automating workflows, crunching data with <span className="fw-semibold">MySQL</span> and <span className="fw-semibold">GCP</span>, or teaching kids to code at my local library. As a Drexel CS grad student and <span className="fw-semibold">AWS Cloud Practitioner</span>, I’m always chasing the next challenge.
                            </p>
                        </Col>
                    </Row>
                </div>
            </section>
        </ParallaxBackground>
    )
}
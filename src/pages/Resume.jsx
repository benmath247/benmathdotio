import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

export default function Resume() {
    return (
        <Container className="my-4">
            <header className="text-center mb-4">
                <h1>Benjamin Math</h1>
                <h4 className="text-muted">Backend/Full Stack Software Engineer</h4>
                <p>
                    (856)-745-4231 |{" "}
                    <a href="mailto:benjamin.aaron.math@gmail.com">benjamin.aaron.math@gmail.com</a>{" "}
                    | <a href="https://github.com/benmath247" target="_blank" rel="noopener noreferrer">github.com/benmath247</a>{" "}
                    | <a href="https://benmath.com" target="_blank" rel="noopener noreferrer">benmath.com</a>
                </p>
            </header>

            <Row>
                {/* Left Column - Experience */}
                <Col md={8}>
                    <section className="mb-4">
                        <h3>Experience</h3>

                        <div className="mb-3">
                            <h5>Inmar Intelligence, Remote — Software Engineer</h5>
                            <p><em>January 2022 - Present</em></p>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Automated previous work responsibilities by creating a fullstack Django/React application that nontechnical administrators use to create, edit, and deploy websites and analytics tracking on behalf of Publix Grocery, Coca Cola, and other company clients</ListGroup.Item>
                                <ListGroup.Item>Developed and deployed dozens of React websites on behalf of brands like Kelloggs, Pepsi, and more with React, AWS S3, and Cloudfront.</ListGroup.Item>
                                <ListGroup.Item>Served as subject matter expert for authentication related development using OAuth and internal REST APIs</ListGroup.Item>
                                <ListGroup.Item>Assisted with docker containerization for company software on Apple M1 chip</ListGroup.Item>
                                <ListGroup.Item>Debugged production level issues on asynchronous software built with Django, Python, React, RabbitMQ, Java, MySQL, and Typescript</ListGroup.Item>
                                <ListGroup.Item>Wrote a standalone program to integrate client customer related data with Inmar systems using MySQL, Python3, and the requests library.</ListGroup.Item>
                                <ListGroup.Item>Implemented addition of new advertising lift report feature using Linux, AWS CLI, GCP Storage, and Git for version control</ListGroup.Item>
                                <ListGroup.Item>Used warehouse API to generate 1M+ templated banner advertisements for partner website placement</ListGroup.Item>
                                <ListGroup.Item>Built application level data models and object level user permission rules in Django Rest Framework</ListGroup.Item>
                            </ListGroup>
                        </div>

                        <div className="mb-3">
                            <h5>Upwork.com, Remote — Software Developer</h5>
                            <p><em>January 2019 - December 2021</em></p>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Used social media APIs and Flask to automate marketing behavior for client social media accounts</ListGroup.Item>
                                <ListGroup.Item>Created Python3 scripts for Excel and email automation</ListGroup.Item>
                                <ListGroup.Item>Used Twilio API and Google OAuth to send text messages and emails to sales leads from MySQL database, resulting in 70% response rate</ListGroup.Item>
                                <ListGroup.Item>Built automation software using Twitter’s API and AWS Lambda to engage market segments in order to build brand awareness and subscribers</ListGroup.Item>
                            </ListGroup>
                        </div>

                        <div>
                            <h5>Lincoln Financial Group, Philadelphia, PA — Marketing Specialist</h5>
                            <p><em>December 2018 - March 2020</em></p>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Built Python3 and R based reporting dashboard for social media and Google Analytics presentation to C level executives</ListGroup.Item>
                            </ListGroup>
                        </div>
                    </section>
                </Col>

                {/* Right Column - Education, Certifications, Skills */}
                <Col md={4}>
                    <section className="mb-4">
                        <h3>Education</h3>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>Drexel University</strong> — M.S. Computer Science<br />
                                <em>Fall 2024 - Present</em>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Harvard Extension School</strong><br />
                                <em>Fall 2023 - Spring 2024</em> — Graduate level coursework in Computer Science, Mathematics, and Data Structures
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Noble Desktop — React Bootcamp</strong><br />
                                <em>July 2022 - October 2022</em> — 100 hours of classroom based instruction in MongoDB, Express, React, and Node.js
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Delaware Technical Community College — Java Academy</strong><br />
                                <em>January 2021 - December 2021</em> — 300 hours of remote project based professional instruction in Java, Spring, and Spring Boot
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Temple University</strong> — B.S. Tourism & Hospitality Management<br />
                                <em>December 2011 - December 2015</em>
                            </ListGroup.Item>
                        </ListGroup>
                    </section>

                    <section className="mb-4">
                        <h3>Certifications</h3>
                        <ListGroup variant="flush">
                            <ListGroup.Item>AWS Cloud Practitioner Certification — December 2022</ListGroup.Item>
                        </ListGroup>
                    </section>

                    <section>
                        <h3>Skills</h3>
                        <h5>Languages</h5>
                        <p>Python, Java, JavaScript, CSS3, HTML, Linux</p>

                        <h5>Technologies</h5>
                        <p>Django, Flask, React, Express, Requests, Django Rest Framework, Node.js, NumPy, Pandas, Redis, Lambda, Boto3, AWS CLI</p>

                        <h5>Databases</h5>
                        <p>MongoDB, MySQL, RDS, DynamoDB, Postgres, CloudFront, S3, Rekognition</p>

                        <h5>Other Skills</h5>
                        <p>RabbitMQ, Microservices, APIs, Docker, Google Cloud Platform (Cloud Storage, CloudSDK), Git, JIRA</p>
                    </section>
                </Col>
            </Row>
        </Container>
    );
}

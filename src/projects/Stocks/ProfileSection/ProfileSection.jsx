import React from 'react';
import { Container, Card, Table, Row, Col } from 'react-bootstrap'; // Added Table from react-bootstrap
import UserInfo from '../UserInfo';
import './ProfileSection.css'; // Import custom CSS for styling

const ProfileSection = ({ userInfo }) => {
    return (
        <Card className="profile-section-card">
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="profile-section-title">Profile Section</h2>
                            <UserInfo userInfo={userInfo} />
                        </Col>
                        <Col>
                            {/* Table for User's Holdings */}
                            <Table striped bordered hover>
                                <thead>
                                    <tr><th>Holdings</th></tr>
                                    <tr>
                                        <th>TICKER SYMBOL</th>
                                        <th>QUANTITY</th>
                                        <th>AVERAGE COST</th>
                                        <th>% CHANGE</th>
                                        <th>$ CHANGE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Populate table rows with user's holdings */}
                                    {/* {userInfo.holdings.map((holding, index) => (
                                <tr key={index}>
                                <td>{holding.symbol}</td>
                                <td>{holding.quantity}</td>
                                <td>{holding.averageCost}</td>
                                <td>{holding.percentChange}</td>
                                <td>{holding.dollarChange}</td>
                                </tr>
                            ))} */}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
};

export default ProfileSection;

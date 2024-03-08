import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import UserInfo from '../UserInfo';

const ProfileSection = ({ userInfo }) => {

    return (
        <Card>
            <Card.Body>
                <Container>
                    <h2>Profile Section</h2>
                    <UserInfo userInfo={userInfo} />
                </Container>
            </Card.Body>
        </Card>
    );
};

export default ProfileSection;

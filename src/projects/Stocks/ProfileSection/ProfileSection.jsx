import React, { useState } from 'react';
import { Container, Tab, Nav } from 'react-bootstrap';
import UserInfo from '../UserInfo';

const ProfileSection = () => {

    return (
        <Container style={{}}>
            <h2>Profile Section</h2>
            <UserInfo />
        </Container>
    );
};

export default ProfileSection;

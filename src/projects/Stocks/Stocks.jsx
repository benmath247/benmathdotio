import React, { useState, useEffect } from 'react';
import { Container, Tab, Nav } from 'react-bootstrap';
import TradeSection from './tradeSection/TradeSection';
import LeaderBoardSection from './LeaderBoardSection/LeaderBoardSection';
import ProfileSection from './ProfileSection/ProfileSection';


const Stocks = () => {
    const [activeTab, setActiveTab] = useState('Profile');
    const [userInfo, setUserInfo] = useState(null);

    const fetchUserInfo = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(import.meta.env.VITE_BACKEND + 'api/user-info/', {
                method: 'GET',
                headers: {
                    'Authorization': `Token ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setUserInfo(data);
            } else {
                throw new Error('Failed to fetch user info');
            }
        } catch (error) {
            console.error('Failed to fetch user info:', error);
        }
    };
    useEffect(() => {

        if (localStorage.getItem('token')) {

            fetchUserInfo();
        }
    }, []);
    return (
        <Container style={{ marginTop: '50px' }}>
            <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                <Nav variant="tabs" fill>
                    <Nav.Item>
                        <Nav.Link eventKey="Profile">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Trade">Trade</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="LeaderBoard">Leader Board</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="Profile">
                        <ProfileSection userInfo={userInfo} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Trade">
                        <TradeSection userInfo={userInfo} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="LeaderBoard">
                        <LeaderBoardSection />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Container>
    );
};

export default Stocks;

import React, { useState } from 'react';
import { Container, Tab, Nav } from 'react-bootstrap';
import BalanceSection from './balanceSection/BalanceSection';
import TradeSection from './tradeSection/TradeSection';
import LeaderBoardSection from './LeaderBoardSection/LeaderBoardSection';
import ProfileSection from './ProfileSection/ProfileSection';

const Stocks = () => {
    const [activeTab, setActiveTab] = useState('Balances');

    return (
        <Container style={{ marginTop: '50px' }}>
            <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                <Nav variant="tabs" fill>
                    <Nav.Item>
                        <Nav.Link eventKey="Balances">Balances</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Trade">Trade</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="LeaderBoard">Leader Board</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Profile">Profile</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="Balances">
                        <BalanceSection />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Trade">
                        <TradeSection />
                    </Tab.Pane>
                    <Tab.Pane eventKey="LeaderBoard">
                        <LeaderBoardSection />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Profile">
                        <ProfileSection />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Container>
    );
};

export default Stocks;

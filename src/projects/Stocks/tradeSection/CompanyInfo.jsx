import React, { useState } from 'react';
import { Container, Tab, Nav } from 'react-bootstrap';
import CompanyNews from './CompanyInfo/CompanyNews';
import NewsList from './CompanyInfo/NewsList';

const CompanyInfo = ({ symbol }) => {
    const [activeTab, setActiveTab] = useState('Fundamentals');

    return (
        <Container style={{ marginTop: '50px' }}>
            <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                <Nav variant="tabs" fill>
                    <Nav.Item>
                        <Nav.Link eventKey="Quote">Quote</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Fundamentals">Fundamentals</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="News">News</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Other Players Who Bought">Other Players Who Bought</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="Quote">
                        {/* <BalanceSection /> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="Fundamentals">
                        {/* <TradeSection /> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="News">
                        <CompanyNews symbol={symbol} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Other Players Who Bought">
                        {/* <ProfileSection /> */}
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Container>
    );
};

export default CompanyInfo;

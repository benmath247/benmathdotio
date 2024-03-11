import React, { useState } from 'react';
import { Container, Tab, Nav } from 'react-bootstrap';
import CompanyNews from './News/CompanyNews';
import Quote from './Quote/Quote';
import CompanyFundamentals from './Fundamentals/Fundamentals';
import InsiderTransactions from './InsiderTransactions/InsiderTransactions';
import EPSSurprises from './EPSSurprises/EPSSurprises';
import SECFilings from './SECFilings';
const CompanyInfo = ({ userInfo, shares, symbol, stockData }) => {
    const [activeTab, setActiveTab] = useState('Quote');

    return (
        <Container>
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
                        <Nav.Link eventKey="Insider Transactions">Insider Transactions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="EPS Surprises">EPS Surprises</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="SEC Filings">SEC Filings</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                        <Nav.Link eventKey="Other Players">Other Players</Nav.Link>
                    </Nav.Item> */}
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="Quote">
                        {stockData && <Quote userInfo={userInfo} symbol={symbol} shares={shares} />}
                    </Tab.Pane>
                    <Tab.Pane eventKey="Fundamentals">
                        {stockData && <CompanyFundamentals symbol={symbol} />}
                    </Tab.Pane>
                    <Tab.Pane eventKey="News">
                        {stockData && <CompanyNews symbol={symbol} />}
                    </Tab.Pane>
                    <Tab.Pane eventKey="Insider Transactions">
                        {stockData && <InsiderTransactions symbol={symbol} />}
                    </Tab.Pane>
                    <Tab.Pane eventKey="EPS Surprises">
                        {stockData && <EPSSurprises symbol={symbol} />}
                    </Tab.Pane>
                    <Tab.Pane eventKey="SEC Filings">
                        {stockData && <SECFilings symbol={symbol} />}
                    </Tab.Pane>
                    <Tab.Pane eventKey="Other Players">
                        {/* <ProfileSection /> */}
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Container>
    );
};

export default CompanyInfo;

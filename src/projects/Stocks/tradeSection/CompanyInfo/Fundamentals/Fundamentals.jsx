import React, { useEffect, useState } from 'react';
import * as finnhub from 'finnhub';
import { Card, Table, Modal, Button } from 'react-bootstrap';

function CompanyFundamentals({ symbol }) {

    const [fundamentalsData, setFundamentalsData] = useState(null);
    const [selectedMetric, setSelectedMetric] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const getCompanyFundamentals = async () => {
            const api_key = finnhub.ApiClient.instance.authentications['api_key'];
            api_key.apiKey = import.meta.env.VITE_FINNHUB_KEY;
            const finnhubClient = new finnhub.DefaultApi();

            try {
                const data = await new Promise((resolve, reject) => {
                    finnhubClient.companyBasicFinancials(symbol, 'all', (error, data, response) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    });
                });

                setFundamentalsData(data);

            } catch (error) {
                console.error('Error fetching company fundamentals:', error);
            }
        };

        getCompanyFundamentals();
    }, [symbol]);

    const handleMetricClick = (key) => {
        setSelectedMetric(key);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedMetric(null);
        setShowModal(false);
    };

    return (
        <div style={{ overflowX: 'auto' }}>
            {fundamentalsData && (
                <Card>
                    <Card.Header>{symbol} Fundamentals</Card.Header>
                    <Card.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Metric</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>10 Day Average Trading Volume</td>
                                    <td>{fundamentalsData.metric['10DayAverageTradingVolume']}</td>
                                </tr>
                                <tr>
                                    <td>52 Week High</td>
                                    <td>{fundamentalsData.metric['52WeekHigh']}</td>
                                </tr>
                                <tr>
                                    <td>52 Week Low</td>
                                    <td>{fundamentalsData.metric['52WeekLow']}</td>
                                </tr>
                                <tr>
                                    <td>52 Week Low Date</td>
                                    <td>{fundamentalsData.metric['52WeekLowDate']}</td>
                                </tr>
                                <tr>
                                    <td>52 Week Price Return Daily</td>
                                    <td>{fundamentalsData.metric['52WeekPriceReturnDaily']}</td>
                                </tr>
                                <tr>
                                    <td>Beta</td>
                                    <td>{fundamentalsData.metric['beta']}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Card.Text>
                            <h4>Annual Financials</h4>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Metric</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(fundamentalsData.series.annual).map((key) => {
                                        const metricValue = fundamentalsData.series.annual[key][0]?.v;
                                        return metricValue && (
                                            <tr key={key} onClick={() => handleMetricClick(key)}>
                                                <td>{getMetricName(key)}</td>
                                                <td>{metricValue}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{getMetricName(selectedMetric)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {getDescription(selectedMetric)}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

// Function to provide descriptions for financial data
function getDescription(key) {
    const descriptions = {
        bookValue: "The total value of the company's assets that shareholders would theoretically receive if the company were liquidated.",
        cashRatio: "The ratio of a company's cash and cash equivalents to its current liabilities, indicating its ability to cover short-term obligations.",
        currentRatio: "The ratio of a company's current assets to its current liabilities, measuring its ability to cover short-term obligations.",
        ebitPerShare: "Earnings Before Interest and Taxes (EBIT) per share, indicating profitability.",
        eps: "Earnings Per Share, the portion of a company's profit allocated to each outstanding share of common stock.",
        ev: "Enterprise Value, the total value of a company's equity and debt minus cash.",
        fcfMargin: "Free Cash Flow Margin, the percentage of revenue converted into free cash flow after accounting for operating expenses and capital expenditures.",
        grossMargin: "The percentage of revenue that exceeds the cost of goods sold, indicating profitability.",
        inventoryTurnover: "The number of times a company sells and replaces its stock of goods during a period.",
        longtermDebtTotalAsset: "The ratio of a company's long-term debt to its total assets, indicating its financial leverage.",
        longtermDebtTotalCapital: "The ratio of a company's long-term debt to its total capital, including both debt and equity.",
        longtermDebtTotalEquity: "The ratio of a company's long-term debt to its total equity, indicating its leverage.",
        netDebtToTotalCapital: "The ratio of a company's net debt to its total capital, indicating its financial leverage.",
        netDebtToTotalEquity: "The ratio of a company's net debt to its total equity, indicating its leverage.",
        netMargin: "Net Income Margin, the percentage of revenue that remains as profit after all expenses, including taxes and interest.",
        operatingMargin: "Operating Income Margin, the percentage of revenue that remains after deducting operating expenses.",
        payoutRatio: "The proportion of earnings paid out as dividends to shareholders.",
        pb: "Price-to-Book Ratio, the ratio of a company's share price to its book value per share, indicating the valuation relative to its book value.",
        pe: "Price-to-Earnings Ratio, the ratio of a company's share price to its earnings per share, indicating the valuation of the company relative to its earnings.",
        pfcf: "Price to Free Cash Flow Ratio, the ratio of a company's share price to its free cash flow per share, indicating its valuation relative to its ability to generate free cash flow.",
        pretaxMargin: "Pretax Margin, the percentage of revenue that remains after deducting operating expenses but before taxes.",
        ps: "Price-to-Sales Ratio, the ratio of a company's share price to its revenue per share, indicating the valuation relative to its sales.",
        ptbv: "Price-to-Tangible Book Value Ratio, the ratio of a company's share price to its tangible book value per share, indicating the valuation relative to its tangible assets.",
        quickRatio: "The ratio of a company's liquid assets to its current liabilities, excluding inventory, indicating its ability to cover short-term obligations.",
        receivablesTurnover: "The number of times a company collects its average accounts receivable balance during a period.",
        roa: "Return on Assets, a measure of how efficiently a company uses its assets to generate earnings.",
        roe: "Return on Equity, a measure of how effectively a company uses shareholders' equity to generate profits.",
        roic: "Return on Invested Capital, a measure of a company's profitability based on the capital invested in it.",
        rotc: "Return on Total Capital, a measure of a company's profitability based on the total capital employed.",
        salesPerShare: "Total revenue divided by the number of outstanding shares, indicating the amount of revenue generated per share.",
        sgaToSale: "Selling, General, and Administrative Expenses to Sales Ratio, indicating the efficiency of a company's operating expenses relative to its sales.",
        tangibleBookValue: "The value of a company's tangible assets minus liabilities and intangible assets.",
        totalDebtToEquity: "The ratio of a company's total debt to its total equity, indicating its leverage.",
        totalDebtToTotalAsset: "The ratio of a company's total debt to its total assets, indicating its financial risk.",
        totalDebtToTotalCapital: "The ratio of a company's total debt to its total capital, including both debt and equity.",
        totalRatio: "The ratio of a company's total assets to its total liabilities, indicating its financial leverage."
    };
    return descriptions[key] ? <small>{descriptions[key]}</small> : null;
}

// Function to provide metric names
function getMetricName(key) {
    const metricNames = {
        bookValue: "Book Value",
        cashRatio: "Cash Ratio",
        currentRatio: "Current Ratio",
        ebitPerShare: "EBIT per Share",
        eps: "Earnings Per Share",
        ev: "Enterprise Value",
        fcfMargin: "Free Cash Flow Margin",
        grossMargin: "Gross Margin",
        inventoryTurnover: "Inventory Turnover",
        longtermDebtTotalAsset: "Long-term Debt to Total Asset",
        longtermDebtTotalCapital: "Long-term Debt to Total Capital",
        longtermDebtTotalEquity: "Long-term Debt to Total Equity",
        netDebtToTotalCapital: "Net Debt to Total Capital",
        netDebtToTotalEquity: "Net Debt to Total Equity",
        netMargin: "Net Margin",
        operatingMargin: "Operating Margin",
        payoutRatio: "Payout Ratio",
        pb: "Price-to-Book Ratio",
        pe: "Price-to-Earnings Ratio",
        pfcf: "Price to Free Cash Flow Ratio",
        pretaxMargin: "Pretax Margin",
        ps: "Price-to-Sales Ratio",
        ptbv: "Price-to-Tangible Book Value Ratio",
        quickRatio: "Quick Ratio",
        receivablesTurnover: "Receivables Turnover",
        roa: "Return on Assets",
        roe: "Return on Equity",
        roic: "Return on Invested Capital",
        rotc: "Return on Total Capital",
        salesPerShare: "Sales Per Share",
        sgaToSale: "Selling, General, and Administrative Expenses to Sales Ratio",
        tangibleBookValue: "Tangible Book Value",
        totalDebtToEquity: "Total Debt to Equity",
        totalDebtToTotalAsset: "Total Debt to Total Asset",
        totalDebtToTotalCapital: "Total Debt to Total Capital",
        totalRatio: "Total Ratio"
    };
    return metricNames[key] ? metricNames[key] : key;
}

export default CompanyFundamentals;

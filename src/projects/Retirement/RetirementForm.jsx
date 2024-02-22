import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';

const RetirementForm = ({
    startingBalance,
    yearlyDeposits,
    age,
    retirementAge,
    rateOfReturn,
    taxRate,
    maximizeContributions,
    onStartingBalanceChange,
    onYearlyDepositsChange,
    onAgeChange,
    onRetirementAgeChange,
    onRateOfReturnChange,
    onTaxRateChange,
    onMaximizeContributionsChange
}) => {
    function renderMaximumContributions(age) {
        return age < 50 ? "6500" : "7500";
    }

    return (
        <Col className='col-md-3'>
            <Row className="mb-3">
                <Form.Label>Starting Balance: ${startingBalance}</Form.Label>
                <Form.Control
                    type="value"
                    value={startingBalance.startsWith('$') ? startingBalance : '$' + startingBalance}
                    min="0"
                    max="1000000"
                    step="50"
                    onChange={onStartingBalanceChange}
                />
            </Row>
            <Row className="mb-3">
                <Form.Label>Annual Contributions: ${yearlyDeposits}</Form.Label>
                <Form.Control
                    type="value"
                    value={yearlyDeposits.startsWith('$') ? yearlyDeposits : '$' + yearlyDeposits}
                    min="0"
                    max={renderMaximumContributions(age)}
                    step="1"
                    onChange={onYearlyDepositsChange}
                />
            </Row>
            <Row className="mb-3">
                <Form.Label>Current Age: {age}</Form.Label>
                <Form.Control
                    type="number"
                    value={age}
                    min="18"
                    max="120"
                    step="1"
                    onChange={onAgeChange}
                />
            </Row>
            <Row className="mb-3">
                <Form.Label>Age at Retirement: {retirementAge}</Form.Label>
                <Form.Control
                    type="number"
                    value={retirementAge}
                    min={age}
                    max="120"
                    step="1"
                    onChange={onRetirementAgeChange}
                />
            </Row>
            <Row className="mb-3">
                <Form.Label>Expected Rate of Return: {rateOfReturn}%</Form.Label>
                <Form.Control
                    type="range"
                    value={rateOfReturn}
                    min="0"
                    max="30"
                    step="0.5"
                    onChange={onRateOfReturnChange}
                />
            </Row>
            <Row className="mb-3">
                <Form.Label>Marginal Tax Rate: {taxRate}%</Form.Label>
                <Form.Control
                    type="range"
                    value={taxRate}
                    min="0"
                    max="30"
                    step="0.5"
                    onChange={onTaxRateChange}
                />
            </Row>
            <Row className="mb-3">
                <Form.Check
                    type="checkbox"
                    id="maximizeContributionsCheckbox"
                    label="Maximize Contributions"
                    checked={maximizeContributions}
                    onChange={onMaximizeContributionsChange}
                />
            </Row>
        </Col>
    );
};

export default RetirementForm;

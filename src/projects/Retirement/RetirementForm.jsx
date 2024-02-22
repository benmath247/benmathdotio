import React from 'react';
import { Form, Col, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsInfoCircle } from 'react-icons/bs'; // Importing Bootstrap icons for the information icon

// Define a functional component called RetirementForm which takes in various props
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
    // Function to determine maximum contributions based on age according to tax laws 
    const renderMaximumContributions = (age) => {
        return age < 50 ? "6500" : "7500";
    };

    // Function to format currency
    const formatCurrency = (value) => {
        return value.startsWith('$') ? value : '$' + value;
    };

    return (
        <Col>
            {/* Form row for starting balance */}
            <Row className="mb-3">
                <Form.Label>Starting Balance: {formatCurrency(startingBalance)}</Form.Label>
                <Form.Control
                    type="value"
                    value={formatCurrency(startingBalance)}
                    min="0"
                    max="1000000"
                    step="50"
                    onChange={onStartingBalanceChange}
                />
            </Row>
            {/* Form row for annual contributions */}
            <Row className="mb-3">
                <Form.Label>Annual Contributions: {formatCurrency(yearlyDeposits)}</Form.Label>
                <Form.Control
                    type="value"
                    value={formatCurrency(yearlyDeposits)}
                    min="0"
                    max={renderMaximumContributions(age)}
                    step="1"
                    onChange={onYearlyDepositsChange}
                />
            </Row>
            {/* Form row for current age */}
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
            {/* Form row for retirement age */}
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
            {/* Form row for expected rate of return */}
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
            {/* Form row for marginal tax rate */}
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
            {/* Form row for "Maximize Contributions" checkbox */}
            <Row className="mb-3 align-items-center">
                <Form.Check
                    type="checkbox"
                    id="maximizeContributionsCheckbox"
                    label="Maximize Contributions"
                    checked={maximizeContributions}
                    onChange={onMaximizeContributionsChange}
                />
                <div>
                    <small>
                        <em>

                            Checking Maximize Contributions will set every contribution to the maximum possible value according to tax law.
                            <br />
                            The maximum contribution is $6,500 until age 50, $8,500 at age 50, and $7,500 thereafter.
                        </em>
                    </small>
                </div>
                {/* <OverlayTrigger
                    placement="bottom"
                    show={true}
                    overlay={<Tooltip id="tooltip-maximize-contributions">Explanation for Maximize Contributions</Tooltip>}
                >
                    <BsInfoCircle className="ml-2" style={{ color: "white", cursor: "pointer" }} />
                </OverlayTrigger> */}

            </Row>
        </Col>
    );
};

export default RetirementForm;

import React, { useState, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import ChartComponent from './ChartComponent';
import RetirementForm from './RetirementForm';

const Retirement = () => {
    const [startingBalance, setStartingBalance] = useState('0');
    const [yearlyDeposits, setYearlyDeposits] = useState('6000');
    const [age, setAge] = useState(18);
    const [rateOfReturn, setRateOfReturn] = useState(10);
    const [retirementAge, setRetirementAge] = useState(70)
    const [taxRate, setTaxRate] = useState(25);
    const [maximizeContributions, setMaximizeContributions] = useState(false)
    const [simulationData, setSimulationData] = useState([]);

    useEffect(() => {
        simulateGrowth();
        console.log(startingBalance)
    }, [startingBalance, yearlyDeposits, age, rateOfReturn, retirementAge, taxRate, maximizeContributions]);

    const calculateRothIRABalance = (year) => {
        const principal = parseFloat(startingBalance);

        let deposits;
        if (maximizeContributions) {
            age + year >= 50 ? deposits = 7500 : deposits = 6500;
        } else {
            deposits = parseFloat(yearlyDeposits.startsWith('$') ? yearlyDeposits.slice(1) : yearlyDeposits);
        }
        const interestRate = rateOfReturn / 100;

        let balance = principal;

        // Calculate balance for each year based on the rate of return
        for (let i = 0; i < year; i++) {
            balance += deposits;
            balance *= (1 + interestRate);
        }

        return balance.toFixed(2); // Round to 2 decimal places
    };

    function calculateTaxableAccount(year) {
        const interestRate = parseFloat(rateOfReturn) / 100;
        let balance = parseFloat(startingBalance);
        let deposits;

        if (maximizeContributions) {
            age + year >= 50 ? deposits = 7500 : deposits = 6500;
        } else {
            deposits = parseFloat(yearlyDeposits);
        }

        // Calculate balance for each year based on the rate of return
        for (let i = 0; i < year; i++) {
            // Add deposits at the beginning of each year
            balance += deposits;

            // Calculate gains
            const gains = balance * interestRate;

            // Calculate tax on gains
            const tax = gains * (parseFloat(taxRate) / 100);

            // Deduct tax from gains
            const netGains = gains - tax;

            // Add net gains to balance
            balance += netGains;
        }

        return balance.toFixed(2); // Round to 2 decimal places
    }

    const simulateGrowth = () => {
        let yearsBeforeRetirement = retirementAge - age;
        let newData = [];
        let totalContributions = 0;

        // Simulate growth for years before retirement age
        for (let year = 0; year < yearsBeforeRetirement; year++) {
            // Calculate total contributions
            if (maximizeContributions) {
                if (age + year > 50) {
                    totalContributions += 7500
                }
                if (age + year == 50) {
                    totalContributions += 8500
                } else {
                    totalContributions += 6500;
                }
            } else {
                totalContributions += parseInt(yearlyDeposits.startsWith('$') ? yearlyDeposits.slice(1) : yearlyDeposits);
            }

            // Push data for Roth IRA and Taxable Account
            newData.push({
                "year": year + 1,
                "totalDeposits": totalContributions,
                "rothIRA": calculateRothIRABalance(year),
                "taxableAccount": calculateTaxableAccount(year)
            });
        }

        setSimulationData(newData);

    };

    return (
        <div style={{ margin: '100px' }}>
            <h1 className="text-center">Roth IRA Simulator</h1>
            <Container>
                {simulationData.length > 0 && <h3>Final Roth IRA Account Balance: ${Number(simulationData[simulationData.length - 1].rothIRA).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </h3>}
                {simulationData.length > 0 && <h3>Taxable Account Balance: ${Number(simulationData[simulationData.length - 1].taxableAccount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </h3>}
                {simulationData.length > 0 && <h3>Total Contributions: ${Number(simulationData[simulationData.length - 1].rothIRA).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </h3>}

                <hr />
                <Row>
                    <RetirementForm
                        startingBalance={startingBalance}
                        yearlyDeposits={yearlyDeposits}
                        age={age}
                        retirementAge={retirementAge}
                        rateOfReturn={rateOfReturn}
                        taxRate={taxRate}
                        maximizeContributions={maximizeContributions}
                        onStartingBalanceChange={(e) => setStartingBalance(e.target.value.slice(1,))}
                        onYearlyDepositsChange={(e) => setYearlyDeposits(e.target.value)}
                        onAgeChange={(e) => setAge(e.target.value)}
                        onRetirementAgeChange={(e) => setRetirementAge(e.target.value)}
                        onRateOfReturnChange={(e) => setRateOfReturn(e.target.value)}
                        onTaxRateChange={(e) => setTaxRate(e.target.value)}
                        onMaximizeContributionsChange={(e) => setMaximizeContributions(e.target.checked)}
                    />
                    <Col>
                        <ChartComponent data={simulationData} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Retirement;

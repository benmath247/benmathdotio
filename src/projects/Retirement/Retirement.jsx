import React, { useState, useEffect, useMemo } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import ChartComponent from './ChartComponent';
import RetirementForm from './RetirementForm';
import { Helmet } from 'react-helmet';


const Retirement = () => {
    const [startingBalance, setStartingBalance] = useState('0');
    const [yearlyDeposits, setYearlyDeposits] = useState('6000');
    const [age, setAge] = useState(18);
    const [rateOfReturn, setRateOfReturn] = useState(10);
    const [retirementAge, setRetirementAge] = useState(70);
    const [taxRate, setTaxRate] = useState(25);
    const [maximizeContributions, setMaximizeContributions] = useState(false);
    const [simulationData, setSimulationData] = useState([]);
    const [showNumbers, setShowNumbers] = useState(false)

    useEffect(() => {
        simulateGrowth();
    }, [startingBalance, yearlyDeposits, age, rateOfReturn, retirementAge, taxRate, maximizeContributions]);

    const calculateRothIRABalance = (year) => {
        const principal = parseFloat(startingBalance);
        const deposits = getDeposits(year);
        const interestRate = rateOfReturn / 100;
        let balance = principal;

        for (let i = 0; i < year; i++) {
            balance += deposits;
            balance *= (1 + interestRate);
        }

        return balance.toFixed(2);
    };

    const calculateTaxableAccount = (year) => {
        const interestRate = parseFloat(rateOfReturn) / 100;
        let balance = parseFloat(startingBalance);
        const deposits = getDeposits(year);

        for (let i = 0; i < year; i++) {
            balance += deposits;
            const gains = balance * interestRate;
            const tax = gains * (parseFloat(taxRate) / 100);
            const netGains = gains - tax;
            balance += netGains;
        }

        return balance.toFixed(2);
    };

    const getDeposits = (year) => {
        if (maximizeContributions) {
            return (age + year >= 50 ? 7500 : 6500);
        }
        return parseFloat(yearlyDeposits.startsWith('$') ? yearlyDeposits.slice(1) : yearlyDeposits);
    };

    const simulateGrowth = () => {
        const yearsBeforeRetirement = retirementAge - age;
        let newData = [];
        let totalContributions = 0;

        for (let year = 0; year < yearsBeforeRetirement; year++) {
            totalContributions += getDeposits(year);

            newData.push({
                "year": year + 1,
                "totalDeposits": totalContributions,
                "rothIRA": calculateRothIRABalance(year),
                "taxableAccount": calculateTaxableAccount(year)
            });
        }

        setSimulationData(newData);
    };

    const formattedNumber = (value) => {
        return Number(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    const lastSimulationData = simulationData[simulationData.length - 1];

    const totalRothIRA = useMemo(() => formattedNumber(lastSimulationData?.rothIRA), [lastSimulationData?.rothIRA]);
    const totalTaxableAccount = useMemo(() => formattedNumber(lastSimulationData?.taxableAccount), [lastSimulationData?.taxableAccount]);
    const totalContributions = useMemo(() => formattedNumber(lastSimulationData?.totalDeposits), [lastSimulationData?.totalDeposits]);
    const ogTitle = "BenMath.com | Roth IRA Simulator"
    const ogImage = "https://www.benmath.com/portfolio/tools/roth.jpeg";
    return (
        <div className='retirement'>
            <Helmet>
                <title>{ogTitle}</title>
                <meta property="og:title" content={ogTitle} />
                <meta property="og:image" content={ogImage} />
            </Helmet>
            <h1 className="text-center">Roth IRA Simulator</h1>
            <Container>
                <h2>Enter some data for the fields below and see how a Roth IRA can help you save for retirement.</h2>
                <hr />
                <Row>
                    <Col>
                        <RetirementForm
                            startingBalance={startingBalance}
                            yearlyDeposits={yearlyDeposits}
                            age={age}
                            retirementAge={retirementAge}
                            rateOfReturn={rateOfReturn}
                            taxRate={taxRate}
                            setShowNumbers={setShowNumbers}
                            maximizeContributions={maximizeContributions}
                            onStartingBalanceChange={(e) => setStartingBalance(e.target.value.slice(1))}
                            onYearlyDepositsChange={(e) => setYearlyDeposits(e.target.value)}
                            onAgeChange={(e) => setAge(e.target.value)}
                            onRetirementAgeChange={(e) => setRetirementAge(e.target.value)}
                            onRateOfReturnChange={(e) => setRateOfReturn(e.target.value)}
                            onTaxRateChange={(e) => setTaxRate(e.target.value)}
                            onMaximizeContributionsChange={(e) => setMaximizeContributions(e.target.checked)}
                        />
                    </Col>
                    <Col lg={8} xs={12}>
                        <ChartComponent data={simulationData} />
                        {showNumbers && <div style={{ padding: '20px' }}>{simulationData.length > 0 && <h3>Final Roth IRA Account Balance: ${totalRothIRA}</h3>}
                            {simulationData.length > 0 && <h3>Taxable Account Balance: ${totalTaxableAccount}</h3>}
                            {simulationData.length > 0 && <h3>Total Contributions: ${totalContributions}</h3>}</div>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Retirement;

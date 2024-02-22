export default function calculateRothIRABalance(startingBalance, yearlyDeposits, rateOfReturn, years) {
    const principal = parseFloat(startingBalance);

    let deposits;
    if (maximizeContributions) {
        deposits = age + years >= 50 ? 7500 : 6500;
    } else {
        deposits = parseFloat(yearlyDeposits.startsWith('$') ? yearlyDeposits.slice(1) : yearlyDeposits);
    }
    const interestRate = rateOfReturn / 100;

    let balance = principal;

    // Calculate balance for each year based on the rate of return
    for (let i = 0; i < years; i++) {
        balance *= (1 + interestRate);
        balance += deposits;
    }

    return balance.toFixed(2); // Round to 2 decimal places
};

const calculateTaxableAccount = (maximizestartingBalance, yearlyDeposits, rateOfReturn, years, taxRate) => {
    const principal = parseFloat(startingBalance);

    let deposits;
    if (maximizeContributions) {
        deposits = age + years >= 50 ? 7500 : 6500;
    } else {
        deposits = parseFloat(yearlyDeposits.startsWith('$') ? yearlyDeposits.slice(1) : yearlyDeposits);
    }
    const interestRate = rateOfReturn / 100;
    const taxRateDecimal = taxRate / 100;

    let balance = principal;

    // Calculate balance for each year based on the rate of return
    for (let i = 0; i < years; i++) {
        balance += deposits;
        const gains = balance - principal - (deposits * (i + 1)); // Calculate gains based on total contributions for each year
        const tax = gains * taxRateDecimal;
        balance *= (1 + interestRate);
        balance -= tax;
    }

    return balance.toFixed(2); // Round to 2 decimal places
};

const simulateGrowth = () => {
    let yearsBeforeRetirement = retirementAge - age;
    let newData = [];
    let totalContributions = 0;

    // Simulate growth for years before retirement age
    for (let year = 0; year < yearsBeforeRetirement; year++) {
        // Calculate total contributions
        if (maximizeContributions) {
            totalContributions += age + year >= 50 ? 7500 : 6500;
        } else {
            totalContributions += parseFloat(yearlyDeposits.startsWith('$') ? yearlyDeposits.slice(1) : yearlyDeposits);
        }

        // Push data for Roth IRA and Taxable Account
        newData.push({
            "year": age + year + 1,
            "totalDeposits": totalContributions,
            "rothIRA": calculateRothIRABalance(startingBalance, yearlyDeposits, rateOfReturn, year + 1),
            "taxableAccount": calculateTaxableAccount(startingBalance, yearlyDeposits, rateOfReturn, year + 1, taxRate), // Fix taxRate passing
        });
    }

    // If retirement age is reached or exceeded, simulate growth for one more year
    if (yearsBeforeRetirement <= 0) {
        newData.push({
            "year": retirementAge,
            "totalDeposits": totalContributions,
            "rothIRA": calculateRothIRABalance(startingBalance, yearlyDeposits, rateOfReturn, yearsBeforeRetirement),
            "taxableAccount": calculateTaxableAccount(startingBalance, yearlyDeposits, rateOfReturn, yearsBeforeRetirement, taxRate), // Fix taxRate passing
        });
    }

    setSimulationData(newData);
};

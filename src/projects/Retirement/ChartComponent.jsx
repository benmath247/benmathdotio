import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ data }) => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstanceRef.current) {
                // Update chart data
                chartInstanceRef.current.data.labels = data.map(entry => entry.year
                    //  + (new Date().getFullYear() - data[0].year)
                );
                chartInstanceRef.current.data.datasets[0].data = data.map(entry => entry.totalDeposits);
                chartInstanceRef.current.data.datasets[1].data = data.map(entry => entry.rothIRA);
                chartInstanceRef.current.data.datasets[2].data = data.map(entry => entry.taxableAccount);
                chartInstanceRef.current.update();
            } else {
                // Create new chart instance
                const newChartInstance = new Chart(chartRef.current, {
                    type: 'line',
                    data: {
                        labels: data.map(entry => entry.year),
                        datasets: [
                            {
                                label: 'Total Deposits',
                                data: data.map(entry => entry.totalDeposits),
                                borderColor: 'rgba(75, 120, 120, 1)',
                                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            },
                            {
                                label: 'Roth IRA',
                                data: data.map(entry => entry.rothIRA),
                                borderColor: 'rgba(75, 192, 192, 1)',
                                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            },
                            {
                                label: 'Taxable Account',
                                data: data.map(entry => entry.taxableAccount),
                                borderColor: 'rgba(255, 99, 132, 1)',
                                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            },
                        ],
                    },
                    options: {
                        scales: {
                            x: {
                                display: true,
                                title: {
                                    display: true,
                                    text: 'Year',
                                },
                            },
                            y: {
                                display: true,
                                title: {
                                    display: true,
                                    text: 'Amount ($)',
                                },
                            },
                        },
                    },

                });
                chartInstanceRef.current = newChartInstance;
            }
        }
    }, [data]);

    return (
        <div>
            <canvas ref={chartRef} />
        </div>
    );
};

export default ChartComponent;

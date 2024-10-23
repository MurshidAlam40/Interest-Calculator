import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

function LoanPieChart({ principal, interest }) {
    // Data for the Doughnut chart
    const data = {
        labels: ['Principal', 'Interest'],
        datasets: [
            {
                label: "Amount Distribution",
                data: [principal, interest],
                backgroundColor: ['#007bff', '#dc3545'], // Colors for each segment
                hoverOffset: 4,
                borderWidth: 1,
            },
        ],
    };

    // Options for the Doughnut chart
    const options = {
        circumference: 180,
        rotation: -90,
        // Creates a semi-circle effect
        cutout: '50%', 
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div
            className='semiChart mt-4 pb-5 d-flex align-items-center justify-content-center'
            style={{ height: "300px", width: "100%" }}
        >
            <Doughnut data={data} options={options} />
        </div>
    );
}

export default LoanPieChart;

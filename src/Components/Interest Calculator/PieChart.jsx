import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

function PieChart({ principal, interest }) {
  // Data for the PieChart (Doughnut chart), separating principal and interest
  const data = {
    labels: ["Principal", "Interest"],
    datasets: [
      {
        label: "Amount Distribution",
        data: [principal, interest],
         // Different colors for principal and interest
        backgroundColor: ["#007bff", "#dc3545"],
        hoverOffset: 4,
        borderWidth: 1,
      },
    ],
  };

  // Options to control the Doughnut chart appearance and behavior
  const options = {
    circumference: 180,
    rotation: -90,
    cutout: "50%",
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    // Wrapping div ensures the chart container remains flexible and responsive
    <div
      className="semiChart mt-4 pb-5 d-flex align-items-center justify-content-center"
      // The chart adjusts its width and height based on the screen size for responsiveness
      style={{ height: "250px", width: "100%" }}
    >
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default PieChart;

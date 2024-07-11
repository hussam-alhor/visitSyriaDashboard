// components/LineChart.js
import React from "react";
import { Pie  } from "react-chartjs-2";

function PieChart({ chartTitle ,  chartData }) {
  return (
    <div className="chart-container">
      <h5 >{chartTitle}</h5>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false
            },
            legend: {
              display: true,
              position: "bottom",
            }
          },
        }}
      />
    </div>
  );
}
export default PieChart;
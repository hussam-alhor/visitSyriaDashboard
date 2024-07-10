// components/LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartTitle ,  chartData }) {
  return (
    <div className="chart-container">
      <h5 >{chartTitle}</h5>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false
            },
            legend: {
              display: false
            }
          },
          scales: {
          y: {
            position: 'right'
          }  ,
          x: {
            grid: {
              display: false,
              drawTicks: false,
            }}
          } 
          
        }}
      />
    </div>
  );
}
export default LineChart;
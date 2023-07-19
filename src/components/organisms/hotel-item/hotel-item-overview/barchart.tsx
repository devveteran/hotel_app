import React from "react";
import { Chart} from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

const BarChart = () => {
  const labels = ["Jul 1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Price",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [98, 90, 110, 100, 89, 97, 105, 105, 105, 105, 110, 115, 90, 95, 100],
        yAxisID: '$',
      },
    ],
  };
  return (
    <div className="d-flex justify-content-center">
      <Bar data={data} height={70}/>
    </div>
  );
};

export default BarChart;
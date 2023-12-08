import React from "react";
import styles from "./styles/LineChart.module.css";
import {
  Chart as ChartJS,
  LineElement,
  PointElement, // Add PointElement registration
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register necessary elements
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

function LineChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed","Thu","Fri","Sat","Sun"],
    datasets: [
      {
        label: "3694215",
        data: [3, 6, 9,4,2,1,5],
        fill: false,
        borderColor: "green",
        borderWidth: 5,
        pointBackgroundColor: "aqua", // Set the point background color
        pointBorderColor: "black",   // Set the point border color
        pointBorderWidth: 1,         // Set the point border width
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <div>
      <div>
      
        <div className={styles.linechart}>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default LineChart;


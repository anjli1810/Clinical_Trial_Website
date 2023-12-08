import React from "react";
import styles from "./styles/PieChart.module.css";
import {
  Chart as ChartJS,
  ArcElement,  // Change PieElement to ArcElement
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

function PieChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed","Thu","Fri","Sat","Sun"],
    datasets: [
      {
        label: "369",
        data: [3, 6, 9,8,7,4,1],
        backgroundColor: ["red", "yellow", "purple","blue","pink","light-blue","aqua"],
        borderColor: "black",
        borderWidth: 1,
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
        
        <div className={styles.piechart}>
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default PieChart;


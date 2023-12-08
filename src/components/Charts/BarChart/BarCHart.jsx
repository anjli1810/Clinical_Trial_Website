import React from "react";
import styles from "./styles/BarCHart.module.css"
import {
    Chart as ChartJS,
    BarElement,CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register
(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)
function BarCHart()
{
    const data ={
        labels:['Mon','Tue','Wed'],
        datasets:[
            {
                labels:'369',
                data:[3,6,9],
                backgroundColor:'aqua',
                borderColor:'black',
                borderWidth:1,
            },

            {
                labels:'333',
                data:[3,3,3],
                backgroundColor:'green',
                borderColor:'black',
                borderWidth:1,
            }
        ]
    }
    
    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Days of the Week', // Add your x-axis label here
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Total No. of Counts', 
                },
            },
        },
    };


    return (
        <div>
            <div>
                <div className={styles.barchart}>
                    <Bar
                        data={data}
                        options={options}
                    />
                </div>
            </div>
        </div>
    );
}
export default BarCHart;
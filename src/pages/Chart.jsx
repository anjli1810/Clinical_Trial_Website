import React from "react";
import BarCHart from "../components/common/BarChart/BarCHart";

import PieChart from "../components/common/PieChart/PieChart";
import styles from "./styles/Chart.module.css";
import LineChart from "../components/common/LineChart/LineChart";
function Chart()
{
    return (
        <>
        <center>
            <strong>Site Monitoring Dashboard</strong>
        </center>
        <div className={styles.card} >
            <div className={styles.card1}> 
            <center><h5>BarChart for Analysis</h5></center>
                <BarCHart />
            </div>
            <div className={styles.card3}>
                <center>
              <h5>PieChart for Analysis</h5>
                <PieChart/>
                </center>
             
            </div>
            <div className={styles.card4}>
            <center><h5>LineChart for Analysis</h5></center>
            <LineChart />
            </div >
        </div>

        <div className={styles.card2} >
            <div className={styles.card5}> 
            <center><h5>BarChart for Analysis</h5></center>
                <BarCHart />
            </div>
            <div className={styles.card6}>
                <center>
                <h5>PieChart for Analysis</h5>
                <PieChart/>
                </center>
             
            </div>
            <div className={styles.card7}>
            <center><h5>PieChart for Analysis</h5></center>
            <LineChart />
            </div >
        </div>

</>
    );
}
export default Chart;
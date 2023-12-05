import MyNavbar from "../common/MyNavbar";
import styles from "./styles/LandingPage.module.css"
import React from "react";
import landingimage from "./images/landingimage.jpg";
import MyFooter from "../common/MyFooter";
function LandingPage()
{
    return(
        <div>
        <MyNavbar />
        <div className={styles.containerr}>
        <div className={styles.decor}>
        <div className={styles.text}>
            <strong className={styles.first}>We Are Here For You</strong>
              <h1><strong>Your Healthy Life<br/>is Our First Priority.</strong></h1>
             
              <h6>From treating the rarest symptoms to performing the most<br />complicated surgeries.We have expertise in your condition</h6>
              <br />
              <button className={styles.loginButton}>Sign Up</button>
              <button className={styles.loginButton}>Sign In</button>
            </div>
            </div>
            <img  className={styles.images}src={landingimage} />
        </div>
           <MyFooter />
          </div>
    )
  
    
}
export default LandingPage;
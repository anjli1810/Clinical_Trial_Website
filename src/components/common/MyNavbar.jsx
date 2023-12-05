import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles/MyNavbar.module.css";
function MyNavbar()
{
    return(
        <nav className={styles.navbar} style={{width:"100%"}}>
           <div>
            {/* <Link> */}
                <a href="#" className={styles.loginButton}>Home</a>
                <a href="#" className={styles.loginButton}>About</a>
                <a href="#" className={styles.loginButton}>Doctor</a>
                <a href="#" className={styles.loginButton}>Services</a>
            {/* </Link> */}
           
            </div> 

        </nav>
    )
}
export default MyNavbar;
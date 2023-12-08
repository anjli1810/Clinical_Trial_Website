import React from "react";
import { Link,useNavigate } from "react-router-dom";
import styles from "./styles/One.module.css";
function One()
{
    return(
        <nav className={styles.navbar} style={{width:"75%"}}>
            <div className={styles.text}>
                <a href="#" className={styles.loginButton}>Search</a>
                <a href="#" className={styles.loginButton}>Guideline</a>
                <a href="#" className={styles.loginButton}>My Studies</a>
            </div>
        </nav>
    )
}
export default One;
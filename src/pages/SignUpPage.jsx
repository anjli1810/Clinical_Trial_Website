import React from "react"
import styles from "./styles/SignUpPage.module.css"
import RegisterCard from "../components/common/Register/RegisterCard"
function SignUpPage()
{
    return(
      <div className={styles.body}>
        <RegisterCard />
        </div>
    );
}
export default SignUpPage;
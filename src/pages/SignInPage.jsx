import React from "react";
import styles from "./styles/SignInPage.module.css";

import LoginCard from "../components/Login/LoginCard";
function SignInPage() {
  return (

    <div className={styles.body}>
      <LoginCard/>
    </div>
  );
}
export default SignInPage;

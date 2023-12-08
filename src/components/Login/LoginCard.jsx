import React from "react";
import styles from "./styles/LoginCard.module.css";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {

    const navigate = useNavigate();

  return (

    <div className={styles.main}>
      <center>
        <div className={styles.fullCard}>
          <div>
            <div className={styles.title}>Welcome Back!</div>
            <div className={styles.subtitle}>Login to continue</div>
            <div className={styles.formGroup2}>
              <form>
                {/* to Enter UserName */}

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="username">
                    UserName or Email
                  </label>
                  <br />
                  <input
                    className={styles.input}
                    type="text"
                    name="username"
                    placeholder="Enter username or email"
                  />
                </div>

                {/* to Enter password */}

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="password">
                    Password
                  </label>
                  <br />
                  <input
                    className={styles.input}
                    type="password"
                    name="password"
                    placeholder="Enter the password"
                  />
                </div>
                <center>

                <button className={styles.button} type="submit">
                  Continue
                </button>
                
                <div className={styles.register}>
                    New to xyz? 
                    <a href="" onClick={() => navigate("/register")}>
                        Register now!
                    </a>
                </div>
                </center>
              </form>
            </div>
          </div>
        </div>
      </center>
    </div>

  );
};

export default LoginCard;

import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/RegisterCard.module.css"
import pic from "./images/pic.jpg"
const RegisterCard =()=>{
    const navigate = useNavigate();
    return(
        <div className={styles.main}>
            <center>
            <div className={styles.fullCard}>
             <div className={styles.content}>
                <div>
                    <img src={pic} className={styles.images} />
                </div>
                <div className={styles.text}>
                    <div className={styles.title}>Create Account</div>
                    <div className={styles.formGroup2}>
              <form>

                
                {/* to Enter Name */}

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="name">
                    Name
                  </label>
                  <br />
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="Enter the name"
                  />
                </div>
  {/* to Enter username */}
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="username">
                    Username
                  </label>
                  <br />
                  <input
                    className={styles.input}
                    type="text"
                    name="username"
                    placeholder="Enter the Username"
                  />
                </div>


{/* to Enter email */}
<div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="email">
                    Email
                  </label>
                  <br />
                  <input
                    className={styles.input}
                    type="text"
                    name="email"
                    placeholder="Enter the email"
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


                
                {/* to Enter confirmpassword */}

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="confirmpassword">
                    Confirm Password
                  </label>
                  <br />
                  <input
                    className={styles.input}
                    type="password"
                    name="confirmpassword"
                    placeholder="Enter the password again"
                  />
                </div>

                <center>

                <button className={styles.button} type="submit">
                  Register
                </button>
                <div >
                    Already have an Account? 
                    <a href="" className={styles.log} onClick={() => navigate("/login")}>
                        Login!
                    </a>
                </div>
                
                </center>
              </form>
            </div>
                    
                   
                </div>
             </div>
            </div>
            </center>
            
        </div>
    )
};
export default RegisterCard
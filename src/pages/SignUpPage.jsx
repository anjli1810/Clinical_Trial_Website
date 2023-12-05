import React from "react"
import styles from "./styles/SignUpPage.module.css"
import doctor1 from "./images/doctor1.jpg"
import MyNavbar from "../components/common/MyNavbar"
import MyFooter from "../components/common/MyFooter"
function SignUpPage()
{
    return(
        <>
        <MyNavbar />
        <div className={styles.all}>

        <div className={`${styles.text} ${styles.formContainer}`}>
         <form>
             <div className={styles.formGroup}>

                {/* to Enter Name */}
             <label className={styles.label}
             htmlFor="name">
                    Name
                  </label>

                  <input className={styles.input}
                  type="text"
                  name="name"
                  placeholder="Enter the name"
                  />

                  
             </div>

                  {/* to Enter UserName */}

             <div className={styles.formGroup}>
             <label className={styles.label}
             htmlFor="username">
                    UserName
                  </label>

                  <input  className={styles.input}
                  type="text"
                  name="username"
                  placeholder="Enter the username"
                  />
             </div>

             {/* to Enter email */}

             <div className={styles.formGroup}>
             <label className={styles.label}
              htmlFor="email">
                    Email
                  </label>

                  <input className={styles.input}
                  type="text"
                  name="email"
                  placeholder="Enter the email"
                  />
             </div>

             {/* to Enter password */}

             <div className={styles.formGroup}>
             <label className={styles.label}
             htmlFor="password">
                    Password
                  </label>

                  <input className={styles.input} 
                  type="text"
                  name="password"
                  placeholder="Enter the password"
                  />
             </div>


             {/* to confirm password */}

             <div className={styles.formGroup}>
             <label  className={styles.label}
             htmlFor="password">
                    Confirm Password
                  </label>

                  <input  className={styles.input}
                  type="text"
                  name="password"
                  placeholder="Enter the password again"
                />
               
             </div>
             <button className={styles.button} type="submit">
          Sign Up
        </button>
         </form>
      </div>

      <div>
            <img className={styles.image}src={doctor1} />
            </div>
      </div>
      <MyFooter />
      </>
    )
}
export default SignUpPage;
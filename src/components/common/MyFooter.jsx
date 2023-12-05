import React from "react"
import styles from "./styles/MyFooter.module.css"
function MyFooter()
{
    return (
        <div  className={styles.copyright} >
        <p className={styles.text}>© 2023 Copyright.All rights reserved</p>
      </div>
    )
}
export default MyFooter
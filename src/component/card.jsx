import React from 'react'
import styles from "./card.module.css"
import { BsArrowRight } from "react-icons/bs";


const Card = ({date,logo,heading,subHeading,des,color}) => {
  return (
    <div className={styles.Fullcard} style={{backgroundColor:color }}>
        <div className={styles.upperFlex}>
        <div style={{fontWeight:'bold'}}>{date}</div>
        <div className={styles.image}><img src={logo} alt="" /></div>
        </div>
        <br />
        <button style={{fontWeight:"bold"}} className={styles.box}>Case Study</button>
        <h1>{heading}</h1>
        <h1>{subHeading}</h1>
        <div className={styles.lowerFlex}>
        <h3>{des}</h3>
        <p style={{fontSize:"large"}}><BsArrowRight/></p>
        </div>

    </div>
  )
}

export default Card



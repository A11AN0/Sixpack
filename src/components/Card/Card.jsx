import React from 'react'
import styles from './Card.module.scss'

const Card = (props) => {

  
  

  const randomColour=()=>{
    return `hsla(${~~(360 * Math.random())},70%,60%,0.2)`
  }

  return (
    <div className={styles.cardBody} style={{backgroundColor: randomColour()}} >
      <p></p>
    </div>
  )
}

export default Card;

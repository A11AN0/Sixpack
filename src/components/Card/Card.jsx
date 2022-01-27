import React from 'react'
import styles from './Card.module.scss'

const Card = () => {

  const randomColour=()=>{
    return `hsla(${~~(360 * Math.random())},70%,60%,0.2)`
  }

  return (
    <div style={{backgroundColor: randomColour()}} >
      <p>hidhsbdisdbnjsi</p>
    </div>
  )
}

export default Card;

import React from 'react'
import styles from './CardFront.module.scss'

const CardFront = (props) => {

  const {beer, colour}=props
  

  return (
    <div className={styles.cardBody} style={{backgroundColor: colour}} key={beer.id}>  
      <img className={styles.image} src={`${beer.image_url}`} alt={`${beer.name}`} />
      <h3>{(beer.name).toUpperCase()}</h3> 
    </div>
  )
}

export default CardFront;

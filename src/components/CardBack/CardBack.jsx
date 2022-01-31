import React from 'react'
import styles from './CardBack.module.scss'

const CardBack = (props) => {

  const {beer, colour}=props
  

  return (
    <div className={styles.cardBody} style={{backgroundColor: colour}} key={beer.id}> 
    <div className={styles.intro}>
      <h3>{(beer.name).toUpperCase()}</h3>
      <h4>{`"${(beer.tagline).toUpperCase()}"`}</h4>  
      <p>{beer.description}</p>
    </div>
      
      <div className={styles.facts}>
        <img className={styles.image} src={`${beer.image_url}`} alt="" srcset="" />
        <ul>
          <li><h3>The Facts</h3></li>
          <li><h4>ABV:</h4>{` ${beer.abv} `}</li>
          <li><h4>First Brewed:</h4>  {`On ${beer.first_brewed}`}</li>
          <li><h4>pH:</h4>{` ${beer.ph} `}</li>
          <li><h4>Pairs Well with:</h4>{` ${beer.food_pairing[0]}. `}</li>
        </ul>
      </div>
    </div>
  )
}

export default CardBack;

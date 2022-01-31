import React from 'react'
import styles from './Card.module.scss'
import CardFront from '../CardFront';
import CardBack from '../CardBack';

const Card = (props) => {

  const {beer, colour}=props
  
  

  return (
    <>
    {/* <CardFront beer={beer} colour={colour}/> */}
    <CardBack beer={beer} colour={colour}/>
    </>
  )
}

export default Card;

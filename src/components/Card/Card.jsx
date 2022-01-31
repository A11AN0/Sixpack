import React, {useState} from 'react'
import styles from './Card.module.scss'
import CardFront from '../CardFront';
import CardBack from '../CardBack';

const Card = (props) => {

  const {beer, colour}=props
  
  const [faceDown, setFaceDown] = useState(false);

  return (
    <div className={styles.cardBody} onClick={()=>{setFaceDown(!faceDown)}}>
      {!faceDown? <CardFront beer={beer} colour={colour}/>: <CardBack beer={beer} colour={colour}/>}
    </div>
  )
}

export default Card;

import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";

const CardList = (props) => {
  const {beers}=props
  
  const randomColour=()=>{
    return `hsla(${~~(360 * Math.random())},70%,60%,0.2)`
  }

  return (
  <div className={styles.content}>
  {beers.length? beers.map(beer => <Card beer={beer} key={beer.id} colour={randomColour()}/>):
  <div className={styles.nothingFound}>Hmm, I've not heard of that beer yet...Try searching for something else</div>}  
  </div>
  );
};

export default CardList;

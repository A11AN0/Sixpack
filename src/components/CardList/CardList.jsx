import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";

const CardList = (props) => {
  const {beers}=props  
  return (
  <div className={styles.content}>
  {beers.length? beers.map(beer => <Card beer={beer}/>):<div>Nothing found</div>}  
  </div>
  );
};

export default CardList;

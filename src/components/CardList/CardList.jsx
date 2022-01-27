import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";

const CardList = () => {

  
  return (
  <div className={styles.content}>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  {/* {facts.map(fact => <Card fact={fact}/> )}   */}
  </div>
  );
};

export default CardList;

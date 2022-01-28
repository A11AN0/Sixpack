import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CardList from './components/CardList';
import {getBeers} from './services/beer.service';
import styles from './App.module.scss'

// import beers from './data/beers.js';


const App = () => {

const [beers, setBeers] = useState([]);

// (async ()=>{
//   console.log(await getBeers(currentFilter))
// })()

const determineBeerSelection = async (filter)=>{
  setBeers(await getBeers(filter))
}
  

  return (
    <>
      <Navbar determineBeerSelection={determineBeerSelection}/> 
      <CardList beers={beers} />  
    </>
  )
}

export default App

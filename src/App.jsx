import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CardList from './components/CardList';
import {getBeers} from './services/beer.service';
import styles from './App.module.scss'


const App = () => {

const [beers, setBeers] = useState([]);
const [memory, setMemory] = useState([]);

const determineBeerSelection = async (filter)=>{
  setBeers(await getBeers(filter))
  setMemory([])
}

const optimizeBeerSelection = (input)=>{
  if(memory.length === 0){setMemory(beers)}
  setBeers(memory.filter((beer)=>((beer.name).toLowerCase()).includes(input.toLowerCase())))
}

useEffect(()=>{
  determineBeerSelection('none')
}, [])
  

  return (
    <>
      <Navbar determineBeerSelection={determineBeerSelection} optimizeBeerSelection={optimizeBeerSelection}/> 
      <CardList beers={beers} />  
    </>
  )
}

export default App

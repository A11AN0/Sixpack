import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CardList from './components/CardList';
import {getBeers} from './services/beer.service';

// import beers from './data/beers.js';


const App = () => {

const [currentFilter, setCurrentFilter] = useState('none');
const [beers, setBeers] = useState([]);

(async ()=>{
  console.log(await getBeers(currentFilter))
})()

const determineBeerSelection = async ()=>{
  const beerArray = await getBeers(currentFilter);
  setBeers(beerArray)
}
  

  return (
    <>
      <button onClick={()=>{determineBeerSelection()}}>hi</button>
      <Navbar setCurrentFilter={setCurrentFilter}/>
      <CardList beers={beers} />  
    </>
  )
}

export default App

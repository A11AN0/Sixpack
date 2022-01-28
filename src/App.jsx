import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CardList from './components/CardList';
import {getBeers} from './services/beer.service';

// import beers from './data/beers.js';


const App = () => {

const [currentFilter, setCurrentFilter] = useState('none');

(async ()=>{
  console.log(await getBeers(currentFilter))
})()
  

  return (
    <>
      <button >hi</button>
      <Navbar />
      <CardList />  
    </>
  )
}

export default App

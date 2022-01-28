import React, {useState} from 'react';
import Navbar from './components/Navbar';
import CardList from './components/CardList';

// import beers from './data/beers.js';


const App = () => {

  const [beers, setBeers] = useState([])

  const getBeers = async()=>{
    const results = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=20');
    const beerArr = await results.json()
    return beerArr 
  }

  const updateBeer= async()=>{
    setBeers(await getBeers())
  }
  

  return (
    <>
      <button onClick={()=>{updateBeer()}}>hi</button>
      <Navbar />
      <CardList beers={beers} />  
    </>
  )
}

export default App

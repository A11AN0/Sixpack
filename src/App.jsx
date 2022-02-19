import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import { getBeers } from "./services/beer.service";
import styles from "./App.module.scss";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [filter, setFilter] = useState("none");

  const determineBeerSelection = async (filterChoice) => {
    setBeers(await getBeers(filterChoice));
    setFilter(filterChoice);
  };

  const optimizeBeerSelection = async (input) => {
    const currentArray = await getBeers(filter);
    setBeers(
      currentArray.filter((beer) =>
        beer.name.toLowerCase().includes(input.toLowerCase())
      )
    );
  };

  useEffect(() => {
    determineBeerSelection(filter);
  }, []);

  return (
    <>
      <Navbar
        determineBeerSelection={determineBeerSelection}
        optimizeBeerSelection={optimizeBeerSelection}
      />
      <CardList beers={beers} />
    </>
  );
};

export default App;

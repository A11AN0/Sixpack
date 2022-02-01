import React, {useState} from 'react'
import styles from './Search.module.scss'
import Filter from '../Filter';
import SearchBar from '../SearchBar';

const Search = (props) => {
  const {determineBeerSelection, optimizeBeerSelection}=props

  const [displayFilter, setDisplayFilter] = useState(false);

  return (
    <div className={styles.Search} displayFilter={displayFilter}>
      <SearchBar optimizeBeerSelection={optimizeBeerSelection} determineBeerSelection={determineBeerSelection} setDisplayFilter={setDisplayFilter} displayFilter={displayFilter}/> 
      {displayFilter?<Filter determineBeerSelection={determineBeerSelection}/>:null}
    </div>
  )
}

export default Search

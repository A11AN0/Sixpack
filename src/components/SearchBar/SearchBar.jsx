import React from 'react'
import styles from './SearchBar.module.scss'


const SearchBar = (props) => {
  const {optimizeBeerSelection, determineBeerSelection, setDisplayFilter, displayFilter}=props


  return (
    <div className={styles.content}>
      <input type="text" placeholder="Find a beer!" onInput={e => optimizeBeerSelection(e.target.value)} /> 
      <div className={styles.filterButton} onClick={()=>{
        determineBeerSelection('none')
        setDisplayFilter(!displayFilter)
        }}></div>
    </div>
  )
}

export default SearchBar

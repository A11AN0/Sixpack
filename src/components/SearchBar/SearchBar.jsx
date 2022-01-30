import React from 'react'
import styles from './SearchBar.module.scss'


const SearchBar = (props) => {
  const {optimizeBeerSelection, determineBeerSelection, setDisplayFilter, displayFilter}=props


  return (
    <div className={styles.content}>
      <input type="text" placeholder="search" onInput={e => optimizeBeerSelection(e.target.value)} /> 
      <div className={styles.filterButton} onClick={()=>{
        determineBeerSelection('none')
        setDisplayFilter(!displayFilter)
        }}>Filter button</div>
    </div>
  )
}

export default SearchBar

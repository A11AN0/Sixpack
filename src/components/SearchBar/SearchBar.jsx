import React from 'react'
import styles from './SearchBar.module.scss'


const SearchBar = (props) => {
  const {optimizeBeerSelection, determineBeerSelection, setDisplayFilter, displayFilter}=props


  return (
    <div className={styles.content}>
      <input type="text" placeholder="search" onInput={e => optimizeBeerSelection(e.target.value)} /> 
      <span onClick={()=>{
        determineBeerSelection('none')
        setDisplayFilter(!displayFilter)
        }}>Filter button</span>
    </div>
  )
}

export default SearchBar

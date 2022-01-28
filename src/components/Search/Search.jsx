import React from 'react'
import styles from './Search.module.scss'
import Filter from '../Filter';

const Search = (props) => {

  const {determineBeerSelection, optimizeBeerSelection}=props

  return (
    <div>
      <input type="text" placeholder="search" onInput={e => optimizeBeerSelection(e.target.value)} /> 
      <Filter determineBeerSelection={determineBeerSelection}/>
    </div>
  )
}

export default Search

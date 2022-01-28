import React from 'react'
import styles from './Search.module.scss'
import Filter from '../Filter';

const Search = (props) => {

  const {determineBeerSelection}=props

  return (
    <div>
      <input type="text" placeholder="search" /> 
      <Filter determineBeerSelection={determineBeerSelection}/>
    </div>
  )
}

export default Search

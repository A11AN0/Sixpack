import React from 'react'
import styles from './Search.module.scss'
import Filter from '../Filter';

const Search = (props) => {

  const {setCurrentFilter}=props

  return (
    <div>
      <input type="text" placeholder="search" /> 
      <Filter setCurrentFilter={setCurrentFilter}/>
    </div>
  )
}

export default Search

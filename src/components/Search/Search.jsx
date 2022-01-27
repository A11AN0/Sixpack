import React from 'react'
import styles from './Search.module.scss'
import Filter from '../Filter';

const Search = () => {
  return (
    <div>
      <input type="text" placeholder="search" /> 
      <Filter/>
    </div>
  )
}

export default Search

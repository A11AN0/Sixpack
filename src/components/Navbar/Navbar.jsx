import React from 'react'
import styles from "./Navbar.module.scss";
import Logo from "../Logo"
import Search from "../Search"

const Navbar = (props) => {

  const {determineBeerSelection, optimizeBeerSelection}=props

  return (
    <nav>
      <Logo/>
      <div>S I X P A C K</div>
      <Search determineBeerSelection={determineBeerSelection} optimizeBeerSelection={optimizeBeerSelection}/> 
    </nav>
  )
}

export default Navbar

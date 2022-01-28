import React from 'react'
import styles from "./Navbar.module.scss";
import Logo from "../Logo"
import Search from "../Search"

const Navbar = (props) => {

  const {determineBeerSelection}=props

  return (
    <nav>
      <Logo/>
      <div>S I X P A C K</div>
      <Search determineBeerSelection={determineBeerSelection}/> 
    </nav>
  )
}

export default Navbar

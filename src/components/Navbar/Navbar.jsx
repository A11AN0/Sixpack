import React from 'react'
import styles from "./Navbar.module.scss";
import Logo from "../Logo"
import Search from "../Search"

const Navbar = () => {
  return (
    <nav>
      <Logo/>
      <p>S I X P A C K</p>
      <Search/>
      
    </nav>
  )
}

export default Navbar

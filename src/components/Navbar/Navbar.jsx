import React from 'react'
import styles from "./Navbar.module.scss";
import Logo from "../Logo"

const Navbar = () => {
  return (
    <nav>
      <Logo/>
      <p>6-PACK</p>
      <input type="text" placeholder="search" />
    </nav>
  )
}

export default Navbar

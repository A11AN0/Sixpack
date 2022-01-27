import React from 'react'
import styles from "./Navbar.module.scss";
import Logo from "../Logo"

const Navbar = () => {
  return (
    <nav>
      <Logo/>
      <p>T I C K E T - T R A C K E R</p>
    </nav>
  )
}

export default Navbar

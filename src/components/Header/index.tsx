import React from 'react'
import DropdownProducts from '../DropdownProducts'

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="assets/logo-header.svg" alt="" className={styles['logo-header']} />
      <img src="assets/logo-64.svg" alt="" className={styles['logo-64']} />
      <nav>
        <DropdownProducts />
        <a href="farm" >Farm</a>
        <a href="vote" >Vote</a>
        <a href="about" >About</a>
      </nav>
      {/* <ul>
        <li><button type="button">Products</button></li>
        <li><button type="button">Farm</button></li>
        <li><button type="button">Vote</button></li>
        <li><button type="button">About</button></li>
      </ul> */}
    </header>
  )
} 


export default Header

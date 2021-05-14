import React from 'react'
import Link from 'next/link'

import styles from './header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <img src="assets/logo-header.svg" alt="" className={styles['logo-header']} />
    <img src="assets/logo-64.svg" alt="" className={styles['logo-64']} />
    <ul>
      <li><Link href="products" >Products</Link></li>
      <li><Link href="farm" >Farm</Link></li>
      <li><Link href="vote" >Vote</Link></li>
      <li><Link href="about" >About</Link></li>
    </ul>
  </header>
  )

export default Header

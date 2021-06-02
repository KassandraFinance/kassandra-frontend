import React from 'react'
import Link from 'next/link'
import DropdownProducts from '../DropdownProducts'

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a><img src="assets/logo-header.svg" alt="" className={styles['logo-header']} /></a>
      </Link>
      <Link href="/">
        <a><img src="assets/logo-64.svg" alt="" className={styles['logo-64']} /></a>
      </Link>
      <nav>
        <DropdownProducts />
        <Link href="/farm"><a>Stake/Farm</a></Link>
        <Link href="/vote"><a>Vote</a></Link>
        <Link href="/about"><a>About</a></Link>
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

import React from 'react';
import Link from 'next/link'

import styles from './menu.module.scss'

const Menu = () => (
  <ul className={styles.menu}>
    <li><Link href="products" >Products</Link></li>
    <li><Link href="farm" >Farm</Link></li>
    <li><Link href="vote" >Vote</Link></li>
    <li><Link href="about" >About</Link></li>
</ul>
);

export default Menu

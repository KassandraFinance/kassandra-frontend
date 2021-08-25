import Link from 'next/link'
import React from 'react'

import styles from './footer.module.scss'

const Footer = () => (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles['grid-left']}>
          <img src="assets/kassandra-footer.svg" alt="kassandra" width="266" height="26" />
          <ul>
            <li>
              <a href="https://discord.gg/UjRr28Kf" target="_blank" rel="noopener noreferrer">
                <img src="assets/discord-icon.svg" alt="Join our Discord community" width="32" height="32" />
              </a>
            </li>
            <li>
              <a href="https://t.me/KassandraDAO" target="_blank" rel="noopener noreferrer">
                <img src="assets/telegram-icon.svg" alt="Join our Telegram group" width="32" height="32" />
              </a>
            </li>
            <li>
              <a href="https://github.com/KassandraFinance" target="_blank" rel="noopener noreferrer">
                <img src="assets/github-icon.svg" alt="Access our GitHub repository" width="32" height="32" />
              </a>
            </li>
            <li>
              <a href="https://kassandrafoundation.medium.com/" target="_blank" rel="noopener noreferrer">
                <img src="assets/medium-icon.svg" alt="Read our Medium blog" width="32" height="32" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/dao_kassandra" target="_blank" rel="noopener noreferrer">
                <img src="assets/twitter-icon.svg" alt="Follow our Twitter feed" width="32" height="32" />
              </a>
            </li>
          </ul>
          <span>© {new Date().getFullYear()} Kassandra.</span>
        </div>
        <div className={styles['grid-right']}>
          <ul>
            <li><h4>Company</h4></li>
            <li><Link href="/about" >About</Link></li>
            <li><Link href="/partners" >Partners</Link></li>
          </ul>
          <ul>
            <li><h4>Products</h4></li>
            <li><Link href="/#">Kassandra DAO</Link></li>
            <li><Link href="/#">$HEIM Index</Link></li>
          </ul>
          <ul>
            <li><h4>Legal</h4></li>
            <li><Link href="/#">Privacy Policy</Link></li>
            <li><Link href="/#">Terms of Service</Link></li>
          </ul>
        </div>
        <img src="assets/kassandra-footer.svg" alt="kassandra" width="266" height="26" />
      </div>
    </footer>
  )

export default Footer

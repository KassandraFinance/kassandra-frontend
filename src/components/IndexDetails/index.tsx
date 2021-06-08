import React from 'react'
import styles from './index-details.module.scss'

const IndexDetails = () => (
    <section className={styles['index-details']}>
      <h1>Details</h1>
      <table>
        <thead>
          <tr>
            <th>Colour</th>
            <th>Name</th>
            <th>Value/Token</th>
            <th>Allocation</th>
            <th>Change 24h</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.colour} style={{background: '#26DBDB'}} />
            <td>BTC</td>
            <td>3.789,00 BTC</td>
            <td>40%</td>
            <td style={{color: '#EB5757' || '#6FCF97'}} >-3.26</td>
          </tr>
        </tbody>
      </table>
    </section>
  )


export default IndexDetails
import React from 'react'

import * as S from './styles'

const ClassProducts = () => {
  return (
    <S.ClassProducts>
      <h1>A new class of investment products in DeFi</h1>
      <p>Monetary efficient and actively managed decentralized investment baskets</p>
      <ul>
        <li>
          <img src="assets/Icon/permissionless.svg" alt="" />
          <h3>Permissionless</h3>
          <p>Invest, transfer and redeem investment products without relying on third-parties</p>
        </li>
        <li>
          <img src="assets/Icon/non-custodial.svg" alt="" />
          <h3>Non-custodial</h3>
          <p>Your funds managed by public, secure, and predictable smart-contracts</p>
        </li>
        <li>
          <img src="assets/Icon/actively-managed.svg" alt="" />
          <h3>Actively managed</h3>
          <p>Outsource the management of your money to data-driven quantitative models</p>
        </li>
      </ul>
    </S.ClassProducts>
  )
}

export default ClassProducts
import React from 'react'

import * as S from './styles'

const Supporters = () => {
  return (
    <S.Supporters>
      <h1>Meet our partners and supporters</h1>
      <p>Kassandra is built from a collaborative effort</p>
      <S.AllSupporters>
        <a href="http://heimdall.land" target="_blank" rel="noopener noreferrer">
          <img src="assets/heimdall.svg" alt="Heimdall" width="165" height="33" />
        </a>
        <a href="https://api3.org/" target="_blank" rel="noopener noreferrer">
          <img src="assets/api3.svg" alt="API3" width="116" height="36" />
        </a>
      </S.AllSupporters>
    </S.Supporters>
  )
}

export default Supporters
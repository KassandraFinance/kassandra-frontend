/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Feature from './feature'
import Hero from './hero'

import * as S from './styles'

const Heim = () => {
    console.log("Teste")

    return (
        <S.Container>
          <Hero />
          <Feature/>
          {/* <S.Image>
            <img src="../../assets/crypto-funnel.svg" />
          </S.Image> */}
        </S.Container>
      )
    }
  export default Heim

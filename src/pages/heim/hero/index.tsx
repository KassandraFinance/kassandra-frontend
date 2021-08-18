import React from 'react'
import Head from 'next/head'

// eslint-disable-next-line import/extensions
import * as S from './styles'
import styles from '../../index.module.scss'

const Hero = () => (

    <>
      <S.Container>
        <div>
          <S.Title>Get exposed to the hottest cryptocurrencies in the market.</S.Title>
          <div className={styles['h3-desktop']}>
            <S.SubTitle>Introducing a single asset that tracks the performance of the cryptos with the most solid and engaged communities</S.SubTitle>
            <S.Link>
            <a href="https://twitter.com/dao_kassandra" target="_blank" rel="noopener noreferrer">Coming soon...</a>
            </S.Link>
          </div>
        </div>
        <S.Image>
          <img src="assets/HeimCurrency.svg" alt="Imagem de uma estatua na cor roxa, com uma aura brilhante, também roxa, na cabeça"/>
        </S.Image>

      </S.Container>
    </>

)


export default Hero

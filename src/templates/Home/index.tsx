import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import Hero from './Hero'
import Products from './Products'
import ClassProducts from './ClassProducts'
import Token from './Token'
import KassandraSuccess from './KassandraSuccess'
import KassandraArchitecture from './KassandraArchitecture'

import * as S from './styles'

const Home = () => {
  const { trackPageView } = useMatomo()

  // Track page view
  React.useEffect(() => {
    trackPageView({})
  }, [trackPageView])

  return (
    <>
      <Hero />
      <Products />
      <ClassProducts />
      <Token />
      <KassandraSuccess />
      <KassandraArchitecture />
      <S.Supporters>
        <h1>Meet our partners and supporters</h1>
        <p>Kassandra is built from a collaborative effort</p>
        <div className="grid-supporters">
          <a href="http://heimdall.land" target="_blank" rel="noopener noreferrer">
            <img src="assets/heimdall.svg" alt="Heimdall" width="165" height="33" />
          </a>
          <a href="https://api3.org/" target="_blank" rel="noopener noreferrer">
            <img src="assets/api3.svg" alt="API3" width="116" height="36" />
          </a>
          <a href="https://lemonadefi.com/" target="_blank" rel="noopener noreferrer">
            <img src="assets/lemonade.svg" alt="Lemonade" width="174" height="48" />
          </a>
          <a href="https://jigstack.org/" target="_blank" rel="noopener noreferrer">
            <img src="assets/jigstack.svg" alt="Jigstack" width="286" height="74" />
          </a>
        </div>
      </S.Supporters>
    </>
  )
}


export default Home

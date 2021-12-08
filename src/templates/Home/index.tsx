import React from 'react'

import { useMatomo } from '@datapunt/matomo-tracker-react'
import { Link } from 'react-scroll'

import Hero from './Hero'
import Products from './Products'
import ClassProducts from './ClassProducts'
import CountdownBanner from '../../components/CountdownBanner'
import Token from './Token'
import KassandraTokenCard from '../../components/KassandraTokenCard'
import KassandraArchitecture from './KassandraArchitecture'
import TokenDistribution from './TokenDistribution'
import SubscribeBanner from '../../components/SubscribeBanner'
import BannerCTA from '../../components/BannerCTA'

import * as S from './styles'

const Home = () => {
  const { trackPageView } = useMatomo()
  const heroRef = React.useRef<HTMLElement>(null)

  // Track page view
  React.useEffect(() => {
    trackPageView({})
  }, [trackPageView])

  return (
    <>
      <Hero />
      <S.Background>
        <Link
          activeClass="active"
          to="hero"
          smooth={true}
          offset={-70}
          duration={800}
        >
          <S.ScrollUpButton>
            <S.ScrollUpIcon />
          </S.ScrollUpButton>
        </Link>
        <Products />
        <ClassProducts />
        {/* <Token /> */}
        <KassandraTokenCard />
        <KassandraArchitecture />
        {/* <TokenDistribution /> */}
        {/* <BannerCTA /> */}
        <CountdownBanner />
        <SubscribeBanner />
      </S.Background>
    </>
  )
}

export default Home

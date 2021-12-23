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
import SubscribeBanner from '../../components/SubscribeBanner'

import * as S from './styles'
import RoadMapSlider from '../../components/RoadMapSlider'

const poolPlatform = 'Fuji'

const Home = () => {
  const { trackPageView } = useMatomo()

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
        <Token poolPlatform={poolPlatform} />
        <KassandraTokenCard />
        <KassandraArchitecture />
        <RoadMapSlider />
        <CountdownBanner />
        <SubscribeBanner />
      </S.Background>
    </>
  )
}

export default Home

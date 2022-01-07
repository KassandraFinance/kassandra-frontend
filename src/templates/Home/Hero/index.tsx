import React from 'react'
import { Link } from 'react-scroll'

import { useMatomo } from '@datapunt/matomo-tracker-react'

import Button from '../../../components/Button'
import Header from '../../../components/Header'

import * as S from './styles'

const Hero = () => {
  const { trackEvent } = useMatomo()

  function clickMatomoEvent(action: string, name: string) {
    trackEvent({
      category: 'home',
      action: action,
      name: name
    })
  }

  return (
    <S.Hero>
      <Header />
      <S.IntroHero>
        <h3>
          WELCOME TO <b>KASSANDRA DAO</b>
        </h3>
        <h1>tokenized data-driven investment funds</h1>
      </S.IntroHero>
      <S.ButtonWrapper>
        <Link
          activeClass="active"
          to="launching-banner"
          smooth={true}
          offset={-70}
          duration={3000}
        >
          <Button
            backgroundPrimary
            size="large"
            as="a"
            text="Upcoming IDO"
            icon={<img src="/assets/avalancheIcon.svg" alt="" />}
            onClick={() => clickMatomoEvent('click-to-projects', 'hero')}
          />
        </Link>
        <Button
          backgroundPrimary
          size="large"
          as="a"
          href="https://demo.kassandra.finance"
          target="_blank"
          text="Explore Our Demo"
          icon={<img src="/assets/avalancheIcon.svg" alt="" />}
          onClick={() => clickMatomoEvent('click-to-cta', 'hero')}
        />
      </S.ButtonWrapper>
    </S.Hero>
  )
}
export default Hero

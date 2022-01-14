import React from 'react'
import Link from 'next/link'

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
        <Link href="/products/ahype">
          <Button
            backgroundPrimary
            size="large"
            as="a"
            text="Explore Our Products"
            icon={<img src="/assets/avalancheIcon.svg" alt="" />}
            onClick={() => clickMatomoEvent('click-to-cta', 'hero')}
          />
        </Link>
      </S.ButtonWrapper>
    </S.Hero>
  )
}
export default Hero

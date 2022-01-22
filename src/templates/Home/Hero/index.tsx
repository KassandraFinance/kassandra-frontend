import React from 'react'
import Link from 'next/link'
import NextLink from 'next/link'

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
        <li>
          <NextLink
            href="https://app.pangolin.exchange/#/swap?outputCurrency=0xf32398dae246C5f672B52A54e9B413dFFcAe1A44"
            passHref
          >
            <Button
              className="btn-cta"
              backgroundPrimary
              size="large"
              as="a"
              text="Buy KACY"
              target="_blank"
              icon={<img src="/assets/pangolin.svg" alt="" />}
              onClick={() => clickMatomoEvent('click-to-cta', 'up-ido')}
            />
          </NextLink>
        </li>
        <li>
          <Link href="/farm">
            <Button
              backgroundPrimary
              size="large"
              as="a"
              text="Stake & Farm"
              onClick={() => clickMatomoEvent('click-to-cta', 'hero')}
            />
          </Link>
        </li>
      </S.ButtonWrapper>
    </S.Hero>
  )
}
export default Hero

import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import Button from '../../../components/Button'

import * as S from './styles'
import Header from '../../../components/Header'

const Hero = () => {
  const { trackEvent } = useMatomo();

  function clickMatomoEvent(action: string, name: string) {
    trackEvent({
      category: "kassandra-page",
      action: action,
      name: name,
    });
  }

  return (
    <S.Hero>
      <Header />
      <S.IntroHero>
        <h3>WELCOME TO <b>KASSANDRA DAO</b></h3>
        <h1>tokenized data-driven investment funds</h1>
      </S.IntroHero>
      <S.ButtonWrapper>
        <Button
          backgroundPrimary
          size='large'
          as="a"
          href="#Token"
          text="Explore Our Projects"
          onClick={() => clickMatomoEvent("click-to-projects", "hero")}
        />
      </S.ButtonWrapper>
    </S.Hero>
  )
}

export default Hero

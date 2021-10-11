import React from 'react'
import Link from 'next/link'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import Button from '../../../components/Button'

import * as S from './styles'

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
      <h3>WELCOME TO KASSANDRA DAO</h3>
      <h1>tokenized data-driven investment funds</h1>
    </S.Hero>
  )
}

export default Hero

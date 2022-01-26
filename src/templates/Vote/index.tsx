import React from 'react'

import Header from '../../components/Header'

import * as S from './styles'
import { VoteIntro } from './VoteIntro'

const Vote = () => {
  return (
    <S.BackgroundVote>
      <Header />
      <S.VoteContent>
        <VoteIntro />
      </S.VoteContent>
    </S.BackgroundVote>
  )
}

export default Vote

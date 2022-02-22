import React from 'react'

import Button from '../../Button'
import ExternalLink from '../../ExternalLink'

import * as S from './styles'

interface IVoteCardProps {
  typeVote: string;
  percentage: string;
  totalVotingPower: string;
  onClickLink: React.MouseEventHandler;
}

const VoteCard = ({
  percentage,
  totalVotingPower,
  typeVote,
  onClickLink
}: IVoteCardProps) => {
  return (
    <>
      <S.Container>
        <S.TextWrapper>
          <S.TotalPercentage>
            {typeVote} - {percentage}%
          </S.TotalPercentage>
          <S.TotalVotes>{totalVotingPower}</S.TotalVotes>
        </S.TextWrapper>
        <S.VoteBar />
        <S.ActionWrapper>
          <Button text="Vote In Favor" backgroundSecondary />
          <ExternalLink
            text="Check all voters"
            hrefNext="#"
            onClick={onClickLink}
          />
        </S.ActionWrapper>
      </S.Container>
    </>
  )
}
export default VoteCard

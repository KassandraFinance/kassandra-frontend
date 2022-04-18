import React from 'react'

import Button from '../../Button'
import ExternalLink from '../../ExternalLink'

import { checkVoteButton } from '../../../utils/checkVoteButton'
import { IUserVotedProps } from '../../../templates/Gov/Proposals/Proposal'

import * as S from './styles'

interface IVoteCardProps {
  typeVote: string;
  percentage: string;
  totalVotingPower: string;
  proposalState: string;
  userVote: IUserVotedProps;
  handleVote: (voteType: string) => void;
  onClickLink: React.MouseEventHandler;
}

const VoteCard = ({
  typeVote,
  percentage,
  totalVotingPower,
  proposalState,
  userVote,
  onClickLink,
  handleVote
}: IVoteCardProps) => {
  function getTextButton(typeVote: string) {
    if (typeVote === 'For') {
      if (userVote.voted && userVote.support) return 'Voted in Favor'
      return 'Vote in Favor'
    }
    if (typeVote !== 'For') {
      if (userVote.voted && !userVote.support) return 'Voted Against'
      return 'Vote Against'
    }
  }
  return (
    <>
      <S.Container>
        <S.TextWrapper>
          <S.TotalPercentage>
            {typeVote} - {percentage}%
          </S.TotalPercentage>
          <S.TotalVotes>{totalVotingPower}</S.TotalVotes>
        </S.TextWrapper>
        <S.VoteBar>
          <S.ProgressBar VotingState={typeVote} value={percentage} max="100" />
        </S.VoteBar>
        <S.ActionWrapper>
          <Button
            text={getTextButton(typeVote)}
            backgroundVote={{
              voteState: checkVoteButton(userVote, proposalState, typeVote),
              type: typeVote
            }}
            onClick={() => handleVote(typeVote)}
          />
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

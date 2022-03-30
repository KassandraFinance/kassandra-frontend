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
            text={typeVote === 'For' ? 'Vote in Favor' : 'Vote Against'}
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

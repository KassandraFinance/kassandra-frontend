import React from 'react'

import { GovernorAlpha } from '../../../constants/tokenAddresses'

import useGovernance from '../../../hooks/useGovernance'

import waitTransaction, {
  MetamaskError,
  TransactionCallback
} from '../../../utils/txWait'

import { ToastSuccess, ToastError, ToastWarning } from '../../Toastify/toast'

import Button from '../../Button'
import ExternalLink from '../../ExternalLink'

import * as S from './styles'
import { checkVoteButton } from '../../../utils/checkVoteButton'
import { IUserVotedProps } from '../../../templates/Gov/Proposals/Proposal'

interface IVoteCardProps {
  typeVote: string;
  percentage: string;
  proposalId: string | string[] | undefined;
  totalVotingPower: string;
  userWalletAddress: string;
  proposalState: string;
  userVote: IUserVotedProps;
  onClickLink: React.MouseEventHandler;
}

const VoteCard = ({
  typeVote,
  percentage,
  proposalId,
  totalVotingPower,
  userWalletAddress,
  proposalState,
  userVote,
  onClickLink
}: IVoteCardProps) => {
  const governance = useGovernance(GovernorAlpha)

  function handleVote() {
    if (userVote.voted || proposalState !== 'Active') return
    governance.castVote(
      Number(proposalId),
      typeVote === 'For' ? true : false,
      userWalletAddress,
      voteCallback()
    )
  }

  const voteCallback = React.useCallback((): TransactionCallback => {
    return async (error: MetamaskError, txHash: string) => {
      if (error) {
        ToastError(`Failed vote. Please try again later.`)
        return
      }

      ToastWarning(`Confirming vote`)
      const txReceipt = await waitTransaction(txHash)

      if (txReceipt.status) {
        ToastSuccess(`Vote confirmed`)
        return
      }
    }
  }, [])

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
          <Button
            text={typeVote === 'For' ? 'Vote in Favor' : 'Vote Against'}
            backgroundVote={checkVoteButton(userVote, proposalState, typeVote)}
            onClick={handleVote}
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

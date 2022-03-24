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

interface IVoteCardProps {
  typeVote: string;
  percentage: string;
  proposalId: string | string[] | undefined;
  totalVotingPower: string;
  userWalletAddress: string;
  onClickLink: React.MouseEventHandler;
}

const VoteCard = ({
  typeVote,
  percentage,
  proposalId,
  totalVotingPower,
  userWalletAddress,
  onClickLink
}: IVoteCardProps) => {
  const governance = useGovernance(GovernorAlpha)

  function handleVote() {
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
            backgroundSecondary
            onClick={() => handleVote()}
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

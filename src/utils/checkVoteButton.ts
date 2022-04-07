import BigNumber from 'bn.js'
import { IUserVotedProps } from '../templates/Gov/Proposals/Proposal'

export const checkVoteButton = (
  userVote: IUserVotedProps,
  proposalState: string,
  typeVote: string
): 'against' | 'favor' | 'vote-open' | 'disable' => {
  const { voted, userWalletAddress, yourVotingPowerInProposal } = userVote

  if (voted) {
    if (!userVote.support && typeVote === 'Against') return 'against'
    if (userVote.support && typeVote === 'For') return 'favor'
  }
  if (
    proposalState === 'Active' &&
    userWalletAddress &&
    yourVotingPowerInProposal.gt(new BigNumber(0))
  ) {
    return 'vote-open'
  }

  return 'disable'
}

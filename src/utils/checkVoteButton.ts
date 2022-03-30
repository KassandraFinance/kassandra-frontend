import { IUserVotedProps } from '../templates/Gov/Proposals/Proposal'

export const checkVoteButton = (
  userVote: IUserVotedProps,
  proposalState: string,
  typeVote: string
): 'against' | 'favor' | 'vote-open' | 'disable' => {
  if (userVote.voted) {
    if (!userVote.support && typeVote === 'Against') return 'against'
    if (userVote.support && typeVote === 'For') return 'favor'
  }
  if (proposalState === 'Active') return 'vote-open'

  return 'disable'
}

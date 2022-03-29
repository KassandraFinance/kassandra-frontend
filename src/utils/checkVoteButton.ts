import { IUserVotedProps } from '../templates/Gov/Proposals/Proposal'

export const checkVoteButton = (
  userVote: IUserVotedProps,
  proposalState: string,
  typeVote: string
) =>
  userVote.voted
    ? !userVote.support && typeVote === 'Against'
      ? 'against'
      : userVote.support && typeVote === 'For'
      ? 'favor'
      : 'disable'
    : proposalState === 'Active'
    ? 'vote-open'
    : 'disable'

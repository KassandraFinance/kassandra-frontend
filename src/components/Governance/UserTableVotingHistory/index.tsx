import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { request } from 'graphql-request'

import { GovernorAlpha, SUBGRAPH_URL } from '../../../constants/tokenAddresses'

import useGovernance from '../../../hooks/useGovernance'

import AnyCard from '../../AnyCard'

import { GET_PROPOSALS } from './graphql'

import * as S from './styles'

const statsSecundaryProposalLibColor: { [key: string]: string } = {
  'voting open': '#E843C4',
  succeeded: '#26DBDB',
  queued: '#FFBF00',
  pending: '#FFBF00',
  executed: '#2CE878',
  defeated: '#E8372C',
  expired: '#E8372C',
  canceled: '#BDBDBD'
}

const statsPrimaryProposalLibColor: { [key: string]: string } = {
  active: '#E843C4',
  succeeded: '#2CE878',
  failed: '#E8372C'
}

interface IProposalsTableProps {
  id: string;
  number: number;
  targets: [];
  values: [];
  signatures: [];
  startBlock: string;
  description: string;
  state: any[];
}

interface IProposalsListProps {
  proposal: IProposalsTableProps;
}

interface IUserTableProps {
  userAddressUrl: string | string[] | undefined;
  userWalletAddress: string | string[] | undefined;
}

// eslint-disable-next-line prettier/prettier
export const UserTableVotingHistory = ({
  userAddressUrl,
  userWalletAddress
}: IUserTableProps) => {
  // eslint-disable-next-line prettier/prettier
  const [proposalsList, setProposalsList] = React.useState<
    IProposalsTableProps[]
  >([])

  const { data } = useSWR([GET_PROPOSALS], query =>
    request(SUBGRAPH_URL, query, {
      id: userAddressUrl
    })
  )

  const governance = useGovernance(GovernorAlpha)

  async function handleAddStateOnProposal(votes: IProposalsListProps[]) {
    const proposals = votes.map((props: IProposalsListProps) =>
      governance.stateProposals(props.proposal.number).then(res => {
        props.proposal.state = res
        return props.proposal
      })
    )

    const proposalComplete = await Promise.all(proposals)

    setProposalsList(proposalComplete)
  }

  function getTitleProposal(description: string) {
    const [titleDescription] = description.split(/[,.\n]/)
    const formatTitleDescription = titleDescription.replace('#', '')

    if (formatTitleDescription.length > 45) {
      return (
        formatTitleDescription.slice(0, 45).charAt(0).toUpperCase() +
        formatTitleDescription.slice(1, 45) +
        '...'
      )
    }

    return (
      formatTitleDescription.charAt(0).toUpperCase() +
      formatTitleDescription.slice(1)
    )
  }

  React.useEffect(() => {
    if (data) {
      data.user === null
        ? setProposalsList([])
        : handleAddStateOnProposal(data.user.votes)
    }
  }, [data])

  return (
    <>
      {proposalsList.length > 0 ? (
        <S.UserTableVotingHistory>
          <table>
            <S.Th>
              <tr>
                <td>Proposal</td>
                <td>Status/Time frame</td>
              </tr>
            </S.Th>
            <tbody>
              {proposalsList.map(proposal => (
                <Link
                  key={proposal.id}
                  href={`/gov/proposals/${proposal.number}`}
                >
                  <tr>
                    <S.Td colSpan={2}>
                      <div className="td-container">
                        <S.TextProposal>
                          {proposal.number.toString().padStart(2, '0')}{' '}
                          {getTitleProposal(proposal.description)}
                        </S.TextProposal>

                        <S.StatusProposal
                          statusColor={
                            statsPrimaryProposalLibColor[
                              proposal.state[0].toLowerCase()
                            ]
                          }
                        >
                          {proposal.state[0]}
                        </S.StatusProposal>

                        <S.TimeFrame>
                          Ends in N days
                          {/* End in {dateRequestUnstake(item.timestamp * 1000)} */}
                        </S.TimeFrame>

                        <S.StateMutability
                          statusColor={
                            statsSecundaryProposalLibColor[
                              proposal.state[1].toLowerCase()
                            ]
                          }
                        >
                          <span>{proposal.state[1]}</span>
                          {proposal.state[2] && (
                            <div className="status-icon-container">
                              <Image
                                className="status-icon"
                                src={proposal.state[2]}
                                alt=""
                                layout="responsive"
                                // width={24}
                                // height={24}
                              />
                            </div>
                          )}
                        </S.StateMutability>
                      </div>
                    </S.Td>
                  </tr>
                </Link>
              ))}
            </tbody>
          </table>
        </S.UserTableVotingHistory>
      ) : (
        <AnyCard
          text={
            userWalletAddress === userAddressUrl
              ? 'To obtain voting power you need to have KACY staked'
              : 'This address has not voted on a governance proposal yet '
          }
          button={userWalletAddress === userAddressUrl}
          link="/farm"
          buttonText="Stake/Farm"
        />
      )}
    </>
  )
}

export default UserTableVotingHistory

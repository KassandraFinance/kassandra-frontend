import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { request } from 'graphql-request'

import { GovernorAlpha, SUBGRAPH_URL } from '../../../constants/tokenAddresses'

import useGovernance from '../../../hooks/useGovernance'

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

interface IProposalsListProps {
  id: string;
  number: number;
  targets: [];
  values: [];
  signatures: [];
  startBlock: string;
  description: string;
  state: any[];
}

export const ProposalTable = () => {
  // eslint-disable-next-line prettier/prettier
  const [proposalsList, setProposalsList] = React.useState<Array<IProposalsListProps>>([])

  const { data } = useSWR([GET_PROPOSALS], query =>
    request(SUBGRAPH_URL, query)
  )

  const governance = useGovernance(GovernorAlpha)

  async function handleAddStateOnProposal(proposals: IProposalsListProps[]) {
    const proposal = proposals.map((proposal: IProposalsListProps) =>
      governance.stateProposals(proposal.number).then(res => {
        proposal.state = res
        return proposal
      })
    )

    const proposalComplete = await Promise.all(proposal)

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
      handleAddStateOnProposal(data.proposals)
    }
  }, [data])

  return (
    <S.ProposalTable>
      <S.Table>
        <thead>
          <S.Tr>
            <S.Th className="proposal">Proposal</S.Th>
            <S.Th className="status">Status/Time frame</S.Th>
          </S.Tr>
        </thead>
        <tbody>
          {proposalsList.map(proposal => (
            <Link key={proposal.id} href={`/gov/proposals/${proposal.number}`}>
              <S.Tr>
                <S.Td className="proposal">
                  <S.TextProposal>
                    {proposal.number} {getTitleProposal(proposal.description)}
                  </S.TextProposal>
                  <S.StatusAndTimeframe>
                    <S.StatusProposal
                      statusColor={
                        statsPrimaryProposalLibColor[
                          proposal.state[0].toLowerCase()
                        ]
                      }
                    >
                      {proposal.state[0]}
                    </S.StatusProposal>
                    {/* <S.TimeFrameMobile>{item.timestamp}</S.TimeFrameMobile> */}
                  </S.StatusAndTimeframe>
                </S.Td>
                <S.Td className="status">
                  <S.TimeFrame>
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
                      <Image
                        className="status-icon"
                        src={proposal.state[2]}
                        alt=""
                      />
                    )}
                  </S.StateMutability>
                </S.Td>
              </S.Tr>
            </Link>
          ))}
        </tbody>
      </S.Table>
    </S.ProposalTable>
  )
}

export default ProposalTable

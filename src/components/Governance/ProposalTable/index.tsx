import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { request } from 'graphql-request'

import { GovernorAlpha, SUBGRAPH_URL } from '../../../constants/tokenAddresses'

import useGovernance from '../../../hooks/useGovernance'

// import { dateRequestUnstake } from '../../../utils/date'

import { GET_PROPOSALS } from './graphql'

import * as S from './styles'

interface IProposalsListProps {
  id: string;
  number: number;
  targets: any[];
  values: any[];
  signatures: any[];
  startBlock: string;
  description: string;
  state: any[];
}

export const ProposalTable = () => {
  const [proposalsList, setProposalsList] = React.useState<Array<IProposalsListProps>>([ // eslint-disable-line prettier/prettier
    {
      id: '',
      number: 0,
      targets: [],
      values: [],
      signatures: [],
      startBlock: '',
      description: '',
      state: []
    }
  ])

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
                    {proposal.number} {proposal.description}
                  </S.TextProposal>
                  <S.StatusAndTimeframe>
                    <S.StatusProposal>{proposal.state[0]}</S.StatusProposal>
                    {/* <S.TimeFrameMobile>{item.timestamp}</S.TimeFrameMobile> */}
                  </S.StatusAndTimeframe>
                </S.Td>
                <S.Td className="status">
                  <S.TimeFrame>
                    {/* End in {dateRequestUnstake(item.timestamp * 1000)} */}
                  </S.TimeFrame>
                  <S.StateMutability>
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

import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { request } from 'graphql-request'

import {
  chains,
  GovernorAlpha,
  SUBGRAPH_URL
} from '../../../constants/tokenAddresses'

import useGovernance from '../../../hooks/useGovernance'

import { GET_PROPOSALS } from './graphql'

import * as S from './styles'
import { RootStateOrAny, useSelector } from 'react-redux'
import { ToastError } from '../../Toastify/toast'

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
  endBlock: string;
  description: string;
  created: string;
  state: string[];
  timeToEndProposal: string;
}

export const ProposalTable = () => {
  const { userWalletAddress, chainId } = useSelector(
    (state: RootStateOrAny) => state
  )
  // eslint-disable-next-line prettier/prettier
  const [proposalsList, setProposalsList] = React.useState<
    Array<IProposalsListProps>
  >([])

  const networksAvailabe = [43113, 43114]

  React.useEffect(() => {
    if (
      userWalletAddress.length > 0 &&
      chainId &&
      !networksAvailabe.includes(chainId)
    ) {
      ToastError(
        'Change your network to Avalanche to be able to view the proposals.'
      )
      return
    }
  }, [chainId, userWalletAddress])

  const secondsPerBlock =
    chains[process.env.NEXT_PUBLIC_MASTER === '1' ? 'avalanche' : 'fuji']
      .secondsPerBlock

  const { data } = useSWR([GET_PROPOSALS], query =>
    request(SUBGRAPH_URL, query)
  )

  const governance = useGovernance(GovernorAlpha)

  async function handleAddStateOnProposal(proposals: IProposalsListProps[]) {
    const proposal = proposals.map((proposal: IProposalsListProps) =>
      governance.stateProposals(proposal.number).then(res => {
        const createdProposal = new Date(Number(proposal.created) * 1000)
        const secondsToEndProposal =
          (Number(proposal.endBlock) - Number(proposal.startBlock)) *
          secondsPerBlock
        proposal.timeToEndProposal = new Date(
          Number(createdProposal) + secondsToEndProposal * 1000
        )
          .toLocaleString()
          .split(', ')[0]
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
      <table>
        <S.Th>
          <tr>
            <td>Proposal</td>
            <td>Status/Time frame</td>
          </tr>
        </S.Th>
        <tbody>
          {proposalsList?.map(proposal => (
            <Link key={proposal.id} href={`/gov/proposals/${proposal.number}`}>
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
                      {proposal.state[1]} ends {proposal.timeToEndProposal}
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
    </S.ProposalTable>
  )
}

export default ProposalTable

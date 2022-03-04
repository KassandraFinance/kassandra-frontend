import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { GovernorAlpha } from '../../../constants/tokenAddresses'

import useGovernance from '../../../hooks/useGovernance'

import approved from '../../../../public/assets/status/approved.svg'
import cancelled from '../../../../public/assets/status/cancelled.svg'
import executed from '../../../../public/assets/status/executed.svg'
import failed from '../../../../public/assets/status/failed.svg'
import queued from '../../../../public/assets/status/queued.svg'
import votingOpen from '../../../../public/assets/status/voting-open.svg'

import * as S from './styles'

const stateProposal: { [key: number]: string } = {
  0: 'Pending',
  1: 'Active',
  2: 'Canceled',
  3: 'Defeated',
  4: 'Succeeded',
  5: 'Queued',
  6: 'Expired',
  7: 'Executed'
}

const stateIcon: { [key: number]: any } = {
  0: approved,
  1: executed,
  2: failed,
  3: queued,
  4: votingOpen,
  5: cancelled
}

export const ProposalTable = () => {
  const [proposalsAmount, setProposalsAmount] = React.useState<number>(-1)
  const [proposalsList, setProposalsList] = React.useState<Array<object>>([])
  const governance = useGovernance(GovernorAlpha)

  async function getProposal(amount: number) {
    for (let i = 0; i < amount; i++) {
      const state = await governance.state(i + 1)
      const proposal = await governance.proposals(i + 1)

      setProposalsList(prevState => [...prevState, { state, proposal }])
    }
  }

  React.useEffect(() => {
    governance.proposalCount().then(res => setProposalsAmount(Number(res)))
    if (proposalsAmount > 0) {
      getProposal(proposalsAmount)
    }
  }, [proposalsAmount])

  console.log(proposalsList)

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
          {listProposal.map(proposal => (
            <Link key={proposal.id} href={`/gov/proposals/${proposal.id}`}>
              <S.Tr>
                <S.Td className="proposal">
                  <S.TextProposal>
                    {proposal.id} {proposal.proposal}
                  </S.TextProposal>
                  <div style={{ display: 'flex' }}>
                    <S.StatusProposal>{proposal.status}</S.StatusProposal>
                    <S.TimeFrameMobile>{proposal.timeFrame}</S.TimeFrameMobile>
                  </div>
                </S.Td>
                <S.Td className="status">
                  <S.TimeFrame>{proposal.timeFrame}</S.TimeFrame>
                  <S.StateMutability>
                    <span>{stateProposal[Math.floor(Math.random() * 8)]}</span>
                    <Image
                      className="status-icon"
                      src={stateIcon[Math.floor(Math.random() * 5)] || approved}
                      alt=""
                    />
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

const listProposal = [
  {
    id: '01',
    proposal: 'texto asdsad sadsadsa texto asdsad sadsadsa.',
    timeFrame: 'Ends in N days',
    stateMutability: 'Voting open',
    status: 'active'
  },
  {
    id: '02',
    proposal: 'texto asdsad sadsadsa texto asdsad sadsadsa.',
    timeFrame: 'Ends in N days',
    stateMutability: 'Approved',
    status: 'active'
  },
  {
    id: '03',
    proposal: 'texto asdsad sadsadsa texto asdsad sadsadsa.',
    timeFrame: 'Ends in N days',
    stateMutability: 'Queued',
    status: 'active'
  },
  {
    id: '04',
    proposal: 'texto asdsad sadsadsa texto asdsad sadsadsa.',
    timeFrame: 'Executed on nn/nn/nnnn',
    stateMutability: 'Executed',
    status: 'active'
  },
  {
    id: '05',
    proposal: 'texto asdsad sadsadsa texto asdsad sadsadsa.',
    timeFrame: 'Executed on nn/nn/nnnn',
    stateMutability: 'Executed',
    status: 'active'
  },
  {
    id: '06',
    proposal: 'texto asdsad sadsadsa texto asdsad sadsadsa.',
    timeFrame: 'Executed on nn/nn/nnnn',
    stateMutability: 'Executed',
    status: 'active'
  }
]

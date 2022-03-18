import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { GovernorAlpha } from '../../../constants/tokenAddresses'

import useGovernance from '../../../hooks/useGovernance'

import { dateRequestUnstake } from '../../../utils/date'

import * as S from './styles'

export const ProposalTable = () => {
  const [proposalsList, setProposalsList] = React.useState<Array<object>>([])
  const governance = useGovernance(GovernorAlpha)

  React.useEffect(() => {
    governance
      .pastEvents('ProposalCreated')
      .then(res => governance.getProposal(res, setProposalsList))
    setProposalsList([])
  }, [])

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
          {proposalsList.map((item: any) => (
            <Link
              key={item.proposal.id}
              href={`/gov/proposals/${item.proposal.id}`}
            >
              <S.Tr>
                <S.Td className="proposal">
                  <S.TextProposal>
                    {item.proposal.id} {item.proposal.description}
                  </S.TextProposal>
                  <S.StatusAndTimeframe>
                    <S.StatusProposal>{item.state[0]}</S.StatusProposal>
                    <S.TimeFrameMobile>{item.timestamp}</S.TimeFrameMobile>
                  </S.StatusAndTimeframe>
                </S.Td>
                <S.Td className="status">
                  <S.TimeFrame>
                    End in {dateRequestUnstake(item.timestamp * 1000)}
                  </S.TimeFrame>
                  <S.StateMutability>
                    <span>{item.state[1]}</span>
                    <Image className="status-icon" src={item.state[2]} alt="" />
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

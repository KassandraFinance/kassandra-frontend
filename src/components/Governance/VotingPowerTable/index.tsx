import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BigNumber from 'bn.js'

import { GovernorAlpha, Staking } from '../../../constants/tokenAddresses'

import useVotingPower from '../../../hooks/useVotingPower'
import useGovernance from '../../../hooks/useGovernance'

import { BNtoDecimal } from '../../../utils/numerals'
import substr from '../../../utils/substr'

import avax from '../../../../public/assets/avalanche_social_index_logo.svg'

import * as S from './styles'

interface IVotingPowerRankProps {
  address: string;
  votingPower: BigNumber;
  proposalsCreated: number;
}

export const VotingPowerTable = () => {
  // eslint-disable-next-line prettier/prettier
  const [votingPowerRank, setVotingPowerRank] = React.useState<Array<IVotingPowerRankProps>>([
    {
      address: '',
      votingPower: new BigNumber(0),
      proposalsCreated: 0
    }
  ])

  const governance = useGovernance(GovernorAlpha)
  const votingPower = useVotingPower(Staking)

  async function handleVotingPowerRank() {
    const proposalAmount = await governance.proposalCount()
    const arrayRank: IVotingPowerRankProps[] = []

    for (let index = 1; index <= proposalAmount; index++) {
      const proposal = await governance.proposals(index)
      const votePower = await votingPower.currentVotes(proposal.proposer)

      const filterProposer = arrayRank.findIndex(
        (item: IVotingPowerRankProps) => item.address === proposal.proposer
      )

      if (filterProposer === -1) {
        arrayRank.push({
          address: proposal.proposer,
          votingPower: votePower,
          proposalsCreated: 1
        })
      } else {
        arrayRank[filterProposer] = {
          address: proposal.proposer,
          votingPower: votePower,
          proposalsCreated: arrayRank[filterProposer].proposalsCreated + 1
        }
      }
    }
    setVotingPowerRank(arrayRank)
  }

  React.useEffect(() => {
    handleVotingPowerRank()
    setVotingPowerRank([])
  }, [])

  return (
    <S.VotingPowerTable>
      <S.Table>
        <thead>
          <S.Tr>
            <S.Th className="rank">Rank</S.Th>
            <S.Th className="user">User</S.Th>
            <S.Th className="vote-power">Vote Power</S.Th>
            <S.Th className="vote-weight">Vote Weight</S.Th>
            <S.Th className="proposals-created">Proposals Created</S.Th>
            <S.Th className="proposals-voted">Proposals Voted</S.Th>
          </S.Tr>
        </thead>
        <tbody>
          {votingPowerRank.map(
            (
              item: {
                address: string,
                votingPower: BigNumber,
                proposalsCreated: number
              },
              index
            ) => (
              <Link key={item.address} href={`/gov/address/${item.address}`}>
                <S.Tr>
                  <S.Td className="rank">{index + 1}</S.Td>
                  <S.Td className="user">
                    <Image src={avax} alt="" />
                    <span>{substr(item.address)}</span>
                  </S.Td>
                  <S.Td className="vote-power">
                    {BNtoDecimal(item.votingPower, 18, 2)}
                  </S.Td>
                  <S.Td className="vote-weight">-</S.Td>
                  <S.Td className="proposals-created">
                    {item.proposalsCreated}
                  </S.Td>
                  <S.Td className="proposals-voted">-</S.Td>
                </S.Tr>
              </Link>
            )
          )}
        </tbody>
      </S.Table>
    </S.VotingPowerTable>
  )
}

export default VotingPowerTable

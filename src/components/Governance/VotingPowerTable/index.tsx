import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BigNumber from 'bn.js'
import useSWR from 'swr'
import { request } from 'graphql-request'

import { SUBGRAPH_URL } from '../../../constants/tokenAddresses'

import { BNtoDecimal } from '../../../utils/numerals'
import substr from '../../../utils/substr'

import { GET_USERS } from './graphql'

import avax from '../../../../public/assets/avalanche_social_index_logo.svg'

import * as S from './styles'
import Big from 'big.js'

interface IVotingPowerRankProps {
  address: string;
  votingPower: Big;
  // voteWeight: number;
  votes: number;
  proposalsCreated: number;
}

export const VotingPowerTable = () => {
  // eslint-disable-next-line prettier/prettier
  const [votingPowerRank, setVotingPowerRank] = React.useState<Array<IVotingPowerRankProps>>([
    {
      address: '',
      votingPower: Big(-1),
      // voteWeight: 0,
      votes: 0,
      proposalsCreated: 0
    }
  ])
  // eslint-disable-next-line prettier/prettier
  const [totalVotingPower, setTotalVotingPower] = React.useState<Big>(Big(-1))

  const { data } = useSWR([GET_USERS], query => request(SUBGRAPH_URL, query))

  React.useEffect(() => {
    if (data) {
      const users = data.users.map(
        (user: {
          id: string,
          votingPower: BigNumber,
          votes: any[],
          proposals: any[]
        }) => {
          return {
            address: user.id,
            votingPower: user.votingPower,
            // voteWeight: user.votingPower,
            votes: user.votes.length,
            proposalsCreated: user.proposals.length
          }
        }
      )
      setTotalVotingPower(data.governances[0].totalVotingPower)
      setVotingPowerRank(users.reverse())
    }
  }, [data])

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
          {votingPowerRank &&
            votingPowerRank.map(
              (
                item: {
                  address: string,
                  votingPower: Big,
                  votes: number,
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
                      {BNtoDecimal(item.votingPower, 0, 2)}
                    </S.Td>
                    <S.Td className="vote-weight">
                      {item.votingPower && totalVotingPower
                        ? BNtoDecimal(
                            Big(item.votingPower)
                              .mul(100)
                              .div(Big(totalVotingPower)),
                            18,
                            2
                          ) + '%'
                        : '-'}
                    </S.Td>
                    <S.Td className="proposals-created">
                      {item.proposalsCreated}
                    </S.Td>
                    <S.Td className="proposals-voted">{item.votes}</S.Td>
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

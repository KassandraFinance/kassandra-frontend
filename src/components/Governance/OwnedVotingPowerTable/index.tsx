import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Big from 'big.js'
import useSWR from 'swr'
import { request } from 'graphql-request'

import { SUBGRAPH_URL } from '../../../constants/tokenAddresses'

import { BNtoDecimal } from '../../../utils/numerals'
import substr from '../../../utils/substr'

import { GET_USER } from './graphql'

import avax from '../../../../public/assets/avalanche_social_index_logo.svg'

import * as S from './styles'

interface IVotingPowerRankProps {
  address: string;
  votingPower: Big;
  voteWeight: string;
  votes: number;
  proposalsCreated: number;
}

export const OwnedVotingPowerTable = () => {
  // eslint-disable-next-line prettier/prettier
  const [votingPowerRank, setVotingPowerRank] = React.useState<Array<IVotingPowerRankProps>>([
    {
      address: '',
      votingPower: Big(-1),
      voteWeight: '0',
      votes: 0,
      proposalsCreated: 0
    }
  ])

  const router = useRouter()
  const { address } = router.query

  const { data } = useSWR([GET_USER], query =>
    request(SUBGRAPH_URL, query, { id: address })
  )

  React.useEffect(() => {
    if (data) {
      console.log(data)
      // const users = data.users.map(
      //   (user: {
      //     id: string,
      //     votingPower: string,
      //     votes: any[],
      //     proposals: any[]
      //   }) => {
      //     return {
      //       address: user.id,
      //       votingPower: user.votingPower,
      //       voteWeight: BNtoDecimal(
      //         Big(user.votingPower)
      //           .mul(100)
      //           .div(Big(data.governances[0].totalVotingPower)),
      //         18,
      //         2
      //       ),
      //       votes: user.votes.length,
      //       proposalsCreated: user.proposals.length
      //     }
      //   }
      // )
      // setVotingPowerRank(users)
    }
  }, [data])

  return (
    <S.OwnedVotingPowerTable>
      <S.Table>
        <thead>
          <S.Tr>
            <S.Th className="pool">Pool</S.Th>
            <S.Th className="delegating-to">Delegating to</S.Th>
            <S.Th className="staked">Staked</S.Th>
            <S.Th className="voting-power-allocated">
              Voting Power Allocated
            </S.Th>
          </S.Tr>
        </thead>
        <tbody>
          {votingPowerRank &&
            votingPowerRank.map(
              (
                item: {
                  address: string,
                  votingPower: Big,
                  voteWeight: string,
                  votes: number,
                  proposalsCreated: number
                },
                index
              ) => (
                <Link key={item.address} href={`/gov/address/${item.address}`}>
                  <S.Tr>
                    <S.Td className="pool">{index + 1}</S.Td>
                    <S.Td className="delegating-to">
                      <Image src={avax} width={24} height={24} alt="" />
                      <span>{substr(item.address)}</span>
                    </S.Td>
                    <S.Td className="staked">
                      {BNtoDecimal(item.votingPower, 0, 2)}
                    </S.Td>
                    <S.Td className="voting-power-allocated">
                      {item.voteWeight + '%'}
                    </S.Td>
                  </S.Tr>
                </Link>
              )
            )}
        </tbody>
      </S.Table>
    </S.OwnedVotingPowerTable>
  )
}

export default OwnedVotingPowerTable

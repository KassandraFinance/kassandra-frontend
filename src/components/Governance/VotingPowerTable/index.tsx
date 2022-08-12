import React from 'react'
import Link from 'next/link'
import Big from 'big.js'
import useSWR from 'swr'
import { request } from 'graphql-request'

import { SUBGRAPH_URL } from '../../../constants/tokenAddresses'

import { BNtoDecimal } from '../../../utils/numerals'

import { GET_INFO_USERS } from './graphql'

import ImageProfile from '../ImageProfile'

import * as S from './styles'

interface IVotingPowerRankProps {
  address: string;
  votingPower: Big;
  voteWeight: string;
  votes: number;
  proposalsCreated: number;
  name?: string;
  image?: string;
  isNFT?: boolean;
}

interface IVotingPowerProps {
  skip?: number;
  take: number;
}

export const VotingPowerTable = ({ skip = 0, take }: IVotingPowerProps) => {
  const [votingPowerRank, setVotingPowerRank] = React.useState<
    Array<IVotingPowerRankProps>
  >([
    {
      address: '',
      votingPower: Big(-1),
      voteWeight: '0',
      votes: 0,
      proposalsCreated: 0,
      name: '',
      image: ''
    }
  ])

  const { data } = useSWR([GET_INFO_USERS, skip, take], (query, skip, take) =>
    request(SUBGRAPH_URL, query, { skip, take })
  )

  React.useEffect(() => {
    ;(async () => {
      setVotingPowerRank([
        {
          address: '',
          votingPower: Big(0),
          voteWeight: '0',
          votes: 0,
          proposalsCreated: 0,
          name: '',
          image: ''
        }
      ])

      if (data) {
        const users = data.users.map(
          async (user: {
            id: string,
            votingPower: string,
            votes: [],
            proposals: []
          }) => {
            const response = await fetch(`/api/profile/${user.id}`)
            const userProfile = await response.json()

            if (userProfile.nickname) {
              return {
                address: user.id,
                votingPower: user.votingPower,
                voteWeight: BNtoDecimal(
                  Big(user.votingPower)
                    .mul(100)
                    .div(Big(data.governances[0].totalVotingPower)),
                  18,
                  2
                ),
                votes: user.votes.length,
                proposalsCreated: user.proposals.length,
                name: userProfile?.nickname || '',
                image: userProfile?.image || '',
                isNFT: userProfile?.isNFT || false
              }
            }

            return {
              address: user.id,
              votingPower: user.votingPower,
              voteWeight: BNtoDecimal(
                Big(user.votingPower)
                  .mul(100)
                  .div(Big(data.governances[0].totalVotingPower)),
                18,
                2
              ),
              votes: user.votes.length,
              proposalsCreated: user.proposals.length
            }
          }
        )
        setVotingPowerRank(await Promise.all(users))
      }
    })()
  }, [data, skip])

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
            votingPowerRank.map((item, index) => (
              <Link
                key={item.address}
                href={`/profile/${item.address}?tab=governance-data`}
              >
                <S.Tr>
                  <S.Td className="rank">{index + 1 + skip}</S.Td>
                  <S.Td className="user">
                    <ImageProfile
                      address={item.address}
                      diameter={24}
                      hasAddress={true}
                      isLink={false}
                    />
                  </S.Td>
                  <S.Td className="vote-power">
                    {BNtoDecimal(item.votingPower, 0, 2)}
                  </S.Td>
                  <S.Td className="vote-weight">{item.voteWeight + '%'}</S.Td>
                  <S.Td className="proposals-created">
                    {item.proposalsCreated}
                  </S.Td>
                  <S.Td className="proposals-voted">{item.votes}</S.Td>
                </S.Tr>
              </Link>
            ))}
        </tbody>
      </S.Table>
    </S.VotingPowerTable>
  )
}

export default VotingPowerTable

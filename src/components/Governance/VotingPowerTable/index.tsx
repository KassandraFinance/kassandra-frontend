import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import substr from '../../../utils/substr'

import avax from '../../../../public/assets/avalanche_social_index_logo.svg'

import * as S from './styles'

export const VotingPowerTable = () => {
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
          {listVotingRank.map(item => (
            <Link key={item.address} href={`/gov/address/${item.address}`}>
              <S.Tr>
                <S.Td className="rank">{item.rank}</S.Td>
                <S.Td className="user">
                  <Image src={avax} alt="" />
                  <span>{substr(item.address)}</span>
                </S.Td>
                <S.Td className="vote-power">{item.votingPower}</S.Td>
                <S.Td className="vote-weight">{item.voteWeight}</S.Td>
                <S.Td className="proposals-created">
                  {item.proposalsCreated}
                </S.Td>
                <S.Td className="proposals-voted">{item.proposalsVoted}</S.Td>
              </S.Tr>
            </Link>
          ))}
        </tbody>
      </S.Table>
    </S.VotingPowerTable>
  )
}

export default VotingPowerTable

const listVotingRank = [
  {
    rank: '01',
    address: '0x55bB02dF11C5d8862eb7B924f3876b8BA307bAa7',
    votingPower: '213,04',
    voteWeight: '13,49',
    proposalsCreated: '2',
    proposalsVoted: '3'
  },
  {
    rank: '02',
    address: '0x55bB02dF11C5d8862eb7B924f3876b8BA307bAa7',
    votingPower: '113,04',
    voteWeight: '13,49',
    proposalsCreated: '2',
    proposalsVoted: '3'
  },
  {
    rank: '03',
    address: '0x55bB02dF11C5d8862eb7B924f3876b8BA307bAa7',
    votingPower: '32,11',
    voteWeight: '13,49',
    proposalsCreated: '2',
    proposalsVoted: '3'
  },
  {
    rank: '04',
    address: '0x55bB02dF11C5d8862eb7B924f3876b8BA307bAa7',
    votingPower: '44,65',
    voteWeight: '13,49',
    proposalsCreated: '2',
    proposalsVoted: '3'
  }
]

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

import avax from '../../../../public/assets/logo-kacy-stake.svg'

import * as S from './styles'

interface IOwnAndReceivedTableListProps {
  title: string;
  withdrawDelay: string;
  userAdress: string;
  amountKacy: string;
  amountDolar: string;
  votingPower: string;
  votingPowerPerKacy: string;
}

export const OwnAndReceivedTable = () => {
  // eslint-disable-next-line prettier/prettier
  const [votingPowerRank, setVotingPowerRank] = React.useState<
    Array<IOwnAndReceivedTableListProps>
  >([
    // {
    //   address: '',
    //   votingPower: Big(-1),
    //   voteWeight: '0',
    //   votes: 0,
    //   proposalsCreated: 0
    // }
  ])

  const router = useRouter()
  const { address } = router.query

  const { data } = useSWR([GET_USER], query =>
    request(SUBGRAPH_URL, query, { id: address })
  )

  React.useEffect(() => {
    if (data) {
      console.log('data', data)
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
    <S.OwnAndReceivedTable>
      <S.Table>
        <thead>
          <S.Tr className="headTable">
            <S.Th>Pool</S.Th>
            <S.Th className="delegating">Delegating to</S.Th>
            <S.Th>Staked</S.Th>
            <S.Th>Voting Power Allocated</S.Th>
          </S.Tr>
        </thead>
        <tbody>
          {OwnAndReceivedTableList &&
            OwnAndReceivedTableList.map((item, index) => (
              <S.Tr key={item.userAdress + index}>
                <S.Td className="pool">
                  <Image src={avax} width={32} height={32} alt="" />
                  <div>
                    <p>{item.title}</p>
                    <span>{item.withdrawDelay} withdraw delay</span>
                  </div>
                </S.Td>
                <S.Td className="delegating-to">
                  <Image src={avax} width={24} height={24} alt="" />
                  <span>{substr(item.userAdress)}</span>
                </S.Td>
                <S.Td className="staked">
                  {/* {BNtoDecimal(item.votingPower, 0, 2)} */}
                  <p>
                    {item.amountKacy} <span>KACY</span>
                  </p>
                  <span>{item.amountDolar}</span>
                </S.Td>
                <S.Td className="voting-power-allocated">
                  {/* {item.voteWeight + '%'} */}
                  <p>{item.votingPower}</p>
                  <span>{item.votingPowerPerKacy} Voting power per KACY </span>
                </S.Td>
              </S.Tr>
            ))}
        </tbody>
      </S.Table>
    </S.OwnAndReceivedTable>
  )
}

export default OwnAndReceivedTable

const OwnAndReceivedTableList = [
  {
    title: 'KACY',
    withdrawDelay: 'No',
    userAdress: '0xD581d597dBc574A458d469A62Fb5a07A625Edf73',
    amountKacy: '4,000,000.00',
    amountDolar: '$10,000,000.00',
    votingPower: '4,000,000.00',
    votingPowerPerKacy: '5'
  },
  {
    title: 'KACY',
    withdrawDelay: '15',
    userAdress: '0xF86396e9a98991D0DD15661Fc6F8745aE0730A35',
    amountKacy: '4,000,000.00',
    amountDolar: '$10,000,000.00',
    votingPower: '4,000,000.00',
    votingPowerPerKacy: '5'
  },
  {
    title: 'KACY',
    withdrawDelay: '30',
    userAdress: '0xF86396e9a98991D0DD15661Fc6F8745aE0730A35',
    amountKacy: '4,000,000.00',
    amountDolar: '$10,000,000.00',
    votingPower: '4,000,000.00',
    votingPowerPerKacy: '5'
  }
]

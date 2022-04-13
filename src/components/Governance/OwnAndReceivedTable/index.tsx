import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import BigNumber from 'bn.js'
import Big from 'big.js'

import { BNtoDecimal } from '../../../utils/numerals'
import substr from '../../../utils/substr'

import AnyCard from '../AnyCard'

import avax from '../../../../public/assets/logo-kacy-stake.svg'

import * as S from './styles'

interface IUserVotingPowerProps {
  pool: string;
  votingPower: BigNumber;
  kacy: Big;
  from: {
    id: string
  };
  to: {
    id: string
  };
}

interface IOwnAndReceivedTableProps {
  userVotingPower: IUserVotingPowerProps[];
  isDelegationTable: boolean;
}

const URL_API: { [key: number | string]: string } = {
  1: 'https://kassandra.finance/api/overview',
  2: 'https://alpha.kassandra.finance/api/overview',
  3: 'https://demo.kassandra.finance/api/overview',
  4: 'http://localhost:3000/api/overview'
}

// eslint-disable-next-line prettier/prettier
export const OwnAndReceivedTable = ({ userVotingPower, isDelegationTable }: IOwnAndReceivedTableProps) => {
  const [kacyDolarPrice, setKacyDolarPrice] = React.useState(0)

  const router = useRouter()
  const { address } = router.query

  const { data } = useSWR(URL_API[process.env.NEXT_PUBLIC_URL_API || 4])

  function handleCheckValuePool(pool: string) {
    if (pool === '0') {
      return 'No'
    } else if (pool === '1') {
      return '15'
    } else {
      return '45'
    }
  }

  function handleCheckValuePoolPerVP(pool: string) {
    const isMasterBranch = process.env.NEXT_PUBLIC_MASTER === '1' ? true : false

    if (isMasterBranch) {
      if (pool === '0') {
        return '1'
      } else if (pool === '1') {
        return '2'
      } else {
        return '3'
      }
    } else {
      if (pool === '0') {
        return '1'
      } else if (pool === '1') {
        return '3'
      } else {
        return '5'
      }
    }
  }

  function handleKacyInDolar(value: Big) {
    if (kacyDolarPrice) {
      const valueNumber = value.mul(kacyDolarPrice)
      return BNtoDecimal(valueNumber, 0, 2)
    }
    return
  }

  React.useEffect(() => {
    if (data) {
      setKacyDolarPrice(data.kacyPrice)
    }
  }, [data])

  return (
    <>
      {userVotingPower.length ? (
        <S.OwnAndReceivedTable>
          <S.Table>
            <thead>
              <S.Tr className="headTable">
                <S.Th>Pool</S.Th>
                <S.Th className="delegating">
                  {isDelegationTable ? 'Delegating to' : 'Received from'}
                </S.Th>
                <S.Th>Staked</S.Th>
                <S.Th>
                  {isDelegationTable
                    ? 'Voting Power Allocated'
                    : 'Voting Power Received'}
                </S.Th>
              </S.Tr>
            </thead>
            <tbody>
              {userVotingPower &&
                userVotingPower.map((item, index) => (
                  <S.Tr key={index}>
                    <S.Td className="pool">
                      <Image src={avax} width={32} height={32} alt="" />
                      <div>
                        <p>KACY</p>
                        <span>
                          {handleCheckValuePool(item.pool)} withdraw delay
                        </span>
                      </div>
                    </S.Td>
                    <S.Td className="delegating-to">
                      {isDelegationTable ? (
                        item.to?.id === address ? (
                          ''
                        ) : (
                          <Image src={avax} width={24} height={24} alt="" />
                        )
                      ) : (
                        <Image src={avax} width={24} height={24} alt="" />
                      )}
                      <span>
                        {isDelegationTable
                          ? item.to.id === address
                            ? 'self'
                            : substr(item.to.id)
                          : substr(item.from?.id)}
                      </span>
                    </S.Td>
                    <S.Td className="staked">
                      <p>
                        {BNtoDecimal(item.kacy, 18, 2)}
                        <span> KACY</span>
                      </p>
                      <span>$ {handleKacyInDolar(item.kacy)}</span>
                    </S.Td>
                    <S.Td className="voting-power-allocated">
                      <p>{BNtoDecimal(item.votingPower, 0, 2)}</p>
                      <span>
                        {handleCheckValuePoolPerVP(item.pool)} Voting power per
                        KACY{' '}
                      </span>
                    </S.Td>
                  </S.Tr>
                ))}
            </tbody>
          </S.Table>
        </S.OwnAndReceivedTable>
      ) : (
        <AnyCard
          text={
            isDelegationTable
              ? 'To obtain voting power you need to have KACY staked'
              : 'This address doesn’t seem to have received any voting power'
          }
          button={isDelegationTable}
        />
      )}
    </>
  )
}

export default OwnAndReceivedTable

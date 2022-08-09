import React from 'react'
import Image from 'next/image'
import useSWR from 'swr'
import Big from 'big.js'

import { BNtoDecimal } from '../../../utils/numerals'

import { useAppSelector } from '../../../store/hooks'

import AnyCard from '../../AnyCard'
import ImageProfile from '../ImageProfile'

import avax from '../../../../public/assets/logos/kacy-stake.svg'

import * as S from './styles'

interface IUserVotingPowerProps {
  pool: string;
  votingPower: Big;
  kacy: Big;
  from: {
    id: string
  };
  to: {
    id: string
  };
  image: string;
  name: string;
  isNFT: boolean;
}

interface IOwnAndReceivedTableProps {
  userAddressUrl: string | string[] | undefined;
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
export const OwnAndReceivedTable = ({
  userAddressUrl,
  userVotingPower,
  isDelegationTable
}: IOwnAndReceivedTableProps) => {
  const [kacyDolarPrice, setKacyDolarPrice] = React.useState(0)

  const userWalletAddress = useAppSelector(state => state.userWalletAddress)

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
                        item.to?.id === userAddressUrl ? (
                          ''
                        ) : (
                          <>
                            <ImageProfile
                              address={item.to.id}
                              diameter={24}
                              hasAddress={true}
                              isLink={true}
                              fontSize={14}
                              tab="?tab=governance-data"
                            />
                          </>
                        )
                      ) : (
                        <>
                          <ImageProfile
                            address={item.from.id}
                            diameter={24}
                            hasAddress={true}
                            isLink={true}
                            fontSize={14}
                            tab="?tab=governance-data"
                          />
                        </>
                      )}
                      {isDelegationTable && item.to.id === userAddressUrl && (
                        <span>self</span>
                      )}
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
      ) : userWalletAddress === userAddressUrl ? (
        <AnyCard
          text={
            isDelegationTable
              ? 'This address doesn’t have KACY staked.'
              : 'This address doesn’t seem to have received any voting power'
          }
          button={isDelegationTable}
          link="/farm"
          buttonText="Stake/Farm"
        />
      ) : (
        <AnyCard
          text={
            isDelegationTable
              ? 'This address doesn’t seem to have any KACY staked'
              : 'This address doesn’t seem to have received any voting power'
          }
          button={false}
        />
      )}
    </>
  )
}

export default OwnAndReceivedTable

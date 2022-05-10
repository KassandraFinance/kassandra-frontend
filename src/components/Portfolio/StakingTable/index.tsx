import React from 'react'
import Image from 'next/image'

import * as S from './styles'

interface IStakingTableProps {
  stakes: {
    name: string,
    poolIcons: string[],
    network: string,
    networkIcon: any,
    apy: string,
    tvl: string,
    staked: string,
    stakedUSD: string,
    reward: string,
    rewardUSD: string,
    token: string
  }[];
}

export const StakingTable = ({ stakes }: IStakingTableProps) => {
  const Trs = stakes.map((stake, index: number) => {
    return (
      <S.Tr key={index}>
        <S.Td>
          <S.PoolWrapper>
            <span>{stake.name}</span>
            <S.PoolIconWrapper>
              {stake.poolIcons.map((icon, index: number) => {
                return <Image key={index} src={icon} width={24} height={24} />
              })}
            </S.PoolIconWrapper>
          </S.PoolWrapper>
        </S.Td>
        <S.Td>
          <S.NetworkWrapper>
            <Image src={stake.networkIcon} width={16} height={16} />
            <span>{stake.network}</span>
          </S.NetworkWrapper>
        </S.Td>
        <S.Td>{stake.apy}</S.Td>
        <S.Td>${stake.tvl}</S.Td>
        <S.Td>
          <S.FlexWrapper>
            <div>
              {stake.staked} <span>{stake.token}</span>
            </div>
            <span>${stake.stakedUSD}</span>
          </S.FlexWrapper>
        </S.Td>
        <S.Td>
          <S.FlexWrapper>
            <div>
              {stake.reward} <span>{stake.token}</span>
            </div>
            <span>${stake.rewardUSD}</span>
          </S.FlexWrapper>
        </S.Td>
      </S.Tr>
    )
  })

  return (
    <S.TableWrapper>
      <S.Table>
        <S.THead>
          <S.Tr>
            <S.Th>Pool Name</S.Th>
            <S.Th>Network</S.Th>
            <S.Th>APY</S.Th>
            <S.Th>TVL</S.Th>
            <S.Th>Staked</S.Th>
            <S.Th>Reward</S.Th>
          </S.Tr>
        </S.THead>

        <S.TBody>{Trs}</S.TBody>
      </S.Table>
    </S.TableWrapper>
  )
}

export default StakingTable

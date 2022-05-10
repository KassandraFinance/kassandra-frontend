import React from 'react'
import Image from 'next/image'

import * as S from './styles'

interface IAssetsTableProps {
  assets: {
    name: string,
    symbol: string,
    network: string,
    networkIcon: string,
    fundIcon: string,
    price: string,
    tvl: string,
    monthUp: number,
    dayUp: number,
    balance: string,
    balanceUSD: string
  }[];
}

export const AssetsTable = ({ assets }: IAssetsTableProps) => {
  const Trs = assets.map((asset, index: number) => {
    return (
      <S.Tr key={index}>
        <S.Td>
          <S.ProductWrapper>
            <S.ImageWrapper>
              <Image src={asset.fundIcon} layout="responsive" />
            </S.ImageWrapper>
            <S.FundWrapper>
              <span>{asset.name}</span>
              <span>{asset.symbol}</span>
            </S.FundWrapper>
          </S.ProductWrapper>
        </S.Td>
        <S.Td>
          <S.NetworkWrapper>
            <Image src={asset.networkIcon} width={16} height={16} />
            <span>{asset.network}</span>
          </S.NetworkWrapper>
        </S.Td>
        <S.Td>${asset.price}</S.Td>
        <S.Td>${asset.tvl}</S.Td>
        <S.Td>
          <S.Change change={asset.monthUp}>{asset.monthUp}%</S.Change>
        </S.Td>
        <S.Td>
          <S.Change change={asset.dayUp}>{asset.dayUp}%</S.Change>
        </S.Td>
        <S.Td>
          <S.FlexWrapper>
            <div>
              {asset.balance} <span>{asset.symbol}</span>
            </div>
            <span>${asset.balanceUSD}</span>
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
            <S.Th>Product Name</S.Th>
            <S.Th>Network</S.Th>
            <S.Th>Price</S.Th>
            <S.Th>TVL</S.Th>
            <S.Th>This Month</S.Th>
            <S.Th>24h</S.Th>
            <S.Th>Balance</S.Th>
          </S.Tr>
        </S.THead>

        <S.TBody>{Trs}</S.TBody>
      </S.Table>
    </S.TableWrapper>
  )
}

export default AssetsTable

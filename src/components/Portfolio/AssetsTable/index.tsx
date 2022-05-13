import React from 'react'
import Image from 'next/image'
import useSWR from 'swr'
import { request } from 'graphql-request'

  SUBGRAPH_URL,
import { GET_CHART } from './graphql'
import * as S from './styles'

interface IAssetsTableProps {
export interface IParamsType {
  id: string[];
  day: number;
  month: number;
}
  const [params, setParams] = React.useState<IParamsType>({
    id: [],
    day: Math.trunc(Date.now() / 1000 - 60 * 60 * 24),
    month: Math.trunc(Date.now() / 1000 - 60 * 60 * 24 * 30)
  })

  const { data } = useSWR([GET_CHART, params], (query, params) =>
    request(SUBGRAPH_URL, query, params)
  )

  React.useEffect(() => {
    const arr: string[] = []
    assets.forEach(asset => {
      arr.push(asset.sipAddress)
    })

    setParams(prevState => ({
      ...prevState,
      id: arr
    }))
  }, [assets])
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

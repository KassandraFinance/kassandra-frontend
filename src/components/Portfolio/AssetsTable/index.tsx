import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import BigNumber from 'bn.js'
import Big from 'big.js'
import { request } from 'graphql-request'

import useERC20Contract from '../../../hooks/useERC20Contract'

import {
  SUBGRAPH_URL,
  ProductDetails,
  HeimCRPPOOL
} from '../../../constants/tokenAddresses'

import { GET_CHART } from './graphql'

import { BNtoDecimal } from '../../../utils/numerals'

import * as S from './styles'

interface IAssetsTableProps {
  assets: ProductDetails[];
  profileAddress: string;
  setTotalBalance: React.Dispatch<React.SetStateAction<Big>>;
}

export interface IChangeType {
  [key: string]: string;
}

export interface IPriceType {
  [key: string]: string;
}

export interface IBalanceType {
  [key: string]: BigNumber;
}

export interface IParamsType {
  id: string[];
  day: number;
  month: number;
}

export const AssetsTable = ({
  assets,
  profileAddress,
  setTotalBalance
}: IAssetsTableProps) => {
  const router = useRouter()

  function calcChange(newPrice: number, oldPrice: number) {
    const calc = ((newPrice - oldPrice) / oldPrice) * 100
    return calc ? calc.toFixed(2) : '0'
  }

  const [params, setParams] = React.useState<IParamsType>({
    id: [],
    day: Math.trunc(Date.now() / 1000 - 60 * 60 * 24),
    month: Math.trunc(Date.now() / 1000 - 60 * 60 * 24 * 30)
  })

  const { data } = useSWR([GET_CHART, params], (query, params) =>
    request(SUBGRAPH_URL, query, params)
  )

  const [changeDay, setChangeDay] = React.useState<IChangeType>({})
  const [changeMonth, setChangeMonth] = React.useState<IChangeType>({})
  const [price, setPrice] = React.useState<IPriceType>({})
  const [tvl, setTvl] = React.useState<IPriceType>({})
  const [balance, setBalance] = React.useState<IBalanceType>({})

  const ahypeERC20 = useERC20Contract(HeimCRPPOOL)
  //const tricryptoERC20 = useERC20Contract(HeimCRPPOOL)

  async function getBalance(id: string) {
    if (HeimCRPPOOL === id) {
      const balanceToken = await ahypeERC20.balance(profileAddress)
      setBalance(prevState => ({
        ...prevState,
        [id]: balanceToken
      }))
    }
  }

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

  React.useEffect(() => {
    assets.forEach(asset => {
      getBalance(asset.sipAddress)
    })
  }, [assets])

  React.useEffect(() => {
    if (typeof data === undefined) {
      return
    }

    data?.pools?.forEach(
      (element: {
        now: { close: number }[],
        day: { close: number }[],
        month: { close: number }[],
        id: string,
        price_usd: string,
        total_value_locked_usd: string
      }) => {
        const changeDay = calcChange(
          element.now[0]?.close,
          element.day[0]?.close
        )

        const changeMonth = calcChange(
          element.now[0]?.close,
          element.month[0]?.close
        )

        setChangeDay(prevState => ({
          ...prevState,
          [element.id]: changeDay
        }))

        setChangeMonth(prevState => ({
          ...prevState,
          [element.id]: changeMonth
        }))

        setPrice(prevState => ({
          ...prevState,
          [element.id]: element.price_usd
        }))

        setTvl(prevState => ({
          ...prevState,
          [element.id]: element.total_value_locked_usd
        }))
      }
    )
  }, [data])

  React.useEffect(() => {
    let total = Big(0)
    assets.forEach(asset => {
      if (balance[asset.sipAddress] && price[asset.sipAddress]) {
        if (balance[asset.sipAddress].gt(new BigNumber(0))) {
          total = total.add(
            Big(balance[asset.sipAddress].toString())
              .div(Big(10).pow(18))
              .mul(Big(price[asset.sipAddress]))
          )
        }
      }
    })
    setTotalBalance(total)
  }, [price, assets, balance, setTotalBalance])

  const Trs = assets.map((asset, index: number) => {
    return (
      <S.Tr
        key={index}
        onClick={() => {
          router.push(`/explore/${asset.symbol.toLowerCase()}`)
        }}
      >
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
            <Image src={asset.partners[0].image.src} width={16} height={16} />
            <span>{asset.platform}</span>
          </S.NetworkWrapper>
        </S.Td>
        <S.Td>${parseFloat(price[asset.sipAddress]).toFixed(2)}</S.Td>
        <S.Td>${parseFloat(tvl[asset.sipAddress]).toFixed(2)}</S.Td>
        <S.Td>
          <S.Change change={parseFloat(changeMonth[asset.sipAddress])}>
            {changeMonth[asset.sipAddress]}%
          </S.Change>
        </S.Td>
        <S.Td>
          <S.Change change={parseFloat(changeDay[asset.sipAddress])}>
            {changeDay[asset.sipAddress]}%
          </S.Change>
        </S.Td>
        <S.Td>
          <S.FlexWrapper>
            <div>
              {balance[asset.sipAddress]
                ? BNtoDecimal(
                    Big(balance[asset.sipAddress].toString()).div(
                      Big(10).pow(18)
                    ),
                    2
                  )
                : 0}{' '}
              <span>{asset.symbol}</span>
            </div>
            <span>
              $
              {balance[asset.sipAddress] && price[asset.sipAddress]
                ? BNtoDecimal(
                    Big(balance[asset.sipAddress].toString())
                      .div(Big(10).pow(18))
                      .mul(Big(price[asset.sipAddress])),
                    2
                  )
                : 0}
            </span>
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

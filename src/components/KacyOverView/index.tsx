//create a new component that displays the token price
import React from 'react'
import Big from 'big.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import usePriceLP from '../../hooks/usePriceLP'
import { BNtoDecimal } from '../../utils/numerals'

import * as S from './styles'

import { chains, LPKacyAvax, LPDaiAvax } from '../../constants/tokenAddresses'

interface TokenInfo {
  id: string;
  balance_in_pool: string;
  address: string;
  name: string;
  symbol: string;
  allocation: number;
  price: number;
}

const KacyOverView = () => {
  const [kacyPrice, setKacyPrice] = React.useState<Big>(Big(0))
  const [circulatingSupply, setCirculatingSupply] = React.useState<Big>(Big(0))

  const { chainId } = useSelector((state: RootStateOrAny) => state)
  const { viewgetReserves } = usePriceLP()

  async function getKacyInUsd() {
    const reservesKacyAvax = await viewgetReserves(LPKacyAvax)
    const reservesDaiAvax = await viewgetReserves(LPDaiAvax)

    const avaxInDollar = Big(reservesDaiAvax._reserve1).div(
      Big(reservesDaiAvax._reserve0)
    )
    const kacyInDollar = avaxInDollar.mul(
      Big(reservesKacyAvax._reserve0).div(reservesKacyAvax._reserve1)
    )
    setKacyPrice(kacyInDollar)
  }

  React.useEffect(() => {
    if (chainId === chains.avalanche.chainId) {
      getKacyInUsd()

      const interval = setInterval(() => {
        getKacyInUsd()
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [chainId])

  const date1 = new Date('2022-01-22T18:35:00.000Z')

  React.useEffect(() => {
    if (chainId === chains.avalanche.chainId) {
      const interval = setInterval(() => {
        const secondsSinceInitialDate = (Date.now() - date1.getTime()) / 1000
        if (Date.now() > date1.getTime()) {
          setCirculatingSupply(
            Big((300000 / (24 * 3600 * 90)) * secondsSinceInitialDate + 600000)
          )
        }
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [chainId])

  const marketCap = new Big(circulatingSupply).mul(kacyPrice)

  return (
    <>
      <S.TokenInfoWrapper>
        <S.TitleandIcon>
          <S.Icon src={'/assets/token-distribution-icon.svg'} />
          <h3>$KACY Overview</h3>
        </S.TitleandIcon>
        <S.TokenInfo>
          <S.Values>
            <p>PRICE</p>
            <span>${BNtoDecimal(kacyPrice, 2, 2, 2)}</span>
          </S.Values>
          <S.Values>
            <p>MARKET CAP</p>
            <span>${BNtoDecimal(marketCap, 2, 100, 2)}</span>
          </S.Values>
          <S.Values>
            <p>CIRCULATING SUPPLY</p>
            <span>{BNtoDecimal(circulatingSupply, 2, 100, 2)} KACY</span>
          </S.Values>
          <S.Values>
            <p>TOTAL SUPPLY</p>
            <span>10 000 000</span>
          </S.Values>
        </S.TokenInfo>
      </S.TokenInfoWrapper>
      <S.Link
        href="https://kassandrafoundation.medium.com/kassandra-dao-token-8bc046d55a00"
        target="_blank"
        rel="noopener noreferrer"
      >
        <a>
          Check more info about the $KACY token
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 11.5L11.5 8.5L8.5 5.5"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.5 8.5H11.5"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </S.Link>
    </>
  )
}

export default KacyOverView

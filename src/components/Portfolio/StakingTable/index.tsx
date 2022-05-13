import React from 'react'
import Image from 'next/image'
import BigNumber from 'bn.js'
import Big from 'big.js'
import useSWR from 'swr'
import { request } from 'graphql-request'

import {
  Staking,
  LPKacyAvaxPNG,
  LPDaiAvax,
  LPKacyAvaxJOE,
  HeimCRPPOOL,
  SUBGRAPH_URL
} from '../../../constants/tokenAddresses'
import useStakingContract from '../../../hooks/useStakingContract'
import usePriceLP from '../../../hooks/usePriceLP'
import useERC20Contract from '../../../hooks/useERC20Contract'

import { BNtoDecimal } from '../../../utils/numerals'

import { GET_INFO_AHYPE } from './graphql'

import * as S from './styles'

interface IStakingTableProps {
  stakes: {
    pid: number,
    symbol: string,
    poolName: string,
    icons: string[],
    network: string,
    networkIcon: string,
    amount: string,
    pendingRewards: string,
    rewardPerTokenPaid: string
  }[];

  walletAddress: string;
  setTotalStaked: React.Dispatch<React.SetStateAction<Big>>;
}

export interface IPriceToken {
  [key: string]: Big;
}

export interface IAprType {
  [key: string]: BigNumber;
}

export interface IkacyEarnedType {
  [key: string]: BigNumber;
}

export interface ItvlType {
  [key: string]: string;
}

const StakingTable = ({
  stakes,
  walletAddress,
  setTotalStaked
}: IStakingTableProps) => {
  const { poolInfo, earned } = useStakingContract(Staking)
  const { viewgetReserves } = usePriceLP()
  const lpToken = useERC20Contract(LPKacyAvaxPNG)
  const lpJoeToken = useERC20Contract(LPKacyAvaxJOE)

  const [apr, setApr] = React.useState<IAprType>({})
  const [trs, setTrs] = React.useState<JSX.Element[]>()
  const [kacyEarned, setKacyEarned] = React.useState<IkacyEarnedType>({})
  const [tvl, setTvl] = React.useState<ItvlType>({})
  const [priceToken, setPriceToken] = React.useState<IPriceToken>({
    LP: Big(-1),
    'LP-JOE': Big(-1),
    KACY: Big(-1),
    aHYPE: Big(-1)
  })

  const { data } = useSWR(
    [GET_INFO_AHYPE, HeimCRPPOOL],
    (query, id) => request(SUBGRAPH_URL, query, { id }),
    {
      refreshInterval: 10000
    }
  )

  React.useEffect(() => {
    let total = Big(0)
    stakes.forEach(stake => {
      if (priceToken[stake.symbol].gt('0')) {
        total = total.add(
          Big(stake.amount).mul(priceToken[stake.symbol]).div(Big(10).pow(18))
        )
      }
    })
    setTotalStaked(total)
  }, [priceToken, stakes, setTotalStaked])

  async function handleLPtoUSD() {
    const reservesKacyAvax = await viewgetReserves(LPKacyAvaxPNG)
    const reservesKacyAvaxJoe = await viewgetReserves(LPKacyAvaxJOE)
    const reservesDaiAvax = await viewgetReserves(LPDaiAvax)

    let kacyReserve = reservesKacyAvax._reserve1
    let avaxKacyReserve = reservesKacyAvax._reserve0

    const avaxKacyReserveJoe = reservesKacyAvaxJoe._reserve0

    let DaiReserve = reservesDaiAvax._reserve1
    let AvaxDaiReserve = reservesDaiAvax._reserve0

    if (process.env.NEXT_PUBLIC_MASTER !== '1') {
      kacyReserve = reservesKacyAvax._reserve0
      avaxKacyReserve = reservesKacyAvax._reserve1
      DaiReserve = reservesDaiAvax._reserve0
      AvaxDaiReserve = reservesDaiAvax._reserve1
    }

    const avaxInDollar = Big(DaiReserve).div(Big(AvaxDaiReserve))

    const kacyInDollar = avaxInDollar.mul(Big(avaxKacyReserve).div(kacyReserve))

    const allAVAXDollar = Big(avaxKacyReserve).mul(avaxInDollar)
    const allAVAXDollarJoe = Big(avaxKacyReserveJoe).mul(avaxInDollar)

    const supplyLPToken = await lpToken.totalSupply()
    const supplyLPJoeToken = await lpJoeToken.totalSupply()

    if (supplyLPToken.toString() !== '0') {
      const LP = allAVAXDollar.mul(2).div(Big(supplyLPToken.toString()))

      setPriceToken(prevState => ({
        ...prevState,
        LP
      }))
    }
    if (supplyLPJoeToken.toString() !== '0') {
      // eslint-disable-next-line prettier/prettier
      const priceLPJoe = allAVAXDollarJoe
        .mul(2)
        .div(Big(supplyLPJoeToken.toString()))
      setPriceToken(prevState => ({
        ...prevState,
        'LP-JOE': priceLPJoe
      }))
    }
    if (data) {
      setPriceToken(prevState => ({
        ...prevState,
        aHYPE: Big(data?.pool.price_usd || -1)
      }))
    }
    setPriceToken(prevState => ({
      ...prevState,
      KACY: kacyInDollar
    }))
  }

  React.useEffect(() => {
    handleLPtoUSD()
  }, [data])

  async function getApr(pid: number, fund: string) {
    const poolInfoResponse = await poolInfo(pid)

    if (!poolInfoResponse.withdrawDelay) {
      return
    }

    const kacyRewards = new BigNumber(poolInfoResponse.rewardRate).mul(
      new BigNumber(86400)
    )

    if (priceToken[fund].gt('0')) {
      const aprResponse =
        poolInfoResponse.depositedAmount.toString() !== '0' &&
        priceToken.KACY.gt('-1') &&
        priceToken[fund].gt('-1')
          ? new BigNumber(
              Big(kacyRewards.toString())
                .mul('365')
                .mul('100')
                .mul(priceToken.KACY)
                .div(
                  priceToken[fund].mul(
                    Big(poolInfoResponse.depositedAmount.toString())
                  )
                )
                .toFixed(0)
            )
          : new BigNumber(-1)

      setApr(prevState => ({
        ...prevState,
        [fund]: aprResponse
      }))
    }
  }

  React.useEffect(() => {
    if (stakes[0] && stakes[0].amount) {
      stakes.forEach(stake => {
        getApr(stake.pid, stake.symbol)
      })
    }
  }, [stakes, priceToken])

  React.useEffect(() => {
    if (stakes[0] && stakes[0].amount) {
      stakes.forEach(async stake => {
        const poolInfoResponse = await poolInfo(stake.pid)

        setTvl(prevState => ({
          ...prevState,
          [stake.symbol]: poolInfoResponse.depositedAmount
        }))
      })
    }
  }, [stakes, poolInfo])

  React.useEffect(() => {
    if (stakes[0] && stakes[0].amount) {
      stakes.forEach(async stake => {
        const earnedResponse = await earned(stake.pid, walletAddress)

        setKacyEarned(prevState => ({
          ...prevState,
          [stake.symbol]: earnedResponse
        }))
      })
    }
  }, [stakes, earned, walletAddress])

  React.useEffect(() => {
    let arr
    if (stakes[0] && stakes[0].amount) {
      arr = stakes.map((stake, index: number) => {
        return (
          <S.Tr key={index}>
            <S.Td>
              <S.PoolWrapper>
                <span>${stake?.poolName}</span>
                <S.PoolIconWrapper>
                  {stake.icons.map((icon, index: number) => {
                    return (
                      <Image key={index} src={icon} width={24} height={24} />
                    )
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
            <S.Td>
              {apr[stake.symbol] ? BNtoDecimal(apr[stake.symbol], 0) : 0}%
            </S.Td>
            <S.Td>
              $
              {tvl[stake.symbol]
                ? BNtoDecimal(
                    Big(tvl[stake.symbol].toString())
                      .mul(priceToken[stake.symbol])
                      .div(Big(10).pow(18)),
                    6,
                    2,
                    2
                  )
                : 0}
            </S.Td>
            <S.Td>
              <S.FlexWrapper>
                <div>
                  {BNtoDecimal(Big(stake.amount).div(Big(10).pow(18)), 18)}
                  <span> {stake.symbol}</span>
                </div>
                <span>
                  $
                  {BNtoDecimal(
                    Big(stake.amount)
                      .mul(priceToken[stake.symbol])
                      .div(Big(10).pow(18)),
                    6,
                    2,
                    2
                  )}
                </span>
              </S.FlexWrapper>
            </S.Td>
            <S.Td>
              <S.FlexWrapper>
                <div>
                  {kacyEarned[stake.symbol]
                    ? BNtoDecimal(kacyEarned[stake.symbol], 18, 2)
                    : 0}{' '}
                  <span>{stake.symbol}</span>
                </div>
                <span>
                  $
                  {kacyEarned[stake.symbol]
                    ? BNtoDecimal(
                        Big(kacyEarned[stake.symbol].toString())
                          .mul(priceToken.KACY)
                          .div(Big(10).pow(18)),
                        6,
                        2,
                        2
                      )
                    : 0}
                </span>
              </S.FlexWrapper>
            </S.Td>
          </S.Tr>
        )
      })
    }

    setTrs(arr)
  }, [stakes, apr, kacyEarned, priceToken, tvl])

  return (
    <S.TableWrapper>
      <S.Table>
        <S.THead>
          <S.Tr>
            <S.Th>Pool Name</S.Th>
            <S.Th>Network</S.Th>
            <S.Th>APR</S.Th>
            <S.Th>TVL</S.Th>
            <S.Th>Staked</S.Th>
            <S.Th>Reward</S.Th>
          </S.Tr>
        </S.THead>

        <S.TBody>{trs}</S.TBody>
      </S.Table>
    </S.TableWrapper>
  )
}

export default StakingTable

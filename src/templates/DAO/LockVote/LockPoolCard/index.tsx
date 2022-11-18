import React from 'react'
import Image from 'next/image'
import request from 'graphql-request'
import useSWR from 'swr'
import Big from 'big.js'
import BigNumber from 'bn.js'
import { AbiItem } from "web3-utils"
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import web3 from '../../../../utils/web3'
import { BNtoDecimal } from '../../../../utils/numerals'

import StakingABI from "../../../../constants/abi/Staking.json"
import { LP_KACY_AVAX_PNG } from '../../../../constants/pools'
import {
  LPDaiAvax,
  Staking,
  SUBGRAPH_URL
} from '../../../../constants/tokenAddresses'

import usePriceLP from '../../../../hooks/usePriceLP'

import { GET_INFO_POOL } from '../graphql'

import * as S from './styles'

interface ILockPoolCardProps {
  pid: number;
  address?: string;
}

interface IInfoStaked {
  votingMultiplier: string;
  withdrawDelay: number;
  hasExpired: boolean;
  apr: BigNumber;
}


const LockPoolCard = ({
  pid,
  address
}: ILockPoolCardProps) => {
  const [infoStaked, setInfoStaked] = React.useState<IInfoStaked>({
    votingMultiplier: '',
    withdrawDelay: 0,
    hasExpired: false,
    apr: new BigNumber(-1)
  })
  const [kacyPrice, setKacyPrice] = React.useState<Big>(Big(-1))
  const [poolPrice, setPoolPrice] = React.useState<Big>(Big(-1))

  const { getPriceKacyAndLP } = usePriceLP()

  web3.setProvider('https://api.avax.network/ext/bc/C/rpc')

  // eslint-disable-next-line prettier/prettier
  const stakingContract = new web3.eth.Contract((StakingABI as unknown) as AbiItem, Staking)

  const { data } = useSWR(
    [GET_INFO_POOL, address], (query, id) => request(SUBGRAPH_URL, query, { id }),
    {
      refreshInterval: 10000
    }
  )

  async function getLiquidityPoolPriceInDollar() {
    const { kacyPriceInDollar } = await getPriceKacyAndLP(
      LP_KACY_AVAX_PNG,
      LPDaiAvax,
      false
    )

    setKacyPrice(kacyPriceInDollar)
    setPoolPrice(kacyPriceInDollar)
  }

  const getAPR = React.useCallback(async () => {
    const poolInfoResponse = await stakingContract.methods.poolInfo(pid).call()
    if (!poolInfoResponse.withdrawDelay) {
      return
    }

    const kacyRewards = new BigNumber(poolInfoResponse.rewardRate).mul(
      new BigNumber(86400)
    )

    const apr =
      poolInfoResponse.depositedAmount.toString() !== '0' &&
      kacyPrice.gt('-1') &&
      (poolPrice || Big(0)).gt('-1')
        ? new BigNumber(
            Big(kacyRewards.toString())
              .mul('365')
              .mul('100')
              .mul(kacyPrice)
              .div(
                (poolPrice || Big(1)).mul(
                  Big(poolInfoResponse.depositedAmount.toString())
                )
              )
              .toFixed(0)
          )
        : new BigNumber(-1)

    const timestampNow = new Date().getTime()
    const periodFinish: any = new Date(
      Number(poolInfoResponse.periodFinish) * 1000
    )

    setInfoStaked({
      votingMultiplier: poolInfoResponse.votingMultiplier,
      withdrawDelay: Number(poolInfoResponse.withdrawDelay),
      hasExpired: periodFinish < timestampNow,
      apr
    })
  }, [poolPrice, kacyPrice, data])

  React.useEffect(() => {
    getLiquidityPoolPriceInDollar()
    getAPR()
  }, [pid, data])

  return (
    <>
      <S.LockPool>
        <div className="logo">
          <Image src="/assets/logos/kacy-logo-rounded.svg" layout="fill" />
        </div>
        <S.LockPoolInfo>
          <S.LockPoolTop>
            <S.titleLockPool>
              {pid === 2
                ? 'No Lock Pool'
                : infoStaked.withdrawDelay / 60 / 60 / 24 < 1
                ? infoStaked.withdrawDelay / 60 + '-Day Lock Pool'
                : infoStaked.withdrawDelay / 60 / 60 / 24 + '-Day Lock Pool'}
            </S.titleLockPool>
            <S.Info>
              <strong>
                {' '}
                {infoStaked.apr.lt(new BigNumber(0))
                  ? '...'
                  : infoStaked.hasExpired
                  ? 0
                  : BNtoDecimal(infoStaked.apr, 0)}
                %
              </strong>
              <span>
                APR{' '}
                <Tippy content="The Annual Percentage Rate is the yearly rate earned not taking compounding into account">
                  <S.TooltipAPR tabIndex={0}>
                    <Image
                      src="/assets/utilities/info-blue.svg"
                      alt="Explanation"
                      width={19}
                      height={19}
                    />
                  </S.TooltipAPR>
                </Tippy>
              </span>
            </S.Info>
          </S.LockPoolTop>
          <S.Hr />
          <S.LockPoolBottom>
            <span>
              VOTING POWER{' '}
              <strong>
                {infoStaked.votingMultiplier || '...'}
              </strong>
              / $KACY
            </span>
            <div>
              <span>
                WITHDRAW DELAY
                <strong>
                  {infoStaked.withdrawDelay === 0
                    ? '0'
                    : infoStaked.withdrawDelay / 60 / 60 / 24 < 1
                    ? infoStaked.withdrawDelay / 60
                    : infoStaked.withdrawDelay / 60 / 60 / 24}
                </strong>
              </span>
              <span>
                {infoStaked.withdrawDelay / 60 / 60 / 24 < 1 ? ' day' : ' days'}
              </span>
            </div>
          </S.LockPoolBottom>
        </S.LockPoolInfo>
      </S.LockPool>

      {/* separação do LockPool desktop e mobile */}

      <S.LockPoolMobileContainer>
        <S.LockPoolMobile>
          <S.HeaderMobile>
            <S.titleLockPool>
            {pid === 2
              ? 'No Lock Pool'
              : infoStaked.withdrawDelay / 60 / 60 / 24 < 1
              ? infoStaked.withdrawDelay / 60 + '-Day Lock Pool'
              : infoStaked.withdrawDelay / 60 / 60 / 24 + '-Day Lock Pool'}
            </S.titleLockPool>
            <Image
              src="/assets/logos/kacy-logo-rounded.svg"
              width={48}
              height={48}
            />
          </S.HeaderMobile>
          <S.Hr />
          <S.Items>
            <S.Item>
              <span>
                APR
                <Image
                  src="/assets/utilities/info-blue.svg"
                  width={18}
                  height={18}
                />
              </span>
              <strong>
                {infoStaked.apr.lt(new BigNumber(0))
                  ? '...'
                  : infoStaked.hasExpired
                  ? 0
                  : BNtoDecimal(infoStaked.apr, 0)}%
                </strong>
            </S.Item>
            <S.Item>
              <span>VOTING POWER</span>
              <span>
                <strong>{infoStaked.votingMultiplier || '...'}</strong> / $KACY
              </span>
            </S.Item>
            <S.Item>
              <span>WITHDRAW DELAY</span>
              <span>
                <strong>
                  {infoStaked.withdrawDelay === 0
                    ? '0'
                    : infoStaked.withdrawDelay / 60 / 60 / 24 < 1
                    ? infoStaked.withdrawDelay / 60
                    : infoStaked.withdrawDelay / 60 / 60 / 24}
                  </strong>
                <Image
                  src="/assets/utilities/warning-gray.svg"
                  width={18}
                  height={18}
                />
              </span>
            </S.Item>
          </S.Items>
        </S.LockPoolMobile>
      </S.LockPoolMobileContainer>
    </>
  )
}

export default LockPoolCard

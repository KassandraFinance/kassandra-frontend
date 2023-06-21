import React from 'react'
import Image from 'next/image'
import { JsonRpcProvider, Contract } from 'ethers'
import Big from 'big.js'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { BNtoDecimal } from '../../../../utils/numerals'

import usePriceLP from '../../../../hooks/usePriceLP'
import StakingABI from '../../../../constants/abi/Staking.json'
import { LP_KACY_AVAX_PNG } from '../../../../constants/pools'
import {
  LPDaiAvax,
  Staking,
  networks
} from '../../../../constants/tokenAddresses'

import * as S from './styles'

interface ILockPoolCardProps {
  pid: number
  address?: string
}

interface IInfoStaked {
  votingMultiplier: string
  withdrawDelay: number
  hasExpired: boolean
  apr: Big
}

const LockPoolCard = ({ pid }: ILockPoolCardProps) => {
  const [infoStaked, setInfoStaked] = React.useState<IInfoStaked>({
    votingMultiplier: '',
    withdrawDelay: 0,
    hasExpired: false,
    apr: Big(-1)
  })
  const [kacyPrice, setKacyPrice] = React.useState<Big>(Big(-1))
  const [poolPrice, setPoolPrice] = React.useState<Big>(Big(-1))

  const { getPriceKacyAndLP } = usePriceLP()

  const provider = new JsonRpcProvider(networks[43114].rpc)
  const stakingContract = new Contract(Staking, StakingABI, provider)

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
    const poolInfoResponse = await stakingContract.poolInfo(pid)
    if (Big(poolInfoResponse.withdrawDelay?.toString()).lt(0)) {
      return
    }

    const kacyRewards = Big(poolInfoResponse.rewardRate.toString()).mul(
      Big(86400)
    )

    const apr = Big(poolInfoResponse.depositedAmount.toString()).gt(0)
      ? Big(kacyRewards.toString())
          .mul('365')
          .mul('100')
          .mul(kacyPrice)
          .div(poolPrice.mul(Big(poolInfoResponse.depositedAmount.toString())))
      : Big(-1)

    const timestampNow = new Date().getTime()
    const periodFinish: any = new Date(
      Number(poolInfoResponse.periodFinish) * 1000
    )

    setInfoStaked({
      votingMultiplier: poolInfoResponse.votingMultiplier.toString(),
      withdrawDelay: Number(poolInfoResponse.withdrawDelay),
      hasExpired: periodFinish < timestampNow,
      apr
    })
  }, [poolPrice, kacyPrice])

  React.useEffect(() => {
    getLiquidityPoolPriceInDollar()
  }, [])

  React.useEffect(() => {
    if (kacyPrice.lt(0)) {
      return
    }

    if (poolPrice.lt(0)) {
      return
    }

    getAPR()
  }, [pid, poolPrice, kacyPrice])

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
                {infoStaked.apr.lt(Big(0))
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
              <strong>{infoStaked.votingMultiplier || '...'}</strong>/ $KACY
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
                {infoStaked.apr.lt(Big(0))
                  ? '...'
                  : infoStaked.hasExpired
                  ? 0
                  : BNtoDecimal(infoStaked.apr, 0)}
                %
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

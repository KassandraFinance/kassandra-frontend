import React from 'react'
import Image from 'next/image'
import { JsonRpcProvider, Contract } from 'ethers'
import Big from 'big.js'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import StakingABI from '../../../../constants/abi/Staking.json'
import { Staking, networks } from '../../../../constants/tokenAddresses'

import { handleCalcAPR } from '@/utils/calculateApr'
import { BNtoDecimal } from '../../../../utils/numerals'

import * as S from './styles'

interface IInfoStaked {
  votingMultiplier: string
  withdrawDelay: number
  hasExpired: boolean
  apr: Big
}
interface IkacyDataProps {
  tokenPrice: number
  marketCap: number
  supply: number
  tokenPercentage: number
}

interface ILockPoolCardProps {
  pid: number
  address?: string
  kacyData: IkacyDataProps
}

Big.RM = 0

const LockPoolCard = ({ pid, kacyData }: ILockPoolCardProps) => {
  const [infoStaked, setInfoStaked] = React.useState<IInfoStaked>({
    votingMultiplier: '',
    withdrawDelay: 0,
    hasExpired: false,
    apr: Big(-1)
  })

  const provider = new JsonRpcProvider(networks[43114].rpc)
  const stakingContract = new Contract(Staking, StakingABI, provider)

  const getAPR = React.useCallback(async () => {
    if (!kacyData) return

    const poolInfoRes = await stakingContract.poolInfo(pid)
    if (Big(poolInfoRes.withdrawDelay?.toString()).lt(0)) {
      return
    }

    const totalStaked = Big(poolInfoRes.depositedAmount.toString())
    const kacyRewards = Big(poolInfoRes.rewardRate.toString()).mul(Big(86400))

    const apr = handleCalcAPR({
      kacyPrice: Big(kacyData?.tokenPrice ?? 0),
      poolPrice: Big(kacyData?.tokenPrice ?? 0),
      rewardRate: kacyRewards,
      totalDeposit: totalStaked
    })

    const timestampNow = new Date().getTime()
    const periodFinish = new Date(
      Number(poolInfoRes.periodFinish) * 1000
    ).getTime()

    setInfoStaked({
      apr,
      hasExpired: periodFinish < timestampNow,
      withdrawDelay: Number(poolInfoRes.withdrawDelay),
      votingMultiplier: poolInfoRes.votingMultiplier.toString()
    })
  }, [kacyData])

  React.useEffect(() => {
    getAPR()
  }, [pid, kacyData])

  return (
    <>
      <S.LockPool>
        <div className="logo">
          <Image
            src="/assets/logos/kacy-logo-rounded.svg"
            alt="Kacy logo rounded"
            layout="fill"
          />
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

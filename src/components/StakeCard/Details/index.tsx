/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import BigNumber from 'bn.js'
import Big from 'big.js'

import { chains, Staking } from '../../../constants/tokenAddresses'

import useStakingContract from '../../../hooks/useStakingContract'
import useMatomoEcommerce from '../../../hooks/useMatomoEcommerce'

import { BNtoDecimal } from '../../../utils/numerals'
import { registerToken } from '../../../utils/registerToken'

import ExternalLink from '../../ExternalLink'

import * as S from './styles'

interface IInfoStakeStaticProps {
  votingMultiplier: string;
  startDate: string;
  endDate: string;
  kacyRewards: BigNumber;
  withdrawDelay: any;
}

interface IDetailsProps {
  pid: number;
  hasExpired: boolean;
  infoStakeStatic: IInfoStakeStaticProps;
  stakingToken: string;
  decimals: string;
  symbol: string;
  poolPrice: Big;
  kacyPrice: Big;
  link: string;
}

const Details = ({
  pid,
  hasExpired,
  infoStakeStatic,
  stakingToken,
  decimals,
  symbol,
  poolPrice,
  kacyPrice,
  link
}: IDetailsProps) => {
  const [depositedAmount, setDepositedAmount] = React.useState<BigNumber>(
    new BigNumber(-1)
  )
  const { trackEventFunction } = useMatomoEcommerce()
  const { poolInfo } = useStakingContract(Staking)

  React.useEffect(() => {
    let interval: any
    ;(async () => {
      const poolInfoResponse = await poolInfo(pid)

      interval = setInterval(async () => {
        setDepositedAmount(new BigNumber(poolInfoResponse.depositedAmount))
      }, 6000)
      setDepositedAmount(new BigNumber(poolInfoResponse.depositedAmount))
    })()

    return () => clearInterval(interval)
  }, [])

  return (
    <S.Details>
      <S.ValuesKacy>
        <span>Total staked</span>
        <S.KacyUSD>
          <span>
            {depositedAmount.lt(new BigNumber('0'))
              ? '...'
              : BNtoDecimal(depositedAmount, 18)}{' '}
            {symbol}
          </span>
          <span className="usd">
            &#8776;{' '}
            {depositedAmount.lt(new BigNumber('0')) || poolPrice.lt(0)
              ? '...'
              : BNtoDecimal(
                  Big(`0${depositedAmount}`)
                    .mul(poolPrice)
                    .div(Big(10).pow(18)),
                  6,
                  2,
                  2
                )}{' '}
            USD
          </span>
        </S.KacyUSD>
      </S.ValuesKacy>
      <S.ValuesKacy>
        <span>Pool Reward</span>
        <S.KacyUSD>
          <span>
            {infoStakeStatic.kacyRewards.lt(new BigNumber(0))
              ? '...'
              : hasExpired
              ? '0'
              : BNtoDecimal(infoStakeStatic.kacyRewards, 18, 2, 2)}
            /day
          </span>
          <span className="usd">
            &#8776;{' '}
            {infoStakeStatic.kacyRewards.lt(new BigNumber(0)) || poolPrice.lt(0)
              ? '...'
              : hasExpired
              ? '0'
              : BNtoDecimal(
                  Big(infoStakeStatic.kacyRewards.toString())
                    .mul(kacyPrice)
                    .div(Big(10).pow(18)),
                  6,
                  2,
                  2
                )}{' '}
            USD
          </span>
        </S.KacyUSD>
      </S.ValuesKacy>
      <S.Info>
        <span>Start date</span>
        <span>{infoStakeStatic.startDate}</span>
      </S.Info>
      <S.Info>
        <span>Rewards Update</span>
        <span>{infoStakeStatic.endDate}</span>
      </S.Info>
      <S.Info>
        <ExternalLink
          hrefLink={
            process.env.NEXT_PUBLIC_MASTER === '1'
              ? `${chains.avalanche.blockExplorerUrls[0]}address/${stakingToken}`
              : `${chains.fuji.blockExplorerUrls[0]}address/${stakingToken}`
          }
          text="See contract"
        />
        <ExternalLink hrefLink={link} text={`Get ${symbol}`} />
      </S.Info>
      <S.AddToken
        type="button"
        onClick={() => {
          registerToken(
            stakingToken,
            symbol.toLocaleUpperCase(),
            Number(decimals)
          )
          trackEventFunction(
            'click-add-metamask',
            `add-${symbol}`,
            'stake-details'
          )
        }}
      >
        Add to Metamask <img src="/assets/logos/metamask.svg" alt="" />
      </S.AddToken>
    </S.Details>
  )
}

export default Details

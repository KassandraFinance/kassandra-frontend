/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import BigNumber from 'bn.js'
import Big from 'big.js'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import { Kacy, chains, Staking } from '../../../constants/tokenAddresses'

import useStakingContract from '../../../hooks/useStakingContract'

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
}

const Details = ({
  pid,
  hasExpired,
  infoStakeStatic,
  stakingToken,
  decimals,
  symbol,
  poolPrice,
  kacyPrice
}: IDetailsProps) => {
  const [depositedAmount, setDepositedAmount] = React.useState<BigNumber>(
    new BigNumber(-1)
  )
  const { trackEvent } = useMatomo()
  const { poolInfo } = useStakingContract(Staking)

  function matomoEvent(action: string, name: string) {
    trackEvent({
      category: 'stake-details',
      action,
      name
    })
  }

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
        {symbol === 'LP-PNG' && (
          <ExternalLink
            hrefLink={`https://app.pangolin.exchange/#/add/AVAX/${Kacy}`}
            text="Get LP-PNG"
          />
        )}
        {symbol === 'LP-JOE' && (
          <ExternalLink
            hrefLink={`https://traderjoexyz.com/pool/AVAX/${Kacy}`}
            text="Get LP-JOE"
          />
        )}
        {symbol === 'KACY' && (
          <ExternalLink
            hrefLink={`https://app.pangolin.exchange/#/swap?outputCurrency=${Kacy}`}
            text="Buy $KACY"
          />
        )}
        {symbol === 'aHYPE' && (
          <ExternalLink hrefNext="/explore/ahype" text="Buy $aHYPE" />
        )}
        {symbol === 'K3C' && (
          <ExternalLink hrefNext="/explore/k3c" text="Buy $K3C" />
        )}
      </S.Info>
      <S.AddToken
        type="button"
        onClick={() => {
          registerToken(
            stakingToken,
            symbol.toLocaleUpperCase(),
            Number(decimals)
          )
          matomoEvent('click-add-metamask', `add-${symbol}`)
        }}
      >
        Add to Metamask <img src="/assets/logos/metamask.svg" alt="" />
      </S.AddToken>
    </S.Details>
  )
}

export default Details

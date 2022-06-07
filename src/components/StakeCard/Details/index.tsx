/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Big from 'big.js'
import BigNumber from 'bn.js'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import { Kacy, chains } from '../../../constants/tokenAddresses'

import { BNtoDecimal } from '../../../utils/numerals'

import * as S from './styles'
import { registerToken } from '../../../utils/registerToken'
import { IPriceLPToken } from '..'
import ExternalLink from '../../ExternalLink'

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
  poolInfo: (pid: number) => Promise<any>;
  infoStakeStatic: IInfoStakeStaticProps;
  stakingToken: string;
  decimals: string;
  symbol: string;
  tokenPrice: IPriceLPToken;
}

const Details = ({
  pid,
  hasExpired,
  poolInfo,
  infoStakeStatic,
  stakingToken,
  decimals,
  symbol,
  tokenPrice
}: IDetailsProps) => {
  // eslint-disable-next-line prettier/prettier
  const [depositedAmount, setDepositedAmount] = React.useState<BigNumber>(new BigNumber(-1))
  const { trackEvent } = useMatomo()

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

  let price

  switch (pid) {
    case 7:
      price = tokenPrice.priceLPJoe
      break
    case 6:
      price = tokenPrice.aHYPE
      break
    case 5:
      price = tokenPrice.priceLPPng
      break
    default:
      price = tokenPrice.kacy
  }

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
            {depositedAmount.lt(new BigNumber('0')) || price.lt(0)
              ? '...'
              : BNtoDecimal(
                  Big(`0${depositedAmount}`).mul(price).div(Big(10).pow(18)),
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
            {infoStakeStatic.kacyRewards.lt(new BigNumber(0)) || price.lt(0)
              ? '...'
              : hasExpired
              ? '0'
              : BNtoDecimal(
                  Big(infoStakeStatic.kacyRewards.toString())
                    .mul(tokenPrice.kacy)
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
          <ExternalLink hrefNext="/products/ahype" text="Buy $aHYPE" />
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

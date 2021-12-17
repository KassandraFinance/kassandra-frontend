/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Link from 'next/link'
import Big from 'big.js'
import BigNumber from 'bn.js'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import { BNtoDecimal } from '../../utils/numerals'

import * as S from './styles'
import { registerToken } from '../../utils/registerToken'
import { IPriceLPToken } from '../StakeCard'

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
  priceLPToken: IPriceLPToken;
}

const staked: any = {
  0: 'KACY',
  1: 'KACY',
  2: 'KACY',
  3: 'aHYPE',
  4: 'KEU'
}

const Details = ({
  pid,
  hasExpired,
  poolInfo,
  infoStakeStatic,
  stakingToken,
  decimals,
  symbol,
  priceLPToken
}: IDetailsProps) => {
  const [depositedAmount, setDepositedAmount] = React.useState<string>('')
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
        setDepositedAmount(poolInfoResponse.depositedAmount)
      }, 6000)
      setDepositedAmount(poolInfoResponse.depositedAmount)
    })()

    return () => clearInterval(interval)
  }, [])

  return (
    <S.Details>
      <S.ValuesKacy>
        <span>Total staked</span>
        <S.KacyUSD>
          <span>
            {BNtoDecimal(new BigNumber(depositedAmount), new BigNumber(18), 2)}{' '}
            {staked[pid]}
          </span>
          {pid === 4 ? (
            <span className="usd">
              &#8776;{' '}
              {BNtoDecimal(
                Big(`0${depositedAmount}`).mul(priceLPToken.priceLP),
                Big(18),
                2
              )}{' '}
              USD
            </span>
          ) : (
            <span className="usd">
              &#8776;{' '}
              {BNtoDecimal(Big(`0${depositedAmount}`).mul(1.44), Big(18), 2)}{' '}
              USD
            </span>
          )}
        </S.KacyUSD>
      </S.ValuesKacy>
      <S.ValuesKacy>
        <span>Pool Reward</span>
        <S.KacyUSD>
          <span>
            {hasExpired
              ? '0'
              : BNtoDecimal(infoStakeStatic.kacyRewards, new BigNumber(18), 2)}
            /day
          </span>
          <span className="usd">
            &#8776;{' '}
            {hasExpired
              ? '0'
              : BNtoDecimal(
                  infoStakeStatic.kacyRewards.mul(new BigNumber(2)),
                  new BigNumber(18),
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
        <span>End date</span>
        <span>{infoStakeStatic.endDate}</span>
      </S.Info>
      <S.Info>
        <S.Link>
          <a
            href={`https://ropsten.etherscan.io/address/${stakingToken}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            See contract
          </a>
          <img src="assets/GoToSite.svg" alt="" />
        </S.Link>
        <S.Link>
          <a
            href="https://app.uniswap.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy $Kacy
          </a>
          <img src="assets/iconBuyKacy.svg" alt="" />
        </S.Link>
      </S.Info>
      <S.Info>
        <S.Link>
          <Link href="/">Project site</Link>
          <img src="assets/GoToSite.svg" alt="" />
        </S.Link>
        {/* <span>Add to Metamask</span> */}
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
          <img src="assets/metaMaskIcon.svg" alt="" /> Add to Metamask
        </S.AddToken>
      </S.Info>
    </S.Details>
  )
}

export default Details

import React from 'react'
import Link from 'next/link'
import BigNumber from 'bn.js'

import { BNtoDecimal } from '../../utils/numerals'

import * as S from './styles'

interface IInfoStakeStaticProps {
  votingMultiplier: string;
  startDate: string;
  endDate: string;
  kacyRewards: BigNumber;
  withdrawDelay: any;
}

interface IDetailsProps {
  pid: number
  hasExpired: boolean
  poolInfo: (pid: number) => Promise<any>
  infoStakeStatic: IInfoStakeStaticProps
  stakingToken: string
}

const Details = ({ 
  pid, 
  hasExpired, 
  poolInfo, 
  infoStakeStatic,
  stakingToken
}: IDetailsProps) => {
  const [depositedAmount, setDepositedAmount] = React.useState<string>('')

  React.useEffect(() => {
    let interval: any

    (async () => {
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
            {BNtoDecimal(new BigNumber(depositedAmount), new BigNumber(18), 2)} KACY
          </span>
          <span className="usd">&#8776; {BNtoDecimal(new BigNumber(depositedAmount).mul(new BigNumber(2)), new BigNumber(18), 2)} USD</span>
        </S.KacyUSD>
      </S.ValuesKacy>
      <S.ValuesKacy>
        <span>Pool Reward</span>
        <S.KacyUSD>
          <span>
            {hasExpired ? "0" : BNtoDecimal(infoStakeStatic.kacyRewards, new BigNumber(18), 2)}/day
          </span>
          <span className="usd">&#8776; {hasExpired ? "0" : BNtoDecimal(infoStakeStatic.kacyRewards.mul(new BigNumber(2)), new BigNumber(18), 2)} USD</span>
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
          <a href={`https://ropsten.etherscan.io/address/${stakingToken}`} target="_blank" rel="noopener noreferrer">
            See contract
          </a>
          <img src="assets/GoToSite.svg" alt="" />   
        </S.Link>
        <S.Link>
          <a href="https://app.uniswap.org/" target="_blank" rel="noopener noreferrer">
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

      </S.Info>
    </S.Details>
  )
}

export default Details
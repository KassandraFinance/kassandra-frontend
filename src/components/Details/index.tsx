import React from 'react'
import Link from 'next/link'
import BigNumber from 'bn.js'

import { BNtoDecimal } from '../../utils/numerals'

import Tooltip from '../Tooltip'

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
  poolInfo: (pid: number) => Promise<any>
  infoStakeStatic: IInfoStakeStaticProps
}

const Details = ({ pid, poolInfo, infoStakeStatic }: IDetailsProps) => {
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
      <S.Info>
        <span>Total staked</span>
        <S.KacyUSD>
          <span>
            ${BNtoDecimal(new BigNumber(depositedAmount).mul(new BigNumber(3.5)), new BigNumber(18), 2)}
          </span>
          <span className="usd">~ 0 USD</span>
        </S.KacyUSD>
      </S.Info>
      <S.Info>
        <span>Pool Reward</span>
        <S.KacyUSD>
          <span>
            {BNtoDecimal(infoStakeStatic.kacyRewards, new BigNumber(18), 2)}/day
          </span>
          <span className="usd">~ 0 USD</span>
        </S.KacyUSD>

      </S.Info>
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
          <Link href="/">View project site</Link>
          <img src="assets/GoToSite.svg" alt="" />   
        </S.Link>
        <S.Link>
          <a href="https://app.uniswap.org/" target="_blank" rel="noopener noreferrer">
            Buy $Kacy
          </a>
          <img src="assets/arrow-right.svg" alt="" />
        </S.Link>
      </S.Info>
      <S.Info>
      <S.Link>
        <a href="https://app.uniswap.org/" target="_blank" rel="noopener noreferrer">
          View contract
        </a>
        <img src="assets/GoToSite.svg" alt="" />   
      </S.Link>

        <span>Add to Metamask</span>

      </S.Info>
    </S.Details>
  )
}

export default Details
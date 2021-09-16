import React from 'react'
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
    <>
      <S.Info>
        <p className="total-staking">Total staked</p>
        <p className="total-staking">${BNtoDecimal(new BigNumber(depositedAmount).mul(new BigNumber(3.5)), new BigNumber(18), 2)}</p>
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ margin: '16px 4px 24px 0' }}>
            Withdraw delay
          </p>
          <Tooltip tooltipTop={false}>Time your asset will be locked before you can withdraw it.</Tooltip>
        </div>
        <p style={{ margin: '16px 0 24px'}}>{infoStakeStatic.withdrawDelay} Days</p>
      </S.Info>
    </>
  )
}

export default Details
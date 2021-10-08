import React from 'react'
import BigNumber from 'bn.js'

import { BNtoDecimal, wei } from '../../../utils/numerals'

interface ITotalStakedProps {
  pid: number
  poolInfo: (pid: number) => Promise<any>
}

const TotalStaked = ({ pid, poolInfo }: ITotalStakedProps) => {
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
      <p className="total-staking">Total staked</p>
      <p className="total-staking">{BNtoDecimal(new BigNumber(depositedAmount).mul(new BigNumber(3.5)), wei, 2)}</p>
    </>
  )
}

export default TotalStaked
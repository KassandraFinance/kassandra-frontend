import React from 'react'
import BigNumber from 'bn.js'

import { BNtoDecimal } from '../../../utils/numerals'

interface IKacyEarnedProps {
  pid: number
  userWalletAddress: string
  earned: (pid: number, walletAddress: string) => Promise<BigNumber>
}

const KacyEarned = ({ pid, userWalletAddress, earned }: IKacyEarnedProps) => {
  const [kacyEarned, setKacyEarned] = React.useState<BigNumber>(new BigNumber(0))

  React.useEffect(() => {
    const interval = setInterval(async () => {
      const earnedResponse: BigNumber = await earned(pid, userWalletAddress)
      setKacyEarned(earnedResponse)
    }, 6000)

    return () => clearInterval(interval)

  }, [])

  return (
    <h3>{BNtoDecimal(kacyEarned || new BigNumber(0), new BigNumber(18), 6)} KACY</h3>
  )
}

export default KacyEarned
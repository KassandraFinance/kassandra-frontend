import React from 'react'
import BigNumber from 'bn.js'

import { BNtoDecimal } from '../../../utils/numerals'

import * as S from './styles'

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
    <S.KacyEarned>
      <p>Kacy earned</p>
      <h3>{BNtoDecimal(kacyEarned || new BigNumber(0), new BigNumber(18), 2)} KACY</h3>
      <span>~ {BNtoDecimal(new BigNumber(kacyEarned).mul(new BigNumber(2)), new BigNumber(18), 2)} USD</span>
    </S.KacyEarned>
  )
}

export default KacyEarned
import React from 'react'
import BigNumber from 'bn.js'

import { BNtoDecimal } from '../../../utils/numerals'

import * as S from './styles'

interface IKacyEarnedProps {
  pid: number
  userWalletAddress: string
  earned: (pid: number, walletAddress: string) => Promise<BigNumber>
  kacyEarned: BigNumber
  setKacyEarned: React.Dispatch<React.SetStateAction<BigNumber>>
}

const KacyEarned = ({ 
  pid, 
  userWalletAddress, 
  earned, 
  kacyEarned, 
  setKacyEarned 
}: IKacyEarnedProps) => {

  React.useEffect(() => {
    const interval = setInterval(async () => {
      const earnedResponse: BigNumber = await earned(pid, userWalletAddress)
      setKacyEarned(earnedResponse)
    }, 6000)

    return () => clearInterval(interval)

  }, [])

  return (
    <S.KacyEarned>
      <p>KACY <span>Earned</span></p>
      <h3>{BNtoDecimal(kacyEarned || new BigNumber(0), new BigNumber(18), 2)}</h3>
      <span><b>&#8776;</b> {BNtoDecimal(new BigNumber(kacyEarned).mul(new BigNumber(2)), new BigNumber(18), 2)} <b>USD</b></span>
    </S.KacyEarned>
  )
}

export default KacyEarned
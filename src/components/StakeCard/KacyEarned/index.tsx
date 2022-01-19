/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import BigNumber from 'bn.js'
import Big from 'big.js'

import { BNtoDecimal } from '../../../utils/numerals'

import * as S from './styles'

interface IKacyEarnedProps {
  pid: number;
  userWalletAddress: string;
  earned: (pid: number, walletAddress: string) => Promise<BigNumber>;
  kacyEarned: BigNumber;
  setKacyEarned: React.Dispatch<React.SetStateAction<BigNumber>>;
  kacyPrice: Big;
}

const KacyEarned = ({
  pid,
  userWalletAddress,
  earned,
  kacyEarned,
  setKacyEarned,
  kacyPrice
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
      <p>
        KACY <span>Earned</span>
      </p>
      <h3>
        {kacyEarned.lt(new BigNumber('0'))
          ? '...'
          : BNtoDecimal(kacyEarned, 18, 2)}
      </h3>
      <span>
        <b>&#8776;</b>{' '}
        {kacyEarned.lt(new BigNumber('0')) || kacyPrice.lt(0)
          ? '...'
          : BNtoDecimal(
              Big(kacyEarned.toString()).mul(kacyPrice).div(Big(10).pow(18)),
              6,
              2,
              2
            )}{' '}
        <b>USD</b>
      </span>
    </S.KacyEarned>
  )
}

export default KacyEarned

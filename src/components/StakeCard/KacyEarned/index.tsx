/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import { Staking } from '../../../constants/tokenAddresses'

import useStakingContract from '../../../hooks/useStakingContract'

import { BNtoDecimal } from '../../../utils/numerals'
import Big from 'big.js'
import BigNumber from 'bn.js'

import * as S from './styles'

interface IKacyEarnedProps {
  pid: number;
  userWalletAddress: string;
  kacyEarned: BigNumber;
  setKacyEarned: React.Dispatch<React.SetStateAction<BigNumber>>;
  kacyPrice: Big;
}

const KacyEarned = ({
  pid,
  userWalletAddress,
  kacyEarned,
  setKacyEarned,
  kacyPrice
}: IKacyEarnedProps) => {
  const { earned } = useStakingContract(Staking)

  async function getKacyEaned() {
    const earnedResponse: BigNumber = await earned(pid, userWalletAddress)
    setKacyEarned(earnedResponse)
  }

  React.useEffect(() => {
    const interval = setInterval(async () => {
      getKacyEaned()
    }, 6000)

    getKacyEaned()

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

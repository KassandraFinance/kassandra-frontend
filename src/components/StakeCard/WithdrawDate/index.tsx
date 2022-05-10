/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import useCountDownDate from '../../../hooks/useCountDownDate'

import * as S from './styles'

interface IWithdrawDateProps {
  pid: number;
  userWalletAddress: string;
  stakedUntil: (pid: number, walletAddress: string) => Promise<string>;
}

const WithdrawDate = ({
  pid,
  userWalletAddress,
  stakedUntil
}: IWithdrawDateProps) => {
  const { date, countDown, interval } = useCountDownDate()

  const withdrawDelay = React.useCallback(async () => {
    const unix_timestamp = await stakedUntil(pid, userWalletAddress)
    const countDownDate = new Date(Number(unix_timestamp) * 1000).getTime()

    countDown(countDownDate)
  }, [])

  React.useEffect(() => {
    withdrawDelay()

    return () => clearInterval(interval)
  }, [])

  return <S.WithdrawDate>Withdraw in {date}</S.WithdrawDate>
}

export default WithdrawDate

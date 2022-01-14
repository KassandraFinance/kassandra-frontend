/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Image from 'next/image'

import useCountDownDate from '../../hooks/useCountDownDate'

import penguinFinance from '../../../public/assets/Penguin_Finance.svg'
import * as S from './styles'

interface ICountdownCallbackParams {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const CountdownBanner = () => {
  const { countDown, interval, timeRemaining } = useCountDownDate()

  const withdrawDelay = React.useCallback(async () => {
    const year = 2021
    const month = 11
    const day = 1
    const hour = 0
    const minute = 0
    const second = 0
    const d = new Date(year, month - 1, day, hour, minute, second)
    const unix_timestamp = d.getTime()

    countDown(unix_timestamp)
  }, [])

  React.useEffect(() => {
    withdrawDelay()

    return () => clearInterval(interval)
  }, [])

  return (
    <S.Background>
      <S.Container id="launching-banner">
        <S.TextWrapper>
          <S.TitleAndImage>
            <p>UPCOMING IDO</p>
            <img src="assets/avalancheIcon.svg" alt="" />
          </S.TitleAndImage>
          <h1>
            Join our public and exclusive IDO in partnership with Penguin
            Finance on Jan 17th
          </h1>
          <S.Logo>
            <Image src={penguinFinance} />
          </S.Logo>
          <S.Link
            href="https://penguin-finance.medium.com/penguin-launchpad-kassandra-ido-tiers-guidelines-6cc741f11385"
            target="_blank"
            rel="noopener noreferrer"
          >
            <a>
              Check out Kassandra DAO Tiers and Guidelines
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 11.5L11.5 8.5L8.5 5.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 8.5H11.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </S.Link>
          {/* <span>STARTS IN:</span> */}
        </S.TextWrapper>
        {/* <S.TimerContainer>
          <S.TimerWrapper>
            <span>{timeRemaining.dayss}</span>
            <p>Days</p>
          </S.TimerWrapper>
          <S.TimerWrapper>
            <span>{timeRemaining.hours}</span>
            <p>Hours</p>
          </S.TimerWrapper>
          <S.TimerWrapper>
            <span>{timeRemaining.minutes}</span>
            <p>Mins</p>
          </S.TimerWrapper>
          <S.TimerWrapper>
            <span>{timeRemaining.seconds}</span>
            <p>Secs</p>
          </S.TimerWrapper>
        </S.TimerContainer> */}
      </S.Container>
    </S.Background>
  )
}
export default CountdownBanner

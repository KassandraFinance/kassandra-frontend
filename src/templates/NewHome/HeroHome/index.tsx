import React from 'react'
import router from 'next/router'
import Image from 'next/image'

import HeroBackGround from './HeroBackGround'
import HeroText from './HeroText'
import Button from '../../../components/Button'
import DaoData from './DaoData'

import lightTable3 from '../../../../public/assets/images/backgroundHome/light-tablet3.png'

import * as S from './styles'

const HeroHome = () => {
  return (
    <S.Container>
      <S.ImgWrapper>
        <Image src={lightTable3} />
      </S.ImgWrapper>

      <HeroBackGround />

      <HeroText />

      <Button
        className="btn"
        text="Start Investing"
        icon={
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
              stroke="#F1F0F1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 12.2L12.2 8.99999L9 5.79999"
              stroke="#F1F0F1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.7998 9H12.1998"
              stroke="#F1F0F1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        backgroundPrimary
        onClick={() => router.push('/explore')}
      />

      <DaoData />
    </S.Container>
  )
}

export default HeroHome

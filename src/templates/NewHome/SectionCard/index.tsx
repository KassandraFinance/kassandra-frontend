import React from 'react'
import Image from 'next/image'

import Button from '../../../components/Button'

import investorImg from '../../../../public/assets/images/investor.png'

import * as S from './styles'

const SectionCard = () => {
  return (
    <S.Container>
      <S.TextContainer>
        <S.Title>
          01
          <S.Line /> investors
        </S.Title>

        <S.SubTitle>Buy one token to follow strategies that fit you</S.SubTitle>

        <S.Text>
          Take advantage of social trading to increase your diversification. By
          buying a single token, you delegate funds to trusted managers that
          will work to improve your gains and reduce your risks.
        </S.Text>

        <Button
          className="btn"
          text="Become an investor"
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
          backgroundSecondary
        />
      </S.TextContainer>

      <Image src={investorImg} />
    </S.Container>
  )
}

export default SectionCard

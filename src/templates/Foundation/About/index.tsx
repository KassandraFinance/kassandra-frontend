import React from 'react'

import trustlessIcon from '../../../../public/assets/iconGradient/trustless-permisionless.svg'
import flexibleIcon from '../../../../public/assets/iconGradient/flexible-customizable.svg'
import incentivosIcon from '../../../../public/assets/iconGradient/incentivos-alinhados.svg'

import * as S from './styles'
import Image from 'next/image'

const About = () => {
  return (
    <S.About>
      <S.TextContainer>
        <S.Text>
          Kassandra is a decentralized autonomous organization that governs a
          structure that allows the creation and managing of tokenized
          investment funds, bringing a new class of investment products to the
          DeFi investors.
        </S.Text>

        <S.BulletPoints>
          <S.BulletPointWrapper>
            <S.BulletPoint>
              <Image src={trustlessIcon} width={68} height={68} />

              <S.BulletPointTitle>Trustless & Permisionless</S.BulletPointTitle>
            </S.BulletPoint>

            <S.BulletPointLine />
          </S.BulletPointWrapper>

          <S.BulletPointWrapper>
            <S.BulletPoint>
              <Image src={flexibleIcon} width={68} height={68} />

              <S.BulletPointTitle>Flexible & Customizable</S.BulletPointTitle>
            </S.BulletPoint>

            <S.BulletPointLine />
          </S.BulletPointWrapper>

          <S.BulletPointWrapper>
            <S.BulletPoint>
              <Image src={incentivosIcon} width={68} height={68} />

              <S.BulletPointTitle>Data Oriented</S.BulletPointTitle>
            </S.BulletPoint>

            <S.BulletPointLine />
          </S.BulletPointWrapper>
        </S.BulletPoints>
      </S.TextContainer>

      <S.CardContainer>
        <S.CardWrapper>
          <S.CardTitle>vision</S.CardTitle>

          <S.CardText>
            Asset management is one of the smallest sectors of DeFi while being
            a trillion-dollar industry in TradFi. Traditional investments are
            streamlined and facilitated, why not do the same in DeFi?
          </S.CardText>
        </S.CardWrapper>

        <S.CardWrapper>
          <S.CardTitle>mission</S.CardTitle>

          <S.CardText>
            A future in which there’ll be seamless integration between investors
            looking for exposure in the cryptosphere and DeFi experts who’ll
            guide them while both make money.
          </S.CardText>
        </S.CardWrapper>
      </S.CardContainer>
    </S.About>
  )
}

export default About

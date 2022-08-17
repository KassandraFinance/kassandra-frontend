import React from 'react'

import padlockIcon from '../../../../public/assets/iconGradient/padlock.svg'
import switchbladeIcon from '../../../../public/assets/iconGradient/switchblade.svg'
import GroupSocialIcon from '../../../../public/assets/iconGradient/group-social.svg'

import * as S from './styles'
import Image from 'next/image'

const About = () => {
  return (
    <S.About>
      <S.TextContainer>
        <S.Text>
          Kassandra is an decentralized autonomous organization of decentralized
          finance that governs a protocol that allows the creation and
          management of tokenized investment funds, bringing a new class of
          products to managers and investors.
        </S.Text>

        <S.BulletPoints>
          <S.BulletPointWrapper>
            <S.BulletPoint>
              <Image src={padlockIcon} width={68} height={68} />

              <S.BulletPointTitle>Trustless & Permisionless</S.BulletPointTitle>
            </S.BulletPoint>

            <S.BulletPointLine />
          </S.BulletPointWrapper>

          <S.BulletPointWrapper>
            <S.BulletPoint>
              <Image src={switchbladeIcon} width={68} height={68} />

              <S.BulletPointTitle>Flexible & Customizable</S.BulletPointTitle>
            </S.BulletPoint>

            <S.BulletPointLine />
          </S.BulletPointWrapper>

          <S.BulletPointWrapper>
            <S.BulletPoint>
              <Image src={GroupSocialIcon} width={68} height={68} />

              <S.BulletPointTitle>Aligned Interests</S.BulletPointTitle>
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

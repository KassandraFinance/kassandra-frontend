import React from 'react'
import Image from 'next/image'

import FadeInVertical from '../../../components/Animations/FadeInVertical'
import Paragraph from '../../../components/Paragraph'

import padlockIcon from '../../../../public/assets/iconGradient/padlock.png'
import switchbladeIcon from '../../../../public/assets/iconGradient/switchblade.png'
import GroupSocialIcon from '../../../../public/assets/iconGradient/group-social.png'

import * as S from './styles'

const About = () => {
  return (
    <S.About>
      <FadeInVertical threshold={0.5}>
        <S.TextContainer>
          <Paragraph
            text="Kassandra is an decentralized autonomous organization of
            decentralized finance that governs a protocol that allows the
            creation and management of tokenized crypto portfolios, bringing a new
            class of products to managers and investors."
          />

          <S.BulletPoints>
            <S.BulletPointWrapper>
              <S.BulletPoint>
                <Image
                  src={padlockIcon}
                  width={68}
                  height={68}
                  alt="Open lock"
                />

                <S.BulletPointTitle>
                  Trustless & Permisionless
                </S.BulletPointTitle>
              </S.BulletPoint>

              <S.BulletPointLine />
            </S.BulletPointWrapper>

            <S.BulletPointWrapper>
              <S.BulletPoint>
                <Image
                  src={switchbladeIcon}
                  alt="Switchblade"
                  width={68}
                  height={68}
                />

                <S.BulletPointTitle>Flexible & Customizable</S.BulletPointTitle>
              </S.BulletPoint>

              <S.BulletPointLine />
            </S.BulletPointWrapper>

            <S.BulletPointWrapper>
              <S.BulletPoint>
                <Image
                  src={GroupSocialIcon}
                  alt="Group of people"
                  width={68}
                  height={68}
                />

                <S.BulletPointTitle>Aligned Interests</S.BulletPointTitle>
              </S.BulletPoint>

              <S.BulletPointLine />
            </S.BulletPointWrapper>
          </S.BulletPoints>
        </S.TextContainer>
      </FadeInVertical>

      <FadeInVertical threshold={0.5}>
        <S.CardContainer>
          <S.CardWrapper>
            <S.CardTitle>vision</S.CardTitle>

            <Paragraph
              text="Asset management is one of the smallest sectors of DeFi while
              being a trillion-dollar industry in TradFi. Traditional
              investments are streamlined and facilitated, why not do the same
              in DeFi?"
            />
          </S.CardWrapper>

          <S.CardWrapper>
            <S.CardTitle>mission</S.CardTitle>

            <Paragraph
              text="A future in which there’ll be seamless integration between
              investors looking for exposure in the cryptosphere and DeFi
              experts who’ll guide them while both make money."
            />
          </S.CardWrapper>
        </S.CardContainer>
      </FadeInVertical>
    </S.About>
  )
}

export default About

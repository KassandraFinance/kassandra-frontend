import React from 'react'
import Image from 'next/image'

import ExternalLink from '../../../components/ExternalLink'
import FadeInVertical from '../../../components/Animations/FadeInVertical'
import SectionSubtitle from '../../../components/SectionSubtitle'
import Paragraph from '../../../components/Paragraph'

import ArrowUp from '../../../../public/assets/iconGradient/arrow-up.svg'

import * as S from './styles'

const Institutional = () => {
  return (
    <S.InstitutionalContainer>
      <FadeInVertical threshold={0.5}>
        <S.TitleContainer>
          <h2>What is Kassandra Foundation?</h2>
          <SectionSubtitle text="A community bringing investors, managers and builders together" />
          <Paragraph text="And to achieve this, we have three pillars:" />
        </S.TitleContainer>
      </FadeInVertical>

      <FadeInVertical threshold={0.5}>
        <S.ImageContainer>
          <S.ImageContent>
            <span>
              <img src="assets/iconGradient/Institutional.png" alt="" />
            </span>
          </S.ImageContent>
          <S.InstitutionalCardList>
            <S.InstitutionalCard>
              <S.IconContent>
                <img
                  src="assets/iconGradient/protocol.svg"
                  alt=""
                  height={34}
                  width={43}
                />
              </S.IconContent>
              <S.CardTitle color="#ffbf00">PROTOCOL</S.CardTitle>
              <span>Technology</span>
              <Paragraph
                text="The Kassandra Protocol is the core technology that allows the
                DAO to deploy investment products. It allows building tokenized
                investment baskets that are permissionless, non-custodial and
                actively managed, yet monetary efficient."
              />

              <ExternalLink
                text="Learn more"
                hrefLink="https://medium.com/@kassandrafoundation/kassandra-protocol-d9cb71c02b02"
              />
            </S.InstitutionalCard>

            <S.InstitutionalCardContainer>
              <span>
                <Image src={ArrowUp} alt="" />
              </span>
              <S.InstitutionalCard>
                <S.IconContent>
                  <img
                    src="assets/iconGradient/dao.svg"
                    alt=""
                    height={34}
                    width={43}
                  />
                </S.IconContent>
                <S.CardTitle color="#26dbdb">DAO</S.CardTitle>
                <span>Organization</span>
                <Paragraph
                  text="The Kassandra DAO is the only owner of the Kassandra Protocol,
                  represented by the KACY token holders, and earns management
                  fees over all the Kassandra investment funds."
                />
                <ExternalLink
                  text="Learn more"
                  hrefLink="https://medium.com/@kassandrafoundation/kassandra-dao-token-8bc046d55a00"
                />
              </S.InstitutionalCard>
            </S.InstitutionalCardContainer>

            <S.InstitutionalCard>
              <S.IconContent>
                <img
                  src="assets/iconGradient/foundation.svg"
                  alt=""
                  height={34}
                  width={43}
                />
              </S.IconContent>
              <S.CardTitle color="#e843c4">FOUNDATION</S.CardTitle>
              <span>Forefathers</span>
              <Paragraph
                text="The Kassandra Foundation is the entity funded by token sale
                events, run by the core team of Kassandra founders, with the
                purpose of promoting and developing Kassandra in both
                technological and marketing aspects."
              />
              <ExternalLink
                text="Learn more"
                hrefLink="https://medium.com/@kassandrafoundation/kassandra-foundation-team-4f46bf13c887"
              />
            </S.InstitutionalCard>
          </S.InstitutionalCardList>
        </S.ImageContainer>
      </FadeInVertical>
    </S.InstitutionalContainer>
  )
}
export default Institutional

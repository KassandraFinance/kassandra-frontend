import React from 'react'
import Image from 'next/image'

import ExternalLink from '../../../components/ExternalLink'

import ArrowUp from '../../../../public/assets/iconGradient/arrow-up.svg'

import * as S from './styles'

const Institutional = () => {
  return (
    <S.InstitutionalContainer>
      <S.TitleContainer>
        <h2>What is Kassandra Foundation?</h2>
        <h3>A community bringing investors, managers and builders together.</h3>
        <p>And to achieve this, we have three pillars</p>
      </S.TitleContainer>
      <S.ImageContainer>
        <S.ImageContent>
          <span>
            <img src="assets/iconGradient/Institutional.svg" alt="" />
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
            <p>
              The Kassandra Protocol is the core technology that allows the DAO
              to deploy investment products. It allows building tokenized
              investment baskets that are permissionless, non-custodial and
              actively managed, yet monetary efficient.
            </p>
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
              <p>
                The Kassandra DAO is the only owner of the Kassandra Protocol,
                represented by the KACY token holders, and earns management fees
                over all the Kassandra investment funds.
              </p>
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
            <p>
              The Kassandra Foundation is the entity funded by token sale
              events, run by the core team of Kassandra founders, with the
              purpose of promoting and developing Kassandra in both
              technological and marketing aspects.
            </p>
            <ExternalLink
              text="Learn more"
              hrefLink="https://medium.com/@kassandrafoundation/kassandra-foundation-team-4f46bf13c887"
            />
          </S.InstitutionalCard>
        </S.InstitutionalCardList>
      </S.ImageContainer>
    </S.InstitutionalContainer>
  )
}
export default Institutional
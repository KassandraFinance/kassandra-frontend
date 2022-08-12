import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import GoToPage from '../../../../public/assets/utilities/go-to-page.svg'
import protocol from '../../../../public/assets/iconGradient/protocol.svg'
import dao from '../../../../public/assets/iconGradient/dao.svg'
import foundation from '../../../../public/assets/iconGradient/foundation.svg'
import kacyAbout from '../../../../public/assets/iconGradient/kacy-about.svg'
import ArrowUp from '../../../../public/assets/iconGradient/arrow-up.svg'
// import ArrowLeft from '../../../../public/assets/iconGradient/arrow-left.svg'
// import ArrowRight from '../../../../public/assets/iconGradient/arrow-right.svg'

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
            {/* <Image src="assets/iconGradient/test.svg" alt="" /> */}
            <img src="assets/iconGradient/Institutional.svg" alt="" />
          </span>
        </S.ImageContent>
        <S.InstitutionalCardList>
          <S.InstitutionalCard>
            <S.IconContent>
              <Image src={protocol} alt="" height={34} width={43} />
            </S.IconContent>
            <S.CardTitle color="#ffbf00">PROTOCOL</S.CardTitle>
            <span>Technology</span>
            <p>
              The Kassandra Protocol is the core technology that allows the DAO
              to deploy investment products. It allows building tokenized
              investment baskets that are permissionless, non-custodial and
              actively managed, yet monetary efficient.
            </p>
            <Link href="#" passHref>
              <a>
                Learn more <Image src={GoToPage} alt="" />
              </a>
            </Link>
          </S.InstitutionalCard>

          <S.InstitutionalCardContainer>
            <Image src={ArrowUp} alt="" />
            <S.InstitutionalCard>
              <S.IconContent>
                <Image src={dao} alt="" height={34} width={43} />
              </S.IconContent>
              <S.CardTitle color="#26dbdb">DAO</S.CardTitle>
              <span>Organization</span>
              <p>
                The Kassandra DAO is the only owner of the Kassandra Protocol,
                represented by the KACY token holders, and earns management fees
                over all the Kassandra investment funds.
              </p>
              <Link href="#" passHref>
                <a>
                  Learn more <Image src={GoToPage} alt="" />
                </a>
              </Link>
            </S.InstitutionalCard>
          </S.InstitutionalCardContainer>

          <S.InstitutionalCard>
            <S.IconContent>
              <Image src={foundation} alt="" height={34} width={43} />
            </S.IconContent>
            <S.CardTitle color="#e843c4">FOUNDATION</S.CardTitle>
            <span>Forefathers</span>
            <p>
              The Kassandra Foundation is the entity funded by token sale
              events, run by the core team of Kassandra founders, with the
              purpose of promoting and developing Kassandra in both
              technological and marketing aspects.
            </p>
            <Link href="#" passHref>
              <a>
                Learn more <Image src={GoToPage} alt="" />
              </a>
            </Link>
          </S.InstitutionalCard>
        </S.InstitutionalCardList>
      </S.ImageContainer>
    </S.InstitutionalContainer>
  )
}
export default Institutional

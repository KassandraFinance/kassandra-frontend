import React from 'react'
import Image from 'next/image'

import { FeaturedProductDetails } from '../../../constants/tokenAddresses'

import HomeHeading from '../HomeHeading'
import SectionCard from '../SectionCard'
import PoolHomeCard from '../PoolHomeCard'
import FadeIn from '../../../components/Animations/FadeIn'
import FadeInHorizontal from '../../../components/Animations/FadeInHorizontal'

import investorImg from '../../../../public/assets/images/investor.png'
import light1 from '../../../../public/assets/images/backgroundHome/light-mobile1.png'
import light2 from '../../../../public/assets/images/backgroundHome/light-mobile2.png'
import lightTable4 from '../../../../public/assets/images/backgroundHome/light-tablet4.png'

import * as S from './styles'

const InvestorsSection = () => {
  return (
    <S.Container>
      <S.ImgWrapper1>
        <Image src={light1} alt="Ball of light" />
      </S.ImgWrapper1>

      <S.ImgWrapper2>
        <Image src={light2} alt="Ball of light" />
      </S.ImgWrapper2>

      <S.ImgTabletWrapper>
        <Image src={lightTable4} alt="Ball of light" />
      </S.ImgTabletWrapper>

      <SectionCard
        number="01"
        title="investors"
        color="#FFBF00"
        subtitle="Buy one token to follow strategies
that fit you"
        text="Take advantage of social trading to increase your diversification. By buying a single token, you gain exposure to up to 50 tokens and strategies that can improve your gains and reduce your risks."
        btnText="Become an investor"
        link="/investors"
        img={investorImg}
        alt="A person from the back"
      />

      <FadeIn threshold={1}>
        <HomeHeading title="Featured Portfolios" color="#FFBF00" />
      </FadeIn>

      <S.PoolCardContainer>
        {FeaturedProductDetails.map((product, index) => {
          let invert = false
          if (index % 2 === 0) {
            invert = false
          } else {
            invert = true
          }

          return (
            <FadeInHorizontal key={product.id} threshold={0.5} invert={invert}>
              <PoolHomeCard product={product} />
            </FadeInHorizontal>
          )
        })}
      </S.PoolCardContainer>
    </S.Container>
  )
}

export default InvestorsSection

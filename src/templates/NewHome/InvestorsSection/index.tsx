import React from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

import { products } from '../../../constants/tokenAddresses'

import HomeHeading from '../HomeHeading'
import SectionCard from '../SectionCard'
import PoolHomeCard from '../../Home/Token/PoolHomeCard'

import investorImg from '../../../../public/assets/images/investor.png'
import light1 from '../../../../public/assets/images/backgroundHome/light-mobile1.png'
import light2 from '../../../../public/assets/images/backgroundHome/light-mobile2.png'
import lightTable4 from '../../../../public/assets/images/backgroundHome/light-tablet4.png'

import * as S from './styles'

const InvestorsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '25px 0px'
  })

  return (
    <S.Container>
      <S.ImgWrapper1>
        <Image src={light1} />
      </S.ImgWrapper1>

      <S.ImgWrapper2>
        <Image src={light2} />
      </S.ImgWrapper2>

      <S.ImgTabletWrapper>
        <Image src={lightTable4} />
      </S.ImgTabletWrapper>

      <SectionCard
        number="01"
        title="investors"
        color="#FFBF00"
        subtitle="Buy one token to follow strategies
that fit you"
        text="Take advantage of social trading to increase your diversification.
By buying a single token, you delegate funds to trusted managers
that will work to improve your gains and reduce your risks."
        btnText="Become an investor"
        link="/investors"
        img={investorImg}
      />

      <HomeHeading title="Foundation-curated Products" color="#FFBF00" />

      <S.PoolCardContainer ref={ref}>
        {inView &&
          products.map(product => (
            <PoolHomeCard key={product.symbol} pool={product} />
          ))}
      </S.PoolCardContainer>
    </S.Container>
  )
}

export default InvestorsSection

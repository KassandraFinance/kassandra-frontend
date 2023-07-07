import React from 'react'
import Image from 'next/image'
import Big from 'big.js'

import { usePoolInfo } from '@/hooks/query/useWithdrawFee'
import { products } from '../../../constants/tokenAddresses'

import { BNtoDecimal } from '../../../utils/numerals'

import FadeIn from '../../../components/Animations/FadeIn'
import Paragraph from '../../../components/Paragraph'
import SectionSubtitle from '../../../components/SectionSubtitle'

import * as S from './styles'

const FlowingRevenue = () => {
  const [allWithdrawFee, setAllWithdrawFees] = React.useState<Big>(new Big(0))
  const sipAddresses = products.map(product => product.sipAddress)

  const { data } = usePoolInfo({ ids: sipAddresses })

  React.useEffect(() => {
    if (!data) {
      return
    }
    const arrData = data

    let withdrawFees = Big(0)

    for (const data of arrData) {
      for (const fee of data.withdraw) {
        withdrawFees = withdrawFees.add(Big(fee.volume_usd))
      }
    }

    setAllWithdrawFees(withdrawFees)
  }, [data])

  return (
    <S.Wrapper>
      <FadeIn threshold={0.5}>
        <S.Header>
          <SectionSubtitle text="DAO’s Flowing Revenue" />
          <Paragraph
            text="A 3% fee is charged when investment tokens are redeemed to aid the
            DAO's innovation and development fund."
          />
        </S.Header>
      </FadeIn>

      <FadeIn threshold={0.5}>
        <S.HeroMobile>
          <S.ImageWrapper>
            <Image
              src="/assets/images/background-flowing-revenue-mobile.svg"
              layout="fill"
            />
          </S.ImageWrapper>
          <S.Card>
            <Image
              src="/assets/iconGradient/lamp.svg"
              width={33.47}
              height={28.97}
            />
            <S.CardText>
              <h5>{"DAO's"}</h5>
              <p>Development Fund Innovation</p>
            </S.CardText>
          </S.Card>
          <S.Data>
            <span>
              <strong>{BNtoDecimal(allWithdrawFee, 18, 2)}</strong> USD
            </span>
            <small>ACCUMULATED PROTOCOL FEES SINCE 2022</small>
          </S.Data>
        </S.HeroMobile>
      </FadeIn>

      <FadeIn threshold={0.5}>
        <S.Hero>
          <S.Data>
            <span>
              <strong>{BNtoDecimal(allWithdrawFee, 18, 2)}</strong> USD
            </span>
            <small>ACCUMULATED PROTOCOL FEES SINCE 2022</small>
          </S.Data>
        </S.Hero>
      </FadeIn>
    </S.Wrapper>
  )
}

export default FlowingRevenue

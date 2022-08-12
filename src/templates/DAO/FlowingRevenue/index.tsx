import Image from 'next/image'
import { Description, Heading } from '../styles'
import * as S from './styles'

const FlowingRevenue = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <Heading as="h2" level="2">
          DAO’s Flowing Revenue{' '}
        </Heading>
        <Description>
          A 3% fee is charged when investment tokens are redeemed to aid the
          {" DAO's"} innovation and development fund.
        </Description>
      </S.Header>
      <S.HeroMobile>
        <S.ImageWrapper>
          <Image
            src="/assets/images/background-flowing-revenue-mobile.png"
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
            <strong>1.612</strong> USD
          </span>
          <small>Accumulated Withdraw Fees since 2022.</small>
        </S.Data>
      </S.HeroMobile>
      <S.Hero>
        <S.Data>
          <span>
            <strong>1.612</strong> USD
          </span>
          <small>Accumulated Withdraw Fees since 2022.</small>
        </S.Data>
      </S.Hero>
    </S.Wrapper>
  )
}

export default FlowingRevenue

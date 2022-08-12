import Image from 'next/image'
import { Caption, Description, Display, Heading } from '../styles'
import * as S from './styles'

const Tokenomics = () => {
  return (
    <S.Wrapper>
      <S.Title>
        <Display as="h2" level="2">
          Tokenomics
        </Display>
        <Description>
          With a total supply of 10.000.000 that is only avaiable through the
          staking, locking and farming of KACY, we have crafted a sustainable
          approach to inflation while keeping rewards for our early contributors
          high.
        </Description>
      </S.Title>
      <S.Container>
        <S.Row1>
          <S.KassandraImageWrapper>
            <Image src="/assets/images/kassandra-circle.png" layout="fill" />
          </S.KassandraImageWrapper>
          <S.Values>
            <S.Value>
              <Caption color="magenta">Price</Caption>
              <Heading level="3">$12,95923</Heading>
            </S.Value>
            <S.Value>
              <Caption color="magenta">Market Cap</Caption>
              <Heading level="3">$12,95923</Heading>
            </S.Value>
            <S.Value>
              <Caption color="magenta">Circulating Supply</Caption>
              <Heading level="3">$12,95923</Heading>
            </S.Value>
            <S.Value>
              <Caption color="magenta">Total Supply</Caption>
              <Heading level="3">$12,95923</Heading>
            </S.Value>
          </S.Values>
        </S.Row1>
        <S.Row2>
          <S.Info>
            <span>Distribution</span>
            <h3>Fair and community driven token distribuition</h3>
            <p>
              To create a fully decentralized organization with a
              well-distributed token, we chose to have a big part of the total
              supply (50%) slowly available through rewards to people that
              engage and help Kassandra in the early stages.
            </p>
          </S.Info>
          <S.PieChartImageWrapper>
            <Image
              src="/assets/images/chart-pie-token-holder.png"
              layout="fill"
            />
          </S.PieChartImageWrapper>
        </S.Row2>
        <S.Row3>
          <S.BarChartImageWrapper>
            <Image src="/assets/images/tokenomics-chart-2.png" layout="fill" />
          </S.BarChartImageWrapper>
          <S.Info>
            <span>Release schedule</span>
            <h3>Slow inflation</h3>
            <p>
              Through the vesting of private sales, seed sales, team tokens and
              foundation reserves, we have created a slowly-inflating token that
              rewards early hodlers without punishing new ones.
            </p>
          </S.Info>
        </S.Row3>
      </S.Container>
    </S.Wrapper>
  )
}

export default Tokenomics

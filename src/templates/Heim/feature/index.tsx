import React from 'react'

// eslint-disable-next-line import/extensions
import * as S from './styles'
import Button from '../../../components/Button'
import MediaMatch from '../../../components/MediaMatch'

export const Feature = () => (
<>
  <S.Container>
    <div>
        <S.Title>What is the HEIM Social Index</S.Title>
        <S.SubTitle>An actively managed decentralized ETF that automatically invests in growing communities</S.SubTitle>
    </div>
        <S.WrapperItems>
          <S.ItemContainer>
            <S.ItemImage>
              <img src="assets/connectionHeim.png" alt=""/>
            </S.ItemImage>
            <S.ItemText>
              <S.ItemTitle>A decentralized ETF</S.ItemTitle>
              <S.ItemSubtitle>Invest by acquiring a regular ERC20 token that tracks a complex strategy while being non-custodial and permissionless.</S.ItemSubtitle>
            </S.ItemText>
          </S.ItemContainer>
          <S.ItemContainer>
            <S.ItemImage>
              <img src="assets/balanceHeim.png" alt=""/>
            </S.ItemImage>
            <S.ItemText>
              <S.ItemTitle>Constantly rebalanced</S.ItemTitle>
              <S.ItemSubtitle>The portfolio updates assets allocations towards the best socially
active ones by fetching social data
into the blockchain every day.</S.ItemSubtitle>
            </S.ItemText>
          </S.ItemContainer>
          <S.ItemContainer>
            <S.ItemImage>
              <img src="assets/compassHeim.png" alt=""/>
            </S.ItemImage>
            <S.ItemText>
              <S.ItemTitle>Guided by communities</S.ItemTitle>
              <S.ItemSubtitle>Intelligently measures community size by counting the quantity and quality of every social interaction with each project in real-time.</S.ItemSubtitle>
            </S.ItemText>
          </S.ItemContainer>
        </S.WrapperItems>
    </S.Container>

    <S.GraphWrapper>
      <S.TextWrapper>
        <S.Title>A backtested strategy</S.Title>
        <S.SubTitle>Our research team showed that investing in communities can outperform simpler strategies.</S.SubTitle>
      </S.TextWrapper>
        <img src="assets/backtestGraph.png" alt=""/>
      <S.ButtonWrapper>
        <MediaMatch greaterThan="medium" >
            <Button backgroundPrimary size="large">
              Get early access
            </Button>
        </MediaMatch>
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        <MediaMatch lessThan="small">
            <Button backgroundPrimary size="small">
              Get early access
            </Button>
        </MediaMatch>
      </S.ButtonWrapper>
      <S.Link>
        <a href="https://medium.com/heimdall-research-crypto/the-heimdall-social-index-9595fdfb9ddc">Check out the full research at our Medium &#8594; </a>
      </S.Link>
    </S.GraphWrapper>
</>

)


export default Feature

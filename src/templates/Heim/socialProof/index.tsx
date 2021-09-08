import React from 'react'

// eslint-disable-next-line import/extensions
import * as S from './styles'
import Button from '../../../components/Button'
import MediaMatch from '../../../components/MediaMatch'

export const SocialProof = () => (
  <>
    <S.Spot>
      <div />
    </S.Spot>
    <S.Container>
      <S.Title>The power of investing by community</S.Title>
      <S.WrapperItems>
        <MediaMatch greaterThan="large">
          <S.ItemContainer>
            <S.ItemImage>
              <img src="assets/socialInvest.svg" alt="" />
            </S.ItemImage>
            <S.ItemText>
              <S.ItemTitle>Why to invest by communities?</S.ItemTitle>
              <S.ItemSubtitle>
                While Bitcoin is not the most technologically sophisticated
                cryptocurrency, nor the most efficient, it is the largest, most
                popular, and successful cryptocurrency.
              </S.ItemSubtitle>
              <S.ItemSubtitle>
                That is the <strong>network effect</strong>, the people that
                trust and build around the project.
              </S.ItemSubtitle>
            </S.ItemText>
          </S.ItemContainer>

          <S.ItemContainer>
            <S.ItemText>
              <S.ItemTitle>How to gauge community size?</S.ItemTitle>
              <S.ItemSubtitle>
                By using <strong>Heimdall Social Score</strong>, a key metric
                that calculates each user centrality in the social network by
                using algorithms inspired by <strong>Google PageRank™</strong>{' '}
                search engine, in a form that to a community have a high social
                score, this community must have key influencers connected to it.
              </S.ItemSubtitle>
              <S.ItemSubtitle>
                Heimdall Social Score values{' '}
                <strong>quality over quantity.</strong>{' '}
              </S.ItemSubtitle>
            </S.ItemText>
            <S.ItemImage>
              <img src="assets/socialConnection.svg" alt="" />
            </S.ItemImage>
          </S.ItemContainer>
        </MediaMatch>
      </S.WrapperItems>

      <MediaMatch lessThan="large">
        <S.WrapperItems>
          <S.ItemContainer>
            <S.ItemImage>
              <img src="assets/socialInvest.svg" alt="" />
            </S.ItemImage>
            <S.ItemText>
              <S.ItemTitle>Why to invest by communities?</S.ItemTitle>
              <S.ItemSubtitle>
                While Bitcoin is not the most technologically sophisticated
                cryptocurrency, nor the most efficient, it is the largest, most
                popular, and successful cryptocurrency.
              </S.ItemSubtitle>
              <S.ItemSubtitle>
                That is the <strong>network effect</strong>, the people that
                trust and build around the project.
              </S.ItemSubtitle>
            </S.ItemText>
          </S.ItemContainer>
          <S.ItemContainer>
            <S.ItemText>
              <S.ItemImage>
                <img src="assets/socialConnection.svg" alt="" />
              </S.ItemImage>
              <S.ItemTitle>How to gauge community size?</S.ItemTitle>
              <S.ItemSubtitle>
                By using <strong>Heimdall Social Score</strong>, a key metric
                that calculates each user centrality in the social network by
                using algorithms inspired by <strong>Google PageRank™</strong>{' '}
                search engine, in a form that to a community have a high social
                score, this community must have key influencers connected to it.
              </S.ItemSubtitle>
              <S.ItemSubtitle>
                Heimdall Social Score values{' '}
                <strong>quality over quantity.</strong>{' '}
              </S.ItemSubtitle>
            </S.ItemText>
          </S.ItemContainer>
        </S.WrapperItems>
      </MediaMatch>
      <S.Divider>
        <img src="assets/divider.png" alt="" />
      </S.Divider>

      <S.Title>Who turns it into reality?</S.Title>
      <S.ProductWrapper>
        <S.ProductContainer>
          <S.ProductImage>
            <img src="assets/Heimdallwhite.png" alt="" />
          </S.ProductImage>
          <S.ProductText>
            <S.ProductSubtitle>
              Empowered by machine learning and aother powerful algorithms,
              Heimdall feeds data to the Heim Social Index to balance their
              holdings according to the community size and engagement of each
              project.
            </S.ProductSubtitle>
          </S.ProductText>
          <S.Link>
            <a href="https://heimdall.land/">Learn more &#8594; </a>
          </S.Link>
        </S.ProductContainer>

        <S.ProductContainer>
          <S.ProductImage>
            <img src="assets/kassandralogo.png" alt="" />
          </S.ProductImage>
          <S.ProductText>
            <S.ProductSubtitle>
              The Kassandra Protocol connects external data to live
              decentralized ETFs, allowing Heimdall to manage the fund
              allocations while empowering the DAO to curate, approve and manage
              the investable assets for the strategy.
            </S.ProductSubtitle>
          </S.ProductText>
          <S.Link>
            <a href="https://kassandra.finance">Learn more &#8594; </a>
          </S.Link>
        </S.ProductContainer>
      </S.ProductWrapper>
    </S.Container>
  </>
)
export default SocialProof

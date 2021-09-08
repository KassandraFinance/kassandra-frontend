import React from 'react'

import * as S from './styles'
import Button from '../../../components/Button'
import MediaMatch from '../../../components/MediaMatch'
import ModalSignUp from '../../../components/ModalSignUp'

interface IFeatureProps {
  modalSignupOpen: boolean
  setModalSignupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Feature = ({ modalSignupOpen, setModalSignupOpen }: IFeatureProps) => {

  return (
    <>
      <S.Container>
        <div>
          <S.Title>What is the HEIM Social Index</S.Title>
          <S.SubTitle>
            An actively managed decentralized ETF that automatically invests in
            growing communities
          </S.SubTitle>
        </div>
        <S.WrapperItems>
          <S.ItemContainer>
            <S.ItemImage style={{ marginTop: '-24px' }}>
              <img src="assets/connectionHeim.svg" alt="" />
            </S.ItemImage>
            <S.ItemText>
              <S.ItemTitle>A decentralized ETF</S.ItemTitle>
              <S.ItemSubtitle>
                Invest by acquiring a regular ERC20 token that tracks a complex
                strategy while being non-custodial and permissionless.
              </S.ItemSubtitle>
            </S.ItemText>
          </S.ItemContainer>
          <S.ItemContainer>
            <S.ItemImage>
              <img src="assets/balanceHeim.svg" alt="" />
            </S.ItemImage>
            <S.ItemText>
              <S.ItemTitle>Constantly rebalanced</S.ItemTitle>
              <S.ItemSubtitle>
                The portfolio updates assets allocations towards the best
                socially active ones by fetching social data into the blockchain
                every day.
              </S.ItemSubtitle>
            </S.ItemText>
          </S.ItemContainer>
          <S.ItemContainer>
            <S.ItemImage>
              <img src="assets/compassHeim.svg" alt="" />
            </S.ItemImage>
            <S.ItemText>
              <S.ItemTitle>Guided by communities</S.ItemTitle>
              <S.ItemSubtitle>
                Intelligently measures community size by counting the quantity
                and quality of every social interaction with each project in
                real-time.
              </S.ItemSubtitle>
            </S.ItemText>
          </S.ItemContainer>
        </S.WrapperItems>
      </S.Container>
      <S.Spot>
        <div />
      </S.Spot>
      <S.GraphWrapper>
        <S.TextWrapper>
          <S.Title>A backtested strategy</S.Title>
          <S.SubTitle>
            Our research team showed that investing in communities can
            outperform simpler strategies.
          </S.SubTitle>
        </S.TextWrapper>
        <img src="assets/backtestGraph.svg" alt="" />
        <S.ButtonWrapper>
          <MediaMatch greaterThan="large">
            {/* <Button backgroundPrimary size="large" onClick={() => setModalSuccessOpen(true)}> */}
            <Button
              backgroundPrimary
              size="large"
              onClick={() => setModalSignupOpen(true)}
            >
              Get early access
            </Button>
          </MediaMatch>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <MediaMatch lessThan="large">
            {/* <Button backgroundPrimary size="large" onClick={() => setModalSuccessOpen(true)}> */}
            <Button
              backgroundPrimary
              size="medium"
              onClick={() => setModalSignupOpen(true)}
            >
              Get early access
            </Button>
          </MediaMatch>
        </S.ButtonWrapper>
        <S.Link>
          <a href="https://medium.com/heimdall-research-crypto/the-heimdall-social-index-9595fdfb9ddc">
            Check out the full research at our Medium <span>&#8594;</span>{' '}
          </a>
        </S.Link>
      </S.GraphWrapper>
      <ModalSignUp
        modalSignupOpen={modalSignupOpen}
        setModalSignupOpen={setModalSignupOpen}
      />
    </>
  )
}
export default Feature

import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import ModalSocial from '../../../components/ModalSocial'

import * as S from './styles'
import Button from '../../../components/Button'

const Token = () => {

  const { trackEvent } = useMatomo();

  function clickMatomoEvent(action: string, name: string) {
    trackEvent({
      category: "kassandra-page",
      action: action,
      name: name,
    });
  }

  return (
    <S.Container>
      <S.Token>
        <p>OUR PROJECTS</p>
        <S.Divider />
        <h1>the world of data-driven investment funds</h1>
        <span>Tokens backed by a basket of assets, managed by autonomous strategies with data from external data providers</span>
        <S.CardWrapper>
          <S.Card>
            <S.CardHeader>
              <S.ImageWrapper>
                <img src='assets/logoHeimCardHome.png' alt='' />
              </S.ImageWrapper>
            </S.CardHeader>
            <S.TextWrapper>
              <h1>Social Index</h1>
              <p>BY HEIMDALL.LAND</p>
              <span>The Social Index $HEIM reflects the performance of a portfolio selected from the most socially active cryptocurrencies in the past 30 days, using Heimdall Social Score data.</span>
            </S.TextWrapper>
            <S.TokenInfo>
              <S.Price>
                <span>USD 394.34</span>
                <div>
                  <img src="assets/tokenPriceArrow.png" alt="" />
                  <p>6.41%</p>
                </div>
              </S.Price>
              <S.TokensSymbols>
                <img src="assets/coinGroupTokenCard.png" alt="" />
                <span>+12 MORE</span>
              </S.TokensSymbols>
            </S.TokenInfo>
            <img src="assets/tokenCardBar.png" alt="" />
            <S.CardFooter>
              <Button
                backgroundPrimary
                as="a"
                text="Buy $HEIM"
              />
              <div>
                <a href="#">Learn More </a>
                <img src="assets/arrow-circle.png" alt="" />
              </div>

            </S.CardFooter>
          </S.Card>
          <S.ComingSoon>
            <S.ComingSoonContent>
              <img src="assets/comingSoonIconTokenCard.png" alt="" />
              <span>Coming Soon</span>
            </S.ComingSoonContent>
          </S.ComingSoon>
        </S.CardWrapper>
      </S.Token>
      <S.KassandraToken>
        <S.KassandraInfo>
          <p>KASSANDRA TOKEN</p>
          <h1>Be part of the Kassandra ecosystem with $KACY</h1>
          <span>Take the lead and join the first decentralized fund manager through our decentralized governance protocol</span>
          <S.Content>
            <div>
              <S.WrapperIcons>
                <a href="https://discord.gg/2uGEvqNnuq" target="_blank" rel="noopener noreferrer">
                  <img src="assets/Discord.svg" alt="" />
                </a>
              </S.WrapperIcons>
              <S.WrapperIcons>
                <a href="https://t.me/KassandraDAO" target="_blank" rel="noopener noreferrer">
                  <img src="assets/telegram.svg" alt="" />
                </a>
              </S.WrapperIcons>
              <S.WrapperIcons>
                <a href="https://github.com/KassandraFinance" target="_blank" rel="noopener noreferrer">
                  <img src="assets/Github.svg" alt="" />
                </a>
              </S.WrapperIcons>
              <S.WrapperIcons>
                <a href="https://kassandrafoundation.medium.com/" target="_blank" rel="noopener noreferrer">
                  <img src="assets/Medium.svg" alt="" />
                </a>
              </S.WrapperIcons>
              <S.WrapperIcons>
                <a href="https://twitter.com/dao_kassandra" target="_blank" rel="noopener noreferrer">
                  <img src="assets/Twitter.svg" alt="" />
                </a>
              </S.WrapperIcons>
            </div>
          </S.Content>
        </S.KassandraInfo>
        <S.Card>
          <S.KasasndraCardHeader>
            <S.ImageWrapper>
              <img src='assets/logo-64.svg' alt='' />
            </S.ImageWrapper>
          </S.KasasndraCardHeader>
          <S.TextWrapper>
            <h1>KASSANDRA</h1>
            <p>BY KASSANDRA.FINANCE</p>
          </S.TextWrapper>
          <S.TokenInfo>
            <S.Price>
              <span>USD 394.34</span>
              <div>
                <img src="assets/tokenPriceArrow.png" alt="" />
                <p>6.41%</p>
              </div>
            </S.Price>
          </S.TokenInfo>
          <S.CardFooter>
            <Button
              backgroundPrimary
              as="a"
              text="Buy $KACY"
            />
            <div>
              <a href="#">Learn More </a>
              <img src="assets/arrow-circle.png" alt="" />
            </div>

          </S.CardFooter>
        </S.Card>
      </S.KassandraToken>
      <S.Responsabilities>
        <S.ResponsabilitiesTitle>
          <S.ResponsabilitiesDivider />
          <h1>What will you build?</h1>
        </S.ResponsabilitiesTitle>
        <S.ResponsabilitiesCards>
          <S.IconWrapper>
            <img src="assets/adjustIcon.png" alt="" />
          </S.IconWrapper>

          <span>Adjusting <b>parameters</b> and <b>fees</b></span>
        </S.ResponsabilitiesCards>
        <S.ResponsabilitiesCards>
          <S.IconWrapper>
            <img src="assets/deployInvest.png" alt="" />
          </S.IconWrapper>

          <span>Deploying <b>new</b> investment products</span>
        </S.ResponsabilitiesCards>
        <S.ResponsabilitiesCards>
          <S.IconWrapper>
            <img src="assets/curatingIcon.png" alt="" />
          </S.IconWrapper>

          <span><b>Curating</b> whitelists for investable assets</span>
        </S.ResponsabilitiesCards>
        <S.ResponsabilitiesCards>
          <S.IconWrapper>
            <img src="assets/approvingIcon.png" alt="" />
          </S.IconWrapper>

          <span><b>Approving</b> code changes and updates</span>
        </S.ResponsabilitiesCards>
      </S.Responsabilities>
      <S.Token>
        <p>OUR PROJECTS</p>
        <S.Divider />
        <h1>Earn with the success of the Kassandra products</h1>
        <span>Tokens backed by a basket of assets, managed by autonomous strategies with data from external data providers</span>
        <S.KassandraCardWrapper>
          <S.KassandraCard>
            <img src="assets/holdingIcon.png" alt="" />
            <p>5% HOLDING RULE</p>
            <h1>Each launching values $KACY</h1>
            <span>Every new investment product created on Kassandra must hold at least 5% of $KACY tokens as part of its portfolio. This ensures that the success of the products will result in the growth of the $KACY token value.</span>
          </S.KassandraCard>
          <S.KassandraCard style={{ marginTop: '170px' }}>
            <img src="assets/voteIcon.png" alt="" />
            <p>VOTE LOCK</p>
            <h1>Each launching values $KACY</h1>
            <span>When voting in governance proposals $KACY holders may choose to lock their tokens for different time periods and earn more voting power, thus making $KACY more scarce and the governance more secure.</span>
          </S.KassandraCard>
          <S.KassandraCard style={{ marginTop: ' -120px' }}>
            <img src="assets/feeIcon.png" alt="" />
            <p>3% REDEEM FEE</p>
            <h1>Each launching values $KACY</h1>
            <span>A 3% fee is charged whenever investment tokens are redeemed. The fees collected this way are under total governance control and can be used for purchasing and subsequently burn $KACY tokens.</span>
          </S.KassandraCard>
        </S.KassandraCardWrapper>
      </S.Token>
    </S.Container>
  )
}

export default Token

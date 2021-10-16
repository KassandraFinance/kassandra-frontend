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
        </S.Card>
      </S.KassandraToken>
    </S.Container>
  )
}

export default Token

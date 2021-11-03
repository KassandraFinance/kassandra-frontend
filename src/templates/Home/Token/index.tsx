import React from 'react'
import Link from "next/link";
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
    <S.Token id='Token'>
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
            <S.NameAndSymbol>
              <h1>Social Index</h1>
              <h3>$HEIM</h3>
            </S.NameAndSymbol>
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
            <Link href='/products'>
              <Button
                backgroundSecondary
                size='medium'
                text="Buy $HEIM"
              />
            </Link>
            <a href="#">Learn More
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.5 11.5L11.5 8.5L8.5 5.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.5 8.5H11.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>

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
  )
}

export default Token

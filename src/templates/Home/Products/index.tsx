import React from 'react'
import Link from 'next/link'
import { useMatomo } from '@datapunt/matomo-tracker-react'


import * as S from './styles'

const Products = () => {
  const { trackEvent } = useMatomo();

  function clickMatomoEvent(action: string, name: string) {
    trackEvent({
      category: "kassandra-page",
      action: action,
      name: name,
    });
  }
  
  return (
    <S.Products>
      <h1>Products</h1>
      <p>Tokens backed by a basket of assets, managed by autonomous strategies with data from external data providers</p>
      <S.Heim>
        <img src="assets/logo-heim.svg" alt="" />
        <S.HeimDescription>
          <h3>The $HEIM Social Index</h3>
          <p className="first-paragraph">The Social Index $HEIM reflects the performance of a portfolio selected from the most socially active cryptocurrencies in the past 30 days, using Heimdall Social Score data.</p>
          <p className="second-paragraph">$HEIM offers an easy exposure to the hottest cryptocurrencies in the market.</p>
        </S.HeimDescription>
        <S.ButtonContainer>
          <Link href="/heim" ><a onClick={() => clickMatomoEvent("click-to-heim", "products")}>Buy $HEIM</a></Link>
          <S.LearnMore 
            href="https://medium.com/heimdall-research-crypto/the-heimdall-social-index-9595fdfb9ddc" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => clickMatomoEvent("click-to-learn-more", "products")}
            >
              Learn More
          </S.LearnMore>
        </S.ButtonContainer>
      </S.Heim>
      <img className="more-icon" src="assets/more-icon.svg" alt="" width="24" height="48" />
      <p className="more-text">More coming soon</p>
    </S.Products>
  )
}

export default Products
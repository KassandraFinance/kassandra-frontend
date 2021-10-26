import React from 'react'
import Link from 'next/link'
import { useMatomo } from '@datapunt/matomo-tracker-react'



import * as S from './styles'
import Button from '../../../components/Button'

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
      <S.TextWrapper>
        <p>WHAT IS KASSANDRA DAO?</p>
        <h1>a smart method to ensure value for your money</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quaerat reiciendis illum excepturi commodi dolorem repellat voluptatum consequatur, quis id doloremque dicta vitae perferendis officiis. Quod molestias animi corrupti nihil.</span>
        <S.Divider />
        <S.Link>
          <span>How it Works
          </span>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.5 11.5L11.5 8.5L8.5 5.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.5 8.5H11.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </S.Link>
        <S.Link>
          <span>Read the Whitepaper</span>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.5 11.5L11.5 8.5L8.5 5.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.5 8.5H11.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </S.Link>
      </S.TextWrapper>
      <S.CardContainer>
        <S.Card>
          <S.IconWrapper>
            <img src="assets/home-products-locker.png" alt="" />
          </S.IconWrapper>
          <p>NON-CUSTODIAL</p>
          <span>Your funds managed by public, secure, and predictable smart-contracts</span>
        </S.Card>
        <S.Card>
          <S.IconWrapper>
            <img src="assets/home-products-graph.png" alt="" />
          </S.IconWrapper>
          <p>PERFORMANCE</p>
          <span>Invest, transfer and redeem investment products without relying on third-parties</span>
        </S.Card>
        <S.Card>
          <S.IconWrapper>
            <img src="assets/home-products-gift.png" alt="" />
          </S.IconWrapper>
          <p>REWARD</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </S.Card>
        <S.Card>
          <S.IconWrapper>
            <img src="assets/home-products-check.png" alt="" />
          </S.IconWrapper>
          <p>ACTIVELY MANAGED</p>
          <span>Outsource the management of your money to data-driven quantitative models</span>
        </S.Card>
      </S.CardContainer>
    </S.Products>

  )
}

export default Products

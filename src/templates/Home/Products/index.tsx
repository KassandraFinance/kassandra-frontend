import React from 'react'

import * as S from './styles'

const Products = () => {
  return (
    <S.Products>
      <S.TextWrapper>
        <p>WHAT IS KASSANDRA DAO?</p>
        <h1>a decentralized quantitative fund manager</h1>
        <span>
          Kassandra is a decentralized autonomous organization that governs a
          set of tokenized data-driven investment funds, bringing pragmatic but
          yet efficient ways to let your money work for you.
        </span>
        <S.Divider />
        <S.Link
          href="https://drive.google.com/file/d/12jxIMtBVqaY7bMbLmt52Lo0xDFUURZsb/view?usp=sharing"
          target="_blank"
          rel="noopener noreferral"
        >
          <span>Read the Whitepaper</span>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 11.5L11.5 8.5L8.5 5.5"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.5 8.5H11.5"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </S.Link>
        <S.Link>
          {/* <span>How it Works
          </span>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.5 11.5L11.5 8.5L8.5 5.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.5 8.5H11.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
          </svg> */}
        </S.Link>
      </S.TextWrapper>
      <S.CardContainer>
        <S.Card>
          <S.IconWrapper>
            <img src="assets/home-products-locker.svg" alt="" />
          </S.IconWrapper>
          <p>NON-CUSTODIAL</p>
          <span>
            Your funds managed by public, secure, and predictable smart-contracts
          </span>
        </S.Card>
        <S.Card>
          <S.IconWrapper>
            <img src="assets/home-products-check.svg" alt="" />
          </S.IconWrapper>
          <p>PERMISSIONLESS</p>
          <span>
            Invest, transfer and redeem investment products without relying on third-parties
          </span>
        </S.Card>
        <S.Card>
          <S.IconWrapper>
            <img src="assets/home-products-gift.svg" alt="" />
          </S.IconWrapper>
          <p>REWARD</p>
          <span>
            Earn governance token rewards while investing in smart strategies
          </span>
        </S.Card>
        <S.Card>
          <S.IconWrapper>
            <img src="assets/home-products-graph.svg" alt="" />
          </S.IconWrapper>
          <p>ACTIVELY MANAGED</p>
          <span>Outsource your money management to data models</span>
        </S.Card>
      </S.CardContainer>
    </S.Products>
  )
}

export default Products

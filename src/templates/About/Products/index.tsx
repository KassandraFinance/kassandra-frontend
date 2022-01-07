import React from 'react'

import * as S from './styles'

const Products = () => {
  return (
    <S.Container>
      <S.ImageKassandra>
        <img
          src="assets/about-products.svg"
          alt="Understanding the parts that make Kassandra"
          width="594"
          height="568"
        />
      </S.ImageKassandra>
      <S.CardWrapper>
        <S.Card>
          <S.MobileCardTitle>
            <img src="assets/about-products-icon.svg" alt="" />
            <h3>PROTOCOL</h3>
          </S.MobileCardTitle>
          <p>
            The Kassandra Protocol is the core technology that allows the DAO to
            deploy investment products. It starts from the premise of building
            tokenized investment baskets that are permissionless, non-custodial,
            and actively managed, but yet monetary efficient.
          </p>
          <S.Link
            href="https://kassandrafoundation.medium.com/kassandra-protocol-d9cb71c02b02"
            target="_blank"
            rel="noopener noreferral"
          >
            <span>How It Works</span>
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
        </S.Card>
        <S.Card>
          <S.MobileCardTitle>
            <img src="assets/about-products-icon.svg" alt="" />
            <h3>DAO</h3>
          </S.MobileCardTitle>
          <p>
            The Kassandra DAO is the only owner of Kassandra Protocol, which is
            represented by the KACY token holders and earns with management fees
            over all the Kassandra investment funds.
          </p>
          <S.Link
            href="https://kassandrafoundation.medium.com/kassandra-dao-token-8bc046d55a00"
            target="_blank"
            rel="noopener noreferral"
          >
            <span>Learn Documentation</span>
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
        </S.Card>
        <S.Card>
          <S.MobileCardTitle>
            <img src="assets/about-products-icon.svg" alt="" />
            <h3>FOUNDATION</h3>
          </S.MobileCardTitle>
          <p>
            The Kassandra Foundation is the entity funded by the token sales
            events, that is runned by the core team of Kassandra founders, with
            the purpose to promote and develop Kassandra in both technological
            and marketing aspects.
          </p>
          <S.Link
            href=" https://kassandrafoundation.medium.com/kassandra-foundation-team-4f46bf13c887"
            target="_blank"
            rel="noopener noreferral"
          >
            <span>Connect With Us</span>
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
        </S.Card>
      </S.CardWrapper>
    </S.Container>
  )
}

export default Products

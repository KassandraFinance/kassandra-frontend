import React from 'react'
import Link from 'next/link'
import Button from '../Button'

import * as S from './styles'

const BannerCTA = () => {
  return (
    <S.Background>
      <S.Container>
        <S.ImageWrapper>
          <img src="assets/heim-coin-banner.png" alt="" />
        </S.ImageWrapper>

        <S.TextWrapper>
          <p>Kassandra products</p>
          <h1>Exposure to the hottest assets on Avalanche</h1>
          <span>
            A single asset that tracks the performance of the cryptocurrencies
            with the most solid and engaged communities running on Avalanche
            eoossystem.
          </span>
          <S.BannerFooter>
            <Link href="/products" passHref>
              <Button backgroundSecondary size="medium" text="Buy $HEIM" />
            </Link>
            <a href="#">
              Learn More
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
            </a>
          </S.BannerFooter>
        </S.TextWrapper>
      </S.Container>
    </S.Background>
  )
}

export default BannerCTA

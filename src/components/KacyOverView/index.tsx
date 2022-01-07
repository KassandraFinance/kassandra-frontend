//create a new component that displays the token price
import React from 'react'
import * as S from './styles'

const KacyOverView = () => {
  return (
    <>
      <S.TokenInfoWrapper>
        <S.TitleandIcon>
          <S.Icon src="/assets/token-distribution-icon.svg" />
          <h3>$KACY Overview</h3>
        </S.TitleandIcon>
        <S.TokenInfo>
          <S.Values>
            <p>PRICE</p>
            <span>$12,95923</span>
          </S.Values>
          <S.Values>
            <p>MARKET CAP</p>
            <span>$12,95923</span>
          </S.Values>
          <S.Values>
            <p>CIRCULATING SUPPLY</p>
            <span>$12,95923</span>
          </S.Values>
          <S.Values>
            <p>TOTAL SUPPLY</p>
            <span>$12,95923</span>
          </S.Values>
        </S.TokenInfo>
      </S.TokenInfoWrapper>
      <S.Link
        href="https://kassandrafoundation.medium.com/kassandra-dao-token-8bc046d55a00"
        target="_blank"
        rel="noopener noreferrer"
      >
        <a>
          Check more info about the $KACY token
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
      </S.Link>
    </>
  )
}

export default KacyOverView

import React from 'react'

import * as S from './styles'

const Products = () => {
  return (
    <S.Container>
      <S.ImageKassandra>
        <img
          src="assets/about-products.png"
          alt="Understanding the parts that make Kassandra"
        />
      </S.ImageKassandra>
      <S.CardWrapper>
        <S.Card>
          <S.MobileCardTitle>
            <img src="assets/about-products-icon.svg" alt="" />
            <h3>PROTOCOL</h3>
          </S.MobileCardTitle>
          <p>
            A cursus quis maecenas mi. Porttitor et, a, adipiscing arcu amet
            eleifend sed. Eget sed libero vitae id facilisi lacus, risus.
            Consectetur bibendum in porta neque. Mi id augue massa sagittis,
            velit mollis volutpat, pretium.{' '}
          </p>
          <S.Link
            href="https://drive.google.com/file/d/12jxIMtBVqaY7bMbLmt52Lo0xDFUURZsb/view?usp=sharing"
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
            A cursus quis maecenas mi. Porttitor et, a, adipiscing arcu amet
            eleifend sed. Eget sed libero vitae id facilisi lacus, risus.
            Consectetur bibendum in porta neque. Mi id augue massa sagittis,
            velit mollis volutpat, pretium.{' '}
          </p>
          <S.Link
            href="https://drive.google.com/file/d/12jxIMtBVqaY7bMbLmt52Lo0xDFUURZsb/view?usp=sharing"
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
            A cursus quis maecenas mi. Porttitor et, a, adipiscing arcu amet
            eleifend sed. Eget sed libero vitae id facilisi lacus, risus.
            Consectetur bibendum in porta neque. Mi id augue massa sagittis,
            velit mollis volutpat, pretium.{' '}
          </p>
          <S.Link
            href="https://drive.google.com/file/d/12jxIMtBVqaY7bMbLmt52Lo0xDFUURZsb/view?usp=sharing"
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

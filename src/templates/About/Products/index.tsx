import React from 'react'

import * as S from './styles'

const Products = () => {
  return (
    <S.Container>
      <S.ImageKassandra>
        <img src="assets/about-products.png" alt="Kassandra products" />
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
      <S.KassandraToken>
        <S.KassandraInfo>
          <p>KASSANDRA TOKEN</p>
          <h1>Be part of the Kassandra ecosystem with $KACY</h1>
          <span>
            Take the lead and join the first decentralized fund manager through
            our decentralized governance protocol
          </span>
        </S.KassandraInfo>
        <S.KassandraCard>
          <S.KasasndraCardHeader>
            <S.ImageWrapper>
              <img src="assets/logo-64.svg" alt="" />
            </S.ImageWrapper>
          </S.KasasndraCardHeader>
          <S.TextWrapper>
            <S.NameAndSymbol>
              <h1>Kassandra</h1>
              <h3>$KACY</h3>
            </S.NameAndSymbol>
            <p>BY KASSANDRA.FINANCE</p>
          </S.TextWrapper>
          <S.CardFooter>
            <a
              href="https://kassandrafoundation.medium.com/kassandra-dao-token-8bc046d55a00"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            <div>
              <S.WrapperIcons>
                <a
                  href="https://discord.gg/2uGEvqNnuq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="assets/Discord.svg" alt="" />
                </a>
              </S.WrapperIcons>
              <S.WrapperIcons>
                <a
                  href="https://t.me/KassandraDAO"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="assets/telegram.svg" alt="" />
                </a>
              </S.WrapperIcons>
              <S.WrapperIcons>
                <a
                  href="https://github.com/KassandraFinance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="assets/Github.svg" alt="" />
                </a>
              </S.WrapperIcons>
              <S.WrapperIcons>
                <a
                  href="https://kassandrafoundation.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="assets/Medium.svg" alt="" />
                </a>
              </S.WrapperIcons>
              <S.WrapperIcons>
                <a
                  href="https://twitter.com/dao_kassandra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="assets/Twitter.svg" alt="" />
                </a>
              </S.WrapperIcons>
            </div>
          </S.CardFooter>
        </S.KassandraCard>
      </S.KassandraToken>
      <S.Responsabilities>
        <S.ResponsabilitiesTitle>
          <S.ResponsabilitiesDivider />
          <h1>What will you build?</h1>
        </S.ResponsabilitiesTitle>

        <S.MobileCards>
          <S.ResponsabilitiesCards>
            <S.IconWrapper>
              <img src="assets/adjustIcon.png" alt="" />
            </S.IconWrapper>
            <span>
              {' '}
              <b>Adjust</b> parameters and fees
            </span>
          </S.ResponsabilitiesCards>

          <S.ResponsabilitiesCards>
            <S.IconWrapper>
              <img src="assets/deployInvest.png" alt="" />
            </S.IconWrapper>

            <span>
              {' '}
              <b>Deploy</b> new investment products
            </span>
          </S.ResponsabilitiesCards>

          <S.ResponsabilitiesCards>
            <S.IconWrapper>
              <img src="assets/curatingIcon.png" alt="" />
            </S.IconWrapper>
            <span>
              <b>Curate</b> whitelists for investable assets
            </span>
          </S.ResponsabilitiesCards>

          <S.ResponsabilitiesCards>
            <S.IconWrapper>
              <img src="assets/approvingIcon.png" alt="" />
            </S.IconWrapper>
            <span>
              <b>Approve</b> code changes and updates
            </span>
          </S.ResponsabilitiesCards>
        </S.MobileCards>
      </S.Responsabilities>
    </S.Container>
  )
}

export default Products

import React from 'react'
import Button from '../../../components/Button'

import * as S from './styles'

const KassandraToken = () => {
  return (
    <S.Container>
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
          <S.TextWrapper>
            <h1>Kassandra</h1>
            <p>BY KASSANDRA.FINANCE</p>
          </S.TextWrapper>
          <S.TokenInfo>
            <S.Price>
              <span>USD 394.34</span>
              <div>
                <img src="assets/tokenPriceArrow.png" alt="" />
                <p>6.41%</p>
              </div>
            </S.Price>
          </S.TokenInfo>
          <S.CardFooter>
            <Button
              backgroundPrimary
              as="a"
              href="/products"
              text="Buy $KACY"
            />
            <div>
              <a href="https://kassandrafoundation.medium.com/kassandra-dao-token-8bc046d55a00?source=user_profile---------0----------------------------">Learn More </a>
              <img src="assets/arrow-circle.png" alt="" />
            </div>

          </S.CardFooter>
        </S.Card>
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
            <span>Adjusting <b>parameters</b> and <b>fees</b></span>
          </S.ResponsabilitiesCards>

          <S.ResponsabilitiesCards>
            <S.IconWrapper>
              <img src="assets/deployInvest.png" alt="" />
            </S.IconWrapper>

            <span>Deploying <b>new</b> investment products</span>
          </S.ResponsabilitiesCards>

          <S.ResponsabilitiesCards>
            <S.IconWrapper>
              <img src="assets/curatingIcon.png" alt="" />
            </S.IconWrapper>
            <span><b>Curating</b> whitelists for investable assets</span>
          </S.ResponsabilitiesCards>

          <S.ResponsabilitiesCards>
            <S.IconWrapper>
              <img src="assets/approvingIcon.png" alt="" />
            </S.IconWrapper>
            <span><b>Approving</b> code changes and updates</span>
          </S.ResponsabilitiesCards>
        </S.MobileCards>

      </S.Responsabilities>
    </S.Container>
  )
}

export default KassandraToken

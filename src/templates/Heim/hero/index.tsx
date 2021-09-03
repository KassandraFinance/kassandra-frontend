import React, { useState } from 'react'

// eslint-disable-next-line import/extensions
import { Close } from 'styled-icons/material-outlined'
import Link from 'next/link'
import * as S from './styles'
import Button from '../../../components/Button'
import MediaMatch from '../../../components/MediaMatch'
import ModalSocial from '../ModalSocial'

export function Hero() {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false)
  return (
      <>
      <S.Container>
        <MediaMatch greaterThan="large">
          {/* <a href="https://twitter.com/dao_kassandra" target="_blank" rel="noopener noreferrer">Coming soon...</a> */}
                <div>
                  <S.Title>Get exposure to the hottest communities in the market.</S.Title>
                  <S.SubTitle>Introducing a single asset that tracks the performance of the cryptocurrencies with the most solid and engaged communities</S.SubTitle>

                  <S.ButtonWrapper>
                    <Button backgroundPrimary size="large">
                      Get early access
                    </Button>
                    <Button size="large" backgroundBlack onClick={() => setModalOpen(true)}>
                      Join the community
                    </Button>
                  </S.ButtonWrapper>
              </div>
            </MediaMatch>
                <S.ImageDesktop>
                  <img src="assets/HeimCurrency.svg" alt="" />
                </S.ImageDesktop>

            <MediaMatch lessThan="large">
            <S.Title>Get exposure to the hottest communities in the market.</S.Title>
            <S.Image>
              <img src="assets/HeimCurrency.svg" alt="" />
            </S.Image>
            <S.SubTitle>Introducing a single asset that tracks the performance of the cryptocurrencies with the most solid and engaged communities</S.SubTitle>
            <S.ButtonWrapper>
              <Button backgroundPrimary size="huge">
                Get early access
              </Button>
              <Button size="huge" backgroundBlack  onClick={() => setModalOpen(true)}>
                Join the community
              </Button>
            </S.ButtonWrapper>

          </MediaMatch>
        {/* <S.Image>
          <img src="assets/HeimCurrency.svg" alt="" />
        </S.Image> */}
        <S.FloatImage>
          <img src="assets/Certik.svg" alt="" />
        </S.FloatImage>
        <ModalSocial
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
        {/* <S.Modal isOpen={isOpen} aria-label="modal">

          <S.ModalHeading>
            <S.ModalText>
              Connect with us
            </S.ModalText>
            <S.Close
              role="button"
              aria-label="close modal"
              onClick={() => setIsOpen(false)}
              >
              <Close size={40} />
            </S.Close>
          </S.ModalHeading>
          <S.Content>
          <S.WrapperIcons>
            <a href="https://discord.gg/2uGEvqNnuq" target="_blank" rel="noopener noreferrer">
              <img src="assets/discord-icon.svg" alt="" />
            </a>
            Discord
          </S.WrapperIcons>
          <S.WrapperIcons>
            <a href="https://t.me/KassandraDAO" target="_blank" rel="noopener noreferrer">
                <img src="assets/telegram-icon.svg" alt="" />
            </a>
            Telegram
          </S.WrapperIcons>
          <S.WrapperIcons>
            <a href="https://github.com/KassandraFinance" target="_blank" rel="noopener noreferrer">
                <img src="assets/github-icon.svg" alt="" />
            </a>
            GitHub
          </S.WrapperIcons>
          <S.WrapperIcons>
            <a href="https://kassandrafoundation.medium.com/" target="_blank" rel="noopener noreferrer">
                <img src="assets/medium-icon.svg" alt="" />
            </a>
            Medium
          </S.WrapperIcons>
          <S.WrapperIcons>
            <a href="https://twitter.com/dao_kassandra" target="_blank" rel="noopener noreferrer">
                <img src="assets/twitter-icon.svg" alt="" />
            </a>
                Twitter
            </S.WrapperIcons>
          </S.Content>
        </S.Modal> */}
            </S.Container>

    </>

  )
}


export default Hero

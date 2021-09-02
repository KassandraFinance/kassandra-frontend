import React from 'react'

import {
  Backdrop,
  BorderGradient,
  BackgroundBlack,
  Content,
  InterBackground,
  // Main,
  // Amount,
  // Line,
  // ButtonContainer,
  // ConfirmButton,
  // GetKacyButton,
  ModalText,
  WrapperIcons
 } from './styles'

 interface IModalSocialProps {
  modalOpen: boolean
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>

}

const ModalSocial = ({
  modalOpen,
  setModalOpen,
   }: IModalSocialProps) => {

  function handleCloseModal() {
    setModalOpen(false)
  }

  return (
    <>
      <Backdrop onClick={handleCloseModal} style={{display: modalOpen ? 'block' : 'none'}} />
      <BorderGradient
        modalOpen={modalOpen}
      >
        <BackgroundBlack>
          <InterBackground >
            <ModalText>
            <span>Connect with us</span>
            </ModalText>
            <button type="button" onClick={() => setModalOpen(false)}><img src="assets/close.svg" alt=""/> </button>
          </InterBackground>
          <Content>
            <WrapperIcons>
              <a href="https://discord.gg/2uGEvqNnuq" target="_blank" rel="noopener noreferrer">
                <img src="assets/discord-icon.svg" alt="" />
              </a>
              <span>Discord</span>
            </WrapperIcons>
            <WrapperIcons>
              <a href="https://t.me/KassandraDAO" target="_blank" rel="noopener noreferrer">
                  <img src="assets/telegram-icon.svg" alt="" />
              </a>
              <span>Telegram</span>
            </WrapperIcons>
            <WrapperIcons>
              <a href="https://github.com/KassandraFinance" target="_blank" rel="noopener noreferrer">
                  <img src="assets/github-icon.svg" alt="" />
              </a>
              <span>GitHub</span>
            </WrapperIcons>
            <WrapperIcons>
              <a href="https://kassandrafoundation.medium.com/" target="_blank" rel="noopener noreferrer">
                  <img src="assets/medium-icon.svg" alt="" />
              </a>
              <span>Medium</span>
            </WrapperIcons>
            <WrapperIcons>
              <a href="https://twitter.com/dao_kassandra" target="_blank" rel="noopener noreferrer">
                  <img src="assets/twitter-icon.svg" alt="" />
              </a>
              <span>Twitter</span>
            </WrapperIcons>
            </Content>
          </BackgroundBlack>
      </BorderGradient>
    </>
  )
}

export default ModalSocial

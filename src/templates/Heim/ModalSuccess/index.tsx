import React from 'react'

import {
  Backdrop,
  BorderGradient,
  BackgroundBlack,
  Content,
  InterBackground,
  ModalText,
  WrapperIcons
 } from './styles'

 interface IModalSocialProps {
  modalSuccessOpen: boolean
  setModalSuccessOpen: React.Dispatch<React.SetStateAction<boolean>>

}

const ModalSuccess = ({
  modalSuccessOpen,
  setModalSuccessOpen,
   }: IModalSocialProps) => {

  function handleCloseModal() {
    setModalSuccessOpen(false)
  }

  return (
    <>
      <Backdrop onClick={handleCloseModal} style={{display: modalSuccessOpen ? 'block' : 'none'}} />
      <BorderGradient
        modalOpen={modalSuccessOpen}
      >
        <BackgroundBlack>
          <InterBackground >
            <ModalText>
            <span>Subscribe successful!</span>
            </ModalText>
            <button type="button" onClick={() => setModalSuccessOpen(false)}><img src="assets/close.svg" alt=""/> </button>
          </InterBackground>
          <Content>
          <ModalText>
            <span>Keep in touch with the community:</span>
            </ModalText>
            <div style={{ display: 'flex' }}>
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
            </div>
            </Content>
          </BackgroundBlack>
      </BorderGradient>
    </>
  )
}

export default ModalSuccess

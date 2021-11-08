import Link from 'next/link'
import React from 'react'

import * as S from './styles'


interface IModalWalletConnect {
  connect: () => void
  // eslint-disable-next-line prettier/prettier
  modalOpen: boolean
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>

}

const ModalWalletConnect = ({
  modalOpen,
  setModalOpen,
  connect,
}: IModalWalletConnect) => {

  function handleCloseModal() {
    setModalOpen(false)
  }

  return (
    <>
      <S.Backdrop onClick={handleCloseModal} style={{ display: modalOpen ? 'block' : 'none' }} />
      <S.Container
        modalOpen={modalOpen}
      >
        <S.BackgroundBlack>
          <S.ModalText>
            <span>Wallet connection is required</span>
            <button type="button" onClick={() => setModalOpen(false)}><img src="assets/close.svg" alt="" /> </button>
          </S.ModalText>

          <S.Content>
            <S.WrapperIcons
              type="button"
              onClick={() => {
                setModalOpen(false)
                connect()
              }}
            >
              <img src="assets/metaMaskIcon.svg" alt="" />
              <span>Metamask</span>
            </S.WrapperIcons>
          </S.Content>
        </S.BackgroundBlack>
      </S.Container>
    </>
  )
}

export default ModalWalletConnect

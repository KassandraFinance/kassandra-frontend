import Link from 'next/link'
import React from 'react'

import * as S from './styles'


 interface IModalWalletConnect {
  connect: () => void
  // eslint-disable-next-line prettier/prettier
  modalOpen: boolean
	otherStakingPools: boolean
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>

}

const ModalWalletConnect = ({
  modalOpen,
  setModalOpen,
  connect,
	otherStakingPools,
   }: IModalWalletConnect) => {

  function handleCloseModal() {
    setModalOpen(false)
  }

  return (
    <>
      <S.Backdrop onClick={handleCloseModal} style={{display: modalOpen ? 'block' : 'none'}} />
      <S.BorderGradient
        modalOpen={modalOpen}
        otherStakingPools={otherStakingPools}
      >
        <S.BackgroundBlack>
          <S.InterBackground otherStakingPools={otherStakingPools}>
            <S.ModalText>
            <span>Wallet connection is required</span>
            </S.ModalText>
            <button type="button" onClick={() => setModalOpen(false)}><img src="assets/close.svg" alt=""/> </button>
          </S.InterBackground>
            <S.Content>
              <S.WrapperIcons
                type="button"
                onClick={() => {
                  setModalOpen(false)
                  connect()}}
                otherStakingPools={otherStakingPools}>
                <img src="assets/metaMaskIcon.svg" alt="" />
                <span>Metamask</span>
              </S.WrapperIcons>
            </S.Content>
          </S.BackgroundBlack>
      </S.BorderGradient>
    </>
  )
}

export default ModalWalletConnect

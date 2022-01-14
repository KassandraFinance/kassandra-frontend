import React from 'react'

import useConnect from '../../hooks/useConnect'

import * as S from './styles'

interface IModalWalletConnect {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalWalletConnect = ({
  modalOpen,
  setModalOpen
}: IModalWalletConnect) => {
  const { connect } = useConnect()

  function handleCloseModal() {
    setModalOpen(false)
  }

  return (
    <>
      <S.Backdrop
        onClick={handleCloseModal}
        style={{ display: modalOpen ? 'block' : 'none' }}
      />
      <S.Container modalOpen={modalOpen}>
        <S.BackgroundBlack>
          <S.ModalText>
            <span>Wallet connection is required</span>
            <button type="button" onClick={() => setModalOpen(false)}>
              <img src="/assets/close.svg" alt="Close" />{' '}
            </button>
          </S.ModalText>

          <S.Content>
            <S.WrapperIconsBackGround
              type="button"
              onClick={() => {
                setModalOpen(false)
                connect()
              }}
            >
              <S.WrapperIcons>
                <img src="/assets/metaMaskIcon.svg" alt="" />
                <span>Metamask</span>
              </S.WrapperIcons>
            </S.WrapperIconsBackGround>
          </S.Content>
        </S.BackgroundBlack>
      </S.Container>
    </>
  )
}

export default ModalWalletConnect

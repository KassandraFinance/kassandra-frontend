import React from 'react'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import web3 from '../../utils/web3'
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
  const { connect, connectWalletConnect } = useConnect()

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
          <S.ModalTitle>
            <span>Wallet connection is required</span>
            <button type="button" onClick={() => setModalOpen(false)}>
              <img src="/assets/close.svg" alt="Close" />{' '}
            </button>
          </S.ModalTitle>

          <S.Content>
            <Tippy
              content={
                <S.Tooltip>
                  <a href="https://metamask.io/">
                    Metamask
                    <img src="/assets/externalLink.svg" alt="" />
                  </a>{' '}
                  is not installed on this browser
                </S.Tooltip>
              }
              disabled={web3.currentProvider !== null}
              hideOnClick={false}
              interactive
            >
              <S.WrapperIconsBackGround
                className={web3.currentProvider === null ? 'disabled' : ''}
                type="button"
                onClick={() => {
                  if (web3.currentProvider !== null) {
                    setModalOpen(false)
                    connect()
                  }
                }}
              >
                <S.WrapperIcons>
                  <img src="/assets/metaMaskIcon.svg" alt="" />
                  <span>Metamask</span>
                </S.WrapperIcons>
              </S.WrapperIconsBackGround>
            </Tippy>
            <S.WrapperIconsBackGround
              type="button"
              onClick={() => {
                setModalOpen(false)
                connectWalletConnect(false)
              }}
            >
              <S.WrapperIcons>
                <img src="/assets/connectWalletIcon.svg" alt="" />
                <span>WalletConnect</span>
              </S.WrapperIcons>
            </S.WrapperIconsBackGround>
          </S.Content>
        </S.BackgroundBlack>
      </S.Container>
    </>
  )
}

export default ModalWalletConnect

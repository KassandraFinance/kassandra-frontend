import React from 'react'

// import detectEthereumProvider from '@metamask/detect-provider'

import useConnect from '../../../hooks/useConnect'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import * as S from './styles'

interface IModalWalletConnect {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalWalletConnect = ({ setModalOpen }: IModalWalletConnect) => {
  const { connect, connectToWalletConnect } = useConnect()
  const [hasEthereumProvider, setHasEthereumProvider] = React.useState(false)

  function handleCloseModal() {
    setModalOpen(false)
  }

  // React.useEffect(() => {
  //   const checkEthereumProvider = async () => {
  //     const provider = await detectEthereumProvider()

  //     if (provider) {
  //       setHasEthereumProvider(true)
  //     } else {
  //       setHasEthereumProvider(false)
  //     }
  //   }

  //   checkEthereumProvider()
  // }, [modalOpen])

  return (
    <>
      <S.Backdrop onClick={handleCloseModal} />
      <S.Container>
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
                  <a
                    href="https://metamask.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Metamask
                    <img src="/assets/externalLink.svg" alt="" />
                  </a>
                  is not installed on this browser
                </S.Tooltip>
              }
              disabled={hasEthereumProvider}
              hideOnClick={false}
              interactive
            >
              <S.WrapperIconsBackGround
                className={hasEthereumProvider ? '' : 'disabled'}
                type="button"
                onClick={() => {
                  if (hasEthereumProvider) {
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
                connectToWalletConnect()
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

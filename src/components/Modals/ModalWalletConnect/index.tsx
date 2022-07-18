import React from 'react'
import detectEthereumProvider from '@metamask/detect-provider'

import useConnect from '../../../hooks/useConnect'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import WalletConnecting from './WalletConnecting'

import * as S from './styles'

interface IModalWalletConnect {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalWalletConnect = ({ setModalOpen }: IModalWalletConnect) => {
  const { connect, connectToWalletConnect, isConnected } = useConnect()

  const [hasEthereumProvider, setHasEthereumProvider] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [provider, serProvider] = React.useState('')

  function handleCloseModal() {
    setModalOpen(false)
  }

  React.useEffect(() => {
    const checkEthereumProvider = async () => {
      const provider = await detectEthereumProvider()

      if (provider) {
        setHasEthereumProvider(true)
      } else {
        setHasEthereumProvider(false)
      }
    }

    checkEthereumProvider()
  }, [])

  return (
    <>
      <S.Backdrop onClick={handleCloseModal} />
      <S.Container>
        <S.BackgroundBlack>
          <S.ModalTitle>
            <span>Wallet connection is required</span>
            <button type="button" onClick={() => setModalOpen(false)}>
              <img src="/assets/utilities/close-icon.svg" alt="Close" />{' '}
            </button>
          </S.ModalTitle>

          {!loading ? (
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
                      <img src="/assets/utilities/external-link.svg" alt="" />
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
                      serProvider('metamask')
                      setLoading(true)
                      connect()
                    }
                  }}
                >
                  <S.WrapperIcons>
                    <img src="/assets/logos/metamask.svg" alt="" />
                    <span>Metamask</span>
                  </S.WrapperIcons>
                </S.WrapperIconsBackGround>
              </Tippy>

              <S.WrapperIconsBackGround
                type="button"
                onClick={() => {
                  serProvider('walletConnect')
                  setLoading(true)
                  connectToWalletConnect()
                }}
              >
                <S.WrapperIcons>
                  <img src="/assets/logos/connect-wallet.svg" alt="" />
                  <span>WalletConnect</span>
                </S.WrapperIcons>
              </S.WrapperIconsBackGround>
            </S.Content>
          ) : (
            <S.Content>
              <WalletConnecting
                provider={provider}
                isConnected={isConnected}
                setModalOpen={setModalOpen}
              />
            </S.Content>
          )}
        </S.BackgroundBlack>
      </S.Container>
    </>
  )
}

export default ModalWalletConnect

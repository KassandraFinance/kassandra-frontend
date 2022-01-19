import React from 'react'
import WalletConnectProvider from '@walletconnect/web3-provider'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'
import Web3 from 'web3'

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
  const [state, setState] = React.useState<any>()
  const { connect } = useConnect()

  function handleCloseModal() {
    setModalOpen(false)
  }

  async function connector() {
    // bridge url
    const bridge = 'https://bridge.walletconnect.org'

    // create new connector
    const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal })
    if (!connector.connected) {
      // create new session
      console.log(connector)
      await connector.createSession()
    }

    subscribeToEvents(connector)
    setState(connector)
  }

  async function subscribeToEvents(connector: WalletConnect) {
    if (!connector) {
      return
    }

    web3.eth.personal.getAccounts(account => console.log(account))

    // Subscribe to connection events
    connector.on(
      'connect',
      (error: any, payload: { params: { accounts: any, chainId: any }[] }) => {
        if (error) {
          throw error
        }

        // Get provided accounts and chainId
        const { accounts, chainId } = payload.params[0]
        // handleRequestAccounts(accounts)
      }
    )

    connector.on(
      'session_update',
      (error: any, payload: { params: { accounts: any, chainId: any }[] }) => {
        if (error) {
          throw error
        }

        // Get updated accounts and chainId
        const { accounts, chainId } = payload.params[0]
      }
    )

    connector.on('disconnect', (error: any, payload: any) => {
      if (error) {
        throw error
      }
      // Delete connector
    })

    if (connector.connected) {
      const { chainId, accounts } = connector
      const address = accounts[0]
      setState({
        connected: true,
        chainId,
        accounts,
        address
      })
    }

    setState(connector)
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
            <span>Choose your wallet</span>
            <button type="button" onClick={() => setModalOpen(false)}>
              <img src="/assets/close.svg" alt="Close" />{' '}
            </button>
          </S.ModalText>

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
          </S.Content>
        </S.BackgroundBlack>
      </S.Container>
    </>
  )
}

export default ModalWalletConnect

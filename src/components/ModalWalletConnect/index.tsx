import React from 'react'
import WalletConnectProvider from '@walletconnect/web3-provider'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'
import Web3 from 'web3'

import useConnect from '../../hooks/useConnect'

import web3 from '../../utils/web3'

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
  const { handleRequestAccounts } = useConnect()

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
        handleRequestAccounts(accounts)
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
              }}
            >
              <S.WrapperIcons>
                <img src="/assets/metaMaskIcon.svg" alt="" />
                <span>Metamask</span>
              </S.WrapperIcons>
            </S.WrapperIconsBackGround>
            <S.WrapperIconsBackGround
              type="button"
              onClick={() => {
                setModalOpen(false)
                connector()
              }}
            >
              <S.WrapperIcons>
                <img src="/assets/metaMaskIcon.svg" alt="" />
                <span>Wallet Connect</span>
              </S.WrapperIcons>
            </S.WrapperIconsBackGround>
            <S.WrapperIconsBackGround
              type="button"
              onClick={() => {
                setModalOpen(false)
                state?.killSession()
              }}
            >
              <S.WrapperIcons>
                <img src="/assets/metaMaskIcon.svg" alt="" />
                <span>Disconnect</span>
              </S.WrapperIcons>
            </S.WrapperIconsBackGround>
          </S.Content>
        </S.BackgroundBlack>
      </S.Container>
    </>
  )
}

export default ModalWalletConnect

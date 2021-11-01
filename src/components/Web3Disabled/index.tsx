import React from 'react'
import useConnect from '../../hooks/useConnect'

import Button from '../Button'

import * as S from './styles'

declare let window: {
  ethereum: any,
}

interface IWeb3DisabledProps {
  textButton: string
  textHeader: string
  bodyText: string
  type: string
}

const Web3Disabled = ({ textButton, textHeader, bodyText, type }: IWeb3DisabledProps) => {
  const { connect } = useConnect()

  async function changeChainId() {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x3' }], //0x89
      });
    } catch (error) {
      // // This error code indicates that the chain has not been added to MetaMask.
      // if (error.code === 4902) {
      //   try {
      //     await window.ethereum.request({
      //       method: 'wallet_addEthereumChain', 
      //       params:[{ chainId: '0x3', chainName: 'Ropsten Mainnet', nativeCurrency: { name: 'Matic', symbol: 'MATIC', decimals: 18 }, rpcUrls: ['https://rpc-mainnet.matic.network/'], blockExplorerUrls: ['https://polygonscan.com/'] }],
      //     }); //0x89
      //   } catch (addError) {
      //     // handle "add" error
      //   }
      // }
      // // handle other "switch" errors
      console.log(error)
    }
  }

  function getFunction(type: string) {
    switch (type) {
      case "connect":
        connect()
        break;
      case "changeChain":
        changeChainId()
        break;

      default:
        break;
    }
  }

  return (
    <S.Web3Disabled>
      <div>
        <S.Header>
          <img src="assets/IconNotification/warning.svg" alt="" />
          <p>{textHeader}</p>
        </S.Header>
        <S.Body>
          <p>{bodyText}</p>
          {type === "install" ? 
            <Button
              as='a'
              backgroundBlack
              size="large"
              href="https://metamask.io/download.html"
              target="_blank"
              text='Install MetaMask!'
            />
            :
            <Button 
              backgroundBlack
              size="huge"
              text={textButton}
              onClick={() => getFunction(type)}
            />
          }
        </S.Body>
      </div>
    </S.Web3Disabled>
  )
}

export default Web3Disabled
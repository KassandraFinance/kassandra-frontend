/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import { chains } from '../../constants/tokenAddresses'

import changeChain from '../../utils/changeChain'

import ModalWalletConnect from '../ModalWalletConnect'
import Button from '../Button'

import * as S from './styles'

interface IWeb3DisabledProps {
  textButton: string;
  textHeader: string;
  bodyText: string;
  type: string;
}

const Web3Disabled = ({ textButton, textHeader, bodyText, type }: IWeb3DisabledProps) => {
  const [openWallet, setOpenWallet] = React.useState(false)

  function getFunction(type: string) {
    switch (type) {
      case "connect":
        setOpenWallet(true)
        break;
      case "changeChain":
        changeChain(chains.fuji)
        break;
      default:
        break;
    }
  }

  return (
    <>
      <S.Web3Disabled>
        <div>
          <S.Header>
            <img src="/assets/IconNotification/warning.svg" alt="" />
            <p>{textHeader}</p>
          </S.Header>
          <S.Body>
            <p>{bodyText}</p>
            <Button 
              backgroundBlack
              size="huge"
              text={textButton}
              onClick={() => getFunction(type)}
            />
          </S.Body>
        </div>
      </S.Web3Disabled>
      <ModalWalletConnect
        modalOpen={openWallet}
        setModalOpen={setOpenWallet}
      />
    </>
  )
}

export default Web3Disabled
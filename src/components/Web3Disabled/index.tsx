/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import { chains } from '../../constants/tokenAddresses'

import changeChain from '../../utils/changeChain'

import Button from '../Button'
import ModalWalletConnect from '../Modals/ModalWalletConnect'

import * as S from './styles'

interface IWeb3DisabledProps {
  textButton?: string;
  textHeader: string;
  bodyText: string;
  type: string;
}

const Web3Disabled = ({
  textButton,
  textHeader,
  bodyText,
  type
}: IWeb3DisabledProps) => {
  const [openWallet, setOpenWallet] = React.useState(false)

  function getFunction(type: string) {
    console.log(type)
    switch (type) {
      case 'connect':
        setOpenWallet(true)
        break
      case 'changeChain':
        changeChain(
          process.env.NEXT_PUBLIC_MASTER === '1'
            ? chains.avalanche
            : chains.fuji
        )
        break
      default:
        break
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
            {!!textButton && (
              <Button
                backgroundBlack
                size="huge"
                text={textButton}
                onClick={() => getFunction(type)}
              />
            )}
          </S.Body>
        </div>
      </S.Web3Disabled>
      {openWallet && (
        <ModalWalletConnect
          setModalOpen={setOpenWallet}
        />
      )}
    </>
  )
}

export default Web3Disabled

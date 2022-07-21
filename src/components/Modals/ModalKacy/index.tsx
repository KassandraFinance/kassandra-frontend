import React from 'react'
import Image from 'next/image'

import Button from '../../Button'
import ModalWalletConnect from '../ModalWalletConnect'

import closeIcon from '../../../../public/assets/utilities/close-icon.svg'

import * as S from './styles'

// interface IModalKacyProps {}

function handleCloseModal() {
  console.log('Clicked handleCloseModal')
}

const ModalKacy = () => {
  const [isModalWallet, setIsModalWallet] = React.useState<boolean>(false)

  return (
    <>
      <S.Backdrop onClick={handleCloseModal}></S.Backdrop>
      <S.Container>
        <S.ModalHeader>
          <S.HeaderTitle>Your KACY Stats</S.HeaderTitle>

          <S.CloseBtn type="button" onClick={handleCloseModal}>
            <Image src={closeIcon} alt="Close" width={12} height={12} />
          </S.CloseBtn>
        </S.ModalHeader>

        <S.ModalBody>
          <S.Ul>
            <S.Li>
              Price <S.Value>$10</S.Value>
            </S.Li>
            <S.Li>
              Circulant Supply <S.Value>1000000</S.Value>
            </S.Li>
            <S.Li>
              Total Supply <S.Value>1000000</S.Value>
            </S.Li>
          </S.Ul>

          <Button
            text="Connect Wallet"
            backgroundPrimary
            fullWidth
            onClick={() => setIsModalWallet(true)}
          />
        </S.ModalBody>
      </S.Container>

      {isModalWallet && <ModalWalletConnect setModalOpen={setIsModalWallet} />}
    </>
  )
}

export default ModalKacy

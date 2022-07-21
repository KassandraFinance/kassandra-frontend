import React from 'react'
import Image from 'next/image'

import Button from '../../../Button'
import ModalWalletConnect from '../../ModalWalletConnect'

import closeIcon from '../../../../../public/assets/utilities/close-icon.svg'
import kacyIcon from '../../../../../public/assets/logos/kacy-96.svg'
import avalancheIcon from '../../../../../public/assets/logos/avalanche.svg'

import * as S from './styles'

interface IKacyProps {
  setIsModalKacy: React.Dispatch<React.SetStateAction<boolean>>;
}

const Kacy = ({ setIsModalKacy }: IKacyProps) => {
  const [isModalWallet, setIsModalWallet] = React.useState<boolean>(false)
  function handleCloseModal() {
    setIsModalKacy(false)
  }
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
          <S.KacyTotalContainer>
            <S.ImgContainer>
              <S.ImgWrapper>
                <Image src={kacyIcon} width={40} height={40} />
              </S.ImgWrapper>

              <S.ChainIcon>
                <Image src={avalancheIcon} width={20} height={20} />
              </S.ChainIcon>
            </S.ImgContainer>

            <S.TotalWrapper>
              <S.BodyTitle>TOTAL</S.BodyTitle>
              <S.KacyTotal>1234567.8910</S.KacyTotal>
              <S.KacyUSDTotal>~0.00 USD</S.KacyUSDTotal>
            </S.TotalWrapper>
          </S.KacyTotalContainer>

          <S.Line />

          <S.Ul>
            <S.Li>
              KACY Staked
              <S.Value>
                1234567.8910 <span>~0.00 USD</span>
              </S.Value>
            </S.Li>
            <S.Li>
              Unclaimed
              <S.Value>
                50.1234<span>~0.00 USD</span>
              </S.Value>
            </S.Li>
            <S.Li>
              Wallet
              <S.Value>
                50.1234<span>~0.00 USD</span>
              </S.Value>
            </S.Li>
          </S.Ul>

          <S.Line />

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

export default Kacy

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

interface IModalBuyKacyProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalBuyKacy = ({ modalOpen, setModalOpen }: IModalBuyKacyProps) => {
  function handleCloseModal() {
    setModalOpen(false)
  }

  return (
    <>
      <S.Backdrop
        style={{ display: modalOpen ? 'block' : 'none' }}
        onClick={handleCloseModal}
      />
      <S.ModalBuyKacyContainer modalOpen={modalOpen}>
        <S.HeaderModalBuyKacy>
          <strong>Choose the exchange</strong>
          <button type="button" onClick={() => setModalOpen(false)}>
            <Image src="/assets/close.svg" alt="Close" width={12} height={12} />
          </button>
        </S.HeaderModalBuyKacy>
        <S.BodyModalBuyKacy>
          <Link
            href="https://traderjoexyz.com/pool/AVAX/0xf32398dae246C5f672B52A54e9B413dFFcAe1A44"
            passHref
          >
            <S.ButtonModalBuyKacy target="_blank">
              <Image
                src="/assets/logo-traderJoe.svg"
                alt="Close"
                width={29}
                height={40}
              />
              <p>TRADER JOE</p>
            </S.ButtonModalBuyKacy>
          </Link>
          <Link
            href="https://app.pangolin.exchange/#/swap?outputCurrency=0xf32398dae246C5f672B52A54e9B413dFFcAe1A44"
            passHref
          >
            <S.ButtonModalBuyKacy target="_blank">
              <Image
                src="/assets/logo-pangolin-40x40.svg"
                alt="Close"
                width={40}
                height={40}
              />
              <p>PANGOLIN</p>
            </S.ButtonModalBuyKacy>
          </Link>
        </S.BodyModalBuyKacy>
      </S.ModalBuyKacyContainer>
    </>
  )
}

export default ModalBuyKacy

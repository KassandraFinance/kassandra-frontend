import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import useMatomoEcommerce from '../../../hooks/useMatomoEcommerce'

import * as S from './styles'

interface IModalBuyKacyProps {
  modalOpen: boolean
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalBuyKacy = ({ modalOpen, setModalOpen }: IModalBuyKacyProps) => {
  const { trackEventFunction } = useMatomoEcommerce()

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
            <Image
              src="/assets/utilities/close-icon.svg"
              alt="Close"
              width={12}
              height={12}
            />
          </button>
        </S.HeaderModalBuyKacy>
        <S.BodyModalBuyKacy>
          <Link
            href="https://traderjoexyz.com/trade?outputCurrency=0xf32398dae246C5f672B52A54e9B413dFFcAe1A44#/"
            passHref
          >
            <S.ButtonModalBuyKacy
              target="_blank"
              onClick={() => {
                setTimeout(() => {
                  setModalOpen(false)
                }, 1000)
                trackEventFunction(
                  'click-on-link',
                  'trader-joe-exchange',
                  'buy-kacy-modal'
                )
              }}
            >
              <span id="ImageContent">
                <Image
                  src="/assets/logos/traderJoe.svg"
                  alt="TraderJoe logo"
                  width={29}
                  height={40}
                />
              </span>
              <p>TRADER JOE</p>
            </S.ButtonModalBuyKacy>
          </Link>
          <Link
            href="https://app.pangolin.exchange/#/swap?outputCurrency=0xf32398dae246C5f672B52A54e9B413dFFcAe1A44"
            passHref
          >
            <S.ButtonModalBuyKacy
              target="_blank"
              onClick={() => {
                setTimeout(() => {
                  setModalOpen(false)
                }, 1000)
                trackEventFunction(
                  'click-on-link',
                  'pangolin-exchange',
                  'buy-kacy-modal'
                )
              }}
            >
              <span id="ImageContent">
                <Image
                  src="/assets/logos/pangolin-40x40.svg"
                  alt="Pangolin logo"
                  width={40}
                  height={40}
                />
              </span>
              <p>PANGOLIN</p>
            </S.ButtonModalBuyKacy>
          </Link>
        </S.BodyModalBuyKacy>
      </S.ModalBuyKacyContainer>
    </>
  )
}

export default ModalBuyKacy

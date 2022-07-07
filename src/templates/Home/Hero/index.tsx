import React from 'react'
import Link from 'next/link'

import Header from '../../../components/Header'
import Button from '../../../components/Button'
import ModalBuyKacy from '../../../components/Modals/ModalBuyKacy'

import useMatomoEcommerce from '../../../hooks/useMatomoEcommerce'

import * as S from './styles'

const Hero = () => {
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false)

  const { trackEventFunction } = useMatomoEcommerce()

  return (
    <>
      <S.Hero>
        <Header />
        <S.IntroHero>
          <h3>
            WELCOME TO <b>KASSANDRA DAO</b>
          </h3>
          <h1>tokenized data-driven investment funds</h1>
        </S.IntroHero>
        <S.ButtonWrapper>
          <li>
            <Link href="/explore" passHref>
              <Button
                backgroundPrimary
                size="large"
                as="a"
                text="Invest in Funds"
                onClick={() =>
                  trackEventFunction('click-to-cta', 'invest-in-funds', 'home')
                }
              />
            </Link>
          </li>
          <li>
            <Button
              className="btn-cta"
              backgroundPrimary
              size="large"
              text="Buy KACY"
              icon={<img src="/favicon-16x16.png" alt="Logo Kacy token" />}
              onClick={() => {
                trackEventFunction('click-to-cta', 'buy-kacy-modal', 'home')
                setIsOpenModal(true)
              }}
            />
          </li>
        </S.ButtonWrapper>
      </S.Hero>
      <ModalBuyKacy modalOpen={isOpenModal} setModalOpen={setIsOpenModal} />
    </>
  )
}
export default Hero

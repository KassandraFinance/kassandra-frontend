import React from 'react'
import Link from 'next/link'

import { useMatomo } from '@datapunt/matomo-tracker-react'

import Header from '../../../components/Header'
import Button from '../../../components/Button'
import ModalBuyKacy from '../../../components/Modals/ModalBuyKacy'

import * as S from './styles'

const Hero = () => {
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false)

  const { trackEvent } = useMatomo()

  function clickMatomoEvent(action: string, name: string) {
    trackEvent({
      category: 'home',
      action: action,
      name: name
    })
  }

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
            <Button
              className="btn-cta"
              backgroundPrimary
              size="large"
              as="a"
              text="Buy KACY"
              icon={<img src="/favicon-16x16.png" alt="Logo Kacy token" />}
              onClick={() => {
                clickMatomoEvent('click-to-cta', 'up-ido'), setIsOpenModal(true)
              }}
            />
          </li>
          <li>
            <Link href="/explore">
              <Button
                backgroundPrimary
                size="large"
                as="a"
                text="Invest in Funds"
                // icon={<img src="/assets/ahype.svg" alt="" />}
                onClick={() => clickMatomoEvent('click-to-cta', 'hero')}
              />
            </Link>
          </li>
        </S.ButtonWrapper>
      </S.Hero>
      <ModalBuyKacy modalOpen={isOpenModal} setModalOpen={setIsOpenModal} />
    </>
  )
}
export default Hero

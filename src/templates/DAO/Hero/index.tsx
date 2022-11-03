import React from 'react'
import Image from 'next/image'

import Button from '../../../components/Button'
import ScrollAnimation from '../../../components/ScrollAnimation'
import ModalBuyKacy from '../../../components/Modals/ModalBuyKacy'

import * as S from './styles'

const Hero = () => {
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false)

  return (
    <>
      <S.HeroContainer>
        <S.ImageContent />

        <S.HeroContent>
          <S.ManagerNumberPage>
            <p>03</p>
            <span />
            <p>DAO</p>
          </S.ManagerNumberPage>
          <S.HeroDescription>
            <h1>It’s our community, make your voice heard</h1>
            <p>
              Shape Kassandra into what you believe in. Propose, vote and
              contribute where its needed. Help the community flourish.
              Remember: the bigger the pie, the better your slice.
            </p>

            <Button
              className="button"
              size="huge"
              icon={
                <Image
                  src="/assets/iconGradient/kacy.svg"
                  width={18}
                  height={18}
                />
              }
              backgroundPrimary
              text="Buy KACY"
              onClick={() => {
                setIsOpenModal(true)
              }}
            />
          </S.HeroDescription>
        </S.HeroContent>

        <S.ScrollContainer>
          <ScrollAnimation />
        </S.ScrollContainer>
      </S.HeroContainer>

      <ModalBuyKacy modalOpen={isOpenModal} setModalOpen={setIsOpenModal} />
    </>
  )
}

export default Hero

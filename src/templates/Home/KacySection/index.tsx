import React from 'react'
import Image from 'next/image'

import KacyData from './KacyData'
import FadeInHorizontal from '../../../components/Animations/FadeInHorizontal'
import ModalBuyKacy from '../../../components/Modals/ModalBuyKacy'

import kacyCircle from '../../../../public/assets/images/kacy-circle.png'
import light7 from '../../../../public/assets/images/backgroundHome/light-mobile7.png'

import * as S from './styles'

const KacySection = () => {
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false)

  return (
    <S.KacySectionContainer>
      <S.ImgWrapper>
        <Image src={light7} alt="Ball of light" />
      </S.ImgWrapper>

      <FadeInHorizontal threshold={0.5} invert>
        <Image src={kacyCircle} alt="Kacy logo with circles" />
      </FadeInHorizontal>

      <FadeInHorizontal threshold={0.5} invert>
        <KacyData setIsOpenModal={setIsOpenModal} />
      </FadeInHorizontal>

      <ModalBuyKacy modalOpen={isOpenModal} setModalOpen={setIsOpenModal} />
    </S.KacySectionContainer>
  )
}

export default KacySection

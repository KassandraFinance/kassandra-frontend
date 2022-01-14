import React from 'react'
import Image from 'next/image'

import github from '../../../public/assets/Github.svg'

import * as S from './styles'

interface IModalSocialMediaMobileProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalSocialMediaMobile = ({
  modalOpen,
  setModalOpen
}: IModalSocialMediaMobileProps) => {
  return (
    <>
      <S.Backdrop
        onClick={() => setModalOpen(false)}
        style={{ display: modalOpen ? 'block' : 'none' }}
      />
      <S.ModalContainer modalOpen={modalOpen}>
        <a href="https://github.com/KassandraFinance">
          <Image src={github} alt="Github" />
          Github
        </a>
        <a href="https://github.com/KassandraFinance">
          <Image src={github} alt="Github" />
          Github
        </a>
        <a href="https://github.com/KassandraFinance">
          <Image src={github} alt="Github" />
          Github
        </a>
        <a href="https://github.com/KassandraFinance">
          <Image src={github} alt="Github" />
          Github
        </a>
      </S.ModalContainer>
    </>
  )
}

export default ModalSocialMediaMobile

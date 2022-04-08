import React from 'react'
import Image from 'next/image'

import usa from '../../../public/assets/usa.svg'

import * as S from './styles'

interface IModalLanguagesProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalLanguages = ({ modalOpen, setModalOpen }: IModalLanguagesProps) => {
  return (
    <>
      <S.Backdrop
        style={{ display: modalOpen ? 'block' : 'none' }}
        onClick={() => setModalOpen(false)}
      />
      <S.ModalContainer modalOpen={modalOpen}>
        <button onClick={() => setModalOpen(false)}>
          <Image src={usa} alt="USA" />
          <span>ENG</span>
        </button>
      </S.ModalContainer>
    </>
  )
}

export default ModalLanguages

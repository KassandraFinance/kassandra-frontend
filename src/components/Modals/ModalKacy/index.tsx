import React from 'react'
import Image from 'next/image'

import Kacy from './Kacy'

import kacy96 from '../../../../public/assets/logos/kacy-96.svg'

import * as S from './styles'

// interface IModalKacyProps {}

const ModalKacy = () => {
  const [isModalKacy, setIsModalKacy] = React.useState(false)

  return (
    <>
      <S.KacyAmount onClick={() => setIsModalKacy(true)}>
        <Image src={kacy96} alt="kacy" width={13.86} height={11.86} />
        100k KACY
      </S.KacyAmount>

      {isModalKacy && <Kacy setIsModalKacy={setIsModalKacy} />}
    </>
  )
}

export default ModalKacy

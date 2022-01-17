import React from 'react'
import Image from 'next/image'

import iconBar from '../../../../public/assets/iconbar.svg'

import * as S from './styles'

import AhypeDescription from './ahype'

const descriptions = {
  ahype: <AhypeDescription />
}

interface Input {
  symbol: string;
}

const TokenDescription = ({ symbol }: Input) => {
  const description = descriptions[symbol.toLowerCase()]

  return (
    <>
      <S.Title>
        <Image src={iconBar} alt="" />
        <h2>Token Description</h2>
      </S.Title>
      <S.Line />
      <S.Text>{description}</S.Text>
    </>
  )
}

export default TokenDescription

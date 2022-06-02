import React from 'react'
import Image from 'next/image'

import iconBar from '../../../../public/assets/iconGradient/product-bar.svg'

//import { ProductSymbols } from '../../../constants/tokenAddresses'

import * as S from './styles'

import AhypeDescription from './ahype'
import TricryptoDescription from './tricrypto'

interface DescriptionType {
  //[key: ProductSymbols]: JSX.Element;
  [key: string]: JSX.Element;
}

interface Input {
  symbol: string;
}

const descriptions: DescriptionType = {
  ahype: <AhypeDescription />,
  k3c: <TricryptoDescription />
}

const TokenDescription = ({ symbol }: Input) => {
  const description = descriptions[symbol.toLowerCase()]

  return (
    <>
      <S.Title>
        <Image src={iconBar} alt="" height={18} width={18} />
        <h2>Token Description</h2>
      </S.Title>
      <S.Line />
      <S.Text>{description}</S.Text>
    </>
  )
}

export default TokenDescription

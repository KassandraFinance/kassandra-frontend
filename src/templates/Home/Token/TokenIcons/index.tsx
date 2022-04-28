import Image from 'next/image'
import React from 'react'

import none from '../../../../../public/assets/coming-soon.svg'

import * as S from './styles'
interface TokenIconsProps {
  tokens: string[][];
}

const TokenIcons = ({ tokens }: TokenIconsProps) => {
  return (
    <S.Container>
      {tokens.map((entry: string[], index: number) => {
        return (
          <S.ImageWrapper
            className={entry[1] ? '' : 'svg-none'}
            key={entry[0]}
            index={index}
          >
            <Image src={entry[1] || none} alt="" width={18} height={18} />
          </S.ImageWrapper>
        )
      })}
    </S.Container>
  )
}

export default TokenIcons

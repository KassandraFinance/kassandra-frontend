import React from 'react'
import Image from 'next/image'

import none from '../../../../public/assets/coming-soon.svg'

import * as S from './styles'

interface TokenIconsProps {
  tokens: string[][];
}

const FundTokenIcons = ({ tokens }: TokenIconsProps) => {
  return (
    <S.Container>
      {tokens.map((entry: string[]) => {
        return (
          <S.ImageWrapper key={entry[0]}>
            <Image src={entry[1] || none} alt="" width={16} height={16} />
            <span>73.21%</span>
          </S.ImageWrapper>
        )
      })}
    </S.Container>
  )
}

export default FundTokenIcons

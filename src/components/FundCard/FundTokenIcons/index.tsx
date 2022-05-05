import React from 'react'
import Image from 'next/image'

import none from '../../../../public/assets/coming-soon.svg'

import * as S from './styles'

interface TokenIconsProps {
  tokens: string[][];
  poolInfo: any[];
}

const FundTokenIcons = ({ tokens, poolInfo }: TokenIconsProps) => {
  return (
    <S.Container>
      {tokens.map((entry: string[], index: number) => {
        return (
          <S.ImageWrapper key={index}>
            <Image src={entry[1] || none} alt="" width={16} height={16} />
            <span>{(poolInfo[index].weight_normalized * 100).toFixed(2)}%</span>
          </S.ImageWrapper>
        )
      })}
    </S.Container>
  )
}

export default FundTokenIcons

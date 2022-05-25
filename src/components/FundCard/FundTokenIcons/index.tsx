import React from 'react'
import Image from 'next/image'

import none from '../../../../public/assets/coming-soon.svg'

import * as S from './styles'

interface TokenIconsProps {
  tokens: { [key: string]: string };
  poolInfo: any[];
}

const FundTokenIcons = ({ tokens, poolInfo }: TokenIconsProps) => {
  return (
    <S.Container>
      {poolInfo
        .slice(0, poolInfo.length >= 3 ? 3 : poolInfo.length)
        .map((asset, index) => {
          return (
            <S.ImageWrapper key={index}>
              <Image
                src={tokens[asset.token.id] || none.src}
                alt=""
                width={16}
                height={16}
              />
              <span>
                {(poolInfo[index].weight_normalized * 100).toFixed(2)}%
              </span>
            </S.ImageWrapper>
          )
        })}
    </S.Container>
  )
}

export default FundTokenIcons

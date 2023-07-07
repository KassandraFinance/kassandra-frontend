import Image from 'next/image'
import React from 'react'

import { usePoolInfo } from '@/hooks/query/usePoolInfo'

import none from '../../../../public/assets/icons/coming-soon.svg'

import * as S from './styles'

interface TokenIconsProps {
  id: string
  day: number
}

const TokenIcons = ({ id, day }: TokenIconsProps) => {
  const { data } = usePoolInfo({ id: id, day: day })

  return (
    <S.Container>
      {data &&
        data.underlying_assets
          .slice(
            0,
            data.underlying_assets.length >= 5
              ? 5
              : data.underlying_assets.length
          )
          .map((asset, index) => (
            <S.ImageWrapper
              key={index}
              className={
                asset.token.wraps?.logo ?? asset.token.logo ? '' : 'svg-none'
              }
              index={index}
            >
              <Image
                src={(asset.token.wraps?.logo ?? asset.token.logo) || none.src}
                alt=""
                width={18}
                height={18}
              />
            </S.ImageWrapper>
          ))}
    </S.Container>
  )
}

export default TokenIcons

import Image from 'next/image'
import React from 'react'

import none from '../../../../public/assets/icons/coming-soon.svg'

import * as S from './styles'

type ITokenInfoProps = {
  id: string
  balance_in_pool: string
  address: string
  name: string
  symbol: string
  allocation: number
  price: number
  logo: string
  wraps?: {
    logo: string
  }
}

interface IPoolInfoProps {
  balance: string
  token: ITokenInfoProps
  weight_goal_normalized: string
  weight_normalized: string
}

interface TokenIconsProps {
  poolInfo: IPoolInfoProps[]
}

const TokenIcons = ({ poolInfo }: TokenIconsProps) => {
  return (
    <S.Container>
      {poolInfo
        .slice(0, poolInfo.length >= 5 ? 5 : poolInfo.length)
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

import Image from 'next/image'
import React from 'react'

import none from '../../../../../public/assets/icons/coming-soon.svg'

import * as S from './styles'

type ITokenInfoProps = {
  id: string,
  balance_in_pool: string,
  address: string,
  name: string,
  symbol: string,
  allocation: number,
  price: number
}

interface IPoolInfoProps {
  balance: string;
  token: ITokenInfoProps;
  weight_goal_normalized: string;
  weight_normalized: string;
}

interface TokenIconsProps {
  images: { [key: string]: string };
  poolInfo: IPoolInfoProps[];
}

const TokenIcons = ({ images, poolInfo }: TokenIconsProps) => {
  return (
    <S.Container>
      {poolInfo
        .slice(0, poolInfo.length >= 5 ? 5 : poolInfo.length)
        .map((asset, index) => (
          <S.ImageWrapper
            className={images[asset.token.id] ? '' : 'svg-none'}
            key={images[asset.token.id]}
            index={index}
          >
            <Image
              src={images[asset.token.id] || none}
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

import Image from 'next/image'
import React from 'react'

import none from '../../../../public/assets/icons/coming-soon.svg'

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

const addressChanger: { [key: string]: string } = {
  '0xe28Ad9Fa07fDA82abab2E0C86c64A19D452b160E':
    '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab', // WETH
  '0xFA17fb53da4c837594127b73fFd09fdb15f42C49':
    '0xd586e7f844cea2f87f50152665bcbc2c279d8d70', //DAI
  '0xbbcED92AC9B958F88A501725f080c0360007e858':
    '0x50b7545627a5162f82a992c33b87adc75187b218' //WBTC
}

const TokenIcons = ({ images, poolInfo }: TokenIconsProps) => {
  return (
    <S.Container>
      {poolInfo
        .slice(0, poolInfo.length >= 5 ? 5 : poolInfo.length)
        .map((asset, index) => (
          <S.ImageWrapper
            key={index}
            className={
              images[addressChanger[asset.token.id] ?? asset.token.id]
                ? ''
                : 'svg-none'
            }
            index={index}
          >
            <Image
              src={
                images[addressChanger[asset.token.id] ?? asset.token.id] ||
                none.src
              }
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

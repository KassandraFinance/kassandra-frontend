import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { PerformanceValues } from '../../../store/modules/performanceValues/actions'

import { TokenDetails } from '../../../store/modules/poolTokens/types'
// import substr from '../../../utils/substr'
import ChartProducts from './ChartProducts'
import {
  Background,
  IconBar,
  IconBirdKassandra,
  IconUnion,
  IconUnionKassandra
} from './Icons'

import * as S from './styles'

interface ISharedImageProps {
  crpPoolAddress: string;
  totalValueLocked: string;
  socialIndex: string;
  productName: string;
  fundImage: any;
}

const assetsImages: { [key: string]: string } = {
  '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab': '/assets/logos/weth.png',
  '0x50b7545627a5162f82a992c33b87adc75187b218': '/assets/logos/wbtc.png',
  '0xd586e7f844cea2f87f50152665bcbc2c279d8d70': '/assets/logos/dai.png',
  '0xf32398dae246C5f672B52A54e9B413dFFcAe1A44': '/assets/logos/kacy.png',

  '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7': '/assets/logos/avax.png',
  '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd': '/assets/logos/joe.png',
  '0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5': '/assets/logos/qi.png',
  '0xA32608e873F9DdEF944B24798db69d80Bbb4d1ed': '/assets/logos/cra.png',
  '0x60781C2586D68229fde47564546784ab3fACA982': '/assets/logos/png.png',
  '0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4': '/assets/logos/xava.png'
}

const SharedImage = ({
  crpPoolAddress,
  totalValueLocked,
  socialIndex,
  productName,
  fundImage
}: ISharedImageProps) => {
  // const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const {
    poolTokensArray,
    performanceValues
  }: {
    poolTokensArray: TokenDetails[],
    performanceValues: PerformanceValues
  } = useSelector((state: RootStateOrAny) => state)

  return (
    <S.SharedImage className="bg-image-color">
      <Background />
      <S.Header>
        <S.Title>
          <img
            src={fundImage.src || '/assets/modalShareImage.png'}
            width={40}
            height={40}
          />
          <h1>{productName}</h1>
          <S.Detail>${socialIndex}</S.Detail>
          {/* <S.HorizontalLine /> */}
        </S.Title>
        {/* <S.UserInfo>
          <h2>Manager</h2>
          <S.Profile>
            <S.ProfileImage />
            <S.ProfileAddress>
              {userWalletAddress
                ? substr(userWalletAddress)
                : substr('0x000000000')}
            </S.ProfileAddress>
          </S.Profile>
        </S.UserInfo> */}
      </S.Header>

      <S.Main>
        <S.InfoContainer>
          <S.Info>
            <S.InfoTitle>
              <IconBar />
              <span>{performanceValues.title}</span>
            </S.InfoTitle>
            {performanceValues.performance.startsWith('-') ? (
              <S.InfoValue color="red">
                {performanceValues.performance}%
              </S.InfoValue>
            ) : (
              <S.InfoValue color="green">
                +{performanceValues.performance}%
              </S.InfoValue>
            )}
          </S.Info>
          <S.Info>
            <S.InfoTitle>
              <IconBar />
              <span>Total Value Locked</span>
            </S.InfoTitle>
            <S.InfoValue color="white">${totalValueLocked}</S.InfoValue>
          </S.Info>
          <S.Assets>
            <S.InfoTitle>
              <IconUnion />
              <span>Assets</span>
            </S.InfoTitle>
            <S.AssetsContainer>
              {poolTokensArray.slice(0, -1).map((token, index) => (
                <img
                  key={index}
                  src={
                    assetsImages[token.address] ??
                    '/assets/icons/coming-soon.svg'
                  }
                  width={25}
                  height={25}
                />
              ))}
            </S.AssetsContainer>
          </S.Assets>
        </S.InfoContainer>
        <S.ChartContainer>
          <ChartProducts crpPoolAddress={crpPoolAddress} height={296} />
        </S.ChartContainer>
      </S.Main>

      <S.Footer>
        <S.SocialMedia>
          <IconBirdKassandra />
          dao_kassandra
        </S.SocialMedia>
        <S.SocialMedia>
          <IconUnionKassandra />
          kassandra.finance
        </S.SocialMedia>
      </S.Footer>
    </S.SharedImage>
  )
}

export default SharedImage

import Image from 'next/image'
import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { PerformanceValues } from '../../../store/modules/performanceValues/actions'

import { TokenImages } from '../../../store/modules/poolImages/types'
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
    poolImages,
    performanceValues
  }: {
    poolTokensArray: TokenDetails[],
    poolImages: TokenImages,
    performanceValues: PerformanceValues
  } = useSelector((state: RootStateOrAny) => state)

  return (
    <S.SharedImage className="bg-image-color">
      <Background />
      <S.Header>
        <S.Title>
          <Image
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
              {poolTokensArray.map((token, index) => (
                <Image
                  key={index}
                  src={poolImages[token.address] || '/assets/coming-soon.svg'}
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

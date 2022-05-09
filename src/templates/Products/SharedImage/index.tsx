import Image from 'next/image'
import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'

import ChartProducts from '../../../components/ChartProducts'
import { TokenImages } from '../../../store/modules/poolImages/types'
import { TokenDetails } from '../../../store/modules/poolTokens/types'
import substr from '../../../utils/substr'

import * as S from './styles'

interface ISharedImageProps {
  crpPoolAddress: string;
  totalValueLocked: string;
  socialIndex: string;
}

const SharedImage = ({
  crpPoolAddress,
  totalValueLocked,
  socialIndex
}: ISharedImageProps) => {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const { poolTokensArray }: { poolTokensArray: TokenDetails[] } = useSelector(
    (state: RootStateOrAny) => state
  )
  const { poolImages }: { poolImages: TokenImages } = useSelector(
    (state: RootStateOrAny) => state
  )

  return (
    <S.SharedImage>
      <S.Header>
        <S.Title>
          <Image src="/assets/modalShareImage.png" width={40} height={40} />
          <h1>Awesome Fund</h1>
          <S.Detail>${socialIndex}</S.Detail>
          <S.HorizontalLine />
        </S.Title>
        <S.UserInfo>
          <h2>Manager</h2>
          <S.Profile>
            <S.ProfileImage />
            <S.ProfileAddress>
              {userWalletAddress
                ? substr(userWalletAddress)
                : substr('0x000000000')}
            </S.ProfileAddress>
          </S.Profile>
        </S.UserInfo>
      </S.Header>

      <S.Main>
        <S.InfoContainer>
          <S.Info>
            <S.InfoTitle>
              <Image src="/assets/iconbar.svg" width={20} height={20} />
              <span>Total Perfomance</span>
            </S.InfoTitle>
            <S.InfoValue color="green">+158.27%</S.InfoValue>
          </S.Info>
          <S.Info>
            <S.InfoTitle>
              <Image src="/assets/iconbar.svg" width={17.5} height={17.5} />
              <span>Total Value Locked</span>
            </S.InfoTitle>
            <S.InfoValue color="white">${totalValueLocked}%</S.InfoValue>
          </S.Info>
          <S.Assets>
            <S.InfoTitle>
              <Image src="/assets/union.svg" width={17.5} height={17.5} />
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
          <ChartProducts crpPoolAddress={crpPoolAddress} height={320} />
        </S.ChartContainer>
      </S.Main>

      <S.Footer>
        <S.SocialMedia>
          <Image
            src="/assets/icons/bird-kassandra.svg"
            width={24}
            height={20}
          />
          dao_kassandra
        </S.SocialMedia>
        <S.SocialMedia>
          <Image
            src="/assets/icons/union-kassandra.svg"
            width={24}
            height={20}
          />
          kassandra.finance
        </S.SocialMedia>
      </S.Footer>
    </S.SharedImage>
  )
}

export default SharedImage

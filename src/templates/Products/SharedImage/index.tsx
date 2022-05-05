import Image from 'next/image'

import ChartProducts from '../../../components/ChartProducts'

import * as S from './styles'

interface ISharedImageProps {
  crpPoolAddress: string;
}

const SharedImage = ({ crpPoolAddress }: ISharedImageProps) => {
  return (
    <S.SharedImage>
      <S.Header>
        <S.Title>
          <Image src="/assets/modalShareImage.png" width={40} height={40} />
          <h1>Awesome Fund</h1>
          <S.Detail>$AWES</S.Detail>
          <S.HorizontalLine />
        </S.Title>
        <S.UserInfo>
          <h2>Manager</h2>
          <S.Profile>
            <S.ProfileImage />
            <S.ProfileAddress>0x3x...vue23</S.ProfileAddress>
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
            <S.InfoValue>+158.27%</S.InfoValue>
          </S.Info>
          <S.Info>
            <S.InfoTitle>
              <Image src="/assets/iconbar.svg" width={17.5} height={17.5} />
              <span>Total Value Locked</span>
            </S.InfoTitle>
            <S.InfoValue>$500K%</S.InfoValue>
          </S.Info>
          <S.Assets>
            <S.InfoTitle>
              <Image src="/assets/union.svg" width={17.5} height={17.5} />
              <span>Assets</span>
            </S.InfoTitle>
            <S.AssetsContainer>
              <Image src="/assets/asset-1.png" width={24.5} height={24.5} />
              <Image src="/assets/asset-2.png" width={24.5} height={24.5} />
              <Image src="/assets/asset-3.png" width={24.5} height={24.5} />
              <Image src="/assets/asset-4.png" width={24.5} height={24.5} />
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

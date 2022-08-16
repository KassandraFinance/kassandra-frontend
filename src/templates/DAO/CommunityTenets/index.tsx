import Image from 'next/image'
import * as S from './styles'

import { Display, Description } from '../styles'

const CommunityTenets = () => {
  return (
    <S.Wrapper>
      <Display level="2">Create, maintain and get paid</Display>
      <Description>
        These are our three community tenets to ensure a healthy, functioning
        DAO.
      </Description>
      <S.Container>
        <div className="connector">
          <Image src="/assets/images/teste.png" layout="fill" />
          {/* <Image src="/assets/images/teste.png" width={499} height={293} /> */}
          {/* <Image src="/assets/images/teste.png" width={801} height={374} /> */}
        </div>
        <S.CommunityTenet>
          <S.IconWrapper>
            <Image
              src="/assets/iconGradient/hammer.svg"
              width={50}
              height={41}
            />
          </S.IconWrapper>
          <S.CommunityTenetText>
            <S.Caption color="amber">Create</S.Caption>
            <S.SubHeading>Create Build the future</S.SubHeading>
            <Description>
              Create innovative dETFs, aid Foundation in the creation of curated
              funds and commit ideas to our governance.
            </Description>
          </S.CommunityTenetText>
        </S.CommunityTenet>
        <S.Vr />
        <S.CommunityTenet>
          <S.IconWrapper>
            <Image src="/assets/iconGradient/gear.svg" width={50} height={41} />
          </S.IconWrapper>
          <S.CommunityTenetText>
            <S.Caption color="cyan">Maintain</S.Caption>
            <S.SubHeading>Oil the gears</S.SubHeading>
            <Description>
              Help building events, marketing initiatives, design creation,
              coding and whatever else there is demand for.
            </Description>
          </S.CommunityTenetText>
        </S.CommunityTenet>
        <S.Vr />

        <S.CommunityTenet>
          <S.IconWrapper>
            <Image
              src="/assets/iconGradient/assets-distribution.svg"
              width={50}
              height={41}
            />
          </S.IconWrapper>
          <S.CommunityTenetText>
            <S.Caption color="magenta">Rewards</S.Caption>
            <S.SubHeading>Get your share</S.SubHeading>
            <Description>
              Reap the benefits of being part of our community by earning
              protocol revenue from governance and occasional community
              bounties.
            </Description>
          </S.CommunityTenetText>
        </S.CommunityTenet>
      </S.Container>
    </S.Wrapper>
  )
}

export default CommunityTenets

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
            <S.SubHeading>Build the future</S.SubHeading>
            <Description>
              Create innovative dETFs, aid Foundation in the creation of curated
              funds and commit ideas to our governance.
            </Description>
          </S.CommunityTenetText>
        </S.CommunityTenet>
        <S.Vr />
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
            <S.SubHeading>Build the future</S.SubHeading>
            <Description>
              Create innovative dETFs, aid Foundation in the creation of curated
              funds and commit ideas to our governance.
            </Description>
          </S.CommunityTenetText>
        </S.CommunityTenet>
        <S.Vr />

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
            <S.SubHeading>Build the future</S.SubHeading>
            <Description>
              Create innovative dETFs, aid Foundation in the creation of curated
              funds and commit ideas to our governance.
            </Description>
          </S.CommunityTenetText>
        </S.CommunityTenet>
      </S.Container>
    </S.Wrapper>
  )
}

export default CommunityTenets

import Image from 'next/image'

import FadeIn from '../../../components/Animations/FadeIn'
import Paragraph from '../../../components/Paragraph'
import Subtitle from '../../../components/Subtitle'

import * as S from './styles'

const CommunityTenets = () => {
  return (
    <S.Wrapper>
      <FadeIn threshold={0.5}>
        <S.TextWrapper>
          <Subtitle text="Create, maintain and get paid" as="h2" />
          <Paragraph
            text="These are our three community tenets to ensure a healthy, functioning
            DAO."
          />
        </S.TextWrapper>
      </FadeIn>

      <FadeIn threshold={0.5}>
        <S.Container>
          <div className="connector">
            <Image src="/assets/images/arrow-gradient.png" layout="fill" />
          </div>
          <S.CommunityTenet>
            <S.IconWrapper>
              <img
                src="/assets/iconGradient/hammer.svg"
                width={50}
                height={41}
              />
            </S.IconWrapper>
            <S.CommunityTenetText>
              <S.Caption color="amber">Create</S.Caption>
              <S.SubHeading>Build the future</S.SubHeading>
              <S.SubDescription>
                Create innovative dETFs, aid the Foundation in the creation of
                curated funds and commit proposals to our governance.
              </S.SubDescription>
            </S.CommunityTenetText>
          </S.CommunityTenet>
          <S.Vr />
          <S.CommunityTenet>
            <S.IconWrapper>
              <img src="/assets/iconGradient/gear.svg" width={50} height={41} />
            </S.IconWrapper>
            <S.CommunityTenetText>
              <S.Caption color="cyan">Maintain</S.Caption>
              <S.SubHeading>Oil the gears</S.SubHeading>
              <S.SubDescription>
                Help build events, marketing initiatives, designs, code and
                whatever else there is demand for.
              </S.SubDescription>
            </S.CommunityTenetText>
          </S.CommunityTenet>
          <S.Vr />

          <S.CommunityTenet>
            <S.IconWrapper>
              <img
                src="/assets/iconGradient/assets-distribution.svg"
                width={50}
                height={41}
              />
            </S.IconWrapper>
            <S.CommunityTenetText>
              <S.Caption color="magenta">Rewards</S.Caption>
              <S.SubHeading>Get your share</S.SubHeading>
              <S.SubDescription>
                Reap the benefits of being part of our community by earning
                protocol revenue from governance and occasional community
                bounties.
              </S.SubDescription>
            </S.CommunityTenetText>
          </S.CommunityTenet>
        </S.Container>
      </FadeIn>
    </S.Wrapper>
  )
}

export default CommunityTenets

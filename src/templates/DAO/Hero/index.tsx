import Image from 'next/image'

import Button from '../../../components/Button'
import Scroll from '../../../components/Scroll'

import * as S from './styles'

const Hero = () => (
  <S.HeroContainer>
    <S.ImageContent />

    <S.HeroContent>
      <S.ManagerNumberPage>
        <p>03</p>
        <span />
        <p>DAO</p>
      </S.ManagerNumberPage>
      <S.HeroDescription>
        <h1>It’s our community, make your voice heard</h1>
        <p>
          Shape Kassandra into what you believe in. Propose, vote and contribute
          where its needed. Help the community flourish: the bigger the pie, the
          better your slice.
        </p>

        <Button
          className="button"
          size="huge"
          icon={
            <Image src="/assets/iconGradient/kacy.svg" width={18} height={18} />
          }
          backgroundPrimary
          text="Buy KACY"
        />
      </S.HeroDescription>
    </S.HeroContent>

    <S.ScrollContainer>
      <Scroll />
    </S.ScrollContainer>
  </S.HeroContainer>
)

export default Hero

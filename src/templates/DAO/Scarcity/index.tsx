import FadeIn from '../../../components/Animations/FadeIn'
import Paragraph from '../../../components/Paragraph'

import * as S from './styles'

const Scarcity = () => {
  return (
    <S.Wrapper>
      <FadeIn threshold={0.5}>
        <S.ScarcityTitle>KACY’s Programmed Scarcity</S.ScarcityTitle>
        <Paragraph
          text="Every new investment product on Kassandra must hold at least 5% of
          KACY tokens as part of its portfolio."
        />
      </FadeIn>

      <FadeIn threshold={0.5}>
        <S.ImageWrapper>
          <img src="/assets/images/scarcity.svg" />
        </S.ImageWrapper>
      </FadeIn>
    </S.Wrapper>
  )
}

export default Scarcity

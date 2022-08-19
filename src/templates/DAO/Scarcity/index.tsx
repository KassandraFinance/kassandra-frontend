import * as S from './styles'

const Scarcity = () => {
  return (
    <S.Wrapper>
      <S.ScarcityTitle>KACY’s Programmed Scarcity</S.ScarcityTitle>
      <S.ScarcityDescription>
        Every new investment product on Kassandra must hold at least 5% of KACY
        tokens as part of its portfolio.
      </S.ScarcityDescription>
      <S.ImageWrapper>
        <img src="/assets/images/scarcity.svg" />
      </S.ImageWrapper>
    </S.Wrapper>
  )
}

export default Scarcity

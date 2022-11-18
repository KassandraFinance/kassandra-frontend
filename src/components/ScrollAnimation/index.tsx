import * as S from './styles'

const ScrollAnimation = () => {
  return (
    <S.ScrollContainer>
      <div className="scroll-anchor">
        <div className="icon-scroll">
          <div className="circle-wrap"></div>
        </div>
        <span>SCROLL</span>
      </div>
    </S.ScrollContainer>
  )
}

export default ScrollAnimation

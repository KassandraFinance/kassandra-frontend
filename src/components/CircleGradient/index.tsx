import * as S from './styles'

interface ICircleGradientProps {
  text: string
  height: number
  width: number
}

const CircleGradient = ({ text, height, width }: ICircleGradientProps) => {
  return (
    <S.CircleGradient height={height} width={width}>
      <S.text>{text}</S.text>
    </S.CircleGradient>
  )
}

export default CircleGradient

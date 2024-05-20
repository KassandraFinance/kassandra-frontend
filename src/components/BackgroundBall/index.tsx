import * as S from './styles'

export type LinearGradient = {
  colors: string[]
  porcentage?: string[]
  deg?: number
}

export type Position = {
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export interface IBackgroundBallProps {
  position: Position
  linearGradient: LinearGradient
}

const BackgroundBall = ({ linearGradient, position }: IBackgroundBallProps) => {
  const porcentage = linearGradient?.porcentage ? linearGradient.porcentage : []

  return (
    <S.BackgroundBall
      linearGradient={{ ...linearGradient, porcentage }}
      position={position}
    />
  )
}

export default BackgroundBall

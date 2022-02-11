import * as S from './styles'

interface IAnyCardProps {
  text: string;
}

const AnyCard = ({ text }: IAnyCardProps) => {
  return (
    <S.BackgroundCard>
      <p>{text}</p>
    </S.BackgroundCard>
  )
}

export default AnyCard

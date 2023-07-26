import CircleGradient from '@/components/CircleGradient'

import * as S from './styles'

interface IFeaturedCardProps {
  cardNumber: string
  title: string
  paragraph: string
}

const FeaturedCard = ({ paragraph, title, cardNumber }: IFeaturedCardProps) => {
  return (
    <S.FeaturedCard>
      <CircleGradient text={cardNumber} height={6} width={6} />

      <S.CardTitle>{title}</S.CardTitle>
      <S.CardParagraph>{paragraph}</S.CardParagraph>
    </S.FeaturedCard>
  )
}

export default FeaturedCard

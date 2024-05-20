import Link from 'next/link'

import Paragraph from '../Paragraph'
import SectionSubtitle from '../SectionSubtitle'
import NewButton, { IBackgroudProps } from '../NewButton'

import * as S from './styles'

type ButtonType = {
  text: string
  href: string
  type: IBackgroudProps
}
interface ISectionTransparentCardProps {
  title: string
  paragraph: string
  firstButton?: ButtonType
  secondButton?: ButtonType
}

const SectionTransparentCard = ({
  title,
  paragraph,
  firstButton,
  secondButton
}: ISectionTransparentCardProps) => (
  <S.SectionTransparentCard>
    <SectionSubtitle text={title} />
    <Paragraph text={paragraph} />

    <S.ButtonWrapper>
      {firstButton && (
        <Link href={firstButton.href} passHref>
          <NewButton
            as="a"
            text={firstButton.text}
            background={firstButton.type}
            className="card-button"
          />
        </Link>
      )}

      {secondButton && (
        <Link href={secondButton.href} passHref>
          <NewButton
            as="a"
            text={secondButton.text}
            background={secondButton.type}
            className="card-button"
          />
        </Link>
      )}
    </S.ButtonWrapper>
  </S.SectionTransparentCard>
)

export default SectionTransparentCard

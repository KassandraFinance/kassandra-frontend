import Link from 'next/link'

import Paragraph from '../Paragraph'
import SectionSubtitle from '../SectionSubtitle'
import NewButton, { IBackgroudProps } from '../NewButton'

import * as S from './styles'

type Buttontype = {
  text: string
  href: string
  type: IBackgroudProps
}
interface ISectionTransparentCardProps {
  title: string
  paragraph: string
  firstbutton?: Buttontype
  secondButton?: Buttontype
}

const SectionTransparentCard = ({
  title,
  paragraph,
  firstbutton,
  secondButton
}: ISectionTransparentCardProps) => (
  <S.SectionTransparentCard>
    <SectionSubtitle text={title} />
    <Paragraph text={paragraph} />

    <S.ButtonWrapper>
      {firstbutton && (
        <Link href={firstbutton.href} passHref>
          <NewButton
            as="a"
            text={firstbutton.text}
            background={firstbutton.type}
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

import { HTMLAttributes } from 'react'

import * as S from './styles'

type HeadingType = HTMLAttributes<HTMLHeadingElement>

export type ISectionSubtitleProps = {
  text: string
  as?: React.ElementType<HeadingType>
} & HeadingType

const SectionSubtitle = ({ text, as, ...props }: ISectionSubtitleProps) => (
  <S.SectionSubtitle as={as} {...props}>
    {text}
  </S.SectionSubtitle>
)

export default SectionSubtitle

import { HTMLAttributes } from 'react'

import * as S from './styles'

type HeadingType = HTMLAttributes<HTMLHeadingElement>

export type ISectionTitleProps = {
  title: string
  titleColor: string
  titleNumber: string
  as?: React.ElementType<HeadingType>
} & HeadingType

// eslint-disable-next-line prettier/prettier
const SectionTitle = ({
  titleColor,
  as,
  titleNumber,
  title,
  ...props
}: ISectionTitleProps) => (
  <S.SectionTitle as={as} color={titleColor} {...props}>
    <span>{titleNumber}</span>
    <hr />
    <span>{title}</span>
  </S.SectionTitle>
)

export default SectionTitle

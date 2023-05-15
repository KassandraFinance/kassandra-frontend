import { HTMLAttributes } from 'react'

import * as S from './styles'

export type ParagraphType = HTMLAttributes<HTMLParagraphElement>
export type SpanType = HTMLAttributes<HTMLSpanElement>

type ISectionSubtitleProps = {
  text: string
  as?: React.ElementType<ParagraphType | SpanType>
  fontWeight?: number
} & HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>

// eslint-disable-next-line prettier/prettier
const Paragraph = ({
  text,
  as,
  fontWeight = 300,
  ...props
}: ISectionSubtitleProps) => (
  <S.Paragraph as={as} {...props} fontWeight={fontWeight}>
    {text}
  </S.Paragraph>
)

export default Paragraph

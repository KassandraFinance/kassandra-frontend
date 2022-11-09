import { HTMLAttributes } from 'react'

import * as S from './styles'

export type ParagraphType = HTMLAttributes<HTMLParagraphElement>
export type SpanType = HTMLAttributes<HTMLSpanElement>

type ISectionSubtitleProps = {
  text: string,
  as?: React.ElementType<ParagraphType | SpanType>
} & HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>

const Paragraph = ({ text, as, ...props }: ISectionSubtitleProps) => (
  <S.Paragraph as={as} {...props}>
    {text}
  </S.Paragraph>
)

export default Paragraph

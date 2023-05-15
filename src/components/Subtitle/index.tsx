import { HTMLAttributes } from 'react'

import * as S from './styles'

type HeadingType = HTMLAttributes<HTMLHeadingElement>

export type ISubtitleProps = {
  text: string
  as?: React.ElementType<HeadingType>
} & HeadingType

const Subtitle = ({ text, as, ...props }: ISubtitleProps) => (
  <S.Subtitle as={as} {...props}>
    {text}
  </S.Subtitle>
)

export default Subtitle

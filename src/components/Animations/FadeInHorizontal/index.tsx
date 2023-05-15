import React from 'react'
import { useInView } from 'react-intersection-observer'

import * as S from './styles'

interface IFadeInHorizontalProps {
  children: JSX.Element[] | JSX.Element
  threshold?: number
  invert?: boolean
}

const FadeInHorizontal = ({
  children,
  threshold = 0,
  invert = false
}: IFadeInHorizontalProps) => {
  const { ref, inView } = useInView({
    threshold: threshold
  })

  return (
    <S.FadeInHorizontalContainer
      ref={ref}
      inView={inView}
      invert={!invert ? '-20px' : '20px'}
    >
      {children}
    </S.FadeInHorizontalContainer>
  )
}

export default FadeInHorizontal

import React from 'react'
import { useInView } from 'react-intersection-observer'

import * as S from './styles'

interface IFadeInVerticalProps {
  children: JSX.Element[] | JSX.Element
  threshold?: number
}

const FadeInVertical = ({ children, threshold = 0 }: IFadeInVerticalProps) => {
  const { ref, inView } = useInView({
    threshold: threshold
  })

  return (
    <S.FadeInVerticalContainer ref={ref} inView={inView}>
      {children}
    </S.FadeInVerticalContainer>
  )
}

export default FadeInVertical

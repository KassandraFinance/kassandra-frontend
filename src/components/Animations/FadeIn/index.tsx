import React from 'react'
import { useInView } from 'react-intersection-observer'

import * as S from './styles'

interface IFadeInProps {
  children: JSX.Element[] | JSX.Element
  threshold?: number
}

const FadeIn = ({ children, threshold = 0 }: IFadeInProps) => {
  const { ref, inView } = useInView({
    threshold: threshold
  })

  return (
    <S.FadeInContainer ref={ref} inView={inView}>
      {children}
    </S.FadeInContainer>
  )
}

export default FadeIn

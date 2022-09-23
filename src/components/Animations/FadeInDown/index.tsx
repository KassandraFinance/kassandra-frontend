import React from 'react'
import { useInView } from 'react-intersection-observer'

import * as S from './styles'

interface IFadeInDownProps {
  children: JSX.Element[] | JSX.Element;
  threshold?: number;
}

const FadeInDown = ({ children, threshold = 0 }: IFadeInDownProps) => {
  const { ref, inView } = useInView({
    threshold: threshold
  })

  return (
    <S.FadeInDownContainer ref={ref} inView={inView}>
      {children}
    </S.FadeInDownContainer>
  )
}

export default FadeInDown

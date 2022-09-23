import React from 'react'
import { useInView } from 'react-intersection-observer'

import * as S from './styles'

interface IFadeInLeftProps {
  children: JSX.Element[] | JSX.Element;
  threshold?: number;
  invert?: boolean;
}

const FadeInLeft = ({
  children,
  threshold = 0,
  invert = false
}: IFadeInLeftProps) => {
  const { ref, inView } = useInView({
    threshold: threshold
  })

  return (
    <S.FadeInLeftContainer
      ref={ref}
      inView={inView}
      invert={!invert ? '-20px' : '20px'}
    >
      {children}
    </S.FadeInLeftContainer>
  )
}

export default FadeInLeft

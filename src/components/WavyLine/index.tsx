import React from 'react'

import * as S from './styles'

interface IWavyLineProps {
  color: 'color1' | 'color2';
}

const WavyLine = ({ color }: IWavyLineProps) => {
  return (
    <S.Container>
      <S.Wave color={color} />
    </S.Container>
  )
}

export default WavyLine

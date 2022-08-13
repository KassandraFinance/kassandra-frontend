import React from 'react'

import * as S from './styles'

interface IWavyLineProps {
  color: 'color1' | 'color2';
}

const WavyLine = ({ color }: IWavyLineProps) => {
  return (
    <S.WaveContainer>
      <S.Wave color={color} />
    </S.WaveContainer>
  )
}

export default WavyLine

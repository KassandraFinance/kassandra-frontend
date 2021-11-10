import React from 'react'
import * as S from './styles'

const TooltipCustomized = () => {
  return (
    <S.Content>
      <S.Price>
        <h1>$123.34567</h1>
        <span>0.11%</span>
      </S.Price>
      <p>Oct 02, 2021</p>
    </S.Content>
  )
}

export default TooltipCustomized

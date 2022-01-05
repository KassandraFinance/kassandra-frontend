import React from 'react'
import Big from 'big.js'

import { getDateInHours } from '../../../utils/date'

import * as S from './styles'
import { BNtoDecimal } from '../../../utils/numerals'

interface ITooltipCustomizedPRops {
  chart: string;
  payload: any[];
  currentPrice?: { close?: string, timestamp: number, value?: string };
}

const TooltipCustomized = (props: ITooltipCustomizedPRops) => {
  const { chart, payload, currentPrice } = props

  if (payload && payload.length) {
    return (
      <S.Content>
        <S.Price>
          <h1>{`$${BNtoDecimal(Big(payload[0].value || 0), 2, 2, 2)}`}</h1>
          {/* <span>0.11%</span> */}
        </S.Price>
        <p>{getDateInHours(payload[0].payload.timestamp)}</p>
      </S.Content>
    )
  }
  return (
    <S.Content>
      {currentPrice && (
        <>
          <S.Price>
            {chart === 'price' && (
              <h1>
                ${`${BNtoDecimal(Big(currentPrice?.close || 0), 2, 2, 2)}`}
              </h1>
            )}
            {chart === 'tvl' && (
              <h1>
                ${`${BNtoDecimal(Big(currentPrice?.value || 0), 2, 2, 2)}`}
              </h1>
            )}
            {/* <span>0.11%</span> */}
          </S.Price>
          <p>{getDateInHours(currentPrice?.timestamp)}</p>
        </>
      )}
    </S.Content>
  )
}

export default TooltipCustomized

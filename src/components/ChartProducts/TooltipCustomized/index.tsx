import React from 'react'
import { getDateInHours } from '../../../utils/date'
import * as S from './styles'

interface ITooltipCustomizedPRops {
  payload: any[];
  currentPrice?: { close: string, timestamp: number };
}

const TooltipCustomized = ({
  payload,
  currentPrice
}: ITooltipCustomizedPRops) => {
  if (payload && payload.length) {
    return (
      <S.Content>
        <S.Price>
          <h1>${`${Number(payload[0].value).toFixed(7)}`}</h1>
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
            <h1>${`${Number(currentPrice?.close).toFixed(7)}`}</h1>
            {/* <span>0.11%</span> */}
          </S.Price>
          <p>{getDateInHours(currentPrice?.timestamp)}</p>
        </>
      )}
    </S.Content>
  )
}

export default TooltipCustomized

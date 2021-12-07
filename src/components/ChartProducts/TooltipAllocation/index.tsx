import React from 'react'

import { getDate } from '../../../utils/date'

import * as S from './styles'

const TooltipAllocation = (props: { payload: any, label: any }) => {
  const { payload, label } = props
  const [currentDate, setCurrentDate] = React.useState('')

  const toPercent = (decimal: number, fixed = 2) => {
    return `${(decimal * 100).toFixed(fixed)}%`
  }

  React.useEffect(() => {
    setCurrentDate(getDate(label))
  }, [label])

  return (
    <S.TooltipAllocation>
      <ul>
        {payload.map(
          (
            entry: { color: string, name: string, value: any, payload: any },
            index: any
          ) => (
            <li key={`item-${index}`} style={{ color: entry.color }}>
              <span>{entry.name}</span>
              <span>-</span>
              <span>{toPercent(entry.value)}</span>
            </li>
          )
        )}
        <S.DateAllocation>{currentDate}</S.DateAllocation>
      </ul>
    </S.TooltipAllocation>
  )
}

export default TooltipAllocation

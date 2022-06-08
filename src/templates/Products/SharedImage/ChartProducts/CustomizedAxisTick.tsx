import React from 'react'
import { getHour, getDay } from '../../../../utils/date'

export const CustomizedAxisTick = (props: any) => {
  const { chart, x, y, payload } = props
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#eee"
        // transform="rotate(-35)"
      >
        {chart === 'price' ? getHour(payload.value) : getDay(payload.value)}
      </text>
    </g>
  )
}

export default CustomizedAxisTick

/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { XAxis, Tooltip, AreaChart, Area, ResponsiveContainer } from 'recharts'

import { getHour } from '../../utils/date'

import TooltipCustomized from './TooltipCustomized'

export const CustomizeAxisTick = (props: any) => {
  const { x, y, payload } = props
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#eee"
        transform="rotate(-35)"
      >
        {getHour(payload.value)}
      </text>
    </g>
  )
}

const ChartPrice = (props: any) => {
  return (
    <ResponsiveContainer width="100%" height={360}>
      <AreaChart
        data={props.data}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.04)',
          borderRadius: '25px',
          margin: '25px 0'
        }}
        margin={{ top: 140, right: 2, left: 3, bottom: 10 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={props.color} stopOpacity={0.3} />
            <stop offset="100%" stopColor={props.color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="timestamp"
          axisLine={false}
          tick={<CustomizeAxisTick />}
          tickMargin={-4}
          tickLine={false}
          // tickFormatter={time => getHour(time)}
        />
        <Tooltip
          wrapperStyle={{
            visibility: 'visible'
          }}
          cursor={{ stroke: props.color }}
          position={{ x: 20, y: 60 }}
          active={true}
          content={
            <TooltipCustomized
              payload={[]}
              currentPrice={props.data[props.data.length - 1]}
            />
          }
        />
        <Area
          type="monotone"
          dataKey="close"
          stroke={props.color}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default ChartPrice

/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Big from 'big.js'
import {
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer
} from 'recharts'

import TooltipCustomized from './TooltipCustomized'
import CustomizedAxisTick from './CustomizedAxisTick'

import { BNtoDecimal } from '../../utils/numerals'

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
        margin={{ top: 140, right: 2, left: 2, bottom: 10 }}
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
          tick={<CustomizedAxisTick chart="price" />}
          tickMargin={-4}
          tickLine={false}
          scale="time"
          type="number"
          domain={['auto', 'auto']}
          // tickFormatter={time => getHour(time)}
        />
        <YAxis
          mirror
          domain={['auto', 'auto']}
          tickLine={false}
          axisLine={false}
          tickFormatter={item => {
            if (item === Infinity || item === -Infinity) {
              return ''
            }

            return BNtoDecimal(Big(item).mul(Big(10).pow(18)), Big(18), 3)
          }}
        />
        <Tooltip
          wrapperStyle={{
            visibility: 'visible'
          }}
          cursor={{ stroke: props.color }}
          position={{ x: 20, y: 60 }}
          content={
            <TooltipCustomized
              chart="price"
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

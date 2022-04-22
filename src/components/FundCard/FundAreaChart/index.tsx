/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Big from 'big.js'
import { XAxis, YAxis, AreaChart, Area, ResponsiveContainer } from 'recharts'

import { BNtoDecimal } from '../../../utils/numerals'

interface IChartPriceProps {
  areaChartData: any[];
  color: string;
}

const FundAreaChart = ({ areaChartData, color }: IChartPriceProps) => {
  return (
    <ResponsiveContainer width="100%" height={113}>
      <AreaChart
        data={areaChartData}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          border: '0.664775px solid rgba(255, 255, 255, 0.02)',
          borderRadius: '6px',
          margin: '25px 0'
        }}
        margin={{ top: 10, right: 1, left: 0, bottom: 10 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.12} />
            <stop offset="175.59%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="timestamp" hide />
        <YAxis mirror axisLine={false} tick={false} />

        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default FundAreaChart

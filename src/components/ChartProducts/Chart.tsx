import React from 'react'
import { XAxis, Tooltip, AreaChart, Area, ResponsiveContainer } from 'recharts'

import TooltipCustomized from './TooltipCustomized'

const Chart = ({ data, color }: any) => {
  return (
    <ResponsiveContainer width="100%" height={360}>
      <AreaChart
        data={data}
        style={{ 
          backgroundColor: "rgba(255, 255, 255, 0.04)",
          border: '1px solid rgba(255, 255, 255, 0.04)', 
          borderRadius: '25px',
          margin: '25px 0'
        }}
        margin={{ top: 100, right: 2, left: 3, bottom: 10 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.3}/>
            <stop offset="100%" stopColor={color} stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis
          dataKey="time"
          axisLine={false}
          tickLine={false}
          tickFormatter={(time) => time}
          minTickGap={6}
        />
        <Tooltip
          cursor={{ stroke: color }}
          contentStyle={{ display: 'none' }}
          position={{ x: 20, y: 60 }}
          // formatter={(props: { payload: { time: string; value: number } }) => {
          // }}
          content={TooltipCustomized}
        />
        <Area type="monotone" dataKey="value" stroke={color} fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>    
    </ResponsiveContainer>
  )
}

export default Chart
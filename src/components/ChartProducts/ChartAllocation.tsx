import React from 'react'
import {
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer
} from 'recharts'

import TooltipAllocation from './TooltipAllocation'
import CustomizedAxisTick from './CustomizedAxisTick'

import { dictionary } from './styles'

interface IChartAllocationProps {
  data: any[];
}

const ChartAllocation = ({ data }: IChartAllocationProps) => {
  const [allocation, setAllocation] = React.useState<any[]>([])
  const [arrayKeys, setArrayKeys] = React.useState<string[]>([])

  React.useEffect(() => {
    if (data) {
      const res = data.map((item: any) => {
        const weight = item.weights.map(
          (weight: {
            token: { symbol: string },
            weight_normalized: string
          }) => {
            return {
              [weight.token.symbol]: weight.weight_normalized
            }
          }
        )

        const wei = weight.sort((a: number, b: number) => {
          return Number(Object.values(a)) - Number(Object.values(b))
        })

        const weightObj = wei.reduce(
          (target: any, obj: any) => Object.assign(target, obj),
          {}
        )
        return {
          timestamp: item.timestamp,
          ...weightObj
        }
      })

      const keys = Object.keys(res[0])

      setArrayKeys(keys.splice(1, keys.length - 1))
      setAllocation(res)
    }
  }, [])

  return (
    <ResponsiveContainer width="100%" height={360}>
      <AreaChart
        data={allocation}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.04)',
          borderRadius: '25px',
          margin: '25px 0'
        }}
        stackOffset="expand"
        margin={{ top: 90, right: 2, left: 0, bottom: 0 }}
      >
        <XAxis
          dataKey="timestamp"
          axisLine={false}
          tick={<CustomizedAxisTick chart="allocation" />}
          tickMargin={-4}
          tickLine={false}
          // tickFormatter={time => getDate(time)}
        />
        <YAxis hide />
        <Tooltip
          content={<TooltipAllocation payload={undefined} label={undefined} />}
        />
        {arrayKeys &&
          arrayKeys.map((key, index) => {
            return (
              <Area
                key={`${key}`}
                type="monotone"
                dataKey={key}
                stackId="1"
                stroke={`${dictionary[index]}`}
                fill={`${dictionary[index]}`}
              />
            )
          })}
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default ChartAllocation

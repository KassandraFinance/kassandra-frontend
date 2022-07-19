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

const invertSymbol: { [key: string]: string } = {
  '0xbbcED92AC9B958F88A501725f080c0360007e858': 'WBTC.e', //WBTC
  '0xe28Ad9Fa07fDA82abab2E0C86c64A19D452b160E': 'WETH.e', //WETH
  '0xFA17fb53da4c837594127b73fFd09fdb15f42C49': 'DAI.e', //DAI
  '0x964555644E067c560A4C144360507E80c1104784': 'USDT.e' //USDT
}

const ChartAllocation = ({ data }: IChartAllocationProps) => {
  const [allocation, setAllocation] = React.useState<any[]>([])
  const [arrayKeys, setArrayKeys] = React.useState<string[]>([])

  React.useEffect(() => {
    if (data.length) {
      const res = data.map((item: any) => {
        const weight = item.weights.map(
          (weight: {
            token: { symbol: string, id: string },
            weight_normalized: string
          }) => {
            return {
              [invertSymbol[weight.token.id] || weight.token.symbol]:
                weight.weight_normalized
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
  }, [data])

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
        margin={{ top: 50, right: 2, left: 0, bottom: 16 }}
      >
        <XAxis
          dataKey="timestamp"
          axisLine={false}
          tick={<CustomizedAxisTick chart="allocation" />}
          tickMargin={-4}
          tickLine={false}
          scale="time"
          type="number"
          domain={['auto', 'auto']}
          hide
          // tickFormatter={time => getDate(time)}
        />
        <YAxis hide domain={[0, 1]} />
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

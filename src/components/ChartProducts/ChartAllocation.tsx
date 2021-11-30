import React from 'react'
import {
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts'

import { getDate } from '../../utils/date'

import TooltipCustomized from './TooltipCustomized'

const dictionary: any = {
  0: '#E8983D',
  1: '#63698C',
  2: '#B7372D',
  3: '#3D6ECC',
  4: '#E9BC50',
  5: '#AB40E1',
  6: '#CF498D',
  7: '#D54F49',
  8: '#4517AB',
  9: '#72EEE4',
  10: '#4B81EF',
  11: '#e8983d65',
  12: '#18db11',
  13: '#cc24bef7',
  14: '#68d410d6',
  15: '#e9bb5067',
  16: '#ab40e149',
  17: '#cf498c42',
  18: '#d5504949',
  19: '#10e72299',
  20: '#d4e442b0'
}

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

  const toPercent = (decimal: number, fixed = 0) => {
    console.log(decimal, fixed)
    return `${(decimal * 100).toFixed(fixed)}%`
  }

  const getPercent = (value: number, total: number) => {
    const ratio = total > 0 ? value / total : 0

    return toPercent(ratio, 2)
  }

  const renderTooltipContent = (o: { payload: any, label: any }) => {
    const { payload, label } = o
    const total = payload.reduce(
      (result: any, entry: { value: any }) => result + entry.value,
      0
    )

    return (
      <div className="customized-tooltip-content">
        <p className="total">{`${label} (Total: ${total})`}</p>
        <ul className="list">
          {payload.map(
            (entry: { color: any, name: any, value: any }, index: any) => (
              <li key={`item-${index}`} style={{ color: entry.color }}>
                {`${entry.name}: ${entry.value}(${getPercent(
                  entry.value,
                  total
                )})`}
              </li>
            )
          )}
        </ul>
      </div>
    )
  }

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
        margin={{ top: 80, right: 2, left: 0, bottom: 20 }}
        // innerRadius={20}
        // outerRadius={20}
      >
        <XAxis dataKey="timestamp" tickFormatter={time => getDate(time)} hide />
        <YAxis tickFormatter={toPercent} hide />
        {/* <Tooltip content={renderTooltipContent} /> */}
        {arrayKeys &&
          arrayKeys.map((key, index) => {
            return (
              <Area
                key={`${key}-${Math.random() * 1000}`}
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

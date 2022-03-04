import React, { PureComponent } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'

import * as S from './styles'

const data = [
  { name: 'Group A', value: 55 },
  { name: 'Group B', value: 25 },
  { name: 'Group C', value: 10 }
]
const COLORS = ['#2CE878', '#E843C4', '#E8372C']

const Index = () => {
  const [width, setWidth] = React.useState(128)
  const [innerRadius, setInnerRadius] = React.useState(48)
  const [outerRadius, setOuterRadius] = React.useState(62)

  React.useEffect(() => {
    const widthDevice = window.screen.width

    if (widthDevice < 961) {
      setWidth(104)
      setInnerRadius(38)
      setOuterRadius(48)
    } else {
      setWidth(128)
      setInnerRadius(48)
      setOuterRadius(62)
    }
  }, [])

  return (
    <>
      <PieChart className="pie-chart" width={width} height={width}>
        <Pie
          data={data}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <S.Total>
        <span className="total">Total</span>
        <span className="value">10</span>
      </S.Total>
    </>
  )
}

export default Index

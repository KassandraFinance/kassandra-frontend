import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'

import { IStateProposalListProps } from '.'

import * as S from './styles'

interface ProposalDataProps {
  proposalData: IStateProposalListProps[];
  proposalTotal: number;
}

const chartProps = {
  width: 128,
  innerRadius: 48,
  outerRadius: 62
}

const Chart = ({ proposalData, proposalTotal }: ProposalDataProps) => {
  // eslint-disable-next-line prettier/prettier
  const [proposalStateData, setProposalStateData] = React.useState([{ name: '', value: 0, fill: '' }])

  const handleCheckChartColor = (ProspData: IStateProposalListProps) => {
    switch (ProspData.stateProposal) {
      case 'Failed':
        return '#EA3224'
      case 'Active':
        return '#E843C4'
      case 'Succeeded':
        return '#2CE878'
      default:
        return 'white'
    }
  }

  React.useEffect(() => {
    setProposalStateData([])

    proposalData.map(ProspData => {
      setProposalStateData(prevState => [
        ...prevState,
        {
          name: ProspData.stateProposal,
          value: ProspData.proposalVote,
          fill: handleCheckChartColor(ProspData)
        }
      ])
    })
  }, [proposalData])

  return (
    <>
      <PieChart
        className="pie-chart"
        width={chartProps.width}
        height={chartProps.width}
      >
        <Pie
          data={proposalStateData}
          innerRadius={chartProps.innerRadius}
          outerRadius={chartProps.outerRadius}
          paddingAngle={0}
          stroke="null"
          dataKey="value"
        >
          {proposalStateData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
      <S.Total>
        <span className="total">Total</span>
        <span className="value">{proposalTotal}</span>
      </S.Total>
    </>
  )
}

export default Chart

import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'

import { IStateProposalOverview } from '.'

import * as S from './styles'

interface ProposalDataProps {
  ProposalData: IStateProposalOverview[];
  proposalTotal: number;
}

const Index = ({ ProposalData, proposalTotal }: ProposalDataProps) => {
  const width = 128
  const innerRadius = 48
  const outerRadius = 62

  // eslint-disable-next-line prettier/prettier
  const [proposalStateData, setProposalStateData] = React.useState([{ name: '', value: 0, fill: '' }])

  const handleGraphicColorCheck = (ProspData: IStateProposalOverview) => {
    switch (ProspData.stateProposal) {
      case 'Failed':
        return '#E8372C'
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

    ProposalData.map(ProspData => {
      setProposalStateData(prevState => [
        ...prevState,
        {
          name: ProspData.stateProposal,
          value: ProspData.proposalVote,
          fill: handleGraphicColorCheck(ProspData)
        }
      ])
    })
  }, [ProposalData])

  return (
    <>
      <PieChart className="pie-chart" width={width} height={width}>
        <Pie
          data={proposalStateData}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
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

export default Index

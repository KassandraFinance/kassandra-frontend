import React from 'react'

import { GovernorAlpha } from '../../../constants/tokenAddresses'

import useGovernance from '../../../hooks/useGovernance'

import Loading from '../../Loading'
import PieChart from './PieChart'

import * as S from './styles'

export interface IStateProposalOverview {
  stateProposal: string;
  proposalVote: number;
}

const ProposalArray = [
  { stateProposal: 'Succeeded', proposalVote: 0 },
  { stateProposal: 'Active', proposalVote: 0 },
  { stateProposal: 'Failed', proposalVote: 0 }
]

const ProposalOverview = () => {
  // eslint-disable-next-line prettier/prettier
  const [stateProposalsList, setStateProposalsList] = React.useState<IStateProposalOverview[]>(ProposalArray)
  const [proposalTotal, setProposalTotal] = React.useState(0)
  const [isLoadingProposal, setIsLoadingProposal] = React.useState(true)

  const governance = useGovernance(GovernorAlpha)

  async function handleStateProposals() {
    const proposalAmount = await governance.proposalCount()
    setProposalTotal(proposalAmount)

    await Promise.all(
      Array(Number(proposalAmount))
        .fill(0)
        .map(async (Prop, index) => {
          const proposal = await governance.stateProposals(index + 1)
          const proposalState = proposal[0]

          switch (proposalState) {
            case 'Succeeded':
              ProposalArray[0].proposalVote += 1
              break
            case 'Active':
              ProposalArray[1].proposalVote += 1
              break
            case 'Failed':
              ProposalArray[2].proposalVote += 1
              break
            default:
              break
          }
        })
    )
    setStateProposalsList(ProposalArray)
    setIsLoadingProposal(false)
  }

  const handleVerificProposalName = (value: string) => {
    if (value === 'Active') {
      return (value = 'Voting Open')
    } else {
      return value
    }
  }

  React.useEffect(() => {
    handleStateProposals()
    setStateProposalsList([])
  }, [])

  return (
    <S.ProposalOverview>
      {isLoadingProposal ? (
        <S.ProposalOverviewIsLoading>
          <Loading />
        </S.ProposalOverviewIsLoading>
      ) : (
        <>
          <S.Status>
            <h3>Proposal Overview</h3>
            {stateProposalsList.map((ProposalState, index) => (
              <S.ProposalStateList
                key={ProposalState.stateProposal + index}
                ProposalState={ProposalState.stateProposal}
              >
                <span>
                  {handleVerificProposalName(ProposalState.stateProposal)}
                </span>
                <span>{ProposalState.proposalVote}</span>
              </S.ProposalStateList>
            ))}
          </S.Status>
          <S.ProposalOverviewGraphic>
            <PieChart
              ProposalData={stateProposalsList}
              proposalTotal={proposalTotal}
            />
          </S.ProposalOverviewGraphic>
        </>
      )}
    </S.ProposalOverview>
  )
}

export default ProposalOverview

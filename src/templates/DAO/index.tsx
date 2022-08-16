import Hero from './Hero'
import CommunityTenets from './CommunityTenets'
import FlowingRevenue from './FlowingRevenue'
import Governance from './Governance'
import LockVote from './LockVote'
import Scarcity from './Scarcity'
import Tokenomics from './Tokenomics'
import Contribute from '../../components/Contribute'

import * as S from './styles'

const TokenHolder = () => {
  return (
    <>
      <S.Wrapper>
        <Hero />

        <CommunityTenets />
        <Governance />
        <Scarcity />
        <FlowingRevenue />
        <LockVote />
        <Tokenomics />
        <Contribute />
      </S.Wrapper>
    </>
  )
}

export default TokenHolder

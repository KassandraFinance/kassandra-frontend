import Image from 'next/image'

import Header from '../../components/Header/newHeader'
import Button from '../../components/Button'
import Scroll from '../../components/Scroll'

import CommunityTenets from './CommunityTenets'
import FlowingRevenue from './FlowingRevenue'
import Governance from './Governance'
import LockVote from './LockVote'
import Scarcity from './Scarcity'
import Tokenomics from './Tokenomics'
import Contribute from './Contribute'

import * as S from './styles'

const TokenHolder = () => {
  return (
    <>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.Wrapper>
        <S.Hero>
          <S.HeroText>
            <S.Dao>
              <span>03</span>
              <div></div>
              <span>DAO</span>
            </S.Dao>
            <S.Display level="2">
              It’s our community, make your voice heard
            </S.Display>
            <S.Description>
              Shape Kassandra into what you believe in. Propose, vote and
              contribute where its needed. Help the community flourish: the
              bigger the pie, the better your slice.
            </S.Description>
          </S.HeroText>
          <Button
            className="button"
            size="huge"
            icon={
              <Image
                src="/assets/iconGradient/kacy.svg"
                width={18}
                height={18}
              />
            }
            backgroundPrimary
            text="Start Buying Kacy"
          />
        </S.Hero>

        <S.ScrollWrapper>
          <Scroll />
        </S.ScrollWrapper>

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

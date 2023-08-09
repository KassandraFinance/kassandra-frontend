import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import useMatomo from '@/hooks/useMatomo'

import Hero from '../../components/Hero'
import CommunityTenets from './CommunityTenets'
import FlowingRevenue from './FlowingRevenue'
import Governance from './Governance'
import LockVote from './LockVote'
import Scarcity from './Scarcity'
import Tokenomics from './Tokenomics'
import Contribute from '../../components/Contribute'
import Button from '../../components/Button'

import * as S from './styles'

const TokenHolder = () => {
  const { trackEvent } = useMatomo()
  const router = useRouter()

  return (
    <S.Wrapper>
      <S.HeroWrapper>
        <Hero
          titleNumber="03"
          title="dao"
          titleColor="#e843c4"
          subTitle="It’s our community, make your voice heard"
          description="Shape Kassandra into what you believe in. Propose, vote and contribute where its needed. Help the community flourish. Remember: the bigger the pie, the better your slice."
          backgroundImg="/assets/images/hero-token-holder.png"
          backgroundImgHight="100vh"
        >
          <Button
            className="button"
            as="a"
            href="https://app.pangolin.exchange/#/swap?outputCurrency=0xf32398dae246C5f672B52A54e9B413dFFcAe1A44"
            target="_blank"
            text="Buy KACY"
            size="huge"
            backgroundPrimary
            icon={
              <Image
                src="/assets/iconGradient/kacy.svg"
                width={18}
                height={18}
              />
            }
            onClick={() =>
              trackEvent({
                category: router.pathname,
                action: `click-on-button | Hero-DAO | ${router.pathname}`,
                name: 'Buy KACY'
              })
            }
          />
        </Hero>
      </S.HeroWrapper>

      <CommunityTenets />

      <Governance />

      <FlowingRevenue />

      <LockVote />

      <Tokenomics />

      <Contribute
        title="Find out how you can contribute"
        text="Accumulate $KACY by investing and contributing to Kassandra and earn a stake in all of our protocol fees."
      />
    </S.Wrapper>
  )
}

export default TokenHolder

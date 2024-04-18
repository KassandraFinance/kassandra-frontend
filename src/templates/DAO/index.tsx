import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import useMatomo from '@/hooks/useMatomo'

import Hero from '../../components/Hero'
import CommunityTenets from './CommunityTenets'
import FlowingRevenue from './FlowingRevenue'
import Governance from './Governance'
import LockVote from './LockVote'
import Button from '../../components/Button'
import CallToActionEndPage from '@/components/CallToActionEndPage'
import BackgroundBall from '@/components/BackgroundBall'

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
                alt="Kacy logo"
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
      <BackgroundBall
        linearGradient={{
          colors: ['#E843C433']
        }}
        position={{
          top: 80,
          right: -50
        }}
      />

      <BackgroundBall
        linearGradient={{
          colors: ['#F7964033']
        }}
        position={{
          top: 80,
          left: 2
        }}
      />

      <CommunityTenets />

      <Governance />
      <BackgroundBall
        linearGradient={{
          colors: ['#E843C433'],
          deg: 50
        }}
        position={{
          top: 170,
          left: 2
        }}
      />
      <BackgroundBall
        linearGradient={{
          colors: ['#E843C433', '#E843C400'],
          deg: -50
        }}
        position={{
          top: 220,
          right: -50
        }}
      />
      <FlowingRevenue />
      <BackgroundBall
        linearGradient={{
          colors: ['#F7964033']
        }}
        position={{
          top: 320,
          left: 10
        }}
      />

      <BackgroundBall
        linearGradient={{
          colors: ['#E843C433', '#E843C400']
        }}
        position={{
          top: 420,
          right: -10
        }}
      />

      <BackgroundBall
        linearGradient={{
          colors: ['#F7964033', '#E843C433'],
          porcentage: ['60', '100']
        }}
        position={{
          top: 460,
          left: -10
        }}
      />
      <LockVote />

      <S.CallToActionEndPageContainer>
        <CallToActionEndPage
          text="Find Out How You Can Contribute"
          socialsButtons
        />
      </S.CallToActionEndPageContainer>
    </S.Wrapper>
  )
}

export default TokenHolder

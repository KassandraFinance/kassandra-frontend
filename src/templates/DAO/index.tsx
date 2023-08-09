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
import ModalBuyKacy from '../../components/Modals/ModalBuyKacy'

import * as S from './styles'

const TokenHolder = () => {
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false)

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
            size="huge"
            icon={
              <Image
                src="/assets/iconGradient/kacy.svg"
                width={18}
                height={18}
              />
            }
            backgroundPrimary
            text="Buy KACY"
            onClick={() => {
              setIsOpenModal(true)
              trackEvent({
                category: router.pathname,
                action: `click-on-button | open-modal-buy-kacy | ${router.pathname}`,
                name: 'Buy KACY'
              })
            }}
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

      <ModalBuyKacy modalOpen={isOpenModal} setModalOpen={setIsOpenModal} />
    </S.Wrapper>
  )
}

export default TokenHolder

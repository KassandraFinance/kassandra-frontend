import Link from 'next/link'

import Subtitle from '@/components/Subtitle'
import NewButton from '@/components/NewButton'
import Paragraph from '../../../components/Paragraph'
import TransparentCard from '@/components/TransparentCard'
import FadeInVertical from '@/components/Animations/FadeInVertical'
import FadeInHorizontal from '@/components/Animations/FadeInHorizontal'
import { CompliantGrandient } from '@/Icons/CompliantGradient'
import { HandshakeGradient } from '@/Icons/HandshakeGradient'
import { InfrastructureGradient } from '@/Icons/InfrastructureGradient'
import { CustodyGradient } from '@/Icons/CustodyGradient'
import { FundAdminGradient } from '@/Icons/FundAdminGradient'
import * as S from './styles'

const DaoAssetManagement = () => {
  return (
    <S.InteractionDao>
      <S.CardsWrapper>
        <FadeInVertical threshold={0.4}>
          <TransparentCard
            title="Safety"
            logo={<CompliantGrandient />}
            description="Kassandra has audited smart contracts and has been working with decentralized technology for over three years, enabling managers, investors, and brokers to work with decentralized tokenized portfolios."
          />
        </FadeInVertical>
        <FadeInVertical threshold={0.7}>
          <TransparentCard
            title="Brokering"
            logo={<HandshakeGradient />}
            description="Earn deposit fees for sharing tokenized portfolios and attract more investors to your decentralized portfolio."
          />
        </FadeInVertical>
        <FadeInVertical threshold={0.7}>
          <TransparentCard
            title="Infrastructure"
            logo={<InfrastructureGradient />}
            description="With low slippage investment and automatic rebalancing, your decentralized portfolio can be available 24/7."
          />
        </FadeInVertical>
        <FadeInVertical threshold={1}>
          <TransparentCard
            title="Custody"
            logo={<CustodyGradient />}
            description="All assets invested on the Kassandra platform stay in audited smart contracts, and only the investor can remove these assets. This feature makes Kassandra Platform an autocustodial system for decentralized portfolios."
          />
        </FadeInVertical>
        <FadeInVertical threshold={1}>
          <TransparentCard
            title="Fund Admin"
            logo={<FundAdminGradient />}
            description="You can change the weight, add, and remove assets from your portfolio without complications."
          />
        </FadeInVertical>
      </S.CardsWrapper>

      <FadeInHorizontal threshold={0.5}>
        <S.TextWrapper>
          <Subtitle text="Simplifying Tokenized Portfolios Interaction" />
          <Paragraph text="With Kassandra, you can create a decentralized portfolio with an easy-to-use interface, eliminating all complexities associated with managing crypto assets. We have developed a decentralized platform with similar characteristics to hedge funds and ETFs, but decentralized. With a user-friendly interface, you can easily share these portfolios with family and friends and earn." />

          <S.ButtonsWrapper>
            <Link href="https://app.kassandra.finance/" passHref>
              <NewButton
                background="primary"
                className="btn"
                text="See our Portfolios"
                fullWidth
                as="a"
              />
            </Link>

            <Link href="https://app.kassandra.finance/manage" passHref>
              <NewButton
                size="medium"
                background="white"
                className="btn"
                text="Create your Portfolio"
                fullWidth
                as="a"
              />
            </Link>
          </S.ButtonsWrapper>
        </S.TextWrapper>
      </FadeInHorizontal>
    </S.InteractionDao>
  )
}

export default DaoAssetManagement

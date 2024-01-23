import Link from 'next/link'

import Subtitle from '@/components/Subtitle'
import NewButton from '@/components/NewButton'
import Paragraph from '../../../components/Paragraph'
import TransparentCard from '@/components/TransparentCard'
import FadeInVertical from '@/components/Animations/FadeInVertical'
import FadeInHorizontal from '@/components/Animations/FadeInHorizontal'

import { CommunityGradientIcon } from '@/Icons/CommunityGradient'

import * as S from './styles'

const DaoAssetManagement = () => {
  return (
    <S.InteractionDao>
      <S.CardsWrapper>
        <FadeInVertical threshold={0.4}>
          <TransparentCard
            title="Compliant"
            logo={<CommunityGradientIcon />}
            description="Kassandra is a DAO asset management platform that allows simplified access to tokenized portfolios."
          />
        </FadeInVertical>
        <FadeInVertical threshold={0.7}>
          <TransparentCard
            title="Transparency"
            logo={<CommunityGradientIcon />}
            description="Kassandra is a DAO asset management platform that allows simplified access to tokenized portfolios."
          />
        </FadeInVertical>
        <FadeInVertical threshold={0.7}>
          <TransparentCard
            title="Infrastructure"
            logo={<CommunityGradientIcon />}
            description="Kassandra is a DAO asset management platform that allows simplified access to tokenized portfolios."
          />
        </FadeInVertical>
        <FadeInVertical threshold={1}>
          <TransparentCard
            title="Custody"
            logo={<CommunityGradientIcon />}
            description="Kassandra is a DAO asset management platform that allows simplified access to tokenized portfolios."
          />
        </FadeInVertical>
        <FadeInVertical threshold={1}>
          <TransparentCard
            title="Fund Admin"
            logo={<CommunityGradientIcon />}
            description="Kassandra is a DAO asset management platform"
          />
        </FadeInVertical>
      </S.CardsWrapper>

      <FadeInHorizontal threshold={0.5}>
        <S.TextWrapper>
          <Subtitle text="Simplifying Tokenized Portfolios Interaction" />
          <Paragraph text="Kassandra is a DAO asset management platform that allows simplified access to tokenized portfolios, providing the apparatus needed to create and manage tokenized crypto portfolios while connecting these managers to investors eager to diversify their investment." />

          <Link href="https://app.kassandra.finance/" passHref>
            <NewButton
              background="primary"
              className="btn"
              text="See our Thematic Investment"
              fullWidth
              as="a"
            />
          </Link>
        </S.TextWrapper>
      </FadeInHorizontal>
    </S.InteractionDao>
  )
}

export default DaoAssetManagement

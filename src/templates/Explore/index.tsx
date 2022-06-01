import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'
import TitleSection from '../../components/TitleSection'
import FundCard from '../../components/FundCard'

import sectionTitleEye from '../../../public/assets/iconGradient/section-title-eye.svg'
import featuredFunds from '../../../public/assets/iconGradient/featured.svg'
import communityFunds from '../../../public/assets/iconGradient/community.svg'

import * as S from './styles'

import { products } from '../../constants/tokenAddresses'
import AnyCard from '../../components/AnyCard'

export default function Explore() {
  return (
    <>
      <Header />

      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href={`/explore`} isLastPage>
          Explore
        </BreadcrumbItem>
      </Breadcrumb>

      <S.Explore>
        <S.TitleContainer>
          <TitleSection
            image={sectionTitleEye}
            title="Explore Funds"
            text="Find a strategy that fits your needs"
          />
        </S.TitleContainer>

        <S.ExploreContainer>
          <TitleSection image={featuredFunds} title="Featured Funds" text="" />

          <S.CardContainer>
            {products.map((product, index: number) => {
              return <FundCard key={index} product={product} />
            })}
          </S.CardContainer>

          <S.ComunitFundsContainer>
            <TitleSection
              image={communityFunds}
              title="Community Funds"
              text=""
            />

            <AnyCard text="Coming Soon…" />
          </S.ComunitFundsContainer>
        </S.ExploreContainer>
      </S.Explore>
    </>
  )
}

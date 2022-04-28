import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'
import FundCard from '../../components/FundCard'

import sectionTitleEye from '../../../public/assets/iconGradient/section-title-eye.svg'

import * as S from './styles'
import TitleSection from '../../components/TitleSection'

import { products } from '../../constants/tokenAddresses'

export default function Explore() {
  return (
    <S.BackgroundProducts boxShadow={false}>
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
            title="Explore Funds and Managers"
            text="Browse through various protocols and find the strategy"
          />
        </S.TitleContainer>

        <S.CardContainer>
          {products.map((product, index: number) => {
            return <FundCard key={index} product={product} />
          })}
        </S.CardContainer>
      </S.Explore>
    </S.BackgroundProducts>
  )
}

import React from 'react'

import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'
import PortfolioHeading from '../../components/PortfolioHeading'

import AssetsIcon from '../../../public/assets/iconGradient/section-title-Assets.svg'
import StakedPoolsIcon from '../../../public/assets/iconGradient/section-title-Staked-pools.svg'

import * as S from './styles'

const Profile = () => {
  return (
    <S.BackgroundProfile boxShadow={false}>
      <Header />
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href={`/Profile`} isLastPage>
          Profile
        </BreadcrumbItem>
      </Breadcrumb>

      <S.Profile>
        <PortfolioHeading
          image={AssetsIcon}
          title="Assets"
          usd={'16,000,000.00'}
          change={0.11}
        />
        <PortfolioHeading
          image={StakedPoolsIcon}
          title="Staking and Farming"
          usd={'16,000,000.00'}
          change={-0.11}
        />
      </S.Profile>
    </S.BackgroundProfile>
  )
}

export default Profile

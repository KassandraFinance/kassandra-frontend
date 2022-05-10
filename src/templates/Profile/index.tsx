import React from 'react'

import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'
import Portfolio from '../../components/Portfolio'

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

      <Portfolio />
    </S.BackgroundProfile>
  )
}

export default Profile

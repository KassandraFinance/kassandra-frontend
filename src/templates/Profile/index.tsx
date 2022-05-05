import React from 'react'

import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'

const Profile = () => {
  return (
    <>
      <Header />
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href={`/Profile`} isLastPage>
          Profile
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  )
}

export default Profile

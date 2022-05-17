import React from 'react'
import { useRouter } from 'next/router'

import { useSelector, RootStateOrAny } from 'react-redux'

import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'
import Portfolio from '../../components/Portfolio'

import substr from '../../utils/substr'

import * as S from './styles'

const Profile = () => {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const router = useRouter()

  const profileAddress = router.query.profileAddress

  return (
    <>
      <Header />
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem
          href={`/profile/${userWalletAddress}`}
          isLastPage={userWalletAddress === profileAddress}
        >
          Profile
        </BreadcrumbItem>
        {userWalletAddress !== profileAddress && (
          <BreadcrumbItem href={`/Profile/${profileAddress}`} isLastPage>
            {substr(String(profileAddress))}
          </BreadcrumbItem>
        )}
      </Breadcrumb>

      <Portfolio
        profileAddress={
          typeof profileAddress === 'undefined'
            ? ''
            : typeof profileAddress === 'string'
            ? profileAddress
            : ''
        }
      />
    </>
  )
}

export default Profile

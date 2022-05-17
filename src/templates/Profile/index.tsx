import React from 'react'
import { useRouter } from 'next/router'
import detectEthereumProvider from '@metamask/detect-provider'

import { useSelector, RootStateOrAny } from 'react-redux'

import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'
import Portfolio from '../../components/Portfolio'
import Web3Disabled from '../../components/Web3Disabled'

import substr from '../../utils/substr'

import * as S from './styles'

const Profile = () => {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const router = useRouter()

  const [hasEthereumProvider, setHasEthereumProvider] = React.useState(false)

  const profileAddress = router.query.profileAddress

  React.useEffect(() => {
    const checkEthereumProvider = async () => {
      const provider = await detectEthereumProvider()

      if (provider) {
        setHasEthereumProvider(true)
      } else {
        setHasEthereumProvider(false)
      }
    }

    checkEthereumProvider()
  })

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

      {hasEthereumProvider ? (
        <Portfolio
          profileAddress={
            typeof profileAddress === 'undefined'
              ? ''
              : typeof profileAddress === 'string'
              ? profileAddress
              : ''
          }
        />
      ) : (
        <Web3Disabled
          textHeader="You need to have a Wallet installed"
          bodyText="Please install any Wallet to see the users profiles"
          type="connect"
        />
      )}
    </>
  )
}

export default Profile

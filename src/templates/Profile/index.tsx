import React from 'react'
import { useRouter } from 'next/router'
import detectEthereumProvider from '@metamask/detect-provider'

import { useSelector, RootStateOrAny } from 'react-redux'

import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'
import UserDescription from '../../components/Governance/UserDescription'
import Portfolio from './Portfolio'
import GovernanceData from './GovernanceData'
import Web3Disabled from '../../components/Web3Disabled'
import SelectTabs from '../../components/SelectTabs'
import AnyCard from '../../components/AnyCard'
import Loading from '../../components/Loading'

import profileIcon from '../../../public/assets/iconGradient/profile.svg'
import walletIcon from '../../../public/assets/iconGradient/wallet-gradient.svg'
import governanceIcon from '../../../public/assets/iconGradient/vote.svg'

import substr from '../../utils/substr'

import * as S from './styles'

const tabs = [
  {
    asPathText: 'portfolio',
    text: 'Portfolio',
    icon: walletIcon
  },
  {
    asPathText: 'managed-funds',
    text: 'Managed Funds',
    icon: profileIcon
  },
  {
    asPathText: 'governance-data',
    text: 'Governance Data',
    icon: governanceIcon
  }
]

const Profile = () => {
  const router = useRouter()
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const [hasEthereumProvider, setHasEthereumProvider] = React.useState(false)
  const [isSelectTab, setIsSelectTab] = React.useState<
    string | string[] | undefined
  >('portfolio')

  const profileAddress = router.query.profileAddress
  const isSelectQueryTab = router.query.tab

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

  React.useEffect(() => {
    if (isSelectQueryTab) {
      setIsSelectTab(isSelectQueryTab)
    } else {
      setIsSelectTab('portfolio')
    }
  }, [router])

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

      <S.ProfileContainer>
        <UserDescription userWalletUrl={profileAddress} />
        <SelectTabs
          tabs={tabs}
          isSelect={isSelectTab}
          setIsSelect={setIsSelectTab}
        />
        {isSelectTab === tabs[0].asPathText ? (
          <>
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
        ) : isSelectTab === tabs[1].asPathText ? (
          <AnyCard text="Coming Soon…" />
        ) : isSelectTab === tabs[2].asPathText ? (
          <GovernanceData address={profileAddress} />
        ) : (
          <Loading marginTop={4} />
        )}
      </S.ProfileContainer>
    </>
  )
}

export default Profile

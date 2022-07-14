import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import detectEthereumProvider from '@metamask/detect-provider'

import { useAppSelector } from '../../store/hooks'

import Header from '../../components/Header'
import Web3Disabled from '../../components/Web3Disabled'

export default function Index() {
  const userWalletAddress = useAppSelector(state => state.userWalletAddress)
  const router = useRouter()

  const [hasEthereumProvider, setHasEthereumProvider] = React.useState(false)

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
  }, [])

  React.useEffect(() => {
    const asPathId = router.asPath.slice(8)

    if (userWalletAddress.length > 0) {
      router.push(`/profile/${userWalletAddress}${asPathId}`)
    }
  }, [userWalletAddress])

  return (
    <>
      <Head>
        <meta
          property="og:image"
          content="https://kassandra.finance/kacy-og.png"
        />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta property="og:url" content="https://kassandra.finance/" />
      </Head>

      <>
        <Header />

        {!hasEthereumProvider ? (
          <Web3Disabled
            textButton="Connect Wallet"
            textHeader="You need to have a Wallet installed"
            bodyText="Please install any Wallet to see the users profiles"
            type="connect"
          />
        ) : (
          <Web3Disabled
            textHeader="Connect Wallet"
            textButton="Connect Wallet"
            type="connect"
            bodyText="Please connect to see your profile"
          />
        )}
      </>
    </>
  )
}

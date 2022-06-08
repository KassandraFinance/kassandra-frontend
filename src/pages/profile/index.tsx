import React from 'react'
import Head from 'next/head'
// import { useRouter } from 'next/router'
// import { useSelector, RootStateOrAny } from 'react-redux'

import NotFound from '../../templates/404'

import Header from '../../components/Header'
import Web3Disabled from '../../components/Web3Disabled'

export default function Index() {
  // const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  // const router = useRouter()

  // React.useEffect(() => {
  //   if (userWalletAddress.length > 0) {
  //     router.push(`/profile/${userWalletAddress}`)
  //   }
  // }, [userWalletAddress])

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
      {process.env.NEXT_PUBLIC_VOTE === '1' ? (
        <>
          <Header />
          <Web3Disabled
            textHeader="Connect Wallet"
            textButton="Connect Wallet"
            type="connect"
            bodyText="Please connect to see your profile"
          />
        </>
      ) : (
        <NotFound />
      )}
    </>
  )
}

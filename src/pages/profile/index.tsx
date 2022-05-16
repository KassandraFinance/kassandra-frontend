import React from 'react'
import { useRouter } from 'next/router'
import { useSelector, RootStateOrAny } from 'react-redux'

import Web3Disabled from '../../components/Web3Disabled'
import Header from '../../components/Header'

export default function Index() {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const router = useRouter()

  React.useEffect(() => {
    if (userWalletAddress.length > 0) {
      router.push(`/profile/${userWalletAddress}`)
    }
  }, [userWalletAddress])

  return (
    <>
      <Header />
      <Web3Disabled
        textHeader="Connect Wallet"
        textButton="Connect Wallet"
        type="connect"
        bodyText="Please connect to see your profile"
      />
    </>
  )
}

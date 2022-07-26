/* eslint-disable prettier/prettier */
import React from 'react'
import { useRouter } from 'next/router'
import detectEthereumProvider from '@metamask/detect-provider'

import { chains } from '../../constants/tokenAddresses'

import { useAppSelector } from '../../store/hooks'

import Web3Disabled from '../../components/Web3Disabled'
import VotingPower from '../../components/VotingPower'
import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'
import SelectTabs from '../../components/SelectTabs'
import Farm from './Farm'
import Stake from './Stake'

import productBarIcon from '../../../public/assets/iconGradient/product-bar.svg'
import stakingPoolsIcon from '../../../public/assets/iconGradient/staking-pools.svg'

import * as S from './styles'

const tabs = [
  {
    asPathText: 'farm',
    text: 'Farm Pools',
    icon: productBarIcon
  },
  {
    asPathText: 'stake',
    text: 'Stake Pools',
    icon: stakingPoolsIcon
  }
]

const StakeFarm = () => {
  const router = useRouter()

  const [hasEthereumProvider, setHasEthereumProvider] = React.useState(false)
  const [isSelectTab, setIsSelectTab] = React.useState<
    string | string[] | undefined
  >('farm')

  const { userWalletAddress, chainId } = useAppSelector(state => state)

  const chain =
    process.env.NEXT_PUBLIC_MASTER === '1' ? chains.avalanche : chains.fuji

  React.useEffect(() => {
    const isSelectQueryTab = router.query.tab

    if (isSelectQueryTab) {
      setIsSelectTab(isSelectQueryTab)
    }
  }, [router])

  React.useEffect(() => {
    const checkEthereumProvider = async () => {
      const provider = await detectEthereumProvider()

      if (!provider && !chainId) {
        setHasEthereumProvider(false)
      } else {
        setHasEthereumProvider(true)
      }
    }

    checkEthereumProvider()
  }, [chainId])

  return (
    <>
      <Header />
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/farm" isLastPage>
          Stake/Farm
        </BreadcrumbItem>
      </Breadcrumb>
      {!hasEthereumProvider ? (
        <Web3Disabled
          textButton="Connect Wallet"
          textHeader="Your wallet is not connected"
          bodyText="Please connect your wallet to access our pools"
          type="connect"
        />
      ) : Number(chainId) !== chain.chainId ? (
        <Web3Disabled
          textButton={`Connect to ${chain.chainName}`}
          textHeader="Your wallet is set to the wrong network."
          bodyText={`Please switch to the ${chain.chainName} network to have access to all our staking pools`}
          type="changeChain"
        />
      ) : (
        <>
          <S.StakeFarm>
            <S.StakeFarmHeader>
              <S.StakeWithPowerVote>
                <S.NameStake>
                  <S.Name>
                    <img
                      src="assets/iconGradient/stake-money-withdraw.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                    <h1>Stake and Farm KACY</h1>
                  </S.Name>
                  <p>
                    Earn rewards and voting power by staking KACY and other
                    assets
                  </p>
                </S.NameStake>
                <VotingPower userWalletAddress={userWalletAddress} />
              </S.StakeWithPowerVote>

              <SelectTabs
                tabs={tabs}
                isSelect={isSelectTab}
                setIsSelect={setIsSelectTab}
              />
            </S.StakeFarmHeader>

            {isSelectTab === 'farm' && <Farm />}

            {isSelectTab === 'stake' && <Stake />}
          </S.StakeFarm>
        </>
      )}
    </>
  )
}

export default StakeFarm

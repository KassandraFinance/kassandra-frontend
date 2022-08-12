/* eslint-disable prettier/prettier */
import React from 'react'
import { useRouter } from 'next/router'

import { chains } from '../../constants/tokenAddresses'

import { useAppSelector } from '../../store/hooks'

import Web3Disabled from '../../components/Web3Disabled'
import VotingPower from '../../components/VotingPower'
import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'
import SelectTabs from '../../components/SelectTabs'
import TitleSection from '../../components/TitleSection'
import Farm from './Farm'
import Stake from './Stake'

import productBarIcon from '../../../public/assets/iconGradient/product-bar.svg'
import stakingPoolsIcon from '../../../public/assets/iconGradient/staking-pools.svg'
import stakeMoneyWithdraw from '../../../public/assets/iconGradient/stake-money-withdraw.svg'

import * as S from './styles'

const tabs = [
  {
    asPathText: 'stake',
    text: 'Stake Pools',
    icon: stakingPoolsIcon
  },
  {
    asPathText: 'farm',
    text: 'Farm Pools',
    icon: productBarIcon
  }
]

const StakeFarm = () => {
  const router = useRouter()

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

  return (
    <>
      <Header />
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/farm" isLastPage>
          Stake/Farm
        </BreadcrumbItem>
      </Breadcrumb>
      {userWalletAddress.length === 0 && Number(chainId) !== chain.chainId ? (
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
                <TitleSection
                  image={stakeMoneyWithdraw}
                  title="Stake and Farm KACY"
                  text="Earn rewards and voting power by staking KACY and other assets"
                />
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

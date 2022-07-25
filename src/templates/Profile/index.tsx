import React from 'react'
import { useRouter } from 'next/router'
import detectEthereumProvider from '@metamask/detect-provider'
import BigNumber from 'bn.js'
import useSWR from 'swr'
import request from 'graphql-request'
import Big from 'big.js'
import { toChecksumAddress } from 'web3-utils'

import { ERC20 } from '../../hooks/useERC20Contract'
import useStakingContract from '../../hooks/useStakingContract'
import usePriceLP from '../../hooks/usePriceLP'
import { useAppSelector } from '../../store/hooks'
import useVotingPower from '../../hooks/useVotingPower'

import { GET_PROFILE } from './graphql'
import {
  LPDaiAvax,
  products,
  Staking,
  SUBGRAPH_URL,
  chains
} from '../../constants/tokenAddresses'
import { LP_KACY_AVAX_PNG, LP_KACY_AVAX_JOE, allPools } from '../../constants/pools'

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
import AnyCardTotal from '../../components/Governance/AnyCardTotal'

import profileIcon from '../../../public/assets/iconGradient/profile.svg'
import walletIcon from '../../../public/assets/iconGradient/wallet-gradient.svg'
import governanceIcon from '../../../public/assets/iconGradient/vote.svg'

import substr from '../../utils/substr'
import { BNtoDecimal } from '../../utils/numerals'

import * as S from './styles'

// eslint-disable-next-line prettier/prettier
declare let window: {
  ethereum: any
  location: {
    reload: (noCache?: boolean) => void
  }
}

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

export interface IKacyLpPool {
  pid: number;
  symbol: string;
  poolName: string;
  address: string;
  properties?: {
    logo: {
      src: string,
      style: {
        width: string
      }
    },
    title?: string,
    linkLp?: string
  };
  amount: BigNumber;
}
export interface IAssetsValueWalletProps {
  [key: string]: BigNumber;
}

export interface IPriceToken {
  [key: string]: Big;
}

interface ImyFundsType {
  [key: string]: string;
}

const Profile = () => {
  const [assetsValueInWallet, setAssetsValueInWallet] =
    React.useState<IAssetsValueWalletProps>({ '': new BigNumber(-1) })
  const [cardstakesPool, setCardStakesPool] = React.useState<IKacyLpPool[]>([])
  const [myFunds, setMyFunds] = React.useState<ImyFundsType>({})
  const [hasEthereumProvider, setHasEthereumProvider] = React.useState(false)
  const [totalVotingPower, setTotalVotingPower] = React.useState(
    new BigNumber(0)
  )
  const [priceToken, setPriceToken] = React.useState<IPriceToken>({
    'LP-PNG': Big(0),
    'LP-JOE': Big(0),
    KACY: Big(0),
    aHYPE: Big(0),
    K3C: Big(0)
  })
  const [productAddress, setProductAddress] = React.useState<{ id: string[] }>({
    id: []
  })
  const [isSelectTab, setIsSelectTab] = React.useState<
    string | string[] | undefined
  >('portfolio')
  const [priceInDolar, setPriceInDolar] = React.useState({
    tokenizedFunds: new Big(0),
    assetsToken: new Big(0),
    totalInvestmented: new Big(0)
  })

  const router = useRouter()
  const { chainId, userWalletAddress } = useAppSelector(state => state)

  const votingPower = useVotingPower(Staking)
  const { userInfo } = useStakingContract(Staking)
  const { getPriceKacyAndLP } = usePriceLP()

  const profileAddress = router.query.profileAddress
  const isSelectQueryTab = router.query.tab
  const walletUserString = profileAddress
    ? Array.isArray(profileAddress)
      ? profileAddress[0]
      : profileAddress
    : ''

  const { data } = useSWR(
    [GET_PROFILE, productAddress],
    (query, productAddress) =>
      request(SUBGRAPH_URL, query, {
        id: productAddress.id
        // userVP: walletUserString
      })
  )

  const chain =
    process.env.NEXT_PUBLIC_MASTER === '1' ? chains.avalanche : chains.fuji

  async function getTokenAmountInPool(pid: number) {
    try {
      const userInfoResponse = await userInfo(pid, profileAddress)

      return new BigNumber(userInfoResponse.amount)
    } catch (error) {
      return new BigNumber(0)
    }
  }

  async function getBalanceInWallet(id: string) {
    try {
      const ERC20Contract = ERC20(id)
      const balanceToken = await ERC20Contract.balance(walletUserString)

      setAssetsValueInWallet(prevState => ({
        ...prevState,
        [id]: balanceToken
      }))
    } catch (error) {
      setAssetsValueInWallet(prevState => ({
        ...prevState,
        [id]: new BigNumber(0)
      }))
    }
  }

  async function getLiquidityPoolPriceInDollar() {
    const { kacyPriceInDollar, priceLP } = await getPriceKacyAndLP(LP_KACY_AVAX_PNG, LPDaiAvax, true)
    const priceLPJoe = await getPriceKacyAndLP(LP_KACY_AVAX_JOE, LPDaiAvax, true)

    if (priceLP && priceLPJoe.priceLP) {
      setPriceToken(prevState => ({
        ...prevState,
        'LP-PNG': priceLP,
        'LP-JOE': priceLPJoe.priceLP,
        KACY: kacyPriceInDollar
      }))
    }
  }

  async function getAmountToken() {
    let kacyObject: IKacyLpPool = {
      pid: 0,
      address: '',
      symbol: '',
      poolName: '',
      amount: new BigNumber(0)
    }

    setCardStakesPool([])

    await Promise.all(
      allPools.map(async pool => {
        const tokenAmountInPool = await getTokenAmountInPool(pool.pid)
        getBalanceInWallet(pool.address)

        if (pool.symbol === 'KACY') {
          const kacyAmount = kacyObject.amount

          kacyObject = {
            pid: pool.pid,
            address: pool.address,
            poolName: pool.symbol,
            symbol: pool.symbol,
            properties: pool.properties,
            amount: kacyAmount.add(tokenAmountInPool)
          }
        } else {
          setCardStakesPool(prevState => [
            ...prevState,
            {
              amount: tokenAmountInPool,
              address: pool.address,
              pid: pool.pid,
              poolName: pool.properties.title
                ? pool.properties.title
                : pool.symbol,
              properties: pool.properties,
              symbol: pool.symbol
            }
          ])
        }
      })
    )

    setCardStakesPool(prevState => [...prevState, kacyObject])
  }

  const handleAccountChange = ((account: string[]) => {
    const tabSelect = isSelectQueryTab ? isSelectQueryTab : 'portfolio'

    router.push(
      {
        pathname: `/profile/${toChecksumAddress(account[0])}`,
        query: { tab: `${tabSelect}` }
      },
      undefined,
      { scroll: false, shallow: false }
    )
  })

  React.useEffect(() => {
    if (hasEthereumProvider) {
      window.ethereum.on('accountsChanged', handleAccountChange)
    }
  }, [])

  React.useEffect(() => {
    const arr: string[] = []

    products.forEach(asset => {
      arr.push(asset.sipAddress)

      setMyFunds(prevState => ({
        ...prevState,
        [asset.sipAddress]: asset.sipAddress
      }))
    })

    setProductAddress({
      id: arr
    })
  }, [products])

  React.useEffect(() => {
    if (data?.pools) {
      // setTotalVotingPower(data.user.votingPower)

      data.pools.map(
        (prod: { id: string, price_usd: string, symbol: string }) => {
          const prodPrice = new Big(prod.price_usd)

          setPriceToken(prevState => ({
            ...prevState,
            [prod.symbol]: prodPrice
          }))
        }
      )
    }
  }, [data, walletUserString])

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

  React.useEffect(() => {
    if (isSelectQueryTab) {
      setIsSelectTab(isSelectQueryTab)
    } else {
      setIsSelectTab('portfolio')
    }
  }, [router])

  React.useEffect(() => {
    if (Number(chainId) !== chain.chainId) {
      return
    }

    if (profileAddress) {
      getAmountToken()
      getLiquidityPoolPriceInDollar()
    }
  }, [profileAddress, chainId])

  React.useEffect(() => {
    if (Number(chainId) !== chain.chainId) {
      return
    }

    let tokenAmountInTokenizedFunds = new Big(0)
    let tokenAmountInAssetsToken = new Big(0)

    if (profileAddress && cardstakesPool.length > 0 && assetsValueInWallet) {
      cardstakesPool.forEach(pool => {
        const tokenAmount = Big(
          (assetsValueInWallet[pool.address]
            ? pool.amount.add(assetsValueInWallet[pool.address])
            : pool.amount
          ).toString()
        ).mul(priceToken[pool.symbol]).div(Big(10).pow(18))

        if (pool.address === myFunds[pool.address]) {
          tokenAmountInAssetsToken = tokenAmountInAssetsToken.add(tokenAmount)
        } else {
          tokenAmountInTokenizedFunds = tokenAmountInTokenizedFunds.add(tokenAmount)
        }
      })
    }

    setPriceInDolar({
      assetsToken: tokenAmountInTokenizedFunds,
      tokenizedFunds: tokenAmountInAssetsToken,
      totalInvestmented: tokenAmountInTokenizedFunds.add(tokenAmountInAssetsToken)
    })
  }, [profileAddress, priceToken, assetsValueInWallet, data, chainId])

  React.useEffect(() => {
    if (Number(chainId) !== chain.chainId) {
      return
    }

    async function getVotingPower() {
      const currentVotes = await votingPower.currentVotes(profileAddress)

      setTotalVotingPower(currentVotes || new BigNumber(0))
    }

    getVotingPower()
  }, [profileAddress, chainId])

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

        {!hasEthereumProvider ? (
          <Web3Disabled
            textButton="Connect Wallet"
            textHeader="You need to have a Wallet installed"
            bodyText="Please install any Wallet to see the users profiles"
            type="connect"
          />
        ) : Number(chainId) !== chain.chainId ? (
          <Web3Disabled
            textButton={`Connect to ${chain.chainName}`}
            textHeader="Your wallet is set to the wrong network."
            bodyText={`Please switch to the ${chain.chainName} network to have access to user profile`}
            type="changeChain"
          />
        ) : (
          <>
            <S.TotalValuesCardsContainer>
              <AnyCardTotal
                text={String(BNtoDecimal(priceInDolar.totalInvestmented, 6, 2, 2) || 0)}
                TooltipText="The amount in US Dollars that this address has in investments with Kassandra. This considers tokens, funds, LP, and staked assets."
                textTitle="HOLDINGS"
                isDolar={true}
              />
              <AnyCardTotal
                text={`$ ${0}`}
                TooltipText="The amount in US Dollars that this address manages in tokenized funds with Kassandra."
                textTitle="TOTAL MANAGED"
              />
              <AnyCardTotal
                text={String(BNtoDecimal(totalVotingPower, 18, 2) || 0)}
                TooltipText="The voting power of this address. Voting power is used to vote on governance proposals, and it can be earned by staking KACY."
                textTitle="VOTING POWER"
              />
            </S.TotalValuesCardsContainer>
            <SelectTabs
              tabs={tabs}
              isSelect={isSelectTab}
              setIsSelect={setIsSelectTab}
            />
            {isSelectTab === tabs[0].asPathText ? (
              <Portfolio
                profileAddress={
                  typeof profileAddress === 'undefined'
                    ? ''
                    : typeof profileAddress === 'string'
                    ? profileAddress
                    : ''
                }
                assetsValueInWallet={assetsValueInWallet}
                cardstakesPool={cardstakesPool}
                priceToken={priceToken}
                myFunds={myFunds}
                priceInDolar={priceInDolar}
              />
            ) : isSelectTab === tabs[1].asPathText ? (
              <AnyCard text="Coming Soon..." />
            ) : isSelectTab === tabs[2].asPathText ? (
              <>
                <AnyCard text="Coming Soon..." />
                {/* <GovernanceData address={profileAddress} /> */}
              </>
            ) : (
              <Loading marginTop={4} />
            )}
          </>
        )}
      </S.ProfileContainer>
    </>
  )
}

export default Profile

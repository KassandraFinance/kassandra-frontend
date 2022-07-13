import React from 'react'
import { useRouter } from 'next/router'
import detectEthereumProvider from '@metamask/detect-provider'
import BigNumber from 'bn.js'
import useSWR from 'swr'
import request from 'graphql-request'
import Big from 'big.js'

import useERC20Contract, { ERC20 } from '../../hooks/useERC20Contract'
import useStakingContract from '../../hooks/useStakingContract'
import usePriceLP from '../../hooks/usePriceLP'
import { useAppSelector } from '../../store/hooks'
import useVotingPower from '../../hooks/useVotingPower'

import { GET_PROFILE } from './graphql'
import {
  LPDaiAvax,
  LPKacyAvaxJOE,
  LPKacyAvaxPNG,
  products,
  Staking,
  SUBGRAPH_URL
} from '../../constants/tokenAddresses'
import { allPools } from '../../constants/pools'

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
  const [totalInvestmented, setTotalInvestmented] = React.useState(new Big(0))
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
  const votingPower = useVotingPower(Staking)

  const userWalletAddress = useAppSelector(state => state.userWalletAddress)

  const router = useRouter()

  const { userInfo } = useStakingContract(Staking)
  const { getReserves } = usePriceLP()
  const lpToken = useERC20Contract(LPKacyAvaxPNG)
  const lpJoeToken = useERC20Contract(LPKacyAvaxJOE)

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

  async function handleLPtoUSD() {
    const reservesKacyAvax = await getReserves(LPKacyAvaxPNG)
    const reservesKacyAvaxJoe = await getReserves(LPKacyAvaxJOE)
    const reservesDaiAvax = await getReserves(LPDaiAvax)

    let kacyReserve = reservesKacyAvax._reserve1
    let avaxKacyReserve = reservesKacyAvax._reserve0
    const avaxKacyReserveJoe = reservesKacyAvaxJoe._reserve0
    let DaiReserve = reservesDaiAvax._reserve1
    let AvaxDaiReserve = reservesDaiAvax._reserve0

    if (process.env.NEXT_PUBLIC_MASTER !== '1') {
      kacyReserve = reservesKacyAvax._reserve0
      avaxKacyReserve = reservesKacyAvax._reserve1
      DaiReserve = reservesDaiAvax._reserve0
      AvaxDaiReserve = reservesDaiAvax._reserve1
    }
    const avaxInDollar = Big(DaiReserve).div(Big(AvaxDaiReserve))
    const kacyInDollar = avaxInDollar.mul(Big(avaxKacyReserve).div(kacyReserve))
    const allAVAXDollar = Big(avaxKacyReserve).mul(avaxInDollar)
    const allAVAXDollarJoe = Big(avaxKacyReserveJoe).mul(avaxInDollar)
    const supplyLPToken = await lpToken.totalSupply()
    const supplyLPJoeToken = await lpJoeToken.totalSupply()

    if (supplyLPToken.toString() !== '0') {
      const LP = allAVAXDollar.mul(2).div(Big(supplyLPToken.toString()))

      setPriceToken(prevState => ({
        ...prevState,
        'LP-PNG': LP
      }))
    }
    if (supplyLPJoeToken.toString() !== '0') {
      const priceLPJoe = allAVAXDollarJoe
        .mul(2)
        .div(Big(supplyLPJoeToken.toString()))
      setPriceToken(prevState => ({
        ...prevState,
        'LP-JOE': priceLPJoe
      }))
    }
    setPriceToken(prevState => ({
      ...prevState,
      KACY: kacyInDollar
    }))
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

  React.useEffect(() => {
    if (profileAddress) {
      getAmountToken()
      handleLPtoUSD()
    }
  }, [profileAddress])

  React.useEffect(() => {
    let tokenValueOnDolar = new Big(0)

    if (profileAddress && cardstakesPool.length > 0) {
      cardstakesPool.forEach(pool => {
        tokenValueOnDolar = tokenValueOnDolar.add(
          Big(
            (assetsValueInWallet[pool.address]
              ? pool.amount.add(assetsValueInWallet[pool.address])
              : pool.amount
            ).toString()
          )
            .mul(priceToken[pool.symbol])
            .div(Big(10).pow(18))
        )
      })
    }

    if (tokenValueOnDolar.gt(0)) {
      setTotalInvestmented(tokenValueOnDolar)
    }
  }, [profileAddress, priceToken, assetsValueInWallet, data])

  React.useEffect(() => {
    async function getVotingPower() {
      const currentVotes = await votingPower.currentVotes(profileAddress)

      setTotalVotingPower(currentVotes || new BigNumber(0))
    }

    getVotingPower()
  }, [profileAddress])

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
        <S.TotalValuesCardsContainer>
          <AnyCardTotal
            text={String(BNtoDecimal(totalInvestmented, 6, 2, 2) || 0)}
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
                assetsValueInWallet={assetsValueInWallet}
                cardstakesPool={cardstakesPool}
                priceToken={priceToken}
                myFunds={myFunds}
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
          <AnyCard text="Coming Soon..." />
        ) : isSelectTab === tabs[2].asPathText ? (
          <>
            <AnyCard text="Coming Soon..." />
            {/* <GovernanceData address={profileAddress} /> */}
          </>
        ) : (
          <Loading marginTop={4} />
        )}
      </S.ProfileContainer>
    </>
  )
}

export default Profile

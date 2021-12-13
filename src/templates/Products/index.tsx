import React from 'react'
import Big from 'big.js'
import Image from 'next/image'
import useSWR from 'swr'
import { request } from 'graphql-request'
import { useSelector, RootStateOrAny } from 'react-redux'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { HeimCRPPOOL, HeimCorePool } from '../../constants/tokenAddresses'
import { SUBGRAPH_URL } from '../../constants/tokenAddresses'

import web3 from '../../utils/web3'
import { BNtoDecimal } from '../../utils/numerals'
import useMatomoEcommerce from '../../hooks/useMatomoEcommerce';


import Header from '../../components/Header'
import ChartProducts from '../../components/ChartProducts'
import HeimOperations from '../../components/HeimOperations'
import Web3Disabled from '../../components/Web3Disabled'

import avaxSocial from '../../../public/assets/avalanche_social_index_logo.svg'
import infoGray from '../../../public/assets/info-gray.svg'

import { GET_INFO_POOL } from './graphql'

import Change from './Change'
import Summary from './Summary'
import Distribution from './Distribution'
import TokenDescription from './TokenDescription'

import * as S from './styles'

// eslint-disable-next-line prettier/prettier
declare let window: {
  ethereum: any,
}

const Products = () => {
  const [chainId, setChainId] = React.useState<string>('')
  const [loading, setLoading] = React.useState<boolean>(true)
  const [isMobile, setIsMobile] = React.useState<boolean>(false)
  const [infoPool, setInfoPool] = React.useState<any>({})

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const { trackProductPageView } = useMatomoEcommerce()
  
  const day = Math.trunc(Date.now() / 1000 - 60 * 60 * 24)

  const { data } = useSWR([GET_INFO_POOL], query =>
    request(SUBGRAPH_URL, query, {
      id: '0x03c0c7b6b55a0e5c1f2fad2c45b453c56a8f866a',
      day
    })
  )

  const poolAddress = HeimCRPPOOL
  const poolCoreAddress = HeimCorePool
  const poolPlatform = 'Ropsten'
  const poolName = 'Avalanche Social Index'
  const poolSymbol = 'aHYPE'
  const poolCategories = [poolPlatform, 'Pool']

  async function getChainId() {
    if (web3.currentProvider === null) {
      return
    }

    const id = await window.ethereum.request({ method: 'eth_chainId' })
    setChainId(id)
  }

  React.useEffect(() => {
    if (data?.swap) {
      const swapFees = data.swap.reduce((acc: number, current: { volume_usd: string }) => {
        return Number(current.volume_usd) + acc
      }, 0)

      const withdrawFees = data.withdraw.reduce((acc: number, current: { volume_usd: string }) => {
        return Number(current.volume_usd) + acc
      }, 0)

      const volume = data.volumes.reduce((acc: number, current: { volume_usd: string }) => {
        return Number(current.volume_usd) + acc
      }, 0)

      setInfoPool({
        swapFees: BNtoDecimal(Big(swapFees), Big(0), 2),
        withdrawFees: BNtoDecimal(Big(withdrawFees), Big(0), 2),
        volume: BNtoDecimal(Big(volume), Big(0), 2)
      })
    }

  }, [data])

  React.useEffect(() => {
    getChainId()
  }, [userWalletAddress])

  React.useEffect(() => {
    trackProductPageView(poolAddress, poolSymbol, poolCategories)

    const device = localStorage.getItem('device')
    setIsMobile(device === 'isMobile')

    setTimeout(() => {
      setLoading(false)
    }, 600)
  }, [])

  return (
    <S.BackgroundProducts>
      <Header />
      {loading &&
        <h1
          style={{
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 500
          }}
        >
          Loading...
        </h1>
      }
       {web3.currentProvider !== null && userWalletAddress && chainId === "0x3" && !loading && !isMobile ?
        <S.Product>
          <S.ProductDetails>
            <S.Intro>
              <Image src={avaxSocial} alt="" width={75} height={75} />
              <S.NameIndex>
                <S.NameAndSymbol>
                  <h1>{poolName}</h1>
                  <h3>${poolSymbol}</h3>
                </S.NameAndSymbol>
                <p>by HEIMDALL.land</p>
              </S.NameIndex>
            </S.Intro>
            <S.Line />
            <S.IntroCharts>
              <S.IndexData>
                <span>TVL
                  <Tippy content="The Total Value Locked is the amount invested inside the pool, or simply the total value of all tokens inside the pool combined." >
                    <S.Tooltip>
                      <Image src={infoGray} alt="Explanation" />
                    </S.Tooltip>
                  </Tippy>
                </span>
                <h2>${BNtoDecimal(Big(data?.pool.total_value_locked_usd || 0), Big(0), 2)}</h2>
              </S.IndexData>
              <S.IndexData>
                <span>VOLUME (24h)
                  <Tippy content="Total volume of transactions in the last 24 hours. This includes new investments, withdrawals, token swaps and token transfers, which include swaps in decentralized exchanges." >
                    <S.Tooltip>
                      <Image src={infoGray} alt="Explanation" />
                    </S.Tooltip>
                  </Tippy>
                </span>
                <h2>${infoPool.volume}</h2>
              </S.IndexData>
              {/* <S.IndexData>
                <span>APY <Image src={infoGray} alt="Explanation" /></span>
                <h2>12%</h2>
              </S.IndexData> */}
              <S.IndexData>
                <span>swap fees (24h)
                  <Tippy content="Amount of fees collected in the last 24 hours when people swap tokens inside the pool. This fee is paid to all investors of the pool." >
                    <S.Tooltip>
                      <Image src={infoGray} alt="Explanation" />
                    </S.Tooltip>
                  </Tippy>
                </span>
                <h2>${infoPool.swapFees}</h2>
              </S.IndexData>
              <S.IndexData>
                <span>withdraw fees (24h)
                  <Tippy content="Amount of fees collected in the last 24 hours when people withdraw from the strategy. This fee is paid to the Kassandra Decentralized Autonomous Organization." >
                    <S.Tooltip>
                      <Image src={infoGray} alt="Explanation" />
                    </S.Tooltip>
                  </Tippy>
                </span>
                <h2>${infoPool.withdrawFees}</h2>
              </S.IndexData>
              {/* <S.IndexData>
                <span>rewards <Image src={infoGray} alt="Explanation" /></span>
                <h2>40%</h2>
              </S.IndexData> */}
            </S.IntroCharts>
            <ChartProducts />
            <Change />
            <Summary />
            <Distribution poolPlatform={poolPlatform} />
            <TokenDescription />
          </S.ProductDetails>
          <HeimOperations
            crpPoolAddress={poolAddress}
            corePoolAddress={poolCoreAddress}
            productCategories={poolCategories}
          />
        </S.Product>
        :
        <>
          {isMobile && (
            <Web3Disabled
              textButton="asd"
              textHeader="You are on a mobile device"
              bodyText="To access the Stake/Farm and Products page, go to a computer."
              type="isMobile"
            />
          )}
          {web3.currentProvider === null && !loading && !isMobile && (
            <Web3Disabled
              textButton="Install Metamask"
              textHeader="It looks like you don't have the Metamask wallet installed"
              bodyText="Please install Metamask to access our products"
              type="install"
            />
          )}
          {!userWalletAddress && chainId === "0x3" && !loading && !isMobile && (
            <Web3Disabled
              textButton="Connect Wallet"
              textHeader="Wallet not connected"
              bodyText="Please connect your wallet with this dApp"
              type="connect"
            />
          )}
          {web3.currentProvider !== null && chainId !== "0x3" && !loading && !isMobile && (
            <Web3Disabled
              textButton={`Connect to ${poolPlatform}`}
              textHeader="Your wallet is set to the wrong network."
              bodyText={`Please switch to the ${poolPlatform} network to access our products`}
              type="changeChain"
            />
          )}
        </>
      }
    </S.BackgroundProducts>
  )
}

export default Products

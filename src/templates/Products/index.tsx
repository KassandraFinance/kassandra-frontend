import React from 'react'
import Image from 'next/image'
import { useSelector, RootStateOrAny } from 'react-redux'

import { HeimCRPPOOL, HeimCorePool } from '../../constants/tokenAddresses'

import web3 from '../../utils/web3'
import useMatomoEcommerce from '../../hooks/useMatomoEcommerce';


import Header from '../../components/Header'
import ChartProducts from '../../components/ChartProducts'
import HeimOperations from '../../components/HeimOperations'
import Web3Disabled from '../../components/Web3Disabled'

import avaxSocial from '../../../public/assets/avalanche_social_index_logo.svg'
import infoGray from '../../../public/assets/info-gray.svg'



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

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const { trackProductPageView } = useMatomoEcommerce()

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
              <Image src={avaxSocial} alt="tooltip" width={75} height={75} />
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
                <span>TVL <Image src={infoGray} alt="tooltip" /></span>
                <h2>$785,345.67</h2>
              </S.IndexData>
              <S.IndexData>
                <span>VOLUME (24h) <Image src={infoGray} alt="tooltip" /></span>
                <h2>$868.4M</h2>
              </S.IndexData>
              <S.IndexData>
                <span>APY <Image src={infoGray} alt="tooltip" /></span>
                <h2>12%</h2>
              </S.IndexData>
              <S.IndexData>
                <span>fees <Image src={infoGray} alt="tooltip" /></span>
                <h2>$345.65</h2>
              </S.IndexData>
              <S.IndexData>
                <span>rewards <Image src={infoGray} alt="tooltip" /></span>
                <h2>40%</h2>
              </S.IndexData>
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

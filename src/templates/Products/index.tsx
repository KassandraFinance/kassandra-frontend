import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import web3 from '../../utils/web3'

import useMatomoEcommerce from '../../hooks/useMatomoEcommerce';

import Header from '../../components/Header'
import ChartProducts from '../../components/ChartProducts'
import HeimOperations from '../../components/HeimOperations'
import Web3Disabled from '../../components/Web3Disabled'

import Change from './Change'
import Summary from './Summary'
import Distribution from './Distribution'
import TokenDescription from './TokenDescription'

import * as S from './styles'

declare let window: {
  ethereum: any,
}

interface IProductsProps {
  crpPoolAddress: string;
  corePoolAddress: string;
  productName: string;
  productSymbol: string;
  productCategories: string | string[];
}

const Products = ({
  crpPoolAddress,
  corePoolAddress,
  productName,
  productSymbol,
  productCategories
}: IProductsProps) => {
  const [chainId, setChainId] = React.useState<string>('')
  const [loading, setLoading] = React.useState<boolean>(true)
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const { trackProductPageView } = useMatomoEcommerce()

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
    trackProductPageView(crpPoolAddress, productName, productCategories)

    const device = localStorage.getItem('device')
    setIsMobile(device === 'isMobile')

    setTimeout(() => {
      setLoading(false)
    }, 600)
  }, [])

  return (
    <S.BackgroundProducts>
      <Header />
      {loading && (
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
      )}
      {web3.currentProvider !== null &&
      userWalletAddress &&
      chainId === '0x3' &&
      !loading &&
      !isMobile ? (
        <S.Product>
          <S.ProductDetails>
            <S.Intro>
              <img
                src="/assets/avalanche_social_index_logo.svg"
                width={75}
                alt=""
              />
              <S.NameIndex>
                <S.NameAndSymbol>
                  <h1>{productName}</h1>
                  <h3>${productSymbol}</h3>
                </S.NameAndSymbol>
                <p>by HEIMDALL.land</p>
              </S.NameIndex>
            </S.Intro>
            <S.Line />
            <S.IntroCharts>
              <S.IndexData>
                <span>
                  TVL <img src="/assets/info-gray.svg" alt="" />
                </span>
                <h2>$785,345.67</h2>
              </S.IndexData>
              <S.IndexData>
                <span>
                  VOLUME (24h) <img src="/assets/info-gray.svg" alt="" />
                </span>
                <h2>$868.4M</h2>
              </S.IndexData>
              <S.IndexData>
                <span>
                  APY <img src="/assets/info-gray.svg" alt="" />
                </span>
                <h2>12%</h2>
              </S.IndexData>
              <S.IndexData>
                <span>
                  fees <img src="/assets/info-gray.svg" alt="" />
                </span>
                <h2>$345.65</h2>
              </S.IndexData>
              <S.IndexData>
                <span>
                  rewards <img src="/assets/info-gray.svg" alt="" />
                </span>
                <h2>40%</h2>
              </S.IndexData>
            </S.IntroCharts>
            <ChartProducts />
            <Change />
            <Summary />
            <Distribution />
            <TokenDescription />
          </S.ProductDetails>
          <HeimOperations
            crpPoolAddress={crpPoolAddress}
            corePoolAddress={corePoolAddress}
            poolName={productName}
            productCategories={productCategories}
          />
        </S.Product>
      ) : (
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
              textHeader="Looks like you don't have the metamask wallet installed"
              bodyText="Please install the metamask wallet to access our pools "
              type="install"
            />
          )}
          {!userWalletAddress && chainId === '0x3' && !loading && !isMobile && (
            <Web3Disabled
              textButton="Connect Wallet"
              textHeader="Wallet connection to the Ropsten network is required"
              bodyText="To have access to all our staking pools, please connect your wallet"
              type="connect"
            />
          )}
          {web3.currentProvider !== null &&
            chainId !== '0x3' &&
            !loading &&
            !isMobile && (
              <Web3Disabled
                textButton="Connect to Ropsten"
                textHeader="Your wallet is set to the wrong network."
                bodyText="Please switch to the Ropsten network to have access to all our staking pools"
                type="changeChain"
              />
            )}
        </>
      )}
    </S.BackgroundProducts>
  )
}

export default Products

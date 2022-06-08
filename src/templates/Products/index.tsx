import React from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import detectEthereumProvider from '@metamask/detect-provider'
import { request } from 'graphql-request'
import { useDispatch } from 'react-redux'

import Big from 'big.js'
import BigNumber from 'bn.js'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import {
  SUBGRAPH_URL,
  ProductDetails,
  Networks
} from '../../constants/tokenAddresses'

import { BNtoDecimal } from '../../utils/numerals'
import { TokenDetails } from '../../store/modules/poolTokens/types'
import { actionSetFees } from '../../store/modules/fees/actions'
import { actionSetPoolImages } from '../../store/modules/poolImages/actions'
import { actionGetPoolTokensArray } from '../../store/modules/poolTokens/actions'
import { actionSetTokenAddress2Index } from '../../store/modules/tokenAddress2Index/actions'

import useYieldYak from '../../hooks/useYieldYak'
import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'

import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import Loading from '../../components/Loading'
import ChartProducts from '../../components/ChartProducts'
import PoolOperations from '../../components/PoolOperations'
import ScrollUpButton from '../../components/ScrollUpButton'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'
import PoweredBy from './PoweredBy'

import infoGray from '../../../public/assets/utilities/info-gray.svg'

import { GET_INFO_POOL } from './graphql'

import Change from './Change'
import MyAsset from './MyAsset'
import Summary from './Summary'
import Distribution from './Distribution'
import TokenDescription from './TokenDescription'
import ShareImageModal from './ShareImageModal'
import SharedImage from './SharedImage'

import * as S from './styles'

const invertToken: { [key: string]: string } = {
  '0xe28Ad9Fa07fDA82abab2E0C86c64A19D452b160E':
    '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab', //WETH
  '0x964555644E067c560A4C144360507E80c1104784':
    '0xc7198437980c041c805a1edcba50c1ce5db95118', //USDT
  '0xbbcED92AC9B958F88A501725f080c0360007e858':
    '0x50b7545627a5162f82a992c33b87adc75187b218' //WBTC
}

interface InfoPool {
  tvl: string;
  swapFees: string;
  withdrawFees: string;
  volume: string;
  price: string;
  decimals: number;
}

interface Input {
  product: ProductDetails;
}

export interface IPriceAndChangeTokens {
  [key: string]: {
    change: number,
    price: number,
    image: string
  };
}

const network2coingeckoID: Networks = {
  Ropsten: 'ethereum',
  Avalanche: 'avalanche',
  Fuji: 'avalanche'
}

const Products = ({ product }: Input) => {
  const [openModal, setOpenModal] = React.useState(false)
  const [loading, setLoading] = React.useState<boolean>(true)
  const [infoPool, setInfoPool] = React.useState<InfoPool>({
    tvl: '...',
    swapFees: '...',
    withdrawFees: '...',
    volume: '...',
    price: '0',
    decimals: 18
  })

  const { trackProductPageView } = useMatomoEcommerce()
  const dispatch = useDispatch()

  const yieldYak = useYieldYak()

  const { data } = useSWR([GET_INFO_POOL], query =>
    request(SUBGRAPH_URL, query, {
      id: product.sipAddress,
      day: Math.trunc(Date.now() / 1000 - 60 * 60 * 24)
    })
  )

  const { data: coinGeckoResponse } = useSWR(
    `/api/image-coingecko?poolinfo=${
      network2coingeckoID[product.platform]
    }&tokenAddress=${product.addresses}`
  )

  async function getHoldings(
    token: string,
    balance: string
  ): Promise<{ balancePoolYY: Big, decimalsYY: BigNumber }> {
    const providerMetaMask = await detectEthereumProvider()
    const connect = localStorage.getItem('walletconnect')

    if (providerMetaMask || connect) {
      const decimals: string = await yieldYak.getDecimals(token)

      const tokensShares = await yieldYak.getDepositTokensForShares(
        new BigNumber(Big(balance).mul(Big('10').pow(18)).toString()),
        token
      )

      return {
        balancePoolYY: Big(tokensShares.toString()).div(
          Big(10).pow(Number(decimals))
        ),
        decimalsYY: new BigNumber(decimals)
      }
    }

    return { balancePoolYY: Big(balance), decimalsYY: new BigNumber(18) }
  }

  async function getTokenDetails() {
    const pool: TokenDetails = {
      balance_in_pool: '',
      address: data.pool.id,
      allocation: 0,
      allocation_goal: 0,
      decimals: new BigNumber(data.pool.decimals),
      price: Number(data.pool.price_usd),
      name: data.pool.name,
      symbol: data.pool.symbol
    }

    const tokenDetails: TokenDetails[] = await Promise.all(
      data.pool.underlying_assets.map(
        async (item: {
          balance: string,
          token: {
            id: string,
            decimals: string | number | BigNumber,
            price_usd: string,
            name: string,
            symbol: string
          },
          weight_goal_normalized: string,
          weight_normalized: string
        }) => {
          let symbol
          let balance
          let address
          let decimals: BigNumber
          if (item.token.symbol === 'YRT') {
            const { balancePoolYY, decimalsYY } = await getHoldings(
              item.token.id,
              item.balance
            )
            symbol = item.token.name.split(' ').pop()
            balance = balancePoolYY
            address = invertToken[item.token.id]
            decimals = decimalsYY
          } else {
            symbol = item.token.symbol === 'WAVAX' ? 'AVAX' : item.token.symbol
            balance = item.balance
            address = item.token.id
            decimals = new BigNumber(item.token.decimals)
          }
          return {
            balance_in_pool: balance,
            address,
            allocation: (Number(item.weight_normalized) * 100).toFixed(2),
            allocation_goal: (
              Number(item.weight_goal_normalized) * 100
            ).toFixed(2),
            decimals,
            price: Number(
              coinGeckoResponse.infoToken[
                invertToken[item.token.id] ?? item.token.id
              ].price
            ),
            name: item.token.name,
            symbol,
            priceChange: Number(
              coinGeckoResponse.infoToken[
                invertToken[item.token.id] ?? item.token.id
              ].change
            ),
            image:
              coinGeckoResponse.images[
                invertToken[item.token.id] ?? item.token.id
              ]
          }
        }
      )
    )

    tokenDetails.push(pool)

    dispatch(
      actionSetTokenAddress2Index(
        tokenDetails.reduce((acc, cur, i) => ({ [cur.address]: i, ...acc }), {})
      )
    )
    dispatch(
      actionSetFees({
        Invest: '0',
        Withdraw: (data.pool.fee_exit * 100).toFixed(2),
        Swap: (data.pool.fee_swap * 100).toFixed(2)
      })
    )
    dispatch(actionGetPoolTokensArray(tokenDetails))
    dispatch(actionSetPoolImages(coinGeckoResponse.images))
  }

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1800)
  }, [])

  React.useEffect(() => {
    if (product) {
      trackProductPageView(
        product.sipAddress,
        product.symbol,
        product.categories
      )
    }
  }, [product])

  React.useEffect(() => {
    if (data && coinGeckoResponse.length) {
      getTokenDetails()

      const swapFees = data.swap.reduce(
        (acc: Big, current: { volume_usd: string }) => {
          return Big(current.volume_usd).add(acc)
        },
        0
      )

      const withdrawFees = data.withdraw.reduce(
        (acc: Big, current: { volume_usd: string }) => {
          return Big(current.volume_usd).add(acc)
        },
        0
      )

      const volume = data.volumes.reduce(
        (acc: Big, current: { volume_usd: string }) => {
          return Big(current.volume_usd).add(acc)
        },
        0
      )

      setInfoPool({
        tvl: BNtoDecimal(Big(data.pool.total_value_locked_usd), 2, 2, 2),
        swapFees: BNtoDecimal(Big(swapFees), 2, 2, 2),
        withdrawFees: BNtoDecimal(Big(withdrawFees), 2, 2, 2),
        volume: BNtoDecimal(Big(volume), 2, 2, 2),
        price: data.pool.price_usd,
        decimals: data.pool.decimals
      })
    }
  }, [data, coinGeckoResponse])

  return (
    <>
      <Header />
      <ShareImageModal
        poolId={product.sipAddress}
        setOpenModal={setOpenModal}
        openModal={openModal}
        productName={product.symbol}
      >
        <SharedImage
          crpPoolAddress={product.sipAddress}
          totalValueLocked={infoPool.tvl}
          socialIndex={product.symbol}
          productName={product.name}
          fundImage={product.fundIcon}
        />
      </ShareImageModal>
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href={`/explore`}>Explore</BreadcrumbItem>
        <BreadcrumbItem
          href={`/explore/${product.symbol.toLowerCase()}`}
          isLastPage
        >
          ${product.symbol}
        </BreadcrumbItem>
      </Breadcrumb>
      {loading ? (
        <S.LoadingContent>
          <Loading marginTop={0} />
        </S.LoadingContent>
      ) : (
        <>
          <S.Intro introMobile={true} introDesktop={false}>
            <Image src={product.fundIcon} alt="" width={75} height={75} />
            <S.NameIndex>
              <S.NameAndSymbol introMobile={true}>
                <h1>{product.name}</h1>
                <button onClick={() => setOpenModal(true)} className="circle">
                  <Image src="/assets/icons/share.svg" width={22} height={22} />
                </button>
              </S.NameAndSymbol>
              <S.SymbolAndMade>
                <h3>${product.symbol}</h3>
                <p>by {product.fundBy}</p>
              </S.SymbolAndMade>
            </S.NameIndex>
            <S.Line />
          </S.Intro>
          <S.Product>
            <S.ProductDetails>
              <S.Intro introMobile={false} introDesktop={true}>
                <Image src={product.fundIcon} alt="" width={75} height={75} />
                <S.NameIndex>
                  <S.NameAndSymbol>
                    <h1>{product.name}</h1>
                    <button
                      onClick={() => setOpenModal(true)}
                      className="circle"
                    >
                      <Image
                        src="/assets/icons/share.svg"
                        width={32}
                        height={32}
                      />
                    </button>
                  </S.NameAndSymbol>
                  <S.SymbolAndMade>
                    <h3>${product.symbol}</h3>
                    <p>by {product.fundBy}</p>
                  </S.SymbolAndMade>
                </S.NameIndex>
              </S.Intro>
              <S.Line className="second-line" />
              <S.IntroCharts>
                <S.IndexData>
                  <span>
                    TVL
                    <Tippy content="The Total Value Locked is the amount invested inside the pool, or simply the total value of all tokens inside the pool combined.">
                      <S.Tooltip tabIndex={0}>
                        <Image
                          src={infoGray}
                          alt="Explanation"
                          height={16}
                          width={16}
                        />
                      </S.Tooltip>
                    </Tippy>
                  </span>
                  <h2>${infoPool.tvl}</h2>
                </S.IndexData>
                <S.IndexData>
                  <span>
                    VOLUME (24h)
                    <Tippy content="Total volume of transactions in the last 24 hours. This includes new investments, withdrawals, token swaps and token transfers, which include swaps in decentralized exchanges.">
                      <S.Tooltip tabIndex={0}>
                        <Image
                          src={infoGray}
                          alt="Explanation"
                          height={16}
                          width={16}
                        />
                      </S.Tooltip>
                    </Tippy>
                  </span>
                  <h2>${infoPool.volume}</h2>
                </S.IndexData>
                <S.IndexData>
                  <span>
                    Swap fees (24h)
                    <Tippy content="Amount of fees collected in the last 24 hours when people swap tokens inside the pool. This fee is paid to all investors of the pool.">
                      <S.Tooltip tabIndex={0}>
                        <Image
                          src={infoGray}
                          alt="Explanation"
                          height={16}
                          width={16}
                        />
                      </S.Tooltip>
                    </Tippy>
                  </span>
                  <h2>${infoPool.swapFees}</h2>
                </S.IndexData>
                <S.IndexData>
                  <span>
                    Withdraw fees (24h)
                    <Tippy content="Amount of fees collected in the last 24 hours when people withdraw from the strategy. This fee is paid to the Kassandra Decentralized Autonomous Organization.">
                      <S.Tooltip tabIndex={0}>
                        <Image
                          src={infoGray}
                          alt="Explanation"
                          height={16}
                          width={16}
                        />
                      </S.Tooltip>
                    </Tippy>
                  </span>
                  <h2>${infoPool.withdrawFees}</h2>
                </S.IndexData>
              </S.IntroCharts>
              <ChartProducts crpPoolAddress={product.sipAddress} />
              <ScrollUpButton />
              <Change crpPoolAddress={product.sipAddress} />
              <MyAsset
                crpPoolAddress={product.sipAddress}
                price={infoPool.price}
                symbol={product.symbol}
                icon={product.fundIcon}
                pid={typeof product.pid === 'undefined' ? -1 : product.pid}
                decimals={infoPool.decimals}
              />
              <Summary
                strategy={data?.pool.strategy || 'Coming soon...'}
                poolContract={product.coreAddress}
                poolController={product.sipAddress}
                summary={product.fundSummary}
                symbol={product.symbol}
                link={product.fundLink}
                icon={product.fundIcon}
              />
              <PoweredBy partners={product.partners} />
              {coinGeckoResponse && <Distribution />}
              <TokenDescription symbol={product.symbol} />
            </S.ProductDetails>
            <PoolOperations
              poolChain={product.chain}
              crpPoolAddress={product.sipAddress}
              corePoolAddress={product.coreAddress}
              productCategories={product.categories}
            />
          </S.Product>
        </>
      )}
    </>
  )
}

export default Products

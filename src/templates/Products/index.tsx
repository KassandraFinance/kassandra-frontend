import React from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import { request } from 'graphql-request'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'

import Big from 'big.js'
import BigNumber from 'bn.js'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import {
  SUBGRAPH_URL,
  ProductDetails,
  Networks
} from '../../constants/tokenAddresses'

import web3 from '../../utils/web3'
import { BNtoDecimal } from '../../utils/numerals'
import { TokenDetails } from '../../store/modules/poolTokens/types'
import { actionSetFees } from '../../store/modules/fees/actions'
import { actionSetInfoAHYPE } from '../../store/modules/infoAHYPE/actions'
import { actionGetPoolTokensArray } from '../../store/modules/poolTokens/actions'
import { actionSetTokenAddress2Index } from '../../store/modules/tokenAddress2Index/actions'
import { actionSetPoolImages } from '../../store/modules/poolImages/actions'

import useYieldYak from '../../hooks/useYieldYak'
import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'

import Header from '../../components/Header'
import ChartProducts from '../../components/ChartProducts'
import PoolOperations from '../../components/PoolOperations'
import ScrollUpButton from '../../components/ScrollUpButton'
import Breadcrumb from '../../components/Breadcrumb'
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

const network2coingeckoID: Networks = {
  Ropsten: 'ethereum',
  Avalanche: 'avalanche',
  Fuji: 'avalanche'
}

// for development testing
const addressChanger: { [key: string]: string | undefined } = {
  '0xd00ae08403B9bbb9124bB305C09058E32C39A48c':
    '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', // WAVAX
  '0xe401e9Ce0E354Ad9092a63eE1dFA3168bB83F3DA':
    '0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5', // QI
  '0xf22f05168508749fa42eDBddE10CB323D87c201d':
    '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd', // JOE
  '0x83080D4b5fC60e22dFFA8d14AD3BB41Dde48F199':
    '0x60781C2586D68229fde47564546784ab3fACA982', // PNG
  '0xBA1C32241Ac77b97C8573c3dbFDe4e1e2A8fc0DF':
    '0x59414b3089ce2AF0010e7523Dea7E2b35d776ec7', // YAK
  '0x1d7C6846F033e593b4f3f21C39573bb1b41D43Cb':
    '0x1d7C6846F033e593b4f3f21C39573bb1b41D43Cb', // KACY
  '0xe28Ad9Fa07fDA82abab2E0C86c64A19D452b160E':
    '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab', // WETH
  '0x964555644E067c560A4C144360507E80c1104784':
    '0xc7198437980c041c805a1edcba50c1ce5db95118', //USDT
  '0xbbcED92AC9B958F88A501725f080c0360007e858':
    '0x50b7545627a5162f82a992c33b87adc75187b218' //WBTC
}

const Products = ({ product }: Input) => {
  const [changes, setChanges] = React.useState<number[]>([])
  const [totalPerfomance, setTotalPerfomance] = React.useState<string>('')
  const [openModal, setOpenModal] = React.useState(false)
  const [infoPool, setInfoPool] = React.useState<InfoPool>({
    tvl: '...',
    swapFees: '...',
    withdrawFees: '...',
    volume: '...',
    price: '0',
    decimals: 18
  })
  const { poolTokensArray }: { poolTokensArray: TokenDetails[] } = useSelector(
    (state: RootStateOrAny) => state
  )

  const { trackProductPageView } = useMatomoEcommerce()
  const dispatch = useDispatch()

  const { data } = useSWR([GET_INFO_POOL], query =>
    request(SUBGRAPH_URL, query, {
      id: product.sipAddress,
      day: Math.trunc(Date.now() / 1000 - 60 * 60 * 24)
    })
  )

  const yieldYak = useYieldYak()

  async function getHoldings(token: string, balance: string) {
    const decimals = await yieldYak.getDecimals(token)
    const amount = parseFloat(balance) * 10 ** 18

    const tokensShares = await yieldYak.getDepositTokensForShares(
      web3.utils.toBN(amount),
      token
    )

    return BNtoDecimal(new BigNumber(tokensShares), Number(decimals), 0)
  }

  React.useEffect(() => {
    if (data) {
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
  }, [data])

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
    if (data) {
      const product: TokenDetails = {
        balance_in_pool: '',
        address: data.pool.id,
        allocation: 0,
        allocation_goal: 0,
        decimals: new BigNumber(data.pool.decimals),
        price: Number(data.pool.price_usd),
        name: data.pool.name,
        symbol: data.pool.symbol
      }
      let res: TokenDetails[]
      ;(async () => {
        res = await Promise.all(
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
              if (item.token.symbol === 'YRT') {
                symbol = item.token.name.split(' ').pop()
                balance = await getHoldings(item.token.id, item.balance)
              } else {
                symbol =
                  item.token.symbol === 'WAVAX' ? 'AVAX' : item.token.symbol
                balance = item.balance
              }
              return {
                balance_in_pool: balance,
                address: item.token.id,
                allocation: (Number(item.weight_normalized) * 100).toFixed(2),
                allocation_goal: (
                  Number(item.weight_goal_normalized) * 100
                ).toFixed(2),
                decimals: new BigNumber(item.token.decimals),
                price: Number(item.token.price_usd),
                name: item.token.name,
                symbol
              }
            }
          )
        )

        res.push(product)

        dispatch(actionSetInfoAHYPE(res))
        dispatch(
          actionSetTokenAddress2Index(
            res.reduce((acc, cur, i) => ({ [cur.address]: i, ...acc }), {})
          )
        )
        dispatch(
          actionSetFees({
            Invest: '0',
            Withdraw: (data.pool.fee_exit * 100).toFixed(2),
            Swap: (data.pool.fee_swap * 100).toFixed(2)
          })
        )
        dispatch(actionGetPoolTokensArray(res))
      })()
    }
  }, [data])

  React.useEffect(() => {
    const arrayAddressPool = poolTokensArray.slice(0, -1).map(token => {
      return addressChanger[token.address] || token.address
    })

    const getCoingecko = async () => {
      const URL = `/api/image-coingecko?poolinfo=${
        network2coingeckoID[product.platform]
      }&tokenAddress=${arrayAddressPool}`
      const res = await fetch(URL)
      const data = await res.json()

      setChanges(data.infoToken)
      dispatch(actionSetPoolImages(data.images))
    }

    getCoingecko()
  }, [poolTokensArray])

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
          totalPerfomance={totalPerfomance}
          productName={product.name}
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
      <S.Intro introMobile={true} introDesktop={false}>
        <Image src={product.fundIcon} alt="" width={75} height={75} />
        <S.NameIndex>
          <S.NameAndSymbol introMobile={true}>
            <h1>{product.name}</h1>
            <button onClick={() => setOpenModal(true)} className="circle">
              <Image src="/assets/icons/share.svg" width={12} height={12} />
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
                <button onClick={() => setOpenModal(true)} className="circle">
                  <Image src="/assets/icons/share.svg" width={16} height={16} />
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
                    <Image src={infoGray} alt="Explanation" />
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
                    <Image src={infoGray} alt="Explanation" />
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
                    <Image src={infoGray} alt="Explanation" />
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
                    <Image src={infoGray} alt="Explanation" />
                  </S.Tooltip>
                </Tippy>
              </span>
              <h2>${infoPool.withdrawFees}</h2>
            </S.IndexData>
          </S.IntroCharts>
          <ChartProducts crpPoolAddress={product.sipAddress} />
          <ScrollUpButton />
          <Change
            crpPoolAddress={product.sipAddress}
            setTotalPerfomance={setTotalPerfomance}
          />
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
          <Distribution changes={changes} />
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
  )
}

export default Products

import React from 'react'
import Big from 'big.js'
import Image from 'next/image'
import useSWR from 'swr'
import { request } from 'graphql-request'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { SUBGRAPH_URL, ProductDetails } from '../../constants/tokenAddresses'

import { BNtoDecimal } from '../../utils/numerals'
import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'

import Header from '../../components/Header'
import ChartProducts from '../../components/ChartProducts'
import HeimOperations from '../../components/HeimOperations'
import ScrollUpButton from '../../components/ScrollUpButton'
import Breadcrumb from '../../components/Breadcrumb'
import BreadcrumbItem from '../../components/Breadcrumb/BreadcrumbItem'
import PoweredBy from './PoweredBy'
import ActivityTable from './ActivityTable'

import infoGray from '../../../public/assets/info-gray.svg'

import { GET_INFO_POOL } from './graphql'

import Change from './Change'
import MyAsset from './MyAsset'
import Summary from './Summary'
import Distribution from './Distribution'
import TokenDescription from './TokenDescription'

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

const Products = ({ product }: Input) => {
  const [infoPool, setInfoPool] = React.useState<InfoPool>({
    tvl: '...',
    swapFees: '...',
    withdrawFees: '...',
    volume: '...',
    price: '0',
    decimals: 18
  })

  const { trackProductPageView } = useMatomoEcommerce()

  const { data } = useSWR([GET_INFO_POOL], query =>
    request(SUBGRAPH_URL, query, {
      id: product.sipAddress,
      day: Math.trunc(Date.now() / 1000 - 60 * 60 * 24)
    })
  )

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

  return (
    <S.BackgroundProducts boxShadow={false}>
      <Header />
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
            <h3>${product.symbol}</h3>
          </S.NameAndSymbol>
          <p>by {product.fundBy}</p>
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
                <h3>${product.symbol}</h3>
              </S.NameAndSymbol>
              <p>by {product.fundBy}</p>
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
            strategy={data?.pool.strategy || '...'}
            summary={product.fundSummary}
            symbol={product.symbol}
            link={product.fundLink}
            icon={product.fundIcon}
          />
          <PoweredBy partners={product.partners} />
          <Distribution poolPlatform={product.platform} />
          <TokenDescription symbol={product.symbol} />
          <ActivityTable />
        </S.ProductDetails>
        <HeimOperations
          poolChain={product.chain}
          crpPoolAddress={product.sipAddress}
          corePoolAddress={product.coreAddress}
          productCategories={product.categories}
        />
      </S.Product>
    </S.BackgroundProducts>
  )
}

export default Products

import { SWRConfig } from 'swr'
import { GetStaticPaths, GetStaticProps } from 'next'

import { products, ProductDetails } from '../../constants/tokenAddresses'

import Products from '../../templates/Products'
import { PoolTokensProvider } from '../../context/PoolTokensContext'

interface Input {
  product: ProductDetails;
}

function Product({ product }: Input) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 10000,
        fetcher: url => fetch(url).then(res => res.json())
      }}
    >
      <PoolTokensProvider>
        <Products product={product} />
      </PoolTokensProvider>
    </SWRConfig>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.values(products).map(product => ({
    params: { symbol: product.symbol.toLowerCase() }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.symbol || typeof params.symbol !== 'string') {
    return {
      notFound: true
    }
  }

  const fund = products.filter(
    product => product.symbol.toLowerCase() === params.symbol
  )

  return { props: { product: fund[0] } }
}

export default Product

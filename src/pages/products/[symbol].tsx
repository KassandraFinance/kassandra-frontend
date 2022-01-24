import NotFound from './../../templates/404'

export default function Index() {
  return <NotFound />
}


// import { SWRConfig } from 'swr'
// import { GetStaticPaths, GetStaticProps } from 'next'

// import { products, ProductDetails } from '../../constants/tokenAddresses'

// import Products from '../../templates/Products'

// interface Input {
//   product: ProductDetails;
// }

// function Product({ product }: Input) {
//   return (
//     <SWRConfig
//       value={{
//         refreshInterval: 5000
//       }}
//     >
//       <Products product={product} />
//     </SWRConfig>
//   )
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = Object.values(products).map(product => ({
//     params: { symbol: product.symbol.toLowerCase() }
//   }))

//   return { paths, fallback: false }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   if (!params || !params.symbol || typeof params.symbol !== 'string') {
//     return {
//       notFound: true
//     }
//   }

//   return { props: { product: products[params.symbol] } }
// }

// export default Product

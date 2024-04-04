import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'

export const COINGECKO_API = 'https://pro-api.coingecko.com/api/v3/'

async function getInfoToken(coingeckoId: string) {
  const resInfoTokens = await fetch(
    `${COINGECKO_API}coins/markets?vs_currency=usd&ids=${coingeckoId}&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=24h%2C7d&locale=en&x_cg_pro_api_key=${process.env.NEXT_PUBLIC_COINGECKO}`
  )

  const res = await resInfoTokens.json()
  return res[0]
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    await NextCors(request, response, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: 'https://kassandra.finance',
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    })

    const requestAddress = Array.isArray(request.query.coingeckoId)
      ? request.query.coingeckoId.toString()
      : request.query.coingeckoId

    const tokenInfo = await getInfoToken(requestAddress)

    response.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate')

    response.json({
      tokenPrice: tokenInfo.current_price,
      marketCap: tokenInfo.market_cap,
      supply: parseInt(tokenInfo.circulating_supply),
      tokenPercentage: tokenInfo.price_change_percentage_24h
    })
  } catch (error) {
    response.json({
      error
    })
  }
}

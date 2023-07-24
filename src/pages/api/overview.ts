import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'

async function getInfoTokens(coingeckoId: string) {
  const resInfoToken = await fetch(process.env.HEIMDALL_API ?? '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `BearerInternal ${process.env.HEIMDALL_API_KEY}`
    },
    body: JSON.stringify({
      query: `
        query MarketCoin($marketCoinId: String!) {
          marketCoin(marketCoinID: $marketCoinId) {
            price
            marketCap
            circulatingSupply
            pricePercentageChangeIn24h
          }
        }
      `,
      variables: {
        marketCoinId: coingeckoId
      }
    })
  })
  return (await resInfoToken.json()).data?.marketCoin
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    await NextCors(request, response, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: 'https://kassandra.finance',
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    })

    const requestAddress = Array.isArray(request.query.address)
      ? request.query.address.toString()
      : request.query.address

    const tokenInfo = await getInfoTokens(requestAddress)

    response.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate')

    response.json({
      tokenPrice: tokenInfo.price,
      marketCap: tokenInfo.marketCap,
      supply: parseInt(tokenInfo.circulatingSupply),
      tokenPercentage: tokenInfo.pricePercentageChangeIn24h
    })
  } catch (error) {
    response.json({
      error
    })
  }
}

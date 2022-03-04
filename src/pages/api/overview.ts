import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'

const URL_COINGECKO = 'https://api.coingecko.com/api/v3'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    await NextCors(request, response, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: 'https://kassandra.finance',
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    })

    const urlPriceKacyOnCoingecko = `${URL_COINGECKO}/simple/price?ids=kassandra&vs_currencies=usd&include_market_cap=true`

    const responseKacyPrice = await fetch(urlPriceKacyOnCoingecko)
    const responseKacyPriceJson = await responseKacyPrice.json()
    const kacy = responseKacyPriceJson.kassandra

    response.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate')

    response.json({
      kacyPrice: kacy.usd,
      supply: kacy.usd_market_cap
    })
  } catch (error) {
    response.json({
      error
    })
  }
}

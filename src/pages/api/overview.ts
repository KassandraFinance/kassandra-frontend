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

    const urlPriceKacyOnCoingecko = `${URL_COINGECKO}/coins/kassandra?localization=false&tickers=false&community_data=false`

    const responseKacyPrice = await fetch(urlPriceKacyOnCoingecko)
    const responseKacyPriceJson = await responseKacyPrice.json()
    const kacy = responseKacyPriceJson.market_data

    response.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate')

    response.json({
      kacyPrice: kacy.current_price.usd,
      supply: kacy.circulating_supply,
      marketCap: kacy.market_cap.usd,
      kacyPercentage: kacy.price_change_percentage_24h
    })
  } catch (error) {
    response.json({
      error
    })
  }
}

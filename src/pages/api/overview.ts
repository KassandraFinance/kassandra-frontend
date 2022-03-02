import { NextApiRequest, NextApiResponse } from 'next'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const urlPriceKacyOnCoingecko =
      'https://api.coingecko.com/api/v3/simple/price?ids=kassandra&vs_currencies=usd'

    const responseKacyPrice = await fetch(urlPriceKacyOnCoingecko)
    const responseKacyPriceJson = await responseKacyPrice.json()
    const kacyInDollar = responseKacyPriceJson.kassandra.usd

    const urlSupplyKassandra = 'https://graph.kassandra.finance/supply'

    const responseSupply = await fetch(urlSupplyKassandra)
    const supply = await responseSupply.json()

    response.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate')

    response.json({
      kacyPrice: kacyInDollar,
      supply
    })
  } catch (error) {
    response.json({
      error
    })
  }
}

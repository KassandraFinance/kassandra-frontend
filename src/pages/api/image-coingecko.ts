import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'

const URL_COINGECKO = 'https://api.coingecko.com/api/v3'

type IImagesProps = {
  [key: string]: string
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    await NextCors(request, response, {
      // Options
      methods: ['GET'],
      origin: 'https://kassandra.finance',
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
    const { poolinfo } = request.query

    if (Array.isArray(request.query['tokenAddress'])) {
      return response.status(400).send({ message: 'is required a array' })
    }

    const images: IImagesProps = {}

    await Promise.all(
      request.query['tokenAddress'].split(',').map(async item => {
        const urlImageCoingecko = `${URL_COINGECKO}/coins/${poolinfo}/contract/${item}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`
        const responseImageCoingecko = await fetch(urlImageCoingecko)
        const responseImageCoingeckoJson = await responseImageCoingecko.json()

        Object.assign(images, {
          [item]: responseImageCoingeckoJson.image?.small
        })
        return
      })
    )

    throw new Error()

    response.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate')

    if (!images) {
      return response.json({})
    }

    response.json({ images })
  } catch (error) {
    response.json({
      error
    })
  }
}

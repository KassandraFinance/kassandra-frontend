import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'

const URL_COINGECKO = 'https://api.coingecko.com/api/v3'

type IImagesProps = {
  [key: string]: string
}

const addressChanger: { [key: string]: string } = {
  // WETH
  '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab':
    '0xe28Ad9Fa07fDA82abab2E0C86c64A19D452b160E',
  //USDT
  '0xc7198437980c041c805a1edcba50c1ce5db95118':
    '0x964555644E067c560A4C144360507E80c1104784',
  //WBTC
  '0x50b7545627a5162f82a992c33b87adc75187b218':
    '0xbbcED92AC9B958F88A501725f080c0360007e858'
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

    const infoToken: number[] = await Promise.all(
      request.query['tokenAddress'].split(',').map(async item => {
        const urlImageCoingecko = `${URL_COINGECKO}/coins/${poolinfo}/contract/${item}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`
        const responseImageCoingecko = await fetch(urlImageCoingecko)
        const responseImageCoingeckoJson = await responseImageCoingecko.json()

        Object.assign(images, {
          [addressChanger[item] ?? item]:
            responseImageCoingeckoJson.image?.small
        })

        return Number(
          responseImageCoingeckoJson.market_data?.price_change_percentage_24h ||
            0
        )
      })
    )

    response.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate')

    response.json({ infoToken, images })
  } catch (error) {
    response.json({
      error
    })
  }
}

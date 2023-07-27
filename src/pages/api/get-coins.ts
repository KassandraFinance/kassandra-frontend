import { strapiClient } from '@/graphQLClients'
import { flattenObj } from '@/utils/strapiResponseTransformer'
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const bodySchema = z.object({
  query: z.string().optional()
})

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method !== 'GET') {
    response.status(405).setHeader('Access-Control-Allow-Methods', 'GET').json({
      error: 'Method not allowed'
    })
  }

  try {
    const queryResult = bodySchema.safeParse(request.query)

    if (!queryResult.success) {
      throw new Error(queryResult.error.message)
    }

    const { query } = queryResult.data

    const coinsResponse = await strapiClient.ResearchCoins({ query })

    const coins = flattenObj<
      {
        name: string
        symbol: string
        coinGeckoID: string
        image: { url: string; alternativeText: string }
      }[]
    >(coinsResponse)

    response.status(200).json(coins)
  } catch (error) {
    response.status(400).json({
      error
    })
  }
}

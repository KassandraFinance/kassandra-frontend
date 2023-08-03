import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

import { getPosts } from '@/shared/queries/getPosts'

const requestSchema = z.object({
  tags: z
    .string()
    .optional()
    .default('')
    .transform(val => val.split(','))
    .transform(val => (val.length <= 1 && val[0] === '' ? [] : val)),
  coins: z
    .string()
    .optional()
    .default('')
    .transform(val => val.split(','))
    .transform(val => (val.length <= 1 && val[0] === '' ? [] : val)),
  page: z.coerce
    .number()
    .min(1, 'Page has to be higher than or equal to 1')
    .optional()
    .default(1),
  perPage: z.coerce
    .number()
    .min(1, 'Page has to be higher than or equal to 1')
    .max(20, 'Page has to be lower than or equal to 20')
    .optional()
    .default(20),
  tab: z
    .string()
    .optional()
    .transform(val => (val === 'undefined' ? undefined : val))
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
    const { tags, coins, page, perPage, tab } = requestSchema.parse(
      request.query
    )

    response.status(200).json(
      await getPosts({
        page,
        perPage,
        tags,
        coins,
        tab
      })
    )
  } catch (error) {
    response.status(400).json({
      error
    })
  }
}

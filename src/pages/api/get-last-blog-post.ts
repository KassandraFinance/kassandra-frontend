import { strapiClient } from '@/graphQLClients'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function getLastPost(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method !== 'GET') {
    response.status(405).setHeader('Access-Control-Allow-Methods', 'GET').json({
      error: 'Method not allowed'
    })
  }

  try {
    const lastPost = await strapiClient.LastBlogPost()
    response.status(200).json(lastPost)
  } catch (error) {
    response.status(400).json({
      error
    })
  }
}

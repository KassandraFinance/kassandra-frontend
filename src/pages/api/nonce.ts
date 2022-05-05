import { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import { ironSessionConfig } from '../../config/ironSessionConfig'
import crypto from 'crypto'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { method } = request
  if (method === 'GET') {
    const nonce = crypto.randomBytes(12).toString('base64')
    if (!nonce) {
      return response.status(500).send({
        error: 'Error in generate nonce'
      })
    }
    request.session.nonce = nonce
    await request.session.save()
    return response.json({ nonce })
  }

  response.setHeader('Allow', ['GET'])
  return response.status(405).end(`Method ${method} Not Allowed`)
}

export default withIronSessionApiRoute(handler, ironSessionConfig)

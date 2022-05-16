import { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import { ironSessionConfig } from '../../config/ironSessionConfig'
import web3 from '../../utils/web3'

interface InputAuth {
  message: {
    address: string,
    nonce: string,
    version?: string,
    data: unknown,
    issuedAt: string
  };
  signature: string;
}

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const { method } = request
    if (method === 'POST') {
      const { message, signature }: InputAuth = request.body

      const address = web3.eth.accounts.recover(
        JSON.stringify(message, null, 2),
        signature
      )

      if (
        !request.session.nonce ||
        message.nonce !== request.session.nonce ||
        address !== message.address
      ) {
        request.session.destroy()
        return response
          .status(422)
          .json({ message: 'Nonce or Address invalid.' })
      }

      request.session.address = address
      await request.session.save()
      return response.status(200).json({ authorized: true })
    }

    response.setHeader('Allow', ['POST'])

    return response.status(405).end(`Method ${method} Not Allowed`)
  } catch (error) {
    console.log(error)

    request.session.destroy()

    return response.status(500).send({
      authorized: false
    })
  }
}

export default withIronSessionApiRoute(handler, ironSessionConfig)

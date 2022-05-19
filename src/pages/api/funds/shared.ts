/* eslint-disable no-case-declarations */
import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'

import prisma from '../../../libs/prisma'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { method } = request
  const { id } = request.query
  const fundId = Array.isArray(id) ? id[0] : id
  const { image, id: param }: { image: string, id: string } = request.body

  try {
    await NextCors(request, response, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: 'https://kassandra.finance',
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    })

    if (method === 'POST') {
      const { id } = await prisma.sharedImageFund.upsert({
        where: {
          contract: fundId
        },
        create: {
          id: param,
          contract: fundId,
          image
        },
        update: {
          id: param,
          image
        }
      })
      return response.status(201).send({
        message: 'created shared image',
        id
      })
    }

    if (method === 'GET') {
      const img = await prisma.sharedImageFund.findUnique({
        where: { id: fundId }
      })

      if (img) {
        const decoded = img.image
          .toString()
          .replace('data:image/png;base64,', '')
        const imageResp = Buffer.from(decoded, 'base64')

        response.writeHead(200, {
          'Content-Type': 'image/png',
          'Content-Lenght': imageResp.length
        })

        return response.end(imageResp)
      }

      return response.status(400).send({ message: 'fund not exist' })
    }

    response.setHeader('Allow', ['GET', 'POST'])

    return response.status(405).end(`Method ${method} Not Allowed`)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export default handler

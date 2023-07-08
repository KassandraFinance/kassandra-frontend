import prisma from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'

const isValidEmail = (email: string): boolean => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return regex.test(email)
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await NextCors(request, response, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: 'https://kassandra.finance',
    optionsSuccessStatus: 200
  })

  const method = request.method ?? ''

  try {
    if (method === 'POST') {
      const { email } = request.body as { email: string }
      if (!email || email.length > 100 || !isValidEmail(email))
        return response.status(400).end()

      await prisma.subscribe.create({
        data: { email: email.toLowerCase() }
      })

      return response.status(201).end()
    }

    return response
      .status(405)
      .setHeader('Allow', ['POST'])
      .end(`Method ${method} Not Allowed`)
  } catch (error) {
    console.log(error)
    return response.status(500).end()
  }
}

import { NextApiRequest, NextApiResponse } from 'next'
import { env } from '@/env.mjs'
import NextCors from 'nextjs-cors'

const isValidEmail = (email: string): boolean => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return regex.test(email)
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    await NextCors(request, response, {
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: 'https://kassandra.finance',
      optionsSuccessStatus: 200
    })

    const method = request.method ?? ''

    if (method === 'POST') {
      const { email } = request.body as { email: string }
      if (!email || email.length > 100 || !isValidEmail(email))
        return response.status(400).json({ message: 'Invalid email' })

      const res = await fetch('https://api.brevo.com/v3/contacts', {
        method,
        headers: {
          'content-type': 'application/json',
          'api-key': env.BREVO_API_KEY ?? '',
          accept: 'application/json'
        },
        body: JSON.stringify({
          email: email.toLowerCase(),
          updateEnabled: false,
          listIds: [Number(env.BREVO_ID)]
        })
      })

      if (res.status !== 201) {
        return response
          .status(400)
          .json({ message: 'Email already subscribed' })
      }

      return response
        .status(201)
        .json({ message: 'The email has been subscribed' })
    }

    return response
      .status(405)
      .setHeader('Allow', ['POST'])
      .json({ message: `Method ${method} Not Allowed` })
  } catch (error) {
    console.log(error)
    return response.status(500).json({ message: 'Internal Server Error' })
  }
}

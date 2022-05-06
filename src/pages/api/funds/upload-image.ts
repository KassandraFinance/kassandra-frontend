import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { method } = request
  const filename = 'shared-fund.png'

  if (method === 'POST') {
    const { image } = request.body

    const base64String = image

    const base64Image = base64String.split(';base64,').pop()

    fs.writeFile(
      `./public/shared/${filename}`,
      base64Image,
      { encoding: 'base64' },
      err => {
        if (err) return response.status(500).json({ err })
      }
    )

    return response.status(201).json({ filename })
  }

  response.setHeader('Allow', ['POST'])

  return response.status(405).end(`Method ${method} Not Allowed`)
}

export default handler

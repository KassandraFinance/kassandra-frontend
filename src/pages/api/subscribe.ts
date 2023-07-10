// import { prisma } from '../../libs/prisma'
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'

const isValidEmail = (email: string): boolean => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return regex.test(email)
}

const URL_COINGECKO = 'https://api.coingecko.com/api/v3'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    await NextCors(request, response, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: 'https://kassandra.finance',
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
    isValidEmail('email@')
    const prisma = new PrismaClient()
    await prisma.subscribe.create({
      data: { email: 'g@kassandra.finance' }
    })

    const urlPriceKacyOnCoingecko = `${URL_COINGECKO}/coins/kassandra?localization=false&tickers=false&community_data=false`

    const responseKacyPrice = await fetch(urlPriceKacyOnCoingecko)
    const responseKacyPriceJson = await responseKacyPrice.json()
    const kacy = responseKacyPriceJson.market_data

    response.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate')

    response.json({
      kacyPrice: kacy.current_price.usd,
      supply: kacy.circulating_supply,
      marketCap: kacy.market_cap.usd,
      kacyPercentage: kacy.price_change_percentage_24h
    })
  } catch (error) {
    response.json({
      error
    })
  }
}

// export default async (request: NextApiRequest, response: NextApiResponse) => {
//   // await NextCors(request, response, {
//   //   methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
//   //   origin: 'https://beta.kassandra.finance',
//   //   optionsSuccessStatus: 200
//   // })

//   const method = request.method ?? ''

//   try {
//     if (method === 'POST') {
//       const { email } = request.body as { email: string }
//       if (!email || email.length > 100 || !isValidEmail(email))
//         return response.status(400).json({ message: 'Invalid email' })

//       const emailExists = await prisma.subscribe.findUnique({
//         where: { email: email.toLowerCase() }
//       })

//       if (emailExists) {
//         return response
//           .status(400)
//           .json({ message: 'Email already subscribed' })
//       }

//       await prisma.subscribe.create({
//         data: { email: email.toLowerCase() }
//       })

//       return response
//         .status(201)
//         .json({ message: 'The email has been subscribed' })
//     }

//     return (
//       response
//         .status(405)
//         // .setHeader('Allow', ['POST'])
//         .json({ message: `Method ${method} Not Allowed` })
//     )
//   } catch (error) {
//     return response.status(500).json({ message: 'Internal Server Error' })
//   }
// }

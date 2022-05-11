import { NextApiRequest, NextApiResponse } from 'next'
import { checkAddressChecksum } from 'web3-utils'
import prisma from '../../../../libs/prisma'

interface UserInput {
  nickname?: string;
  twitter?: string;
  website?: string;
  telegram?: string;
  discord?: string;
  description?: string;
  image?: string;
}

const handle = async (request: NextApiRequest, response: NextApiResponse) => {
  const { method } = request
  const { id } = request.query
  const userInput: UserInput = request.body
  const walletAddress = Array.isArray(id) ? id[0] : id

  try {
    if (method === 'GET') {
      const user = await prisma.user.findUnique({ where: { walletAddress } })

      if (!user) {
        return response.status(404).json({
          message: 'User not exist'
        })
      }

      return response.status(200).json(user)
    }

    if (method === 'POST') {
      if (
        !request.session?.address ||
        request.session?.address !== walletAddress
      ) {
        return response.status(401).json({ message: 'Unauthorized adress' })
      }

      const errors = []
      const { nickname, description, twitter, discord, telegram } = userInput

      if (
        (twitter && twitter.length > 50) ||
        (discord && discord.length > 50) ||
        (telegram && telegram.length > 50)
      ) {
        errors.push({ message: 'Social medias caannot be greater than 50' })
      }

      if (nickname && nickname.length > 18) {
        errors.push({ message: 'Nickname cannot be greater than 18' })
      }

      if (description && description.length > 500) {
        errors.push({ message: 'Description caannot be greater than 500' })
      }

      const user = await prisma.user.findFirst({
        where: {
          OR: [
            {
              walletAddress
            },
            {
              nickname: nickname ?? ''
            }
          ]
        }
      })

      if (!errors.length && !user && checkAddressChecksum(walletAddress)) {
        await prisma.user.create({
          data: {
            walletAddress,
            ...userInput
          }
        })

        return response.status(201).end()
      }

      if (!checkAddressChecksum(walletAddress)) {
        errors.push({ message: 'Invalid address' })
      }

      if (user) {
        errors.push({ message: 'User already exist' })
      }

      return response.status(400).json(errors)
    }

    if (method === 'PUT') {
      if (
        !request.session?.address ||
        request.session?.address !== walletAddress
      ) {
        return response.status(401).json({
          message: 'Unauthorized adress'
        })
      }

      const errors = []
      const { nickname, description } = userInput

      if (nickname && nickname.length > 18) {
        errors.push({ message: 'Nickname cannot be greater than 18' })
      }

      if (description && description.length > 500) {
        errors.push({ message: 'Description caannot be greater than 500' })
      }

      if (userInput.nickname) {
        const user = await prisma.user.findUnique({
          where: {
            nickname: userInput.nickname
          }
        })

        if (user && user.walletAddress !== walletAddress) {
          errors.push({ message: 'Nickname already exist' })
        }
      }

      if (!errors.length) {
        const result = await prisma.user.update({
          where: { walletAddress },
          data: {
            ...userInput
          }
        })

        return response.status(200).json(result)
      }

      return response.status(400).json(errors)
    }

    response.setHeader('Allow', ['GET', 'POST', 'PUT'])

    return response.status(405).end(`Method ${method} Not Allowed`)
  } catch (error) {
    console.log(error)
    return response.status(500).json({ message: 'Internal Server Error' })
  }
}

export default handle

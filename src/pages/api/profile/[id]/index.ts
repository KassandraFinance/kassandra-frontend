import { Prisma } from '@prisma/client'
import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiRequest, NextApiResponse } from 'next'
import { checkAddressChecksum } from 'web3-utils'
import { ironSessionConfig } from '../../../../config/ironSessionConfig'
import prisma from '../../../../libs/prisma'

type NftProps = {
  contractType: string,
  collectionName?: string,
  symbol?: string,
  tokenAddress?: string,
  tokenId?: string,
  chain?: string,
  name?: string,
  desciption?: string
}

interface UserInput {
  nickname?: string;
  twitter?: string;
  website?: string;
  telegram?: string;
  discord?: string;
  description?: string;
  image?: string;
  isNFT?: boolean;
  nft?: Prisma.NftCreateInput;
}

export const config = {
  api: {
    bodyParser: true
  }
}

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { method } = request
  const { id } = request.query

  const walletAddress = Array.isArray(id) ? id[0] : id

  try {
    if (method === 'GET') {
      const user = await prisma.user.findUnique({
        where: { walletAddress },
        include: { nft: true }
      })

      if (!user) {
        return response.status(404).json({
          message: 'User not exist'
        })
      }

      return response.status(200).json(user)
    }

    if (method === 'POST') {
      const {
        description,
        discord,
        image,
        nickname,
        telegram,
        twitter,
        website,
        isNFT,
        nft
      }: UserInput = request.body

      if (
        !request.session?.address ||
        request.session?.address !== walletAddress
      ) {
        return response.status(401).json({ message: 'Unauthorized adress' })
      }

      const errors = []
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

      const user = await prisma.user.findUnique({
        where: {
          nickname: nickname ?? ''
        }
      })

      if (user && user?.walletAddress !== walletAddress) {
        errors.push({ message: 'Nickname already exist' })
      }

      if (!errors.length && checkAddressChecksum(walletAddress)) {
        await prisma.nft.deleteMany({
          where: { userWalletAddress: walletAddress }
        })

        await prisma.user.upsert({
          where: {
            walletAddress
          },
          create: {
            walletAddress,
            description,
            discord,
            image,
            nickname,
            telegram,
            twitter,
            website,
            isNFT
          },
          update: {
            description,
            discord,
            image,
            nickname,
            telegram,
            twitter,
            website,
            isNFT
          }
        })

        if (isNFT && nft) {
          await prisma.nft.create({
            data: {
              chain: nft.chain,
              contractType: nft.contractType,
              collectionName: nft.collectionName,
              desciption: nft.desciption,
              name: nft.name,
              symbol: nft.symbol,
              tokenAddress: nft.tokenAddress,
              tokenId: nft.tokenId,
              userWalletAddress: walletAddress
            }
          })
        }
        return response.status(201).end()
      }

      if (!checkAddressChecksum(walletAddress)) {
        errors.push({ message: 'Invalid address' })
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

export default withIronSessionApiRoute(handler, ironSessionConfig)

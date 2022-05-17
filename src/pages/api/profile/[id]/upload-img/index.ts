import { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import prisma from '../../../../../libs/prisma'
import { readFileSync } from 'fs'
import { withIronSessionApiRoute } from 'iron-session/next'
import { ironSessionConfig } from '../../../../../config/ironSessionConfig'

export const config = {
    api: {
        bodyParser: false
    }
}

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
    const { method } = request
    const { id } = request.query
    const walletAddress = Array.isArray(id) ? id[0] : id

    try {
        if (method === 'PUT') {
            if(!request.session?.address || request.session?.address !== walletAddress) {
                return response.status(401).json({ message: 'Unauthorized adress' })
            }

            const user = await prisma.user.findUnique({
              where: {
                walletAddress
              }
            })

            if (!user)
              return response.status(404).json({
                message: 'User not exist'
              })

            const data = await new Promise((resolve, reject) => {
              const form = new formidable.IncomingForm(
                {
                  keepExtensions: true,
                  filter: ({ mimetype }) => mimetype === 'image/png' ||  mimetype === 'image/jpg' || mimetype === 'image/jpeg',
                  allowEmptyFiles: false,
                  maxFileSize: 300000
                })

                form.parse(request, (err, _, files) => {
                    if (err) return reject(err)

                    const file = Array.isArray(files)
                        ? files[0][Object.keys(files)[0]]
                        : files[Object.keys(files)[0]]
                    resolve(file)
                })
                // eslint-disable-next-line prettier/prettier
            }) as formidable.File
            const readFile = readFileSync(data?.filepath)
            const imageBase64 = Buffer.from(readFile).toString('base64')
            const addBase64Append = `data:${data.mimetype};base64,${imageBase64}`
            await prisma.user.update({
                where: {
                    walletAddress
                },
                data: {
                    image: addBase64Append,
                    isNFT: false
                }
            })

            return response.status(200).json({
                image: addBase64Append
              })
        }

        response.setHeader('Allow', ['POST'])

        return response.status(405).end(`Method ${method} Not Allowed`)
      } catch (error) {
        console.log(error)
        return response.status(500).json(error)
      }
}

export default withIronSessionApiRoute(handler, ironSessionConfig)

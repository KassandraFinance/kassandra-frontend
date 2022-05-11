import { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import prisma from '../../../../../libs/prisma'
import { readFileSync } from 'fs'

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
                const form = new formidable.IncomingForm({
                    keepExtensions: true,
                    filter: ({ mimetype }) => mimetype === 'image/png',
                    allowEmptyFiles: false,
                    maxFileSize: 85000
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
    
            const readFile = readFileSync(data.filepath)
    
            const imageBase64 = Buffer.from(readFile).toString('base64')
    
            await prisma.user.update({
                where: {
                    walletAddress
                },
                data: {
                    image: imageBase64
                }
            })
    
            return response.status(200).json({
                message: 'Upload sucess'
            })
        }

        response.setHeader('Allow', ['POST'])

        return response.status(405).end(`Method ${method} Not Allowed`)
      } catch (error) {
        return response.status(500).json(error)
      }
}

export default handler
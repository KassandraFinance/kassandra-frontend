import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";


export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { method } = request
  if (method === 'POST') {
    const data = new Promise((resolve, reject) => {
      const form = new formidable.IncomingForm({
        keepExtensions: true,
        uploadDir: './public/shared',
        filter: ({ mimetype }) => mimetype === 'image/png',
        allowEmptyFiles: false,
        maxFileSize: 85000,
        filename: (_, ext) => `shared-fund${ext}`
      })

      form.parse(request, (err, _, files) => {
        if (err) return reject(err)

        // eslint-disable-next-line prettier/prettier
        resolve(files[Object.keys(files)[0]] as formidable.File)
      })
    }) as Promise<formidable.File>

    return data.then(files =>
      response.status(200).json({ fileName: files.newFilename })
    ).catch(err => response.status(500).json({ err }))
  }

  response.setHeader('Allow', ['POST'])

  return response.status(405).end(`Method ${method} Not Allowed`)
}

export default handler

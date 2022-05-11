/**
 * @jest-environment node
 */
import { PrismaClient } from '@prisma/client'
import { createMocks } from 'node-mocks-http'
import profile from '../../../src/pages/api/profile/[id]'

describe('/api/profile/[id]', () => {
  const prisma = new PrismaClient({
    datasources: { db: { url: process.env.DATABASE_URL_DEV } }
  })

  const walletAddress = '0xaa73f24cFe903Fc96be1F48b09601db5d5182622'
  const walletAddress2 = '0x47EF99c6B59336b78fE5aC3EdB36DfFb83cfe160'

  const user = {
    nickname: 'kassandra dao',
    website: 'https://kassandra.finance',
    twitter: 'kassandra dao',
    telegram: 'kassandra',
    discord: 'kassandra',
    description: 'kassandra',
    image: 'nft-id'
  }

  function mockRequestResponse(method = 'GET') {
    const { req, res } = createMocks({ method })

    req.headers = {
      'Content-Type': 'application/json'
    }
    req.query = { id: `${walletAddress}` }
    req._setSessionVariable('address', walletAddress)
    return { req, res }
  }

  beforeEach(async () => {
    await prisma.user.deleteMany()
  })

  it('should return 404 if user not exist', async () => {
    const { req, res } = mockRequestResponse()
    req.query = { id: '123' }

    await profile(req, res)

    expect(res.statusCode).toEqual(404)
  })

  it('should return user', async () => {
    const { req, res } = mockRequestResponse('POST')
    const { req: reqGet, res: resGet } = mockRequestResponse('GET')

    req.body = {
      ...user
    }

    await profile(req, res)
    await profile(reqGet, resGet)

    expect(resGet.statusCode).toEqual(200)
    expect(resGet._getJSONData()).toHaveProperty('walletAddress')
  })

  it('should be able create user with address', async () => {
    const { req, res } = mockRequestResponse('POST')

    await profile(req, res)

    expect(res.statusCode).toEqual(201)
  })

  it('should be able create user', async () => {
    const { req, res } = mockRequestResponse('POST')
    const { req: reqGet, res: resGet } = mockRequestResponse('GET')

    req.body = {
      ...user
    }

    await profile(req, res)
    await profile(reqGet, resGet)

    expect(res.statusCode).toEqual(201)
    expect(resGet._getJSONData()).toEqual({ ...user, walletAddress })
  })

  it('should not be able create user that already exist', async () => {
    const { req, res } = mockRequestResponse('POST')

    await profile(req, res)

    await profile(req, res)

    expect(res.statusCode).toEqual(400)
  })

  it('should not be able create user that invalid address', async () => {
    const { req, res } = mockRequestResponse('POST')
    req.query = { id: walletAddress.toLowerCase() }
    req._setSessionVariable('address', walletAddress.toLowerCase())
    await profile(req, res)

    expect(res.statusCode).toEqual(400)
    expect(res._getJSONData()).toEqual([{ message: 'Invalid address' }])
  })

  it('should not be able create user that greater nickname', async () => {
    const { req, res } = mockRequestResponse('POST')
    const nickname = 'teste greater nickname'
    req.body = { nickname: nickname }
    await profile(req, res)

    expect(res.statusCode).toEqual(400)
    expect(res._getJSONData()).toEqual([
      { message: 'Nickname cannot be greater than 18' }
    ])
  })

  it('should not be able create user that nickname already exist', async () => {
    const { req, res } = mockRequestResponse('POST')
    const nickname = 'nickname'
    req.body = { nickname: nickname }
    await profile(req, res)
    await profile(req, res)
    expect(res.statusCode).toEqual(400)
    expect(res._getJSONData()).toEqual([{ message: 'User already exist' }])
  })

  it('should not be able create user that social media greater than 50', async () => {
    const { req, res } = mockRequestResponse('POST')

    const twitter = 'teste-create-social-media-maior-que-5000000000000000000000000000000'
    const telegram = 'teste-create-social-media-maior-que-500000000000000000000000000000'
    const discord = 'teste-create-social-media-maior-que-5000000000000000000000000000000'
    req.body = { twitter, telegram, discord }

    await profile(req, res)

    expect(res.statusCode).toEqual(400)
    expect(res._getJSONData()).toEqual([
      { message: 'Social medias caannot be greater than 50' }
    ])
  })

  it('should not be able create user that description greater than 500', async () => {
    const { req, res } = mockRequestResponse('POST')
    const description =
      'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm'
    req.body = { description: description }
    await profile(req, res)

    expect(res.statusCode).toEqual(400)
    expect(res._getJSONData()).toEqual([
      { message: 'Description caannot be greater than 500' }
    ])
  })

  it('should not be able create user that not authorized', async () => {
    const { req, res } = mockRequestResponse('POST')
    req.session = {}
    await profile(req, res)

    expect(res.statusCode).toEqual(401)
    expect(res._getJSONData()).toEqual({ message: 'Unauthorized adress' })
  })

  it('should not be able create user that have session address difere do wallet address', async () => {
    const { req, res } = mockRequestResponse('POST')
    req.query = {
      id: walletAddress2
    }
    await profile(req, res)

    expect(res.statusCode).toEqual(401)
    expect(res._getJSONData()).toEqual({ message: 'Unauthorized adress' })
  })

  it('should not be able update user that not authorized', async () => {
    const { req, res } = mockRequestResponse('PUT')
    req.session = {}
    await profile(req, res)

    expect(res.statusCode).toEqual(401)
    expect(res._getJSONData()).toEqual({ message: 'Unauthorized adress' })
  })

  it('should not be able update user that have session address difere do wallet address', async () => {
    const { req, res } = mockRequestResponse('PUT')
    req.query = {
      id: walletAddress2
    }
    await profile(req, res)

    expect(res.statusCode).toEqual(401)
    expect(res._getJSONData()).toEqual({ message: 'Unauthorized adress' })
  })

  it('should not be able update user id nickname already exist', async () => {
    const { req: reqPost, res: resPost } = mockRequestResponse('POST')
    const { req, res } = mockRequestResponse('PUT')

    reqPost.body = {
      ...user
    }

    req._setSessionVariable('address', walletAddress2)
    req.query = {
      id: walletAddress2
    }

    req.body = {
      nickname: user.nickname
    }

    await profile(reqPost, resPost)
    await profile(req, res)

    expect(res.statusCode).toEqual(400)
    expect(res._getJSONData()).toEqual([{ message: 'Nickname already exist' }])
  })

  it('should not be able update user that greater nickname', async () => {
    const { req, res } = mockRequestResponse('PUT')
    const nickname = 'teste greater nickname'
    req.body = { nickname: nickname }
    await profile(req, res)

    expect(res.statusCode).toEqual(400)
    expect(res._getJSONData()).toEqual([
      { message: 'Nickname cannot be greater than 18' }
    ])
  })

  it('should not be able update user that description greater than 500', async () => {
    const { req, res } = mockRequestResponse('PUT')
    const description =
      'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm'
    req.body = { description: description }
    await profile(req, res)

    expect(res.statusCode).toEqual(400)
    expect(res._getJSONData()).toEqual([
      { message: 'Description caannot be greater than 500' }
    ])
  })

  it('should be able update user', async () => {
    const { req, res } = mockRequestResponse('PUT')
    const { req: reqPost, res: resPost } = mockRequestResponse('POST')
    req.body = {
      ...user
    }
    const description = 'teste update'
    req.body = { description: description }
    await profile(reqPost, resPost)
    await profile(req, res)

    expect(res.statusCode).toEqual(200)
    expect(res._getJSONData().description).toBe('teste update')
  })

  it('should not be able use methots different POST GET PUT', async () => {
    const { req, res } = mockRequestResponse('DELETE')

    await profile(req, res)

    expect(res.statusCode).toEqual(405)
  })

  it('should be able to throw an exception', async () => {
    const { req, res } = mockRequestResponse('POST')
    try {
      await profile(req, res)
    } catch (error) {
      expect(res.statusCode).toEqual(500)
      expect(res._getJSONData()).toEqual(error)
    }
  })
})

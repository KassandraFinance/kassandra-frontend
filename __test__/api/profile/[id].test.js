/**
 * @jest-environment node
 */
import { PrismaClient } from '@prisma/client'
import { createMocks } from 'node-mocks-http'
import profile from '../../../src/pages/api/profile/[id]'

describe('/api/profile/[id]', () => {
  const walletAddress = '0xaa73f24cFe903Fc96be1F48b09601db5d5182622'
  const prisma = new PrismaClient()
  function mockRequestResponse(method = 'GET') {
    const { req, res } = createMocks({ method })

    req.headers = {
      'Content-Type': 'application/json'
    }
    req.query = { id: `${walletAddress}` }
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

  it('should be able create user', async () => {
    const { req, res } = mockRequestResponse('POST')

    await profile(req, res)

    expect(res.statusCode).toEqual(201)
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


})

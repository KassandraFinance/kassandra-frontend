import { IronSessionOptions } from 'iron-session'

export const ironSessionConfig: IronSessionOptions = {
  cookieName: 'kassandra auth',
  password: process.env.IRON_SESSION_PASSWORD ?? '',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(new Date().getTime() + 60 * 10 * 1 * 1000)
  }
}

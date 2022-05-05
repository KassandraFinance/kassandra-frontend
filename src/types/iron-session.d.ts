import 'iron-session';

declare module 'iron-session' {
  // eslint-disable-next-line prettier/prettier
  interface IronSessionData {
    nonce?: string;
    address?: string;
  }
}
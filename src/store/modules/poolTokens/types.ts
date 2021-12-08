/* eslint-disable @typescript-eslint/no-explicit-any */
import BigNumber from 'bn.js'

export const Types = {
  GET_POOL_TOKENS: 'GET_POOL_TOKENS'
}

export interface TokenDetails {
  balance_in_pool: string;
  address: string;
  name: string;
  symbol: string;
  decimals: BigNumber;
  allocation: number;
  price: number;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import BigNumber from 'bn.js'

export const Types = {
  GET_POOL_TOKENS_ARRAY: 'GET_POOL_TOKENS_ARRAY'
}

export interface TokenDetails {
  balance_in_pool: string;
  address: string;
  name: string;
  symbol: string;
  decimals: BigNumber;
  allocation: number;
  allocation_goal: number;
  price: number;
  image?: string;
  priceChange?: number;
}

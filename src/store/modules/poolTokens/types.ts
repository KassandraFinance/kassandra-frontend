/* eslint-disable @typescript-eslint/no-explicit-any */
import BigNumber from 'bn.js'

export const Types = {
  GET_POOL_TOKENS: 'GET_POOL_TOKENS'
}

export interface TokenDetails {
  address: string;
  name: string;
  symbol: string;
  decimals: BigNumber;
  allocation: number;
  image?: string;
  market_data?: any;
}

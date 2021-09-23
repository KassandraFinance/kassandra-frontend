import BigNumber from 'bn.js'


export const Types = {
  GET_POOL_TOKENS: 'GET_POOL_TOKENS'
};

export interface TokenDetails {
  address: string;
  name: string;
  symbol: string;
  decimals: BigNumber;
  allocation: Number;
}
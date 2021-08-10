import BigNumber from 'bn.js'


export const Types = {
  GET_POOL_TOKENS: 'GET_POOL_TOKENS'
};

export interface IPoolTokensProps {
  name: string
  symbol: string
  balance: BigNumber
  decimals: BigNumber
  address: string
  normalizedWeight: number
}
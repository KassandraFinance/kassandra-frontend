export const Types = {
  GET_POOL_TOKENS: 'GET_POOL_TOKENS'
};

export interface IPoolTokensProps {
  name: string
  symbol: string
  balance: string
  decimals: string
  address?: string
}
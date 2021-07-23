export const Types = {
  GET_TOKENS_POOL: 'GET_TOKENS_POOL'
};

export interface ICorePoolProps {
  name: string
  symbol: string
  balance: string
  decimals: string
}
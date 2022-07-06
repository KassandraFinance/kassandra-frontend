import React from 'react'

import BigNumber from 'bn.js'

interface PoolTokensProviderProps {
  children: React.ReactNode;
}

interface PoolTokensContextData {
  setPoolTokens: (value: ITokenDetails[]) => void;
  poolTokens: ITokenDetails[];
}

export interface ITokenDetails {
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
  dataInfoYY?: {
    item: {
      urlFarmContract: string,
      farmName: string
    },
    apy: number
  };
}

// eslint-disable-next-line prettier/prettier
const PoolTokensContext = React.createContext({} as PoolTokensContextData);

export const PoolTokensProvider = ({ children }: PoolTokensProviderProps) => {
  const [poolTokens, setPoolTokens] = React.useState<ITokenDetails[]>([] as ITokenDetails[])

  return (
    <PoolTokensContext.Provider value={{ poolTokens, setPoolTokens }}>
      {children}
    </PoolTokensContext.Provider>
  )
}

export const usePoolTokens = () => React.useContext(PoolTokensContext)

import React from 'react'
import BigNumber from 'bn.js'

import { BNtoDecimal } from '../../../utils/numerals'

import { TokenDetails } from './index'

import { 
  ButtonMax,
  InputDefaultContainer, 
  Info, 
  Span, 
  SpanLight,
  Select,
  Symbol, 
  Input,
  AmountDefault,
  LineDefault
} from './styles'

interface IInputDefaultProps {
  poolTokens: TokenDetails[]
  isMax: boolean | null
  swapOutAmount: BigNumber
  swapOutBalance: BigNumber
  setSwapOutAddress: React.Dispatch<React.SetStateAction<string>>
}

const InputDefault = ({ 
  poolTokens,
  isMax,
  swapOutAmount,
  swapOutBalance,
  setSwapOutAddress
}: IInputDefaultProps) => {
  const tokensList = React.useMemo(() => {
    if (poolTokens.length > 1) {
      return (
        <Select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSwapOutAddress(e.target.value)}>
          {poolTokens.map(
            (token: TokenDetails) =>
              <option key={token.address} value={token.address} title={token.name}>{token.symbol}</option>
          )}
        </Select>
      )
    }

    return <Symbol>{poolTokens.length > 0 ? poolTokens[0].symbol : '...'}</Symbol>
  }, [poolTokens])

  return (
    <InputDefaultContainer>
      <Info>
        <Span>Swap to (estimative)</Span>
        {tokensList}
        <SpanLight>Balance: {swapOutBalance > new BigNumber(-1) ? BNtoDecimal(swapOutBalance, new BigNumber(18)) : '...'}</SpanLight>
      </Info>
      <AmountDefault>
        <Span>Amount</Span>
        <Input
          readOnly
          type="number" 
          placeholder="0"
          value={BNtoDecimal(swapOutAmount, new BigNumber(18))}
        />
        {isMax !== null && <ButtonMax
          type="button"
          isMax={isMax}
          onClick={() => {
            if (isMax) {
              setSwapOutAddress('')
              return
            }
            setSwapOutAddress(poolTokens[0].address)
          }}
        >
          Max
        </ButtonMax>}
      </AmountDefault>
      <LineDefault />  
    </InputDefaultContainer>
  )
}

export default InputDefault

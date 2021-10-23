import React from 'react'
import BigNumber from 'bn.js'

import { BNtoDecimal } from '../../../utils/numerals'

import { TokenDetails } from '../../../store/modules/poolTokens/types'

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
} from './styles'

interface IInputDefaultProps {
  decimals: BigNumber
  poolTokens: TokenDetails[]
  isMax: boolean | null
  swapOutAmount: BigNumber
  swapOutBalance: BigNumber
  setSwapOutAddress: React.Dispatch<React.SetStateAction<string>>
}

const InputDefault = ({
  decimals,
  poolTokens,
  isMax,
  swapOutAmount,
  swapOutBalance,
  setSwapOutAddress,
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

    return <Symbol>{poolTokens.length > 0 && poolTokens[0] !== undefined ? poolTokens[0].symbol : '...'}</Symbol>
  }, [poolTokens])

  return (
    <InputDefaultContainer>
      <Info>
        <Span>Swap to (estimative)</Span>
        {tokensList}
        <SpanLight>Balance: {swapOutBalance > new BigNumber(-1) ? BNtoDecimal(swapOutBalance, decimals) : '...'}</SpanLight>
      </Info>
      <AmountDefault>
        <Span total>Total</Span>
        <Input
          readOnly
          type="text"
          placeholder="0"
          value={BNtoDecimal(swapOutAmount, decimals)}
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
    </InputDefaultContainer>
  )
}

export default InputDefault

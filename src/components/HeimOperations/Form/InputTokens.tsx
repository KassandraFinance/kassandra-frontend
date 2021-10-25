import React from 'react'
import BigNumber from 'bn.js'

import { BNtoDecimal, wei } from '../../../utils/numerals'

import { TokenDetails } from '../../../store/modules/poolTokens/types'
import InputTokenValue from '../../InputTokenValue'

import { 
  InputTokensContainer, 
  PayWith, 
  Span,
  SpanLight,
  Symbol,
  Amount,
  ButtonMax,
  Select
} from './styles'


interface IInputEthProps {
  actionString: string
  poolTokens: TokenDetails[]
  title: string
  decimals: BigNumber
  swapInBalance: BigNumber
  swapInAddress: string
  setSwapInAddress: React.Dispatch<React.SetStateAction<string>>
  setSwapInAmount: React.Dispatch<React.SetStateAction<BigNumber>>
  setSwapOutAmount: React.Dispatch<React.SetStateAction<BigNumber[]>>
}

const InputTokens = ({
  actionString,
  poolTokens,
  title,
  decimals,
  swapInBalance,
  swapInAddress,
  setSwapInAddress,
  setSwapInAmount,
  setSwapOutAmount
}: IInputEthProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const tokensList = React.useMemo(() => {
    if (poolTokens.length > 1) {
      return (
        <Select 
          value={swapInAddress}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setSwapInAddress(e.target.value)
            clearInput()
          }}
        >
          {poolTokens.map(
            (token: TokenDetails) =>
              <option key={token.address} value={token.address} title={token.name}>
                {token.symbol}
              </option>
          )}
        </Select>
      )
    }

    return <Symbol>{poolTokens.length > 0 && poolTokens[0] !== undefined ? poolTokens[0].symbol : '...'}</Symbol>
  }, [poolTokens])

  const wei2String = (input: BigNumber) => {
    const decimal = input.mod(wei).toString()

    return `${
      input.div(wei).toString()
    }${
      decimal === '0' ? '' : `.${decimal}`
    }`
  }

  const setMax = () => {
    setSwapInAmount(swapInBalance)

    if (inputRef.current !== null) {
      inputRef.current.value = wei2String(swapInBalance)
    }
  }

  const clearInput = () => {
    setSwapInAmount(new BigNumber(0))
    setSwapOutAmount([new BigNumber(0)])

    if (inputRef.current !== null) {
      inputRef.current.value = "0"
    }
  }

  React.useEffect(() => {    
    clearInput()
  }, [title])

  return (
    <InputTokensContainer>
      <PayWith>
        <Span>{actionString}</Span>
        {tokensList}
        <SpanLight>Balance: {swapInBalance > new BigNumber(-1) ? BNtoDecimal(swapInBalance, decimals) : '...'}</SpanLight>
      </PayWith>
      <Amount>
        <Span total>Total</Span>
        <InputTokenValue
          inputRef={inputRef}
          max={wei2String(swapInBalance)}
          decimals={decimals}
          setInputValue={setSwapInAmount}
        />
        <ButtonMax type="button" onClick={setMax}>Max</ButtonMax>
      </Amount>
    </InputTokensContainer>
  )
}

export default InputTokens

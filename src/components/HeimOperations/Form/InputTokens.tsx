import React from 'react'
import BigNumber from 'bn.js'

import { BNtoDecimal, wei } from '../../../utils/numerals'

import { TokenDetails } from '../../../store/modules/poolTokens/types'
import InputTokenValue from '../../InputTokenValue'

import SelectInputTokens from '../../SelectInputTokens'

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
  poolTokensArray: TokenDetails[]
  title: string
  decimals: BigNumber
  swapInBalance: BigNumber
  setSwapInAddress: React.Dispatch<React.SetStateAction<string>>
  setSwapInAmount: React.Dispatch<React.SetStateAction<BigNumber>>
  setSwapOutAmount: React.Dispatch<React.SetStateAction<BigNumber[]>>
}

const InputTokens = ({
  actionString,
  poolTokens,
  poolTokensArray,
  title,
  decimals,
  swapInBalance,
  setSwapInAddress,
  setSwapInAmount,
  setSwapOutAmount
}: IInputEthProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const tokensList = React.useMemo(() => {
    if (poolTokens.length > 1) {
      return (
        <SelectInputTokens
          poolTokensArray={poolTokensArray}
          setSwapInAddress={setSwapInAddress}
          title={title}
        />
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

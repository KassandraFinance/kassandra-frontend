import React from 'react'
import BigNumber from 'bn.js'

import web3 from '../../../utils/web3'

import { BNtoDecimal, wei } from '../../../utils/numerals'

import { TokenDetails } from '../../../store/modules/poolTokens/types'

import { 
  InputTokensContainer, 
  PayWith, 
  Line, 
  Span,
  SpanLight,
  Symbol,
  ImgArrowLong,
  Amount,
  ButtonMax,
  Input,
  Select
} from './styles'


interface IInputEthProps {
  actionString: string
  poolTokens: TokenDetails[]
  swapInBalance: BigNumber
  setSwapInAddress: React.Dispatch<React.SetStateAction<string>>
  setSwapInAmount: React.Dispatch<React.SetStateAction<BigNumber>>
}

const InputTokens = ({
  actionString,
  poolTokens,
  swapInBalance,
  setSwapInAddress,
  setSwapInAmount,
}: IInputEthProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const tokensList = React.useMemo(() => {
    if (poolTokens.length > 1) {
      return (
        <Select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSwapInAddress(e.target.value)}>
          {poolTokens.map(
            (token: TokenDetails) =>
              <option key={token.address} value={token.address} title={token.name}>{token.symbol}</option>
          )}
        </Select>
      )
    }

    return <Symbol>{poolTokens.length > 0 ? poolTokens[0].symbol : '...'}</Symbol>
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
  
  return (
    <InputTokensContainer>
      <PayWith>
        <Span>{actionString}</Span>
        {tokensList}
        <SpanLight>Balance: {swapInBalance > new BigNumber(-1) ? BNtoDecimal(swapInBalance, new BigNumber(18)) : '...'}</SpanLight>
        <Line />
      </PayWith>
      <ImgArrowLong src="assets/arrow-long-down.svg" alt="" width={12} height={41} />
      <Amount>
        <Span>Amount</Span>
        <Input
          ref={inputRef}
          type="number"
          placeholder="0"
          step="any"
          min="0"
          max={wei2String(swapInBalance)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            const target = e.target as HTMLInputElement
            // don't allow negative numbers
            if (e.key === '-') {
              e.preventDefault()
            }
            // Blink bug makes the value come empty if pressing the decimal symbol that is not that of the current locale
            else if (e.key === '.' || e.key === ',') {
              // first time value will be ok, if pressing twice it zeroes, we ignore those
              if (target.value.length > 0 && target.value.search(/[,.]/) === -1) {
                target.dataset.lastvalue = target.value
              }
            }
            else if (e.key === 'Backspace' || e.key === 'Delete') {
              target.dataset.lastvalue = '0'
            }
          }}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => {
              let { value } = e.target

              if (value.length === 0) {
                value = e.target.dataset.lastvalue as string
              }

              setSwapInAmount(new BigNumber(web3.utils.toWei(value)))
            }
          }
        />
        <ButtonMax type="button" onClick={setMax}>Max</ButtonMax>
        <Line />
      </Amount>
    </InputTokensContainer>
  )
}

export default InputTokens
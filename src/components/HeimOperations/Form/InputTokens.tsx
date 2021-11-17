/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import BigNumber from 'bn.js'

import { BNtoDecimal } from '../../../utils/numerals'

import { TokenDetails } from '../../../store/modules/poolTokens/types'
import InputTokenValue from '../../InputTokenValue'

import SelectInputTokens from '../../SelectInputTokens'

import * as S from './styles'

interface IInputEthProps {
  actionString: string;
  poolTokens: TokenDetails[];
  poolTokensArray: TokenDetails[];
  title: string;
  decimals: BigNumber;
  swapInBalance: BigNumber;
  swapInAmount: BigNumber;
  swapOutAddress: string;
  swapInAddress: string;
  setSwapInAddress: React.Dispatch<React.SetStateAction<string>>;
  setSwapInAmount: React.Dispatch<React.SetStateAction<BigNumber>>;
  setSwapOutAmount: React.Dispatch<React.SetStateAction<BigNumber[]>>;
}

const InputTokens = ({
  actionString,
  poolTokens,
  poolTokensArray,
  title,
  decimals,
  swapInBalance,
  swapInAmount,
  swapInAddress,
  swapOutAddress,
  setSwapInAddress,
  setSwapInAmount,
  setSwapOutAmount
}: IInputEthProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [maxActive, setMaxActive] = React.useState<boolean>(false)

  const tokensList = React.useMemo(() => {
    if (poolTokens.length > 1) {
      return (
        <SelectInputTokens
          poolTokensArray={poolTokensArray}
          setSwapInAddress={setSwapInAddress}
          swapOutAddress={swapOutAddress}
        />
      )
    }

    return (
      <S.Symbol>
        <img src="assets/avalanche_social_index_logo.svg" alt="" />
        {poolTokens.length > 0 && poolTokens[0] !== undefined ? 'aHYPE' : '...'}
      </S.Symbol>
    )
  }, [poolTokens])

  const wei2String = (input: BigNumber) => {
    return BNtoDecimal(input, decimals).replace(/ /g, '')
  }

  const setMax = () => {
    setSwapInAmount(swapInBalance)
    setMaxActive(true)

    if (inputRef.current !== null) {
      if (
        inputRef.current?.value !== '0' &&
        inputRef.current.value === wei2String(swapInAmount)
      ) {
        inputRef.current.value = ''
        setSwapInAmount(new BigNumber(0))
        setMaxActive(false)
        return
      }
      inputRef.current.value = wei2String(swapInBalance)
    }
  }

  const clearInput = () => {
    setSwapInAmount(new BigNumber(0))
    setSwapOutAmount([new BigNumber(0)])
    setMaxActive(false)

    if (inputRef.current !== null) {
      inputRef.current.value = '0'
    }
  }

  React.useEffect(() => {
    clearInput()
  }, [title, swapInAddress])

  return (
    <S.InputTokensContainer>
      <S.PayWith>
        <S.Span>{actionString}</S.Span>
        {tokensList}
        <S.SpanLight>
          Balance:{' '}
          {swapInBalance > new BigNumber(-1)
            ? BNtoDecimal(swapInBalance, decimals)
            : '...'}
        </S.SpanLight>
      </S.PayWith>
      <S.Amount>
        <S.Span total>Total</S.Span>
        <InputTokenValue
          inputRef={inputRef}
          max={wei2String(swapInBalance)}
          decimals={decimals}
          setInputValue={setSwapInAmount}
        />
        <S.ButtonMax type="button" maxActive={maxActive} onClick={setMax}>
          Max
        </S.ButtonMax>
      </S.Amount>
    </S.InputTokensContainer>
  )
}

export default InputTokens

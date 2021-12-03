import React from 'react'
import BigNumber from 'bn.js'
import Image from 'next/image'

import { BNtoDecimal, wei } from '../../../utils/numerals'

import { TokenDetails } from '../../../store/modules/poolTokens/types'
import InputTokenValue from '../../InputTokenValue'

import SelectInputTokens from '../../SelectInputTokens'

import avaxSocial from '../../../../public/assets/avalanche_social_index_logo.svg'

import * as S from './styles'

interface IInputEthProps {
  actionString: string;
  poolTokens: TokenDetails[];
  infoAHYPE: TokenDetails[];
  tokenDetails: TokenDetails;
  title: string;
  decimals: BigNumber;
  swapInBalance: BigNumber;
  swapInAmount: BigNumber;
  swapInAddress: string;
  setSwapInAddress: React.Dispatch<React.SetStateAction<string>>;
  setSwapInAmount: React.Dispatch<React.SetStateAction<BigNumber>>;
  setSwapOutAmount: React.Dispatch<React.SetStateAction<BigNumber[]>>;
}

const InputTokens = ({
  actionString,
  poolTokens,
  infoAHYPE,
  tokenDetails,
  title,
  decimals,
  swapInBalance,
  swapInAmount,
  setSwapInAddress,
  setSwapInAmount,
  setSwapOutAmount
}: IInputEthProps) => {
  const [maxActive, setMaxActive] = React.useState<boolean>(false)

  const inputRef = React.useRef<HTMLInputElement>(null)

  const tokensList = React.useMemo(() => {
    if (poolTokens.length > 1) {
      return (
        <SelectInputTokens
          poolTokensArray={infoAHYPE}
          setSwapInAddress={setSwapInAddress}
          tokenDetails={tokenDetails}
        />
      )
    }

    return (
      <S.Symbol>
        <div className="img">
          <Image src={avaxSocial} alt="avax-social" width={22} height={22} />
        </div>
        {poolTokens.length > 0 && poolTokens[0] !== undefined
          ? poolTokens[0].symbol
          : '...'}
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

    if (inputRef.current !== null) {
      inputRef.current.value = '0'
    }
  }

  React.useEffect(() => {
    clearInput()
  }, [title])

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

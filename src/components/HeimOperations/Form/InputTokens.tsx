/* eslint-disable prettier/prettier */
import React from 'react'
import BigNumber from 'bn.js'
import Image from 'next/image'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import { BNtoDecimal } from '../../../utils/numerals'

import { TokenDetails } from '../../../store/modules/poolTokens/types'
import InputTokenValue from '../../InputTokenValue'

import SelectInputTokens from '../../SelectInputTokens'

import avaxSocial from '../../../../public/assets/avalanche_social_index_logo.svg'

import * as S from './styles'

interface IInputEthProps {
  clearInput: () => void
  inputRef: React.RefObject<HTMLInputElement>;
  actionString: string;
  poolTokens: TokenDetails[];
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
  clearInput,
  inputRef,
  actionString,
  poolTokens,
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
  const [currentMax, setCurrentMax] = React.useState<BigNumber>(new BigNumber(0))

  const { trackEvent } = useMatomo()

  function matomoEvent(action: string, name: string) {
    trackEvent({
      category: 'operations-invest',
      action,
      name
    })
  }

  const tokensList = React.useMemo(() => {
    if (poolTokens.length > 1) {
      return (
        <SelectInputTokens
          poolTokens={poolTokens}
          setSwapInAddress={setSwapInAddress}
          tokenDetails={tokenDetails}
        />
      )
    }

    return (
      <S.Symbol>
        <div className="img">
          <Image src={avaxSocial} alt="" width={22} height={22} />
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
    if (inputRef.current !== null) {
      inputRef.current.focus()
      if (maxActive) {
        inputRef.current.value = ''
        setSwapInAmount(new BigNumber(0))
        setMaxActive(false)
        return
      }
      inputRef.current.value = wei2String(swapInBalance)
      setSwapInAmount(swapInBalance)
      setMaxActive(true)
      setCurrentMax(swapInBalance)
    }
  }

  React.useEffect(() => {
    if (maxActive && currentMax !== swapInAmount) {
      setMaxActive(false)
    }
  }, [swapInAmount])

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
        <S.ButtonMax 
          type="button" 
          maxActive={maxActive} 
          onClick={() => {
            setMax()
            matomoEvent('click-on-maxBtn', `input-in-${title}`)
          }}
        >
          Max
        </S.ButtonMax>
      </S.Amount>
    </S.InputTokensContainer>
  )
}

export default InputTokens

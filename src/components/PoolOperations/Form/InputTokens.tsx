import React from 'react'
import Image from 'next/image'
import BigNumber from 'bn.js'

import { ITokenDetails } from '../../../context/PoolTokensContext'

import useMatomoEcommerce from '../../../hooks/useMatomoEcommerce'

import InputTokenValue from '../../InputTokenValue'
import SelectInput from '../../SelectInput'
import OutputTokenValue from '../../OutputTokenValue/OutputTokenValue'

import { BNtoDecimal } from '../../../utils/numerals'

import ahype from '../../../../public/assets/logos/ahype.svg'
import tricrypto from '../../../../public/assets/logos/tricrypto-with-fund.svg'

import * as S from './styles'

interface IInputEthProps {
  title: string;
  isWithdraw?: string;
  actionString: string;
  swapBalance: BigNumber;
  decimals: BigNumber;
  poolTokensArray?: ITokenDetails[];
  clearInput?: () => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  swapAmount: BigNumber;
  setSwapAmount?: React.Dispatch<React.SetStateAction<BigNumber>>;
  setSwapOutAmount?: React.Dispatch<React.SetStateAction<BigNumber[]>>;
  setMaxActive: React.Dispatch<React.SetStateAction<boolean>>;
  maxActive: boolean;
  swapOutAddress?: string;
  disabled: string;
  poolTokens: ITokenDetails[];
  tokenDetails: ITokenDetails;
  swapInAddress?: string;
  setSwapAddress: React.Dispatch<React.SetStateAction<string>>;
  calculateAmountIn?: (amoutOut: BigNumber) => Promise<void>;
}

const InputTokens = ({
  title,
  isWithdraw,
  actionString,
  swapBalance,
  decimals,
  clearInput,
  inputRef,
  poolTokensArray,
  swapAmount,
  setSwapAmount,
  swapOutAddress,
  disabled,
  poolTokens,
  tokenDetails,
  setSwapAddress,
  setSwapOutAmount,
  setMaxActive,
  maxActive,
  calculateAmountIn
}: IInputEthProps) => {
  const { trackEventFunction } = useMatomoEcommerce()

  const tokensList = React.useMemo(() => {
    if (poolTokens.length > 1) {
      return (
        <SelectInput
          poolTokens={poolTokens}
          setSwapAddress={setSwapAddress}
          tokenDetails={tokenDetails}
        />
      )
    }

    return (
      <S.Symbol>
        <div className="img">
          {poolTokens && poolTokens?.length > 0 && (
            <Image
              src={poolTokens[0]?.symbol === 'aHYPE' ? ahype : tricrypto}
              alt=""
              width={22}
              height={22}
            />
          )}
        </div>
        {poolTokens.length > 0 && poolTokens[0] !== undefined
          ? poolTokens[0].symbol
          : '...'}
      </S.Symbol>
    )
  }, [poolTokens])

  const wei2String = (input: BigNumber) => {
    return BNtoDecimal(input, decimals.toNumber()).replace(/\u00A0/g, '')
  }

  const setMax = () => {
    if (!inputRef || !setSwapAmount) {
      return
    }

    if (inputRef.current !== null) {
      inputRef.current.focus()
      if (maxActive) {
        inputRef.current.value = ''
        setSwapAmount(new BigNumber(0))
        setMaxActive(false)
        return
      }
      inputRef.current.value = wei2String(swapBalance)
      setSwapAmount(swapBalance.sub(new BigNumber(1)))
      setMaxActive(true)
    }
  }

  React.useEffect(() => {
    setMaxActive(false)
  }, [isWithdraw])

  React.useEffect(() => {
    clearInput && clearInput()
  }, [title])

  return (
    <S.InputTokensContainer>
      <S.Info>
        <S.Span>{actionString}</S.Span>
        {tokensList}
        <S.SpanLight>
          Balance:{' '}
          {swapBalance > new BigNumber(-1)
            ? BNtoDecimal(swapBalance, decimals.toNumber())
            : '...'}
        </S.SpanLight>
      </S.Info>
      <S.Amount>
        <S.Span total>{title === 'Output' ? 'Estimate' : 'Total'}</S.Span>
        {inputRef && setSwapAmount ? (
          <InputTokenValue
            disabled={disabled}
            inputRef={inputRef}
            max={wei2String(swapBalance)}
            decimals={decimals}
            setInputValue={setSwapAmount}
            setMaxActive={setMaxActive}
          />
        ) : (
          <OutputTokenValue
            disabled={isWithdraw === 'Withdraw' ? '' : disabled}
            decimals={decimals}
            poolTokensArray={poolTokensArray}
            swapAmount={swapAmount}
            swapOutAddress={swapOutAddress}
            calculateAmountIn={calculateAmountIn}
            setSwapOutAmount={setSwapOutAmount}
            operation={isWithdraw ?? ''}
            setMaxActive={setMaxActive}
          />
        )}
        {setSwapAmount && (
          <S.ButtonMax
            type="button"
            maxActive={maxActive}
            onClick={() => {
              setMax()
              trackEventFunction(
                'click-on-maxBtn',
                `input-in-${title}`,
                'operations-invest'
              )
            }}
          >
            Max
          </S.ButtonMax>
        )}
      </S.Amount>
    </S.InputTokensContainer>
  )
}

export default InputTokens

import React from 'react'
import Image from 'next/image'
import BigNumber from 'bn.js'
import Big from 'big.js'

import { ITokenDetails } from '../../../context/PoolTokensContext'

import useMatomoEcommerce from '../../../hooks/useMatomoEcommerce'

import InputTokenValue from '../../InputTokenValue'
import SelectInput from '../../SelectInput'

import { BNtoDecimal } from '../../../utils/numerals'
import { priceDollar } from '../../../utils/priceDollar'

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
  // optionals for input
  clearInput?: () => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  // Text Input
  swapAmount: BigNumber;
  setSwapAmount?: React.Dispatch<React.SetStateAction<BigNumber>>;
  swapOutAddress?: string;
  disabled: string;
  // SelectInput
  poolTokens: ITokenDetails[];
  tokenDetails: ITokenDetails;
  swapInAmount?: BigNumber;
  swapInAddress?: string;
  setSwapAddress: React.Dispatch<React.SetStateAction<string>>;
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
  // Text Inputs
  swapAmount,
  setSwapAmount,
  swapOutAddress,
  disabled,
  // SelectInput
  poolTokens,
  tokenDetails,
  swapInAmount,
  swapInAddress,
  setSwapAddress
}: IInputEthProps) => {
  const [maxActive, setMaxActive] = React.useState<boolean>(false)
  const [currentMax, setCurrentMax] = React.useState(new BigNumber(0))

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
      setSwapAmount(swapBalance)
      setMaxActive(true)
      setCurrentMax(swapBalance)
    }
  }

  React.useEffect(() => {
    if (maxActive && currentMax !== swapAmount) {
      setMaxActive(false)
    }
  }, [swapAmount])

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
            swapAmount={swapAmount}
            swapInAmount={swapInAmount}
          />
        ) : (
          <>
            <S.Input
              readOnly
              type="text"
              placeholder="0"
              value={
                decimals.gt(new BigNumber(-1))
                  ? BNtoDecimal(
                      swapAmount || new BigNumber(0),
                      decimals.toNumber()
                    )
                  : '0'
              }
            />
            <span className="price-dolar">
              {poolTokensArray &&
                'USD: ' +
                  BNtoDecimal(
                    Big(swapAmount.toString())
                      .mul(Big(priceDollar(swapOutAddress, poolTokensArray)))
                      .div(Big(10).pow(Number(decimals))),
                    18,
                    2,
                    2
                  )}
            </span>
          </>
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

import React from 'react'
import Image from 'next/image'
import BigNumber from 'bn.js'
import Big from 'big.js'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import { TokenDetails } from '../../../store/modules/poolTokens/types'

import InputTokenValue from '../../InputTokenValue'
import SelectInput from '../../SelectInput'

import { BNtoDecimal } from '../../../utils/numerals'
import { priceDollar } from '../../../utils/priceDollar'

import ahype from '../../../../public/assets/ahype.svg'
import tricrypto from '../../../../public/assets/tricrypto.svg'

import * as S from './styles'

interface IInputEthProps {
  title: string;
  isWithdraw?: string;
  actionString: string;
  swapBalance: BigNumber;
  decimals: BigNumber;
  infoAHYPE?: TokenDetails[];
  // optionals for input
  clearInput?: () => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  // Text Input
  swapAmount: BigNumber;
  setSwapAmount?: React.Dispatch<React.SetStateAction<BigNumber>>;
  swapOutAddress?: string;
  disabled: string;
  // SelectInput
  poolTokens: TokenDetails[];
  tokenDetails: TokenDetails;
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
  infoAHYPE,
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
          <Image
            src={
              infoAHYPE && infoAHYPE[infoAHYPE.length - 1].symbol === 'aHYPE'
                ? ahype
                : tricrypto
            }
            alt=""
            width={22}
            height={22}
          />
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
              {infoAHYPE &&
                'USD: ' +
                  BNtoDecimal(
                    Big(
                      (isWithdraw === 'Withdraw'
                        ? swapAmount
                        : swapInAmount || 0
                      ).toString()
                    )
                      .mul(
                        Big(
                          priceDollar(
                            isWithdraw === 'Withdraw'
                              ? swapOutAddress
                              : swapInAddress,
                            infoAHYPE
                          )
                        )
                      )
                      .div(Big(10).pow(18)),
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
              matomoEvent('click-on-maxBtn', `input-in-${title}`)
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

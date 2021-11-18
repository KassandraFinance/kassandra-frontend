/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import BigNumber from 'bn.js'

import { BNtoDecimal } from '../../../utils/numerals'

import { TokenDetails } from '../../../store/modules/poolTokens/types'

import SelectInputDefault from '../../SelectInputDefault'

import * as S from './styles'

interface IInputDefaultProps {
  decimals: BigNumber;
  poolTokens: TokenDetails[];
  poolTokensArray: TokenDetails[];
  tokenDetails: TokenDetails;
  isMax: boolean | null;
  swapOutAmount: BigNumber;
  swapOutBalance: BigNumber;
  setSwapOutAddress: React.Dispatch<React.SetStateAction<string>>;
}

const InputDefault = ({
  decimals,
  poolTokens,
  poolTokensArray,
  tokenDetails,
  isMax,
  swapOutAmount,
  swapOutBalance,
  setSwapOutAddress
}: IInputDefaultProps) => {
  const tokensList = React.useMemo(() => {
    if (poolTokens.length > 1) {
      return (
        <SelectInputDefault
          poolTokensArray={poolTokensArray}
          setSwapOutAddress={setSwapOutAddress}
          tokenDetails={tokenDetails}
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

  return (
    <S.InputDefaultContainer>
      <S.Info>
        <S.Span>Swap to (estimative)</S.Span>
        {tokensList}
        <S.SpanLight>
          Balance:{' '}
          {swapOutBalance > new BigNumber(-1)
            ? BNtoDecimal(swapOutBalance, decimals)
            : '...'}
        </S.SpanLight>
      </S.Info>
      <S.AmountDefault>
        <S.Span total>Total</S.Span>
        <S.Input
          readOnly
          type="text"
          placeholder="0"
          value={BNtoDecimal(swapOutAmount, decimals)}
        />
        {isMax !== null && (
          <S.ButtonMax
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
          </S.ButtonMax>
        )}
        {isMax === null && <div style={{ height: '17px' }} />}
      </S.AmountDefault>
    </S.InputDefaultContainer>
  )
}

export default InputDefault

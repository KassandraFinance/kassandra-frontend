import React from 'react'
import BigNumber from 'bn.js'
import Image from 'next/image'

import { BNtoDecimal } from '../../../utils/numerals'

import { TokenDetails } from '../../../store/modules/poolTokens/types'

import SelectInputDefault from '../../SelectInputDefault'

import avaxSocial from '../../../../public/assets/avalanche_social_index_logo.svg'

import * as S from './styles'

interface IInputDefaultProps {
  decimals: BigNumber;
  poolTokens: TokenDetails[];
  tokenDetails: TokenDetails;
  isMax: boolean | null;
  swapOutAmount: BigNumber;
  swapOutBalance: BigNumber;
  swapInAddress: string;
  setSwapOutAddress: React.Dispatch<React.SetStateAction<string>>;
}

const InputDefault = ({
  decimals,
  poolTokens,
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
          poolTokens={poolTokens}
          setSwapOutAddress={setSwapOutAddress}
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
          value={BNtoDecimal(swapOutAmount || new BigNumber(0), decimals)}
        />
        {isMax !== null ? (
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
        ) : (
          <div style={{ width: '40px', height: '20px', padding: '3px 8px' }} />
        )}
      </S.AmountDefault>
    </S.InputDefaultContainer>
  )
}

export default InputDefault

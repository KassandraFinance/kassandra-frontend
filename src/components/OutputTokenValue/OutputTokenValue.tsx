import React from 'react'
import BigNumber from 'bn.js'
import Big from 'big.js'
import Tippy from '@tippyjs/react'

import { TokenDetails } from '../../store/modules/poolTokens/types';

import { BNtoDecimal } from '../../utils/numerals';
import { priceDollar } from '../../utils/priceDollar';

import * as S from './styles'

interface IOutputProps {
  decimals: BigNumber;
  swapAmount: BigNumber;
  disabled: string;
  operation: string;
  swapOutAddress?: string;
  poolTokensArray?: TokenDetails[];
  calculateAmountIn?: (amoutOut: BigNumber) => Promise<void>;
  setSwapOutAmount?: React.Dispatch<React.SetStateAction<BigNumber[]>>;
  setMaxActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

const OutputTokenValue = ({
  decimals,
  swapAmount,
  disabled,
  operation,
  swapOutAddress,
  poolTokensArray,
  calculateAmountIn,
  setSwapOutAmount,
  setMaxActive
}: IOutputProps) => {
  return (
    <>
      <Tippy content={disabled} disabled={disabled.length === 0}>
        <S.Input
          readOnly={disabled.length > 0 || operation === 'Withdraw'}
          type="number"
          placeholder="0"
          value={
            decimals.gt(new BigNumber(-1))
              ? Number(BNtoDecimal(
                swapAmount || new BigNumber(0),
                decimals.toNumber()
              ).replace(/\s/g, ''))
              : '0'
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            let { value } = e.target

            if (value.length === 0) {
              // eslint-disable-next-line prettier/prettier
              value = e.target.dataset.lastvalue as string
            }
            else if (value[0] === '0') {
              e.target.value = value.replace(/^0+/, '')
            }

            if (e.target.value[0] === '.') {
              e.target.value = `0${e.target.value}`
            }
            const decimalsNum = decimals.toNumber()
            const values = e.target.value.split('.')
            const paddedRight = `${values[0]}${`${values[1] || 0
              }${'0'.repeat(decimalsNum)}`.slice(0, decimalsNum)}`
            setSwapOutAmount && setSwapOutAmount([new BigNumber(paddedRight)])
            if (calculateAmountIn) {
              calculateAmountIn(new BigNumber(paddedRight))
            }
            setMaxActive && setMaxActive(false)
          }}
        />
      </Tippy>
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
  )
}

export default OutputTokenValue

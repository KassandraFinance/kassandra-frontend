/* eslint-disable prettier/prettier */
import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { ChainDetails } from '../../utils/changeChain'

import Form from './Form';

import * as S from './styles'

export type Titles = keyof typeof messages;

const messages = {
  Invest: 'Pay with',
  Withdraw: 'Send',
  Swap: 'Swap from'
}

interface ISelectOperatorProps {
  inputChecked: Titles;
  setInputChecked: React.Dispatch<React.SetStateAction<Titles>>;
  typeWithdrawChecked: string;
  setTypeWithdrawChecked: React.Dispatch<React.SetStateAction<string>>;

  poolChain: ChainDetails;
  poolSymbol: string;
  crpPoolAddress: string;
  corePoolAddress: string;
  productCategories: string[];
  setIsModaWallet: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectOperatorCart = ({
  inputChecked,
  setInputChecked,
  typeWithdrawChecked,
  setTypeWithdrawChecked,
  setIsModaWallet,

  poolChain,
  poolSymbol,
  crpPoolAddress,
  corePoolAddress,
  productCategories
}: ISelectOperatorProps) => {
  const { trackEvent } = useMatomo()

  function matomoEvent(action: string, name: string) {
    trackEvent({
      category: 'operations-invest',
      action,
      name
    })
  }

  return (
    <>
      <S.SelectOperator>
        <S.Input
          type="radio"
          name="operator"
          id="Invest"
          onChange={() => {
            setInputChecked('Invest')
            matomoEvent('click-on-tab', 'invest')
          }}
          checked={inputChecked === 'Invest'}
        />
        <S.Label
          selected={inputChecked === 'Invest'}
          htmlFor="Invest"
        >
          Invest
        </S.Label>
        <S.Input
          type="radio"
          name="operator"
          id="Withdraw"
          onChange={() => {
            setInputChecked('Withdraw')
            matomoEvent('click-on-tab', 'withdraw')
          }}
          checked={inputChecked === 'Withdraw'}
        />

        <S.Label
          selected={inputChecked === 'Withdraw'}
          htmlFor="Withdraw"
          >
          Withdraw
        </S.Label>

        <S.Input
          type="radio"
          name="operator"
          id="Swap"
          onChange={() => {
            setInputChecked('Swap')
            matomoEvent('click-on-tab', 'swap')
          }}
          checked={inputChecked === 'Swap'}
        />
        <S.Label
          selected={inputChecked === 'Swap'}
          htmlFor="Swap"
        >
          Swap
        </S.Label>
      </S.SelectOperator>
      {inputChecked === 'Withdraw' &&
        <S.TypeWithdraw>
          <S.TypeRadio>
            <label
              className="radio"
              htmlFor='Single_asset'
            >
              <S.InputWithdraw
                type="radio"
                name="typeWithdraw"
                id='Single_asset'
                onChange={() => {
                  setTypeWithdrawChecked('Single_asset')
                  matomoEvent('click-on-check', 'single-asset')
                }}
                checked={typeWithdrawChecked === 'Single_asset'}
              />
              <span>Single asset</span>
            </label>
          </S.TypeRadio>
          <S.TypeRadio>
            <label
              className="radio"
              htmlFor={'Best_value'}
            >
              <S.InputWithdraw
                type="radio"
                name="typeWithdraw"
                id={'Best_value'}
                onChange={() => {
                  setTypeWithdrawChecked('Best_value')
                  matomoEvent('click-on-check', 'best-value')
                }}
                checked={typeWithdrawChecked === 'Best_value'}
              />
              <span>All assets</span>
            </label>
          </S.TypeRadio>
        </S.TypeWithdraw>
      }
      <Form
        poolChain={poolChain}
        poolSymbol={poolSymbol}
        crpPoolAddress={crpPoolAddress}
        corePoolAddress={corePoolAddress}
        productCategories={productCategories}
        title={inputChecked}
        typeWithdrawChecked={typeWithdrawChecked}
        typeAction={messages[inputChecked]}
        setIsModaWallet={setIsModaWallet}
      />
    </>
  )
}

export default SelectOperatorCart

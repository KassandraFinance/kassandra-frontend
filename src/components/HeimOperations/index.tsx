/* eslint-disable prettier/prettier */
import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import { ChainDetails } from '../../utils/changeChain'

import Form from './Form'

import * as S from './styles'

interface IOperationsProps {
  poolChain: ChainDetails;
  crpPoolAddress: string;
  corePoolAddress: string;
  productCategories: string[];
}

export type Titles = keyof typeof messages;

const messages = {
  Invest: 'Pay with',
  Withdraw: 'Send',
  Swap: 'Swap from'
}

const HeimOperations = ({
  poolChain,
  crpPoolAddress,
  corePoolAddress,
  productCategories
}: IOperationsProps) => {
  const [inputChecked, setInputChecked] = React.useState<Titles>('Invest')
  const [typeWithdrawChecked, setTypeWithdrawChecked] = React.useState<string>('Best_value')

  const { trackEvent } = useMatomo()

  function matomoEvent(action: string, name: string) {
    trackEvent({
      category: 'operations-invest',
      action,
      name
    })
  }

  return (
    <div>
      <S.HeimOperationsContainer 
        inputChecked={inputChecked}
        typeWithdrawChecked={typeWithdrawChecked}
      >
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
                htmlFor="Single_asset"
              >
                <S.InputWithdraw
                  type="radio"
                  name="typeWithdraw"
                  id="Single_asset"
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
                htmlFor="Best_value"
              >
                <S.InputWithdraw
                  type="radio"
                  name="typeWithdraw"
                  id="Best_value"
                  onChange={() => {
                    setTypeWithdrawChecked('Best_value')
                    matomoEvent('click-on-check', 'best-value')
                  }}
                  checked={typeWithdrawChecked === 'Best_value'}
                />
                <span>Best value</span>
              </label>
            </S.TypeRadio>
          </S.TypeWithdraw>
        }
          <Form
            poolChain={poolChain}
            crpPoolAddress={crpPoolAddress}
            corePoolAddress={corePoolAddress}
            productCategories={productCategories}
            title={inputChecked}
            typeWithdrawChecked={typeWithdrawChecked}
            typeAction={messages[inputChecked]}
          />
      </S.HeimOperationsContainer>
    </div>
  )
}

export default HeimOperations

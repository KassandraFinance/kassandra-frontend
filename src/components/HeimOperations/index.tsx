/* eslint-disable prettier/prettier */
import React from 'react'

import Form from './Form'

import * as S from './styles'

const HeimOperations = () => {
  const messages = {
    Invest: 'Pay with',
    Withdraw: 'Send',
    Swap: 'Swap from'
  }

  const [inputChecked, setInputChecked] = React.useState<keyof typeof messages>('Invest')
  const [typeWithdrawChecked, setTypeWithdrawChecked] = React.useState<string>('Best_value')

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
            onChange={() => setInputChecked('Invest')}
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
            onChange={() => setInputChecked('Withdraw')}
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
            onChange={() => setInputChecked('Swap')}
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
                  onChange={() => setTypeWithdrawChecked('Single_asset')}
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
                  onChange={() => setTypeWithdrawChecked('Best_value')}
                  checked={typeWithdrawChecked === 'Best_value'}
                />
                <span>Best value</span>
              </label>
            </S.TypeRadio>
          </S.TypeWithdraw>
        }
          <Form
            title={inputChecked}
            typeWithdrawChecked={typeWithdrawChecked}
            typeAction={messages[inputChecked]}
          />
      </S.HeimOperationsContainer>
    </div>
  )
}

export default HeimOperations

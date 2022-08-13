/* eslint-disable prettier/prettier */
import React from 'react'

import useMatomoEcommerce from '../../../hooks/useMatomoEcommerce';

import * as S from './styles'

export type TitlesMobile = keyof typeof messages;

const messages = {
  Invest: 'Pay with',
  Withdraw: 'Send',
  Swap: 'Swap from',
  Disable: ''
}

interface ISelectOperatorMobileProps {
  inputCheckedBarMobile: TitlesMobile;
  setInputCheckedBarMobile: React.Dispatch<React.SetStateAction<TitlesMobile>>;

  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectOperatorMobile = ({
  inputCheckedBarMobile,
  setInputCheckedBarMobile,
  setModalOpen
}: ISelectOperatorMobileProps) => {
  const { trackEventFunction } = useMatomoEcommerce()

  return (
    <>
      <S.PoolOperationsContainerMobile>
        <S.SelectOperatorMobile>
          <S.InputMobile
            type="radio"
            name="operator"
            id="InvestMobile"
            onChange={() => {
              setInputCheckedBarMobile('Invest')
              trackEventFunction('click-on-tab', 'invest', 'operations-invest')
            }}
            checked={inputCheckedBarMobile === 'Invest'}
          />
          <S.LabelMobile
            selectedMobile={inputCheckedBarMobile === 'Invest'}
            htmlFor="InvestMobile"
            onClick={() => setModalOpen(true)}
          >
            Invest
          </S.LabelMobile>
          <S.InputMobile
            type="radio"
            name="operator"
            id="WithdrawMobile"
            onChange={() => {
              setInputCheckedBarMobile('Withdraw')
              trackEventFunction('click-on-tab', 'withdraw','operations-invest')
            }}
            checked={inputCheckedBarMobile === 'Withdraw'}
          />

          <S.LabelMobile
            selectedMobile={inputCheckedBarMobile === 'Withdraw'}
            htmlFor="WithdrawMobile"
            onClick={() => setModalOpen(true)}
            >
            Withdraw
          </S.LabelMobile>

          <S.InputMobile
            type="radio"
            name="operator"
            id="SwapMobile"
            onChange={() => {
              setInputCheckedBarMobile('Swap')
              trackEventFunction('click-on-tab', 'swap','operations-invest')
            }}
            checked={inputCheckedBarMobile === 'Swap'}
          />
          <S.LabelMobile
            selectedMobile={inputCheckedBarMobile === 'Swap'}
            htmlFor="SwapMobile"
            onClick={() => setModalOpen(true)}
          >
            Swap
          </S.LabelMobile>
        </S.SelectOperatorMobile>
      </S.PoolOperationsContainerMobile>
    </>
  )
}

export default SelectOperatorMobile


/* eslint-disable prettier/prettier */
import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

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
      <S.HeimOperationContainerMobile>
        <S.SelectOperatorMobile>
          <S.InputMobile
            type="radio"
            name="operator"
            id="InvestMobile"
            onChange={() => {
              setInputCheckedBarMobile('Invest')
              matomoEvent('click-on-tab', 'invest')
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
              matomoEvent('click-on-tab', 'withdraw')
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
              matomoEvent('click-on-tab', 'swap')
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
      </S.HeimOperationContainerMobile>
    </>
  )
}

export default SelectOperatorMobile

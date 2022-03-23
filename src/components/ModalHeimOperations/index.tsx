/* eslint-disable prettier/prettier */
import React from 'react'

import { ChainDetails } from '../../utils/changeChain'

import SelectOperatorCart from '../HeimOperations/SelectOperatorCart';
import { TitlesMobile } from '../HeimOperations/SelectOperatorMobile';

import { Backdrop, CardOperationsContainerModal } from './styles'

export type Titles = keyof typeof messages;

const messages = {
  Invest: 'Pay with',
  Withdraw: 'Send',
  Swap: 'Swap from'
}

interface IOperationsProps {
  setInputChecked: React.Dispatch<React.SetStateAction<Titles>>
  inputCheckedBarMobile: TitlesMobile;
  setInputCheckedBarMobile: React.Dispatch<React.SetStateAction<TitlesMobile>>

  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModaWallet: React.Dispatch<React.SetStateAction<boolean>>;

  poolChain: ChainDetails;
  crpPoolAddress: string;
  corePoolAddress: string;
  productCategories: string[];
}


const ModalCardOperations = ({
  setInputChecked,
  inputCheckedBarMobile,
  setInputCheckedBarMobile,

  setIsModaWallet,
  modalOpen,
  setModalOpen,

  poolChain,
  crpPoolAddress,
  corePoolAddress,
  productCategories,
}: IOperationsProps) => {
  const [inputCheckedMobile, setInputCheckedMobile] = React.useState<Titles>('Invest')
  const [typeWithdrawCheckedMobile, setTypeWithdrawCheckedMobile] = React.useState<string>('Best_value')

  const handleCloseModalHeimOperation = () => {
    setInputChecked('Invest')
    setInputCheckedMobile('Invest')
    setInputCheckedBarMobile('Disable')
    setModalOpen(false)
  }

  React.useEffect(() => {
    switch (inputCheckedBarMobile) {
      case 'Invest':
        return setInputCheckedMobile('Invest')
      case 'Withdraw':
        return setInputCheckedMobile('Withdraw')
      case 'Swap':
        return setInputCheckedMobile('Swap')
      default:
        return;
    }
  }, [inputCheckedBarMobile])

  React.useEffect(() => {
    switch (inputCheckedMobile) {
      case 'Invest':
        return setInputCheckedBarMobile('Invest')
      case 'Withdraw':
        return setInputCheckedBarMobile('Withdraw')
      case 'Swap':
        return setInputCheckedBarMobile('Swap')
      default:
        return;
    }
  }, [inputCheckedMobile])

  return (
    <>
      <Backdrop
        onClick={() => handleCloseModalHeimOperation()}
        style={{ display: modalOpen ? 'block' : 'none' }}
      />

      <CardOperationsContainerModal
        modalOpen={modalOpen}
      >
        <SelectOperatorCart
          inputChecked={inputCheckedMobile}
          setInputChecked={setInputCheckedMobile}
          typeWithdrawChecked={typeWithdrawCheckedMobile}
          setTypeWithdrawChecked={setTypeWithdrawCheckedMobile}

          poolChain={poolChain}
          crpPoolAddress={crpPoolAddress}
          corePoolAddress={corePoolAddress}
          productCategories={productCategories}
          setIsModaWallet={setIsModaWallet}
        />
      </CardOperationsContainerModal>
    </>
  )
}

export default ModalCardOperations

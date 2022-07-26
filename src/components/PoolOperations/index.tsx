/* eslint-disable prettier/prettier */
import React from 'react'

import { useAppSelector } from '../../store/hooks'

import { chains } from '../../constants/tokenAddresses'

import { ChainDetails } from '../../utils/changeChain'

import ModalWalletConnect from '../Modals/ModalWalletConnect'
import ModalHeimOperations from '../Modals/ModalHeimOperations'
import SelectOperatorCart from './SelectOperatorCart'
import SelectOperatorMobile, { TitlesMobile } from './SelectOperatorMobile'

import * as S from './styles'

interface IOperationsProps {
  poolChain: ChainDetails;
  poolSymbol: string;
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
  poolSymbol,
  crpPoolAddress,
  corePoolAddress,
  productCategories
}: IOperationsProps) => {
  const [inputChecked, setInputChecked] = React.useState<Titles>('Invest')
  const [inputCheckedBarMobile, setInputCheckedBarMobile] = React.useState<TitlesMobile>('Disable')
  const [typeWithdrawChecked, setTypeWithdrawChecked] = React.useState<string>('Best_value')

  const [isModalHeimOperations, setIsModalHeimOperations] = React.useState<boolean>(false)
  const [isModalWallet, setIsModaWallet] = React.useState<boolean>(false)

  const { chainId } = useAppSelector(state => state)

  const chain =
    process.env.NEXT_PUBLIC_MASTER === '1' ? chains.avalanche : chains.fuji

  function handleSetInputChecked(title: Titles) {
    if (chain.chainId === chainId) setInputChecked(title)
  }

  return (
    <div>
      {isModalHeimOperations ? (
        <ModalHeimOperations
          setInputChecked={setInputChecked}
          inputCheckedBarMobile={inputCheckedBarMobile}
          setInputCheckedBarMobile={setInputCheckedBarMobile}
          modalOpen={isModalHeimOperations}
          setModalOpen={setIsModalHeimOperations}
          setIsModaWallet={setIsModaWallet}

          poolChain={poolChain}
          poolSymbol={poolSymbol}
          crpPoolAddress={crpPoolAddress}
          corePoolAddress={corePoolAddress}
          productCategories={productCategories}
        />
      ) : (
        <>
          <S.HeimOperationsContainer>
            <SelectOperatorCart
              inputChecked={inputChecked}
              handleSetInputChecked={handleSetInputChecked}
              typeWithdrawChecked={typeWithdrawChecked}
              setTypeWithdrawChecked={setTypeWithdrawChecked}
              setIsModaWallet={setIsModaWallet}

              poolChain={poolChain}
              poolSymbol={poolSymbol}
              crpPoolAddress={crpPoolAddress}
              corePoolAddress={corePoolAddress}
              productCategories={productCategories}
            />
          </S.HeimOperationsContainer>
        </>
      )}

      <SelectOperatorMobile
        inputCheckedBarMobile={inputCheckedBarMobile}
        setInputCheckedBarMobile={setInputCheckedBarMobile}
        setModalOpen={setIsModalHeimOperations}
      />

      {isModalWallet &&
        (<ModalWalletConnect
          setModalOpen={setIsModaWallet}
        />)}
    </div>
  )
}

export default HeimOperations

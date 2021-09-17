import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import { Staking } from '../../constants/tokenAddresses'
import { confirmWithdraw } from '../../utils/confirmTransactions'
import useStakingContract from '../../hooks/useStakingContract'

import {
  Backdrop,
  BorderGradient,
  BackgroundBlack,
  InterBackground,
  Main,
  Amount,
  Line,
  ButtonContainer,
  ConfirmButton,
  GetKacyButton
 } from './styles'
import { BNtoDecimal } from '../../utils/numerals'

 interface IModalStakingProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  otherStakingPools: boolean;
  pid: number;
}

const ModalUnstaking = ({
  modalOpen,
  setModalOpen,
  otherStakingPools,
  pid }: IModalStakingProps) => {
  const [balance, setBalance] = React.useState<BigNumber>(new BigNumber(0))
  const [amountUnstaking, setAmountUnstaking] = React.useState<BigNumber>(new BigNumber(0))

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const kacyStake = useStakingContract(Staking)

  function handleKacyAmount(percentage: BigNumber ) {
    const kacyAmount = percentage.mul(balance).div(new BigNumber(100))
    setAmountUnstaking(kacyAmount)
  }

  function handleConfirm () {
    kacyStake.withdraw(pid, amountUnstaking, confirmWithdraw, "Pending Withdraw")
  }

  async function get() {
    if (userWalletAddress !== '') {
      const balance: BigNumber = await kacyStake.balance(pid, userWalletAddress)
      setBalance(balance)
    }
  }

  React.useEffect(() => {
    if (modalOpen) {
      get()
    }
  }, [modalOpen])

  return (
    <>
      <Backdrop onClick={() => setModalOpen(false)} style={{display: modalOpen ? 'block' : 'none'}} />
      <BorderGradient
        modalOpen={modalOpen}
        otherStakingPools={otherStakingPools}
      >
        <BackgroundBlack>
          <InterBackground otherStakingPools={otherStakingPools}>
            <span>Unstaking</span>
            <button type="button" onClick={() => setModalOpen(false)}><img src="assets/close.svg" alt="" /> </button>
          </InterBackground>
          <Main>
            <Amount>
              <span>$KACY Amount</span>
              <input type="number" placeholder="0" value={BNtoDecimal(amountUnstaking, new BigNumber(18), 6)} />
              <Line />
              <h5>Balance: {BNtoDecimal(balance, new BigNumber(18), 6)}</h5>
            </Amount>
            <ButtonContainer>
              <button type="button" onClick={() => handleKacyAmount(new BigNumber(25))}>25%</button>
              <button type="button" onClick={() => handleKacyAmount(new BigNumber(50))}>50%</button>
              <button type="button" onClick={() => handleKacyAmount(new BigNumber(75))}>75%</button>
              <button type="button" onClick={() => handleKacyAmount(new BigNumber(100))}>max</button>
            </ButtonContainer>
            <ConfirmButton
              type="button"
              otherStakingPools={otherStakingPools}
              onClick={() => {
                setModalOpen(false)
                handleConfirm()
                setAmountUnstaking(new BigNumber(0))
              }
            }
            >
              Confirm
            </ConfirmButton>
            <GetKacyButton type="button" onClick={() => setModalOpen(false)}>Get KACY</GetKacyButton>
          </Main>
        </BackgroundBlack>
      </BorderGradient>
    </>
  )
}

export default ModalUnstaking

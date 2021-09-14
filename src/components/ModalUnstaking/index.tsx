import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import { confirmWithdraw } from '../../utils/confirmTransactions'
import useStakingContract from '../../hooks/useStakingContract'

import * as S from './styles'
import { BNtoDecimal } from '../../utils/numerals'

 interface IModalStakingProps {
  modalOpen: boolean
  // eslint-disable-next-line prettier/prettier
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  otherStakingPools: boolean
  pid: number
}

const ModalUnstaking = ({
  modalOpen,
  setModalOpen,
  otherStakingPools,
  pid }: IModalStakingProps) => {
  const [balance, setBalance] = React.useState<BigNumber>(new BigNumber(0))
  const [amountUnstaking, setAmountUnstaking] = React.useState<BigNumber>(new BigNumber(0))
  const [isActive, setIsActive] = React.useState<number>(0)

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const { withdraw, balanceOf } = useStakingContract()

  function handleKacyAmount(percentage: BigNumber ) {
    const kacyAmount = percentage.mul(balance).div(new BigNumber(100))
    setAmountUnstaking(kacyAmount)
  }

  function handleConfirm () {
    withdraw(pid, amountUnstaking, confirmWithdraw, "Pending Withdraw")
  }

  async function get() {
    if (userWalletAddress !== '') {
      const balance: BigNumber = await balanceOf(pid, userWalletAddress)
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
      <S.Backdrop onClick={() => setModalOpen(false)} style={{display: modalOpen ? 'block' : 'none'}} />
      <S.BorderGradient
        modalOpen={modalOpen}
        otherStakingPools={otherStakingPools}
      >
        <S.BackgroundBlack>
          <S.InterBackground otherStakingPools={otherStakingPools}>
            <span>Unstaking</span>
            <button type="button" onClick={() => setModalOpen(false)}><img src="assets/close.svg" alt="" /> </button>
          </S.InterBackground>
          <S.Main>
            <S.Amount>
              <span>$KACY Amount</span>
              <input type="number" placeholder="0" value={BNtoDecimal(amountUnstaking, new BigNumber(18), 6)} />
              <S.Line />
              <h5>Balance: {BNtoDecimal(balance, new BigNumber(18), 6)}</h5>
            </S.Amount>
            <S.ButtonContainer>
              <button
                style={{background: isActive === 25 ? '#26DBDB' : 'transparent', color: isActive === 25 ? '#000' : '#fff'}}
                type="button"
                onClick={() => {
                  setIsActive(25);
                  handleKacyAmount(new BigNumber(25))}}
                >25%</button>

							<button style={{background: isActive === 50 ? '#26DBDB' : 'transparent', color: isActive === 50 ? '#000' : '#fff'}}
                type="button"
                onClick={() => {
                  setIsActive(50);
                  handleKacyAmount(new BigNumber(50))}}
                >50%</button>

							<button
                style={{background: isActive === 75 ? '#26DBDB' : 'transparent', color: isActive === 75 ? '#000' : '#fff'}}
                type="button"
                onClick={() => {
                  setIsActive(75);
                  handleKacyAmount(new BigNumber(75))}}
                >75%</button>

							<button
                style={{background: isActive === 100 ? '#26DBDB' : 'transparent', color: isActive === 100 ? '#000' : '#fff'}}
                type="button"
                onClick={() => {
                  setIsActive(100);
                  handleKacyAmount(new BigNumber(100))}}
                >max</button>
            </S.ButtonContainer>
            <S.ConfirmButton
              type="button"
              disabled={amountUnstaking.toString() === '0'}
              otherStakingPools={otherStakingPools}
              onClick={() => {
                setModalOpen(false)
                handleConfirm()
                setAmountUnstaking(new BigNumber(0))
              }
            }
            >
              Confirm
            </S.ConfirmButton>
            <S.GetKacy type="button" onClick={() => setModalOpen(false)}>Get KACY</S.GetKacy>
          </S.Main>
        </S.BackgroundBlack>
      </S.BorderGradient>
    </>
  )
}

export default ModalUnstaking

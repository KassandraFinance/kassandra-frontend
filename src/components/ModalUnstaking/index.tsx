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
  const [multiplier, setMultiplier] = React.useState<number>(0)


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
                style={{background: multiplier === 25 ? '#26DBDB' : 'transparent', color: multiplier === 25 ? '#000' : '#fff'}}
                type="button"
                onClick={() => {
                  multiplier === 25 ? setMultiplier(0) : setMultiplier(25);
                  multiplier === 25 ? handleKacyAmount(new BigNumber(0)) : handleKacyAmount(new BigNumber(25))}}
                >25%</button>

							<button style={{background: multiplier === 50 ? '#26DBDB' : 'transparent', color: multiplier === 50 ? '#000' : '#fff'}}
                type="button"
                onClick={() => {
                  multiplier === 50 ? setMultiplier(0) : setMultiplier(50);
                  multiplier === 50 ? handleKacyAmount(new BigNumber(0)) : handleKacyAmount(new BigNumber(50))}}
                >50%</button>

							<button
                style={{background: multiplier === 75 ? '#26DBDB' : 'transparent', color: multiplier === 75 ? '#000' : '#fff'}}
                type="button"
                onClick={() => {
                  multiplier === 75 ? setMultiplier(0) : setMultiplier(75);
                  multiplier === 75 ? handleKacyAmount(new BigNumber(0)) : handleKacyAmount(new BigNumber(75))}}
                >75%</button>

							<button
                style={{background: multiplier === 100 ? '#26DBDB' : 'transparent', color: multiplier === 100 ? '#000' : '#fff'}}
                type="button"
                onClick={() => {
                  multiplier === 100 ? setMultiplier(0) : setMultiplier(100);
                  multiplier === 100 ? handleKacyAmount(new BigNumber(0)) : handleKacyAmount(new BigNumber(100))}}
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

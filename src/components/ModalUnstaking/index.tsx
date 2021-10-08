import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'
import web3 from '../../utils/web3'

import { Staking } from '../../constants/tokenAddresses'
import { confirmWithdraw } from '../../utils/confirmTransactions'
import { BNtoDecimal, wei } from '../../utils/numerals'
import useStakingContract from '../../hooks/useStakingContract'

import InputTokenValue from '../InputTokenValue'

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
  GetKacy
} from './styles'
import Button from '../Button'

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
  pid
}: IModalStakingProps) => {
  const [balance, setBalance] = React.useState<BigNumber>(new BigNumber(0))
  const [multiplier, setMultiplier] = React.useState<number>(0)
  const [amountUnstaking, setAmountUnstaking] = React.useState<BigNumber>(
    new BigNumber(0)
  )
  const inputRef = React.useRef<HTMLInputElement>(null)

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const kacyStake = useStakingContract(Staking)

  function handleKacyAmount(percentage: BigNumber) {
    const kacyAmount = percentage.mul(balance).div(new BigNumber(100))
    setAmountUnstaking(kacyAmount)
    if (inputRef.current !== null) {
      inputRef.current.value = web3.utils.toWei(kacyAmount).toString(10)
    }
  }

  function handleConfirm() {
    kacyStake.withdraw(
      pid,
      amountUnstaking,
      confirmWithdraw,
      'Pending Withdraw'
    )
  }

  async function get() {
    if (userWalletAddress !== '') {
      const balance: BigNumber = await kacyStake.balance(
        pid,
        userWalletAddress
      )
      setBalance(balance)
    }
  }

  React.useEffect(() => {
    if (modalOpen) {
      get()
    }
  }, [modalOpen])

  React.useEffect(() => {
    setMultiplier(0);
    handleKacyAmount(new BigNumber(0))
  }, [modalOpen])

  return (
    <>
      <Backdrop
        onClick={() => setModalOpen(false)}
        style={{ display: modalOpen ? 'block' : 'none' }}
      />
      <BorderGradient
        modalOpen={modalOpen}
        otherStakingPools={otherStakingPools}
      >
        <BackgroundBlack>
          <InterBackground otherStakingPools={otherStakingPools}>
            <span>Unstaking</span>
            <button type="button" onClick={() => setModalOpen(false)}>
              <img src="assets/close.svg" alt="" />{' '}
            </button>
          </InterBackground>
          <Main>
            <Amount>
              <span>$KACY Amount</span>
              <InputTokenValue
                max={balance.toString(10)}
                decimals={wei}
                inputRef={inputRef}
                setInputValue={setAmountUnstaking}
              />
              <Line />
              <h5>Balance: {BNtoDecimal(balance, wei, 6)}</h5>
            </Amount>
            <ButtonContainer>
              <button
                style={{
                  background: multiplier === 25 ? '#26DBDB' : 'transparent',
                  color: multiplier === 25 ? '#000' : '#fff'
                }}
                type="button"
                onClick={() => {
                  multiplier === 25 ? setMultiplier(0) : setMultiplier(25)
                  multiplier === 25
                    ? handleKacyAmount(new BigNumber(0))
                    : handleKacyAmount(new BigNumber(25))
                }}
              >
                25%
              </button>

              <button
                style={{
                  background: multiplier === 50 ? '#26DBDB' : 'transparent',
                  color: multiplier === 50 ? '#000' : '#fff'
                }}
                type="button"
                onClick={() => {
                  multiplier === 50 ? setMultiplier(0) : setMultiplier(50)
                  multiplier === 50
                    ? handleKacyAmount(new BigNumber(0))
                    : handleKacyAmount(new BigNumber(50))
                }}
              >
                50%
              </button>

              <button
                style={{
                  background: multiplier === 75 ? '#26DBDB' : 'transparent',
                  color: multiplier === 75 ? '#000' : '#fff'
                }}
                type="button"
                onClick={() => {
                  multiplier === 75 ? setMultiplier(0) : setMultiplier(75)
                  multiplier === 75
                    ? handleKacyAmount(new BigNumber(0))
                    : handleKacyAmount(new BigNumber(75))
                }}
              >
                75%
              </button>

              <button
                style={{
                  background: multiplier === 100 ? '#26DBDB' : 'transparent',
                  color: multiplier === 100 ? '#000' : '#fff'
                }}
                type="button"
                onClick={() => {
                  multiplier === 100 ? setMultiplier(0) : setMultiplier(100)
                  multiplier === 100
                    ? handleKacyAmount(new BigNumber(0))
                    : handleKacyAmount(new BigNumber(100))
                }}
              >
                max
              </button>
            </ButtonContainer>
            <ConfirmButton
              type="button"
              disabled={amountUnstaking.toString() === '0'}
              otherStakingPools={otherStakingPools}
              onClick={() => {
                setModalOpen(false)
                handleConfirm()
                setAmountUnstaking(new BigNumber(0))
              }}
            >
              Confirm
            </ConfirmButton>
            <Button
              backgroundBlack
              fullWidth
              text='Get KACY'
              type="button"
              onClick={() => setModalOpen(false)}
            />
          </Main>
        </BackgroundBlack>
      </BorderGradient>
    </>
  )
}

export default ModalUnstaking

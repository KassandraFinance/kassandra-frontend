import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'
import web3 from '../../utils/web3'


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
  GetKacy
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
  pid
}: IModalStakingProps) => {
  const [balance, setBalance] = React.useState<BigNumber>(new BigNumber(0))
  const [multiplier, setMultiplier] = React.useState<number>(0)
  const [amountUnstaking, setAmountUnstaking] = React.useState<BigNumber>(
    new BigNumber(0)
  )

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const kacyStake = useStakingContract(Staking)

  function handleKacyAmount(percentage: BigNumber) {
    const kacyAmount = percentage.mul(balance).div(new BigNumber(100))
    setAmountUnstaking(kacyAmount)
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
      const balance: BigNumber = await kacyStake.balanceOf(
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
              <input
                type="number"
                placeholder="0"
                step="any"
								min="0"
								onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  setMultiplier(0);
									const target = e.target as HTMLInputElement
									// don't allow negative numbers
									if (e.key === '-') {
										e.preventDefault()
									}
									// Blink bug makes the value come empty if pressing the decimal symbol that is not that of the current locale
									else if (e.key === '.' || e.key === ',') {
										// first time value will be ok, if pressing twice it zeroes, we ignore those
										if (target.value.length > 0 && target.value.search(/[,.]/) === -1) {
											target.dataset.lastvalue = target.value
										}
									}
									else if (e.key === 'Backspace' || e.key === 'Delete') {
										target.dataset.lastvalue = '0'
									}
								}}
								onChange={
									(e: React.ChangeEvent<HTMLInputElement>) => {
										// getArrayTokens()
										let { value } = e.target

										if (value.length === 0) {
											value = e.target.dataset.lastvalue as string
										}

										setAmountUnstaking(new BigNumber(web3.utils.toWei(value)))
									}
								}
                value={BNtoDecimal(amountUnstaking, new BigNumber(18), 6)}
              />
              <Line />
              <h5>Balance: {BNtoDecimal(balance, new BigNumber(18), 6)}</h5>
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
              otherStakingPools={otherStakingPools}
              onClick={() => {
                setModalOpen(false)
                handleConfirm()
                setAmountUnstaking(new BigNumber(0))
              }}
            >
              Confirm
            </ConfirmButton>
            <GetKacy type="button" onClick={() => setModalOpen(false)}>
              Get KACY
            </GetKacy>
          </Main>
        </BackgroundBlack>
      </BorderGradient>
    </>
  )
}

export default ModalUnstaking

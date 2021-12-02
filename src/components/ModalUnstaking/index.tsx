/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'
import { ToastSuccess, ToastError, ToastWarning } from '../Toastify/toast'

import { Staking } from '../../constants/tokenAddresses'
import { BNtoDecimal } from '../../utils/numerals'
import waitTransaction, {
  MetamaskError,
  TransactionCallback
} from '../../utils/txWait'

import useERC20Contract from '../../hooks/useERC20Contract'
import useStakingContract from '../../hooks/useStakingContract'
import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'

import InputTokenValue from '../InputTokenValue'

import * as S from './styles'

import Button from '../Button'

interface IModalStakingProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pid: number;
  decimals: string;
  stakingToken: string;
  productCategories: string | string[];
  nameToken: string;
}

const ModalUnstaking = ({
  modalOpen,
  setModalOpen,
  pid,
  decimals,
  stakingToken,
  productCategories,
  nameToken
}: IModalStakingProps) => {
  const [balance, setBalance] = React.useState<BigNumber>(new BigNumber(0))
  const [multiplier, setMultiplier] = React.useState<number>(0)
  const [amountUnstaking, setAmountUnstaking] = React.useState<BigNumber>(
    new BigNumber(0)
  )
  const [isAmount, setIsAmount] = React.useState<boolean>(false)

  const inputRef = React.useRef<HTMLInputElement>(null)

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const { trackBuying, trackCancelBuying, trackBought } = useMatomoEcommerce()
  const kacyStake = useStakingContract(Staking)
  const tokenContract = useERC20Contract(stakingToken)

  function handleKacyAmount(percentage: BigNumber) {
    const kacyAmount = percentage.mul(balance).div(new BigNumber(100))

    if (inputRef.current !== null) {
      inputRef.current.value = BNtoDecimal(
        kacyAmount,
        new BigNumber(18),
        2
      ).replace(' ', '')
    }
    setAmountUnstaking(kacyAmount)
    setIsAmount(true)
  }

  function handleConfirm() {
    kacyStake.withdraw(pid, amountUnstaking, withdrawCallback)
  }

  async function get() {
    if (userWalletAddress !== '') {
      const balance: BigNumber = await kacyStake.balance(pid, userWalletAddress)
      setBalance(balance)
    }
  }

  React.useEffect(() => {
    if (!isAmount) {
      setMultiplier(0)
    }
    setIsAmount(false)
  }, [amountUnstaking])

  React.useEffect(() => {
    if (modalOpen) {
      get()
    }
  }, [modalOpen])

  React.useEffect(() => {
    setMultiplier(0)
    handleKacyAmount(new BigNumber(0))
  }, [modalOpen])

  const withdrawCallback = React.useCallback((): TransactionCallback => {
    const productSKU = `${Staking}_${pid}`

    return async (error: MetamaskError, txHash: string) => {
      const tokenName = await tokenContract.name()
      trackBuying(productSKU, tokenName, 0, productCategories)
      const tokenSymbol = await tokenContract.symbol()

      if (error) {
        trackCancelBuying()

        if (error.code === 4001) {
          ToastError(`Unstaking of ${tokenSymbol} cancelled`)
          return
        }

        ToastError(`Failed to unstake ${tokenSymbol}. Please try again later.`)
        return
      }

      trackBought(productSKU, 0, 0)
      ToastWarning(`Confirming unstake of ${tokenSymbol}...`)
      const txReceipt = await waitTransaction(txHash)

      if (txReceipt.status) {
        ToastSuccess(`Unstake of ${tokenSymbol} completed`)
        return
      }
    }
  }, [stakingToken])
  console.log(nameToken)

  return (
    <>
      <S.Backdrop
        onClick={() => setModalOpen(false)}
        style={{ display: modalOpen ? 'block' : 'none' }}
      />
      <S.BorderGradient modalOpen={modalOpen}>
        <S.BackgroundBlack>
          <S.InterBackground>
            <span>Withdraw</span>
            <button type="button" onClick={() => setModalOpen(false)}>
              <img src="assets/close.svg" alt="" />
            </button>
          </S.InterBackground>
          <S.Main>
            <S.Amount>
              <span>${nameToken} Total</span>
              <InputTokenValue
                max={balance.toString(10)}
                decimals={new BigNumber(decimals)}
                inputRef={inputRef}
                setInputValue={setAmountUnstaking}
              />
              <h5>Balance: {BNtoDecimal(balance, new BigNumber(18), 6)}</h5>
            </S.Amount>
            <S.ButtonContainer>
              <button
                style={{
                  background: multiplier === 25 ? '#fff' : 'transparent',
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
                  background: multiplier === 50 ? '#fff' : 'transparent',
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
                  background: multiplier === 75 ? '#fff' : 'transparent',
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
                  background: multiplier === 100 ? '#fff' : 'transparent',
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
            </S.ButtonContainer>
            <S.ConfirmButton
              type="button"
              disabled={amountUnstaking.toString() === '0'}
              onClick={() => {
                setModalOpen(false)
                handleConfirm()
                setAmountUnstaking(new BigNumber(0))
              }}
            >
              Confirm
            </S.ConfirmButton>
            <Button
              backgroundBlack
              fullWidth
              text="Get KACY"
              type="button"
              onClick={() => setModalOpen(false)}
            />
          </S.Main>
        </S.BackgroundBlack>
      </S.BorderGradient>
    </>
  )
}

export default ModalUnstaking

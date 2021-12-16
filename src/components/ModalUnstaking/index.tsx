/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Big from 'big.js'
import BigNumber from 'bn.js'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { useSelector, RootStateOrAny } from 'react-redux'
import { ToastSuccess, ToastError, ToastWarning } from '../Toastify/toast'

import { BNtoDecimal } from '../../utils/numerals'
import waitTransaction, {
  MetamaskError,
  TransactionCallback
} from '../../utils/txWait'

import { Staking } from '../../constants/tokenAddresses'
import useERC20Contract from '../../hooks/useERC20Contract'
import useStakingContract from '../../hooks/useStakingContract'
import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'

import Button from '../Button'
import InputTokenValue from '../InputTokenValue'

import * as S from './styles'

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
  const [isAmount, setIsAmount] = React.useState<boolean>(false)

  const [balance, setBalance] = React.useState<BigNumber>(new BigNumber(0))
  const [multiplier, setMultiplier] = React.useState<number>(0)
  const [amountUnstaking, setAmountUnstaking] = React.useState<BigNumber>(
    new BigNumber(0)
  )

  const inputRef = React.useRef<HTMLInputElement>(null)

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const { trackBuying, trackCancelBuying, trackBought } = useMatomoEcommerce()
  const { trackEvent } = useMatomo()

  const kacyStake = useStakingContract(Staking)
  const kacyToken = useERC20Contract(stakingToken)

  function matomoEvent(action: string, name: string) {
    trackEvent({
      category: 'modal-unstaking',
      action,
      name
    })
  }

  function handleKacyAmount(percentage: BigNumber) {
    const kacyAmount = percentage.mul(balance).div(new BigNumber(100))

    if (inputRef.current !== null) {
      inputRef.current.value = BNtoDecimal(
        kacyAmount,
        new BigNumber(18),
        2
      ).replace('\u00A0', '')
    }

    matomoEvent('click-value-btn', BNtoDecimal(percentage, new BigNumber(18)))
    setAmountUnstaking(kacyAmount)
    setIsAmount(true)
  }

  function handleConfirm() {
    kacyStake.withdraw(pid, amountUnstaking, withdrawCallback())
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
      const tokenName = await kacyToken.name()
      trackBuying(
        productSKU,
        tokenName,
        -Big(amountUnstaking.toString()).div(Big(10).pow(18)).toNumber(),
        productCategories
      )
      const tokenSymbol = await kacyToken.symbol()

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
  }, [kacyToken])

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
              <img src="assets/close.svg" alt="Close" />
            </button>
          </S.InterBackground>
          <S.Main>
            <S.Amount>
              <span>${nameToken} Total</span>
              <InputTokenValue
                inputRef={inputRef}
                max={balance.toString(10)}
                decimals={new BigNumber(decimals)}
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

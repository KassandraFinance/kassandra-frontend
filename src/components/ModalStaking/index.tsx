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
  symbol: string;
}

const ModalStaking = ({
  modalOpen,
  setModalOpen,
  pid,
  decimals,
  stakingToken,
  productCategories,
  symbol
}: IModalStakingProps) => {
  const [isAmount, setIsAmount] = React.useState<boolean>(false)

  const [balance, setBalance] = React.useState<BigNumber>(new BigNumber(0))
  const [multiplier, setMultiplier] = React.useState<number>(0)
  const [amountStaking, setAmountStaking] = React.useState<BigNumber>(
    new BigNumber(0)
  )

  const inputRef = React.useRef<HTMLInputElement>(null)

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const { trackProductPageView, trackBuying, trackCancelBuying, trackBought } =
    useMatomoEcommerce()
  const { trackEvent } = useMatomo()

  const kacyStake = useStakingContract(Staking)
  const kacyToken = useERC20Contract(stakingToken)
  const productSKU = `${Staking}_${pid}`

  function matomoEvent(action: string, name: string) {
    trackEvent({
      category: 'modal-staking',
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
      ).replace(/\u00A0/g, '')
    }

    matomoEvent('click-value-btn', BNtoDecimal(percentage, new BigNumber(18)))
    setAmountStaking(kacyAmount)
    setIsAmount(true)
  }

  function handleConfirm() {
    kacyStake.stake(pid, amountStaking, stakeCallback())
  }

  async function get() {
    const balanceKacy = await kacyToken.balance(userWalletAddress)
    setBalance(balanceKacy)
  }

  React.useEffect(() => {
    if (!modalOpen) {
      return
    }

    const track = async () => {
      const tokenName = await kacyToken.name()
      trackProductPageView(productSKU, tokenName, productCategories)
    }
    track()
  }, [modalOpen, stakingToken])

  React.useEffect(() => {
    if (!isAmount) {
      setMultiplier(0)
    }
    setIsAmount(false)
  }, [amountStaking])

  React.useEffect(() => {
    if (modalOpen) {
      get()
    }
  }, [modalOpen])

  React.useEffect(() => {
    setMultiplier(0)
    handleKacyAmount(new BigNumber(0))
  }, [modalOpen])

  const stakeCallback = React.useCallback((): TransactionCallback => {
    return async (error: MetamaskError, txHash: string) => {
      const tokenName = await kacyToken.name()
      trackBuying(
        productSKU,
        tokenName,
        Big(amountStaking.toString()).div(Big(10).pow(18)).toNumber(),
        productCategories
      )

      if (error) {
        trackCancelBuying()

        if (error.code === 4001) {
          ToastError(`Staking of ${symbol} cancelled`)
          return
        }

        ToastError(`Failed to stake ${symbol}. Please try again later.`)
        return
      }

      trackBought(productSKU, 0, 0)
      ToastWarning(`Confirming stake of ${symbol}...`)
      const txReceipt = await waitTransaction(txHash)

      if (txReceipt.status) {
        ToastSuccess(`Stake of ${symbol} confirmed`)
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
      <S.BorderGradient modalOpen={modalOpen} stakeInKacy={symbol === 'KACY'}>
        <S.BackgroundBlack>
          <S.InterBackground>
            <span>Stake in Pool</span>
            <button type="button" onClick={() => setModalOpen(false)}>
              <img src="assets/close.svg" alt="Close" />
            </button>
          </S.InterBackground>
          <S.Main>
            <S.Amount>
              <span>${symbol} Total</span>
              <InputTokenValue
                inputRef={inputRef}
                max={balance.toString(10)}
                decimals={new BigNumber(decimals)}
                setInputValue={setAmountStaking}
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
              disabled={amountStaking.toString() === '0'}
              onClick={() => {
                setModalOpen(false)
                handleConfirm()
                setAmountStaking(new BigNumber(0))
              }}
            >
              Confirm
            </S.ConfirmButton>

            <Button
              as="a"
              backgroundBlack
              fullWidth
              text="Get KACY"
              href="https://app.pangolin.exchange/#/swap?outputCurrency=0x1d7C6846F033e593b4f3f21C39573bb1b41D43Cb"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setModalOpen(false)}
            />
          </S.Main>
        </S.BackgroundBlack>
      </S.BorderGradient>
    </>
  )
}

export default ModalStaking

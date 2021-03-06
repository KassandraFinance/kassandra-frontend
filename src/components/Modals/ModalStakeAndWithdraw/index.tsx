/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Link from 'next/link'
import Big from 'big.js'
import BigNumber from 'bn.js'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { ToastSuccess, ToastError, ToastWarning } from '../../Toastify/toast'

import { Kacy } from '../../../constants/tokenAddresses'

import { BNtoDecimal } from '../../../utils/numerals'
import waitTransaction, {
  MetamaskError,
  TransactionCallback
} from '../../../utils/txWait'

import { useAppSelector } from '../../../store/hooks'

import { Staking } from '../../../constants/tokenAddresses'
import useERC20Contract from '../../../hooks/useERC20Contract'
import useStakingContract from '../../../hooks/useStakingContract'
import useMatomoEcommerce from '../../../hooks/useMatomoEcommerce'

import Button from '../../Button'
import InputTokenValue from '../../InputTokenValue'

import * as S from './styles'

interface IModalStakeProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pid: number;
  decimals: string;
  stakingToken: string;
  productCategories: string | string[];
  symbol: string;
  stakeTransaction: string;
  setStakeTransaction: React.Dispatch<React.SetStateAction<string>>;
}

const ModalStakeAndWithdraw = ({
  setModalOpen,
  pid,
  decimals,
  stakingToken,
  productCategories,
  symbol,
  stakeTransaction,
  setStakeTransaction
}: IModalStakeProps) => {
  const [isAmount, setIsAmount] = React.useState<boolean>(false)

  const [balance, setBalance] = React.useState<BigNumber>(new BigNumber(0))
  const [multiplier, setMultiplier] = React.useState<number>(0)
  const [amountStake, setAmountStake] = React.useState<BigNumber>(
    new BigNumber(0)
  )

  const inputRef = React.useRef<HTMLInputElement>(null)

  const userWalletAddress = useAppSelector(state => state.userWalletAddress)
  const { trackProductPageView, trackBuying, trackCancelBuying, trackBought } =
    useMatomoEcommerce()
  const { trackEventFunction } = useMatomoEcommerce()

  const kacyStake = useStakingContract(Staking)
  const kacyToken = useERC20Contract(stakingToken)
  const productSKU = `${Staking}_${pid}`

  function handleKacyAmount(percentage: BigNumber) {
    const kacyAmount = percentage.mul(balance).div(new BigNumber(100))

    if (inputRef.current !== null) {
      // eslint-disable-next-line prettier/prettier
      inputRef.current.value = BNtoDecimal(kacyAmount, 18).replace(
        /\u00A0/g,
        ''
      )
    }

    trackEventFunction(
      'click-value-btn',
      `${percentage.toString()}`,
      `modal-${stakeTransaction}`
    )
    setAmountStake(kacyAmount)
    setIsAmount(true)
  }

  async function handleConfirm() {
    if (stakeTransaction === 'staking') {
      const toDelegate = await kacyStake.userInfo(pid, userWalletAddress)
      const delegate =
        toDelegate.delegatee === '0x0000000000000000000000000000000000000000'
          ? userWalletAddress
          : toDelegate.delegatee

      kacyStake.stake(pid, amountStake, delegate, stakeCallback())
    } else if (stakeTransaction === 'unstaking') {
      kacyStake.withdraw(pid, amountStake, withdrawCallback())
    }
  }

  async function getBalance() {
    if (stakeTransaction === 'staking') {
      const balanceKacy = await kacyToken.balance(userWalletAddress)
      setBalance(balanceKacy)
    } else if (stakeTransaction === 'unstaking') {
      if (userWalletAddress !== '') {
        const balance = await kacyStake.availableWithdraw(
          pid,
          userWalletAddress
        )
        setBalance(new BigNumber(balance.toFixed(0)))
      }
    }
  }

  React.useEffect(() => {
    if (!isAmount) {
      setMultiplier(0)
    }
    setIsAmount(false)
  }, [amountStake])

  React.useEffect(() => {
    getBalance()
  }, [])

  React.useEffect(() => {
    setMultiplier(0)
    handleKacyAmount(new BigNumber(0))
  }, [])

  React.useEffect(() => {
    if (stakeTransaction === 'staking') {
      const track = async () => {
        const tokenName = await kacyToken.name()
        trackProductPageView(productSKU, tokenName, productCategories)
      }
      track()
    }
  }, [stakingToken])

  const stakeCallback = React.useCallback((): TransactionCallback => {
    return async (error: MetamaskError, txHash: string) => {
      const tokenName = await kacyToken.name()
      trackBuying(
        productSKU,
        tokenName,
        Big(amountStake.toString()).div(Big(10).pow(18)).toNumber(),
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

  const withdrawCallback = React.useCallback((): TransactionCallback => {
    const productSKU = `${Staking}_${pid}`

    return async (error: MetamaskError, txHash: string) => {
      const tokenName = await kacyToken.name()
      trackBuying(
        productSKU,
        tokenName,
        -Big(amountStake.toString()).div(Big(10).pow(18)).toNumber(),
        productCategories
      )

      if (error) {
        trackCancelBuying()

        if (error.code === 4001) {
          ToastError(`Unstaking of ${symbol} cancelled`)
          return
        }

        ToastError(`Failed to unstake ${symbol}. Please try again later.`)
        return
      }

      trackBought(productSKU, 0, 0)
      ToastWarning(`Confirming unstake of ${symbol}...`)
      const txReceipt = await waitTransaction(txHash)

      if (txReceipt.status) {
        ToastSuccess(`Unstake of ${symbol} completed`)
        return
      }
    }
  }, [kacyToken])

  let title: string
  if (stakeTransaction === 'staking') {
    title = 'Stake in Pool'
  } else if (stakeTransaction === 'unstaking') {
    title = 'Withdraw'
  } else {
    title = 'Transaction not defined'
  }

  return (
    <>
      <S.Backdrop
        onClick={() => {
          setModalOpen(false)
          setStakeTransaction('')
        }}
      />
      <S.BorderGradient
        stakeInKacy={symbol === 'KACY'}
        unstaking={stakeTransaction}
      >
        <S.BackgroundBlack>
          <S.InterBackground>
            <span>{title}</span>
            <button
              type="button"
              onClick={() => {
                setModalOpen(false)
                setStakeTransaction('')
              }}
            >
              <img src="assets/utilities/close-icon.svg" alt="Close" />
            </button>
          </S.InterBackground>
          <S.Main>
            <S.Amount>
              <span>${symbol} Total</span>
              <InputTokenValue
                inputRef={inputRef}
                max={balance.toString(10)}
                decimals={new BigNumber(decimals)}
                setInputValue={setAmountStake}
              />
              <h5>Balance: {BNtoDecimal(balance, 18)}</h5>
            </S.Amount>
            <S.ButtonContainer>
              <button
                type="button"
                style={{
                  background: multiplier === 25 ? '#fff' : 'transparent',
                  color: multiplier === 25 ? '#000' : '#fff'
                }}
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
                type="button"
                style={{
                  background: multiplier === 50 ? '#fff' : 'transparent',
                  color: multiplier === 50 ? '#000' : '#fff'
                }}
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
                type="button"
                style={{
                  background: multiplier === 75 ? '#fff' : 'transparent',
                  color: multiplier === 75 ? '#000' : '#fff'
                }}
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
                type="button"
                style={{
                  background: multiplier === 100 ? '#fff' : 'transparent',
                  color: multiplier === 100 ? '#000' : '#fff'
                }}
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
              disabled={amountStake.toString() === '0'}
              onClick={() => {
                setModalOpen(false)
                handleConfirm()
                setAmountStake(new BigNumber(0))
                setStakeTransaction('')
              }}
            >
              Confirm
            </S.ConfirmButton>

            {symbol === 'KACY' && (
              <Button
                as="a"
                backgroundBlack
                fullWidth
                text="Get KACY"
                href={`https://app.pangolin.exchange/#/swap?outputCurrency=${Kacy}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setModalOpen(false)
                  setStakeTransaction('')
                }}
              />
            )}
            {symbol === 'aHYPE' && (
              <Link href="/explore/ahype" passHref>
                <Button backgroundBlack fullWidth text="Get aHYPE" />
              </Link>
            )}
            {symbol === 'K3C' && (
              <Link href="/explore/k3c" passHref>
                <Button backgroundBlack fullWidth text="Get K3C" />
              </Link>
            )}
            {symbol === 'LP-PNG' && (
              <Button
                as="a"
                backgroundBlack
                fullWidth
                text="Get LP-PNG"
                href={`https://app.pangolin.exchange/#/add/AVAX/${Kacy}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setModalOpen(false)
                  setStakeTransaction('')
                }}
              />
            )}
          </S.Main>
        </S.BackgroundBlack>
      </S.BorderGradient>
    </>
  )
}

export default ModalStakeAndWithdraw

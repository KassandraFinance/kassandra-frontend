import React from 'react'
import BigNumber from 'bn.js'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { ToastSuccess, ToastError, ToastWarning } from '../../Toastify/toast'

import { BNtoDecimal } from '../../../utils/numerals'
import { dateRequestUnstake } from '../../../utils/date'
import waitTransaction, {
  MetamaskError,
  TransactionCallback
} from '../../../utils/txWait'

import { Staking } from '../../../constants/tokenAddresses'
import useStakingContract from '../../../hooks/useStakingContract'

import * as S from './styles'
import Button from '../../Button'

interface IModalRequestUnstakeProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pid: number;
  votingMultiplier: string;
  yourStake: BigNumber;
  symbol: string;
  userWalletAddress: string;
  stakedUntil: (pid: number, walletAddress: string) => Promise<string>;
}

const ModalRequestUnstake = ({
  modalOpen,
  setModalOpen,
  pid,
  votingMultiplier,
  yourStake,
  symbol,
  userWalletAddress,
  stakedUntil
}: IModalRequestUnstakeProps) => {
  const [dateWithdraw, setDateWithdraw] = React.useState<number>(0)
  const kacyStake = useStakingContract(Staking)
  const { trackEvent } = useMatomo()

  function matomoEvent(action: string, name: string) {
    trackEvent({
      category: 'modal-staking',
      action,
      name
    })
  }

  async function getWithdrawDelay() {
    const unix_timestamp = await stakedUntil(pid, userWalletAddress)
    const date = new Date(Number(unix_timestamp) * 1000).getTime()

    setDateWithdraw(date)
  }

  const requestsUnstakeCallback = React.useCallback((): TransactionCallback => {
    return async (error: MetamaskError, txHash: string) => {
      if (error) {
        if (error.code === 4001) {
          ToastError(`Request for unstaking ${symbol} cancelled`)
          return
        }

        ToastError(
          `Failed to request unstaking of ${symbol}. Please try again later.`
        )
        return
      }

      matomoEvent('click-on-request-unstaking', `${symbol}`)
      ToastWarning(`Confirming request for unstaking of ${symbol}...`)
      const txReceipt = await waitTransaction(txHash)

      if (txReceipt.status) {
        ToastSuccess(`Request for unstaking of ${symbol} confirmed`)
        return
      }
    }
  }, [symbol])

  React.useEffect(() => {
    if (modalOpen) {
      getWithdrawDelay()
    }
  }, [modalOpen])

  return (
    <>
      <S.Backdrop onClick={() => setModalOpen(false)} />
      <S.ModalContainer>
        <S.Top>
          <S.Attention>
            <img src="assets/notification-status/warning.svg" alt="" />
            <p>Attention!</p>
          </S.Attention>
          <S.Close type="button" onClick={() => setModalOpen(false)}>
            <img src="assets/utilities/close-icon.svg" alt="Close" />
          </S.Close>
        </S.Top>
        <S.Content>
          <p>Withdrawal will be available on:</p>
          <span>{dateRequestUnstake(dateWithdraw)}</span>
          <p>
            During the withdrawal delay period you won’t receive any reward from
            the pool and your voting power will be reduced from:
          </p>
          <S.Values>
            <span>
              {BNtoDecimal(new BigNumber(votingMultiplier).mul(yourStake), 18)}
            </span>
            <span style={{ fontWeight: 300, margin: '0 8px' }}>to</span>
            <span>{BNtoDecimal(new BigNumber(yourStake), 18)}</span>
          </S.Values>
          <p>Do you want to proceed?</p>
          <S.ButtonContainer>
            <Button
              as="button"
              text="No"
              backgroundSecondary
              onClick={() => {
                setModalOpen(false)
              }}
            />
            <Button
              as="button"
              text="Yes"
              backgroundSecondary
              onClick={() => {
                kacyStake.unstake(pid, requestsUnstakeCallback())
                setModalOpen(false)
              }}
            />
          </S.ButtonContainer>
        </S.Content>
      </S.ModalContainer>
    </>
  )
}

export default ModalRequestUnstake

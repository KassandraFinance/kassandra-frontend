import React from 'react'
import BigNumber from 'bn.js'
import { ToastSuccess, ToastError, ToastWarning } from '../Toastify/toast'

import { BNtoDecimal } from '../../utils/numerals'
import { dateRequestUnstake } from '../../utils/date'
import waitTransaction, {
  MetamaskError,
  TransactionCallback
} from '../../utils/txWait'

import { Staking } from '../../constants/tokenAddresses'
import useStakingContract from '../../hooks/useStakingContract'

import * as S from './styles'

interface IModalRequestUnstakeProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pid: number;
  withdrawDelay: number;
  votingMultiplier: string;
  yourStake: BigNumber;
  symbol: string;
}

const ModalRequestUnstake = ({
  modalOpen,
  setModalOpen,
  pid,
  withdrawDelay,
  votingMultiplier,
  yourStake,
  symbol
}: IModalRequestUnstakeProps) => {
  const kacyStake = useStakingContract(Staking)

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

      ToastWarning(`Confirming request for unstaking of ${symbol}...`)
      const txReceipt = await waitTransaction(txHash)

      if (txReceipt.status) {
        ToastSuccess(`Request for unstaking of ${symbol} confirmed`)
        return
      }
    }
  }, [symbol])

  return (
    <>
      <S.Backdrop
        onClick={() => setModalOpen(false)}
        style={{ display: modalOpen ? 'block' : 'none' }}
      />
      <S.ModalContainer modalOpen={modalOpen}>
        <S.Top>
          <S.Attention>
            <img src="assets/IconNotification/warning.svg" alt="" />
            <p>Attention!</p>
          </S.Attention>
          <S.Close type="button" onClick={() => setModalOpen(false)}>
            <img src="assets/close.svg" alt="Close" />
          </S.Close>
        </S.Top>
        <S.Content>
          <p>Withdrawal will be available on:</p>
          <span>{dateRequestUnstake(withdrawDelay)}</span>
          <p>
            During the withdrawal delay period your voting power will be reduced
            from:
          </p>
          <S.Values>
            <span>
              {BNtoDecimal(
                new BigNumber(votingMultiplier).mul(yourStake),
                new BigNumber(18)
              )}
            </span>
            <span style={{ fontWeight: 300, margin: '0 8px' }}>to</span>
            <span>
              {BNtoDecimal(new BigNumber(yourStake), new BigNumber(18))}
            </span>
          </S.Values>
          <p>Do you want to proceed?</p>
          <S.ButtonContainer>
            <button type="button" onClick={() => setModalOpen(false)}>
              No
            </button>
            <button
              type="button"
              onClick={() => {
                kacyStake.unstake(pid, requestsUnstakeCallback())
                setModalOpen(false)
              }}
            >
              Yes
            </button>
          </S.ButtonContainer>
        </S.Content>
      </S.ModalContainer>
    </>
  )
}

export default ModalRequestUnstake

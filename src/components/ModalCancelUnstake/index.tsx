/* eslint-disable prettier/prettier */
import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { ToastSuccess, ToastError, ToastWarning } from '../Toastify/toast'
import Button from '../Button'

import waitTransaction, { MetamaskError, TransactionCallback } from '../../utils/txWait'

import { Staking } from '../../constants/tokenAddresses'

import useStakingContract from '../../hooks/useStakingContract'

import * as S from './styles'

interface IModalRequestUnstakeProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalStaking: React.Dispatch<React.SetStateAction<boolean>>;
  pid: number;
  staking: boolean;
  symbol: string;
}

const ModalCancelUnstake = ({
  modalOpen,
  setModalOpen,
  setIsModalStaking,
  pid,
  staking,
  symbol
}: IModalRequestUnstakeProps) => {
  const kacyStake = useStakingContract(Staking)
  const { trackEvent } = useMatomo()

  function matomoEvent(action: string, name: string) {
    trackEvent({
      category: 'modal-cancel-unstaking',
      action,
      name
    })
  }

  const cancelUnstakeCallback = React.useCallback((): TransactionCallback => {
    return async (error: MetamaskError, txHash: string) => {
      if (error) {
        if (error.code === 4001) {
          ToastError(`Request for cancelling unstaking ${symbol} cancelled`)
          return
        }

        ToastError(
          `Failed to cancel unstaking of ${symbol}. Please try again later.`
        )
        return
      }

      matomoEvent('click-on-cancel', `${symbol}`)
      ToastWarning(`Confirming cancelling of unstaking ${symbol}...`)
      const txReceipt = await waitTransaction(txHash)

      if (txReceipt.status) {
        ToastSuccess(`Cancelling of unstaking ${symbol} completed`)
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
            <img src="assets/IconNotification/error.svg" alt="" />
            <p>Warning!</p>
          </S.Attention>
          <S.Close type="button" onClick={() => setModalOpen(false)}>
            <img src="assets/close.svg" alt="Close" />
          </S.Close>
        </S.Top>
        <S.Content>
          {staking ? (
            <p>By staking you will reset your withdraw time.</p>
          ) : (
            <p>
              By cancelling the withdraw you will reset your withdrawal time.
            </p>
          )}
          <p>Do you want to proceed ?</p>
          <S.ButtonContainer>
            <Button
              as="button"
              text="No"
              backgroundSecondary
              onClick={() => setModalOpen(false)}
            />
            <Button
              as="button"
              text="Yes"
              backgroundSecondary
              onClick={() => {
                if (staking) {
                  setIsModalStaking(true)
                } else {
                  kacyStake.cancelUnstake(pid, cancelUnstakeCallback())
                }
                setModalOpen(false)
              }}
            />
          </S.ButtonContainer>
          <S.Link
            href="https://kassandrafoundation.medium.com/kassandra-dao-token-8bc046d55a00"
            target="_blank"
            rel="noopener noreferrer"
          >
            <a>
              Check more info about the $KACY token
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 11.5L11.5 8.5L8.5 5.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 8.5H11.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </S.Link>
        </S.Content>
      </S.ModalContainer>
    </>
  )
}

export default ModalCancelUnstake

/* eslint-disable prettier/prettier */
import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { ToastSuccess, ToastError, ToastWarning } from '../Toastify/toast'

import waitTransaction, { MetamaskError, TransactionCallback } from '../../utils/txWait'

import { Staking } from '../../constants/tokenAddresses'

import useStakingContract from '../../hooks/useStakingContract'

import {
  Backdrop,
  ModalContainer,
  Top,
  Attention,
  Close,
  ButtonContainer,
  Content
} from './styles'

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
      <Backdrop
        onClick={() => setModalOpen(false)}
        style={{ display: modalOpen ? 'block' : 'none' }}
      />
      <ModalContainer modalOpen={modalOpen}>
        <Top>
          <Attention>
            <img src="assets/IconNotification/error.svg" alt="" />
            <p>Warning!</p>
          </Attention>
          <Close type="button" onClick={() => setModalOpen(false)}>
            <img src="assets/close.svg" alt="Close" />
          </Close>
        </Top>
        <Content>
          {staking ? (
            <p>By staking you will reset your withdraw time.</p>
          ) : (
            <p>
              By canceling the withdraw you will reset your withdrawal time.
            </p>
          )}
          <p>Do you want to proceed ?</p>
          <ButtonContainer>
            <button type="button" onClick={() => setModalOpen(false)}>
              No
            </button>
            <button
              type="button"
              onClick={() => {
                if (staking) {
                  setIsModalStaking(true)
                } else {
                  kacyStake.cancelUnstake(pid, cancelUnstakeCallback())
                }
                setModalOpen(false)
              }}
            >
              Yes
            </button>
          </ButtonContainer>
        </Content>
      </ModalContainer>
    </>
  )
}

export default ModalCancelUnstake

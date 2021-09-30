import React from 'react'

import { confirmUnstake } from '../../utils/confirmTransactions'

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
  pid: number;
  withdrawDelay: number
  votingMultiplier: string
}

const ModalRequestUnstake = ({ 
  modalOpen, 
  setModalOpen, 
  pid,
  withdrawDelay,
  votingMultiplier
}: IModalRequestUnstakeProps) => {
  const kacyStake = useStakingContract(Staking)

  let now = new Date().getTime();

  const day = new Date(withdrawDelay + now).getDate()
  const month = new Date(withdrawDelay + now).getMonth()
  const year = new Date(withdrawDelay + now).getFullYear()

  const date = `${day} / ${month} / ${year}`

  return (
    <>
      <Backdrop onClick={() => setModalOpen(false)} style={{display: modalOpen ? 'block' : 'none'}} />
      <ModalContainer modalOpen={modalOpen}>
        <Top>
          <Attention>
            <img src="assets/IconNotification/warning.svg" alt="" />
            <p>Attention!</p>
          </Attention>
          <Close type="button" onClick={() => setModalOpen(false)} ><img src="assets/close.svg" alt="" /></Close>
        </Top>
        <Content>
          <p>Withdrawal will be available on:</p>
          <span>{date}</span>
          <p>During the withdrawal delay period your voting power will be reduced from:</p>
          <span>{votingMultiplier}x to 1x</span>
          <p>Do you want to proceed?</p>
          <ButtonContainer>
            <button 
              type="button" 
              onClick={() => setModalOpen(false)}
            >
              No
            </button>
            <button 
              type="button" 
              onClick={() => {
                kacyStake.unstake(pid, confirmUnstake, "Pending unstake")
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

export default ModalRequestUnstake
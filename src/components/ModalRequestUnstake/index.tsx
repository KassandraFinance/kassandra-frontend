import React from 'react'
import BigNumber from 'bn.js'

import { BNtoDecimal, wei } from '../../utils/numerals'
import { dateRequestUnstake } from '../../utils/date'
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
  yourStake: BigNumber
}

const ModalRequestUnstake = ({ 
  modalOpen, 
  setModalOpen, 
  pid,
  withdrawDelay,
  votingMultiplier,
  yourStake
}: IModalRequestUnstakeProps) => {

  const kacyStake = useStakingContract(Staking)

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
          <span>{dateRequestUnstake(withdrawDelay)}</span>
          <p>During the withdrawal delay period your voting power will be reduced from:</p>
          <span>
            {BNtoDecimal(new BigNumber(votingMultiplier).mul(yourStake), new BigNumber(18))}
              {' '} to {' '}
            {BNtoDecimal(new BigNumber(yourStake), new BigNumber(18))}
          </span>
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
import React from 'react'

import { confirmCancelUnstake } from '../../utils/confirmTransactions'

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
}

const ModalCancelUnstake = ({ 
  modalOpen, 
  setModalOpen, 
  setIsModalStaking,
  pid,
  staking
 }: IModalRequestUnstakeProps) => {
  const kacyStake = useStakingContract(Staking)

  return (
    <>
      <Backdrop onClick={() => setModalOpen(false)} style={{display: modalOpen ? 'block' : 'none'}} />
      <ModalContainer modalOpen={modalOpen}>
        <Top>
          <Attention>
            <img src="assets/IconNotification/error.svg" alt="" />
            <p>Warning!</p>
          </Attention>
          <Close type="button" onClick={() => setModalOpen(false)} ><img src="assets/close.svg" alt="" /></Close>
        </Top>
        <Content>
          {staking ? 
            <p>By staking you will reset your withdraw time.</p>
            :
            <p>By canceling the withdraw you will reset your withdrawal time.</p>
          }
          <p>Do you want to proceed ?</p>
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
                if (staking) {
                  setIsModalStaking(true)
                } else {
                  kacyStake.cancelUnstake(pid, confirmCancelUnstake, "Pending cancel withdraw")
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
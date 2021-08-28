import React from 'react'

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
  modalOpen: boolean
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  pid: number
}

const ModalRequestUnstake = ({ modalOpen, setModalOpen, pid }: IModalRequestUnstakeProps) => {
  const { unstake } = useStakingContract()

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
          <span>nn / nn / nnnn</span>
          <p>During the withdrawal delay period your voting power will be reduced from:</p>
          <span>X to Y</span>
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
                unstake(pid)
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
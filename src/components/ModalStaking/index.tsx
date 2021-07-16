import React from 'react'

import { 
  Backdrop,
  BorderGradient,
  BackgroundBlack,
  InterBackground,
  Main,
  Amount,
  Line,
  ButtonContainer,
  ConfirmButton,
  GetKacyButton
 } from './styles'

 interface IModalStakingProps {
  modalOpen: boolean
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  otherStakingPools: boolean
}

const ModalStaking = ({ 
  modalOpen, 
  setModalOpen, 
  otherStakingPools }: IModalStakingProps) => {

  function handleCloseModal() {
    setModalOpen(false)
  }

  return (
    <>
      <Backdrop onClick={handleCloseModal} style={{display: modalOpen ? 'block' : 'none'}} />
      <BorderGradient 
        modalOpen={modalOpen} 
        otherStakingPools={otherStakingPools}
      >
        <BackgroundBlack>
          <InterBackground otherStakingPools={otherStakingPools}>
            <span>Stake in Pool</span>
            <button type="button" onClick={() => setModalOpen(false)}><img src="assets/close.svg" alt="" /> </button>
          </InterBackground>
          <Main>
            <Amount>
              <span>$KACY Amount</span>
              <input type="number" placeholder="0" />
              <Line />
              <h5>Balance: 1.3254876</h5>
            </Amount>
            <ButtonContainer>
              <button type="button">25%</button>
              <button type="button">50%</button>
              <button type="button">75%</button>
              <button type="button">max</button>
            </ButtonContainer>
            <ConfirmButton 
              type="button" 
              otherStakingPools={otherStakingPools}
              onClick={() => setModalOpen(false)}
            >
              Confirm
            </ConfirmButton>
            <GetKacyButton type="button" onClick={() => setModalOpen(false)}>Get KACY</GetKacyButton>
          </Main>
        </BackgroundBlack>
      </BorderGradient>
    </>
  )
}

export default ModalStaking
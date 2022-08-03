import styled from 'styled-components'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.7);

  z-index: 20;
`

interface IModalCardOperationsProps {
  modalOpen: boolean;
}

// prettier-ignore
export const CardOperationsContainerModal = styled.div<IModalCardOperationsProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: ${props => (props.modalOpen ? 'block' : 'none')};
  width: 41.1rem;
  height: auto;

  background-color: #1F2937;
  border: 0.2rem solid #FFFFFF40;
  border-radius: 1rem;

  z-index: 20;

  @media (max-width: 550px) {
    width: 35rem;
  }

  @media (max-width: 360px) {
    width: 29rem;
  }
`

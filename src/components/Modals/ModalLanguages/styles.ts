import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Backdrop = styled.div`
  background-color: transparent;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  z-index: 20;
`

interface IModalContainerProps {
  modalOpen: boolean
}

// prettier-ignore
export const ModalContainer = styled.div<IModalContainerProps>`
  display: ${props => (props.modalOpen ? 'block' : 'none')};

  background-color: #372B3B;
  border: 0.1rem solid rgba(255, 255, 255, 0.08);
  border-radius: 0.4rem;


  position: fixed;
  bottom: 7.6rem;
  right: 1.6rem;

  z-index: 20;
  button {
    background-color: transparent;
    border: none;
    color: ${theme.colors.snow};
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.8rem;
    outline: none;
    img {
      margin-right: 0.4rem !important;
      width: 1.8rem;
      padding: 0.2rem;
    }
  }
`

import styled from 'styled-components'
import theme from '../../styles/theme'

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
  modalOpen: boolean;
}

// eslint-disable-next-line prettier/prettier
export const ModalContainer = styled.div<IModalContainerProps>`
  display: ${props => (props.modalOpen ? 'block' : 'none')};

  background-color: #372B3B;
  /* background-color: ${theme.colors.lightGray} */
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;


  position: fixed;
  bottom: 76px;
  right: 16px;

  z-index: 20;
  a {
    color: ${theme.colors.snow};
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 4px 8px;
    img {
      margin-right: 4px !important;
      width: 18px;
      padding: 2px;
    }
  }
`

import styled from 'styled-components'
import theme from '../../styles/theme'

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.7);

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

  background-color: rgba(31, 31, 31, 0.8);
  border: 1.5px solid ${theme.colors.magenta};
  border-radius: 10px;

  max-width: 100%;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 20;
`

export const Top = styled.div`
  background-color: rgba(20, 20, 20, 0.9);

  border-bottom: 1px solid ${theme.colors.magenta};
  border-radius: 10px 10px 0 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px;

  p {
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.bold};
  }
`

export const Close = styled.button`
  background-color: transparent;
  border: none;

  color: #fff;
  font-size: ${theme.font.sizes.font20};
  padding: 2px;

  cursor: pointer;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 24px;
  p {
    text-align: center;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};

    margin-bottom: 16px;
  }

  span {
    font-size: ${theme.font.sizes.font20};
    font-weight: ${theme.font.weight.bold};

    margin-bottom: 12px;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 12px;

  button,
  a {
    background-color: transparent;
    border: none;
    color: ${theme.colors.cyan};
    font-size: ${theme.font.sizes.font14};
    text-decoration: none;

    margin-right: 20px;

    cursor: pointer;
    svg {
      margin-left: 8px;
      margin-bottom: -2px;
    }
  }
`

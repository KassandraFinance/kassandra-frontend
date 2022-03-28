import styled from 'styled-components'
import theme from '../../styles/theme'

import * as ButtonStyle from '../Button/styles'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.7);
`

interface IModalContainerProps {
  modalOpen: boolean;
}

// eslint-disable-next-line prettier/prettier
export const ModalContainer =
  styled.div <
  IModalContainerProps >
  `
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;

  display: ${props => (props.modalOpen ? 'block' : 'none')};
  max-width: 100%;

  background-color: #1F2937;
  border: 1.5px solid #FFFFFF40;
  border-radius: 10px;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;

  background-color: #1f1f1fc8;
  border-bottom: 1px solid #ffffff40;
  border-radius: 10px 10px 0 0;

  p {
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.font18};

    @media (max-width: 430px) {
      font-size: ${theme.font.sizes.font16};
    }
  }
`

export const Close = styled.button`
  padding: 2px;

  color: #fff;
  font-size: ${theme.font.sizes.font20};

  background-color: transparent;
  border: none;

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

    @media (max-width: 430px) {
      font-size: 14px;
    }
    @media (max-width: 390px) {
      font-size: 12px;
    }
  }

  span {
    margin-bottom: 12px;

    font-size: ${theme.font.sizes.font20};
    font-weight: ${theme.font.weight.bold};
  }

  ${ButtonStyle.Wrapper} {
    margin-top: 24px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button,
  a {
    color: ${theme.colors.cyan};
    font-size: ${theme.font.sizes.font14};
    text-decoration: none;

    background-color: transparent;
    border: none;

    cursor: pointer;

    svg {
      margin-left: 8px;
      margin-bottom: -2px;
    }
  }
`

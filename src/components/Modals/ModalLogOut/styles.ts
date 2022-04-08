import styled from 'styled-components'
import theme from '../../../styles/theme'

import * as ButtonStyle from '../../Button/styles'

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

// prettier-ignore
export const ModalContainer = styled.div<IModalContainerProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: ${props => (props.modalOpen ? 'block' : 'none')};
  max-width: 100%;

  background-color: #1F2937;
  border: 0.15rem solid #FFFFFF40;
  border-radius: 1rem;

  z-index: 20;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;

  background-color: #1f1f1fc8;
  border-bottom: 0.1rem solid #ffffff40;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  p {
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.font18};

    @media (max-width: 430px) {
      font-size: ${theme.font.sizes.font16};
    }
  }
`

export const Close = styled.button`
  padding: 0.2rem;

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
  padding: 2.4rem;

  p {
    margin-bottom: 1.6rem;

    text-align: center;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};

    @media (max-width: 430px) {
      font-size: 1.4rem;
    }

    @media (max-width: 390px) {
      font-size: 1.2rem;
    }
  }

  span {
    margin-bottom: 1.2rem;

    font-size: ${theme.font.sizes.font20};
    font-weight: ${theme.font.weight.bold};
  }

  ${ButtonStyle.Wrapper} {
    margin-top: 2.4rem;
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
      margin-left: 0.8rem;
      margin-bottom: -0.2rem;
    }
  }
`

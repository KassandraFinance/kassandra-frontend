import styled from 'styled-components'
import theme from '../../styles/theme'

import * as ButtonStyles from '../Button/styles'

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
  border: 1.5px solid #FFFFFF40;
  border-radius: 10px;

  width: 430px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 21;
  @media (max-width: 768px) {
    width: 328px;
  }
`

export const Top = styled.div`
  background-color: #1f1f1fb8;
  border-bottom: 1px solid #ffffff40;
  border-radius: 10px 10px 0 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
  @media (max-width: 768px) {
    padding: 18px;
  }
`

export const Attention = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
  }

  p {
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.bold};
    margin-left: 16px;
    letter-spacing: 0.8px;
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
  background: #1f2937;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 24px 0;
  @media (max-width: 768px) {
    padding: 16px;
  }
  p {
    text-align: center;
    font-size: ${theme.font.sizes.font16};
    line-height: 150%;
    font-weight: ${theme.font.weight.light};
    max-width: 350px;
    margin: 0 0 16px;
    letter-spacing: 0.8px;
    @media (max-width: 768px) {
      font-size: ${theme.font.sizes.font14};
      line-height: 130%;
    }
  }

  span {
    font-size: ${theme.font.sizes.font20};
    font-weight: ${theme.font.weight.bold};

    margin-bottom: 12px;
  }
`

export const Values = styled.div`
  display: flex;
`

export const ButtonContainer = styled.div`
  margin-top: 8px;

  ${ButtonStyles.Wrapper} {
    font-size: ${theme.font.sizes.font18};
    width: 183px;
    height: 44px;
    &:first-child {
      margin-right: 12px;
    }
    @media (max-width: 768px) {
      width: 138px;
  }
`

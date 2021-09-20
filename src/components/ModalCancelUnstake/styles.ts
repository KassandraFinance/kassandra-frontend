import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.4);

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  z-index: 9;
`

interface IModalContainerProps {
  modalOpen: boolean
}

export const ModalContainer = styled.div<IModalContainerProps>`
  display: ${(props) => props.modalOpen ? "block" : "none"};

  border: 2px solid #E8372C;
  background-color: #000;

  width: 500px;
  height: 280px;


  position: fixed;
  top: 50%;
  left: 50%;

  margin-left: -250px;
  margin-top: -140px;

  z-index: 10;
`

export const Top = styled.div`
  border-bottom: 2px solid #E8372C;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px;

`

export const Attention = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
  }

  p {
    font-size: ${theme.font.sizes.font24};
    margin-left: 16px;
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
  align-items: center;

  /* height: 280px; */

  padding: 24px 0;
  p {
    text-align: center;
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.light};
    max-width: 360px;
    margin-bottom: 16px;
  }

  span {
    font-size: ${theme.font.sizes.font20};
    margin-bottom: 12px;
  }
`

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 16px;
    button {
      background-color: transparent;
      border: 1px solid ${theme.colors.cyan};
      border-radius: ${theme.border.radius};
      color: #fff;
      font-size: ${theme.font.sizes.font18};

      width: 136px;
      height: 40px;
      margin: 0 8px;
      transition-duration: 300ms;
      cursor: pointer;
      &:hover {
        background-color: ${theme.colors.cyan};
        color: ${theme.colors.darkPurple}
;
      }
    }
  `}
`

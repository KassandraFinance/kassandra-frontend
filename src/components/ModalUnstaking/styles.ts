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
interface IModalProps {
  modalOpen: boolean
}

export const Modal = styled.div<IModalProps>`
  display: ${(props) => props.modalOpen ? "block" : "none"};

  /* background: url('assets/blur1.svg'); */

  background-color: rgba(31, 31, 31, 0.95);
  border-radius: ${theme.border.radius};
  border: 1px solid rgba(255, 255, 255, 0.4);

  width: 300px;
  max-height: 100%;

  position: fixed;
  top: 50%;
  left: 50%;

  margin-left: -150px;
  margin-top: -165px;

  z-index: 10;
`

export const InterBackground = styled.div`
  background: rgb(20, 20, 20);
  border-radius: 6px 6px 0 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 72px;
  padding: 0 16px;

  span {
    font-size: ${theme.font.sizes.font18};
    line-height: 18px;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 2px;
    cursor: pointer;
  }
`

export const Main = styled.div`
  padding: 20px;
`

export const Amount = styled.div`
  background: #565656;
  border-radius: 10px;
  text-align: right;

  padding: 16px;
  position: relative;

  span {
    font-size: 14px;
    display: block;
    margin: 0 0 -4px;
  }

  h5 {
    font-weight: ${theme.font.weight.normal};

    font-size: ${theme.font.sizes.font12};
    line-height: 12px;
  }

  input {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: ${theme.font.sizes.font20};

    text-align: right;
    max-width: 100%;

    outline: none;

    @media (max-width: 380px) {
      font-size: 22px;
    }
    @media (max-width: 350px) {
      font-size: ${theme.font.sizes.font20};
    }

    &::placeholder {
      color: #fff;
    }

    &[type=number]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    &[type=number] {
      -moz-appearance: textfield;
      appearance: textfield;
    }
  }
`


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin: 20px 0 24px;
  button {
    border: 1px solid ${theme.colors.snow};
    border-radius: 3px;
    background: transparent;
    color: #fff;
    line-height: 12px;
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.normal};
    text-transform: uppercase;

    width: 56px;
    padding: 3px;

    cursor: pointer;
    transition: 100ms;
    &:hover {
      background: ${theme.colors.snow};
      color: #000;
    }
    &:active{
      background: ${theme.colors.snow};
      color: #000;
    }
  }
`


export const ConfirmButton = styled.button`
  border-radius: ${theme.border.radius};
  font-size: ${theme.font.sizes.font16};
  line-height: 14px;
  font-weight: ${theme.font.weight.light};


  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 46px;
  cursor: pointer;

  border: none;
  background: ${theme.colors.blue};
  color: ${theme.colors.snow};

  margin-bottom: 16px;
  transition: 200ms;
  &:hover:enabled {
    background: ${theme.colors.darkBlue};
  }
  &:disabled {
    cursor: not-allowed;
    background: #4F4F4F;
    color: #BDBDBD;
  }
`

export const GetKacy = styled.button`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.font16};
    line-height: 14px;
    font-weight: 400;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 40px;
    cursor: pointer;

    background: transparent;
    border: 1px solid ${theme.colors.cyan};

    color: #fff;
    transition: 200ms;
    &:hover {
      background: ${theme.colors.cyan};
      color: #000;
    }
  `}
`

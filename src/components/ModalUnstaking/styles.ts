import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

export const Backdrop = styled.div`
  ${({ theme }) => css`
    background-color: rgba(0, 0, 0, 0.4);

    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
    z-index: 9;
  `}
`

interface IBorderGradientProps {
  modalOpen: boolean
  otherStakingPools: boolean
}

export const BorderGradient = styled.div<IBorderGradientProps>`

    display: ${(props) => props.modalOpen ? "block" : "none"};

    background: ${(props) => props.otherStakingPools ?
    "linear-gradient(0deg, ${theme.colors.cyan} -0.02%, #E843C4 99.99%)"
    :
    "linear-gradient(0deg, #FFBF00 -0.02%, #E843C4 99.99%)"};
    border-radius: 6px;

    width: 320px;
    max-height: 100%;
    padding: 4px;

    position: fixed;
    top: 50%;
    left: 50%;

    margin-left: -160px;
    margin-top: -165px;

    z-index: 10;

`

export const BackgroundBlack = styled.div`
  background: #000;
  color: white;
  width: 100%;
  height: 100%;
`

interface IInterBackgroundProps {
  otherStakingPools: boolean
}

export const InterBackground = styled.div<IInterBackgroundProps>`
  background: ${(props) => props.otherStakingPools ?
    "linear-gradient(0deg, rgba(38, 219, 219, 0.2) -0.02%, rgba(232, 67, 196, 0.2) 99.99%)"
    :
    "linear-gradient(0deg, rgba(255, 191, 0, 0.2) -0.02%, rgba(232, 67, 196, 0.2) 99.99%)"};
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 66px;
  padding: 0 16px;

  span {
    font-size: 18px;
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
  padding: 24px;
`

export const Amount = styled.div`
  text-align: right;
  position: relative;

  span {
    font-size: 14px;
    display: block;
  }

  h5 {
    font-weight: 400;
    font-size: ${theme.font.sizes.font12};
    line-height: 12px;
    margin-top: 6px;
  }

  input {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: ${theme.font.sizes.font20};

    text-align: right;
    max-width: 100%;
    margin: 8px 0;

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

export const Line = styled.div`
  ${(props) => css`
    content: '';
    display: block;
    width: 190px;
    height: 2px;
    background-color: ${props.theme.colors.cyan};
    box-shadow: 1px 1px 5px ${props.theme.colors.cyan};
    margin-left: auto;
    @media (max-width: 504px) {
      width: 160px;
    }
    @media (max-width: 430px) {
      width: 130px;
    }
  `}

`

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    margin: 36px 0 24px;
    button {
      border: 1px solid ${theme.colors.cyan};
      border-radius: 16px;
      background: transparent;
      color: #fff;
      font-size: ${theme.font.sizes.font12};
      line-height: 12px;
      font-weight: 400;

      width: 63px;
      padding: 3px;

      cursor: pointer;
      transition: 100ms;
      &:hover {
        background: ${theme.colors.cyan};
        color: #000;
      }
    }
  `}
`

interface IConfirmButtonProps {
  otherStakingPools: boolean
}

export const ConfirmButton = styled.button<IConfirmButtonProps>`
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

  background: ${(props) => props.otherStakingPools ?
    "linear-gradient(87.48deg, #E843C4 -47.54%, #26DBDB 154.78%)"
    :
    "linear-gradient(87.48deg, #FFBF00 -70.27%, #E843C4 154.78%)"};
  border: none;
  color: ${(props) => props.otherStakingPools ? "#211426" : "#211426"};

  margin-bottom: 8px;
  transition: 200ms;
  &:hover:enabled {
    background: ${(props) => props.otherStakingPools ? "#E843C4" : "#FFBF00"};
  }
  &:disabled {
    cursor: not-allowed;
    background: #4F4F4F;
    color: #bdbdbd;
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

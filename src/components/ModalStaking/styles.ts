import styled from 'styled-components'
import theme from '../../styles/theme'

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.6);

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  z-index: 9;
`

interface IBorderGradientProps {
  modalOpen: boolean;
  stakeInKacy: boolean;
}

// eslint-disable-next-line prettier/prettier
export const BorderGradient = styled.div<IBorderGradientProps>`
  display: ${props => (props.modalOpen ? 'block' : 'none')};
  background: ${props =>
    props.stakeInKacy
      ? 'linear-gradient(-45deg, #E843C4 0%, #F79640 100%)'
      : `linear-gradient(-45deg, ${theme.colors.blue} 0%, ${theme.colors.cyan} 100%)`};
  border-radius: ${theme.border.radius};
  
  width: 300px;
  max-height: 100%;
  padding: 1px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 20;
`

export const BackgroundBlack = styled.div`
  background-color: #1f2937;
  border-radius: ${theme.border.radius};
  width: 100%;
  height: 100%;
`

export const InterBackground = styled.div`
  background-color: rgba(31, 31, 31, 0.72);
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
  background-color: rgba(31, 31, 31, 0.72);
  border-radius: 10px;

  text-align: right;

  padding: 16px;
  position: relative;

  span {
    color: ${theme.colors.amber};
    font-size: 14px;
    display: block;
    margin: 0 0 -4px;
  }

  h5 {
    color: #bdbdbd;
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.sizes.font12};
    line-height: 12px;
  }

  input {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: ${theme.font.sizes.font20};
    font-weight: 500;
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

    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    &[type='number'] {
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
    &:active {
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
    background: #4f4f4f;
    color: #bdbdbd;
  }
`

export const GetKacy = styled.a`
  border-radius: ${theme.border.radius};
  font-size: ${theme.font.sizes.font16};
  line-height: 14px;
  font-weight: ${theme.font.weight.normal};

  text-decoration: none;

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
`

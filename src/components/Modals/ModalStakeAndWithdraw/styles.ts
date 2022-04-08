import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.6);

  z-index: 9;
`

interface IBorderGradientProps {
  stakeInKacy: boolean;
  unstaking: string;
}

// prettier-ignore
export const BorderGradient = styled.div<IBorderGradientProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 30rem;
  max-height: 100%;
  padding: 0.1rem;

  background: ${props =>
    props.unstaking === 'unstaking'
      ? 'rgba(255, 255, 255, 0.4)'
      : props.stakeInKacy
      ? 'linear-gradient(-45deg, #E843C4 0%, #F79640 100%)'
      : `linear-gradient(-45deg, ${theme.colors.blue} 0%, ${theme.colors.cyan} 100%)`};
  border-radius: ${theme.border.radius};

  z-index: 20;
`

export const BackgroundBlack = styled.div`
  width: 100%;
  height: 100%;

  background-color: #1f2937;
  border-radius: ${theme.border.radius};
`

export const InterBackground = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7.2rem;
  padding: 0 1.6rem;

  background-color: rgba(31, 31, 31, 0.72);
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.4);

  span {
    font-size: ${theme.font.sizes.font18};
    line-height: 1.8rem;
  }

  button {
    padding: 0.2rem;

    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`

export const Main = styled.div`
  padding: 2rem;
`

export const Amount = styled.div`
  position: relative;

  padding: 1.6rem;

  text-align: right;

  background-color: rgba(31, 31, 31, 0.72);
  border-radius: 1rem;

  span {
    display: block;
    margin: 0 0 -0.4rem;

    color: ${theme.colors.amber};
    font-size: 1.4rem;
  }

  h5 {
    color: #bdbdbd;
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.sizes.font12};
    line-height: 1.2rem;
  }

  input {
    max-width: 100%;

    color: #fff;
    font-size: ${theme.font.sizes.font20};
    font-weight: 500;
    text-align: right;

    background-color: transparent;
    border: none;

    outline: none;

    @media (max-width: 380px) {
      font-size: 2.2rem;
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
  margin: 2rem 0 2.4rem;

  button {
    width: 5.6rem;
    padding: 0.3rem;

    color: #fff;
    line-height: 1.2rem;
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.normal};
    text-transform: uppercase;

    border: 0.1rem solid ${theme.colors.snow};
    border-radius: 0.3rem;
    background: transparent;

    cursor: pointer;
    transition: 100ms;

    &:hover {
      color: #000;

      background: ${theme.colors.snow};
    }
    &:active {
      color: #000;

      background: ${theme.colors.snow};
    }
  }
`

export const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.6rem;
  margin-bottom: 1.6rem;

  font-size: ${theme.font.sizes.font16};
  line-height: 1.4rem;
  font-weight: ${theme.font.weight.light};

  background: ${theme.colors.blue};
  border: none;
  border-radius: ${theme.border.radius};
  color: ${theme.colors.snow};

  cursor: pointer;
  transition: 200ms;

  &:hover:enabled {
    background: ${theme.colors.darkBlue};
  }

  &:disabled {
    color: #bdbdbd;

    background: #4f4f4f;

    cursor: not-allowed;
  }
`

export const GetKacy = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;

  color: #fff;
  font-size: ${theme.font.sizes.font16};
  line-height: 1.4rem;
  font-weight: ${theme.font.weight.normal};
  text-decoration: none;

  background: transparent;
  border: 0.1rem solid ${theme.colors.cyan};
  border-radius: ${theme.border.radius};

  cursor: pointer;
  transition: 200ms;

  &:hover {
    color: #000;

    background: ${theme.colors.cyan};
  }
`

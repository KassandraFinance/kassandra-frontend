/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components'
import theme from '../../../styles/theme'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.7);

  z-index: 20;
`

interface IBorderGradientProps {
  modalOpen: boolean;
}

// prettier-ignore
export const BorderGradient = styled.div<IBorderGradientProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: ${props => (props.modalOpen ? 'block' : 'none')};
  padding: 0.2rem;

  background: linear-gradient(0deg, #FFBF00 -0.02%, #E843C4 99.99%) ;
  border-radius: ${theme.border.radius};

  z-index: 21;

  @media(max-width: 440px) {
    width: 38rem;
  }

  @media(max-width: 380px) {
    width: 36rem;
  }

  @media(max-width: 360px) {
    width: 32rem;
  }

  @media(max-width: 320px) {
    width: 30rem;
  }
`

export const BackgroundBlack = styled.div`
  width: 100%;
  height: 100%;

  color: white;

  background: #000;
`

export const InterBackground = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6.8rem;
  padding: 2.4rem;

  background: black;
  border: 0.1rem solid #e843c4;

  @media (max-width: 520px) {
    padding: 1.2rem;
  }

  button {
    width: 2.4rem;
    margin-top: -0.2rem;

    background-color: transparent;
    border: none;

    cursor: pointer;

    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`

export const ModalText = styled.h1`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: ${theme.font.weight.normal};

    @media (max-width: 520px) {
      font-size: ${theme.font.sizes.font14};
    }
  `}
`

export const WrapperIcons = styled.h1`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: space-between;
    margin: 1.6rem;

    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.normal};

    span {
      margin-top: 0.56rem;
    }

    @media (max-width: 520px) {
      margin: 0;
      margin-top: 1.5rem;
      max-width: 80%

      font-size:${theme.font.sizes.font12};
      font-weight: ${theme.font.weight.light};
    }
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.6rem;
  margin: 0 0.8rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 5.6rem;
    height: 5.6rem;
    padding: 0.2rem;

    cursor: pointer;
  }

  @media (max-width: 520px) {
    margin: 0;
    width: 100%;
    height: 100%;
    padding: 1.2rem;
  }
`

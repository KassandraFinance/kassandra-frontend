import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.6);

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  z-index: 20;
`

interface IBorderGradientProps {
  modalOpen: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Container = styled.div<IBorderGradientProps>`
  display: ${props => (props.modalOpen ? 'block' : 'none')};

  border: 2px solid #FFFFFF40;
  border-radius: 10px;

  width: 411px;
  height: auto;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 21;

  @media(max-width: 440px){
    width: 380px;
  }
  @media(max-width: 380px){
    width: 360px;
  }
  @media(max-width: 360px){
    width: 320px;
  }
  @media(max-width: 320px){
    width: 300px;
  }
`

export const BackgroundBlack = styled.div`
  /* background: #000; */
  border-radius: 10px;

  color: white;
  width: 100%;
  height: 100%;
`

export const ModalTitle = styled.div`
  background: rgba(31, 31, 31, 0.96);
  border-radius: 6px 6px 0 0;

  border-bottom: 1px solid #ffffff40;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 6.8rem;
  padding: 2.4rem;

  @media (max-width: 520px) {
    padding: 1.2rem;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 2.4rem;
    margin-top: -0.2rem;
    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
  span {
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.bold};

    letter-spacing: 0.08rem;

    @media (max-width: 520px) {
      font-size: ${theme.font.sizes.font14};
    }
  }
`

export const WrapperIconsBackGround = styled.button`
  display: flex;
  align-items: center;
  background: #1f1f1fb8;
  border-radius: 1rem;
  border: none;

  padding: 0.1rem;

  &:last-child {
    margin-top: 16px;
  }

  &.disabled {
    filter: grayscale(1);
  }

  &:hover,
  &:focus {
    background: linear-gradient(0deg, #ffbf00 -0.02%, #e843c4 99.99%);
  }

  &:focus {
    outline: none;
  }
`

export const WrapperIcons = styled.div`
  background: #1f1f1f;
  display: flex;
  align-items: center;
  z-index: 2;
  border-radius: 1rem;
  border: none;
  width: 40rem;
  height: 7rem;
  padding: 1.8rem 2.4rem;
  cursor: pointer;
  position: relative;
  img {
    display: flex;
    margin-right: 2.4rem;
    width: 4rem;
    height: 3.56rem;
    padding: 0.2rem;
  }
  span {
    color: ${theme.colors.snow};
    font-size: ${theme.font.sizes.font16};
    letter-spacing: 0.08rem;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0 0 6px 6px;
  max-width: 100%;
  z-index: -2;
  padding: ${theme.spacings.space24};
  background: rgba(31, 41, 55, 0.96);

  @media (max-width: 520px) {
    margin: 0;
    width: 100%;
    height: 100%;
    padding: 1.2rem;
  }
`

export const Tooltip = styled.span`
  a {
    color: white;
    text-decoration: none;
  }
`

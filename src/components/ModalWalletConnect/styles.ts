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
  /* background: #1F2937; */

  border: 2px solid rgba(255, 255, 255, 0.25);;
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

export const ModalText = styled.div`
  background: rgba(31, 31, 31, 0.96);
  border-radius: 6px 6px 0 0;

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

  font-size: 1.8rem;
  font-weight: ${theme.font.weight.bold};

  letter-spacing: 0.09rem;

  @media (max-width: 520px) {
    font-size: ${theme.font.sizes.font14};
  }
`

export const WrapperIconsBackGround = styled.button`
  display: flex;
  align-items: center;
  background: #1f1f1f;
  border-radius: 1rem;
  border: none;

  padding: 0.1rem;
  
  &:last-child {
    margin-top: 16px;
  }
  
  &.disabled {
    filter: grayscale(1);
  }

  &:hover {
    background: linear-gradient(-45deg, #e843c4 0%, #f79640 100%);
  }
`

export const WrapperIcons = styled.div`
  ${({ theme }) => css`
    background: #1F1F1F;
    display: flex;
    align-items: center;
    z-index: 1;
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
    font-size: 1.6rem;
    font-weight: ${theme.font.weight.normal};
  }
    //create gradient linear border with 10px border radius on hover


    /* &:before {
      content: '';
      position: absolute;
      border-radius: inherit;
      top: 1px;
      left: 1px;
      right: 1px;
      bottom: 1px;
      border: 1px solid;
      background: linear-gradient(-45deg, #E843C4 0%, #F79640 100%);

      background-size: 300% 100%;
      transition: all .4s ease-in-out;
      display: none;
    }
    &:hover:before {
      display: block;
      border-radius: inherit;
    } */
  }
  `}
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

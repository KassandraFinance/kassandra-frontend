/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components'
import theme from '../../styles/theme'
import media from 'styled-media-query'

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

export const Container = styled.div<IBorderGradientProps>`
  display: ${props => (props.modalOpen ? 'block' : 'none')};
  background: #1F2937;

  border: 1px solid #FFFFFF40;
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
  background: #000;
  border-radius: 10px;

  color: white;
  width: 100%;
  height: 100%;
`

export const ModalText = styled.div`
  ${({ theme }) => css`
  background: #1F1F1FB8;
  border-bottom: 1px solid #FFFFFF40;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 6.8rem;
  padding: 2.4rem;

  ${media.lessThan('small')`
  padding: 1.2rem;
  `}

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
`}
  ${media.lessThan('small')`
    font-size: ${theme.font.sizes.font14};
`}
`

export const WrapperIcons = styled.button`
  ${({ theme }) => css`
    background: #1F1F1FB8;

    border: none;
    border-radius: 10px;
    padding: ${theme.spacings.space24};

    display: flex;
    align-items: center;
    z-index: 0;

    width: 100%;
    height: auto;
    padding-top: 1.8rem;
    padding-bottom: 1.8rem;
    padding-left: 2.4rem;
    cursor: pointer;
    position: relative;
    img {
      display: flex;
      margin-right: 2.4rem;
      width: 4rem;
      height: 3.56rem;
      padding: 0.2rem;
      z-index: 1;
    }
    span {
      color: ${theme.colors.snow};
      font-size: 1.6rem;
      font-weight: ${theme.font.weight.normal};
      font-family: 'Rubik';
      z-index: 1;
    }
    &:before {
      content: '';
      position: absolute;
      border-radius: 10px;
      top: 1px;
      left: 1px;
      right: 1px;
      bottom: 1px;
      border: 3px solid;
      border-image: linear-gradient(-45deg, #E843C4 0%, #F79640 100%) 1;
      -webkit-mask: /*4*/
     linear-gradient(#fff  0 0) content-box,
     linear-gradient(#fff  0 0);
      -webkit-mask-composite: destination-out; /*5'*/
      mask-composite: exclude; /*5*/
      background-size: 300% 100%;
      transition: all .4s ease-in-out;
      display: none;
    }
    &:hover:before {
      display: block;
    }
  `}
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  max-width: 100%;

  padding: ${theme.spacings.space24};
  background: #1F2937;

  ${media.lessThan('small')`
      margin: 0;
      width:100%;
      height:100%;
      padding: 1.2rem;
    `}
`

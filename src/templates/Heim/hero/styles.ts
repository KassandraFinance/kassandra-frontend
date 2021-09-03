import styled, {css} from "styled-components";
import media from "styled-media-query";

import * as ButtonStyles from '../../../components/Button/styles'

export const Container = styled.div`

  overflow:hidden;
  max-width: 1530px;
  display: flex;
  margin: auto;
  height: calc(100vh - 110px);

  position: relative;
  padding: 0 32px;
  padding-left: 60px;

  display: grid;
  grid-template-columns: 2.5fr 2.5fr;
  justify-content: space-between;
  align-items: center;
  ${media.lessThan('medium')`
      position: relative;
      margin-bottom: 2.5rem;
      padding-left: 50px;

  `}

  ${media.lessThan("small")`

      display: flex;
      flex-direction:column;
      text-align: center;

  `}

`
export const SubTitle = styled.h3`
  ${({theme})=>css`
  font-size: ${theme.font.sizes.large};
  font-weight: 300;
  margin: ${theme.spacings.small} 0 ${theme.spacings.xlarge} 0;
  max-width: 100%px;
    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.medium};
      /* margin: ${theme.spacings.xsmall} 0 ${theme.spacings.small}  0; */
    `}
  `}
`

export const Image = styled.div`
    position: relative;
    display:flex;
    justify-content: flex-end;
    right: -6.5rem;
    margin-top:-2.2rem;
    ${media.lessThan('large')`
      right: -4.25rem;
      margin-top:-2rem;
    `}
    ${media.lessThan("small")`
      margin-top:0rem;
    `}

    img {
      max-width: 100%;
      ${media.lessThan('small')`
      display: none;
      visibility: hidden;

    `}

    /* @media (min-width: 1440px) {
      max-width: 100%;
    }
    @media (max-width: 1240px) {
      max-width: 100%;
      min-width: 230px;
    }
    @media (max-width: 770px) {
      max-width: 400px;
    }
    @media (max-width: 600px) {
      max-width: 300px;
      display: none;
    } */
  }
`
export const FloatImage = styled.div`
  display: flex;
  align-items: flex-end;
  position: fixed;
  right:-3.2rem;
  bottom:2rem;
  z-index: 1;
  margin:auto;
  img{
    max-width: 80%;
  };
  ${media.lessThan('medium')`
    display: flex;
    flex-direction:row;
    justify-content: flex-start;
    bottom:0rem;
    right: 0;
  img{
    max-width: 30%;
  };
  `}
`
export const Link = styled.div `
    a{
    background: linear-gradient(264.12deg, #020887 -197.65%, #26DBDB 272.42%);
    border: none;
    border-radius: 6px;
    color: #fcfcfc;
    text-decoration: none;
    font-size: 20px;

    height: 52px;
    padding: 12px 32px;
    cursor: pointer;
  }
`

export const Title = styled.h1`
  ${({theme})=>css`

    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.normal};
    line-height: 61.6px;
    ${media.lessThan("medium")`
    line-height: 30px;
    font-size: ${theme.font.sizes.large};
    `}
  `}
`
export const ButtonWrapper = styled.div`
${({theme})=> css`

  display: flex;
  max-width: 90%;
  ${ButtonStyles.Wrapper}{
    margin-right:2.4rem;
    }

  /* justify-content: space-between; */
  ${media.lessThan("medium")`
    max-width: 80%;
    display: flex;
  `}
  ${media.lessThan("medium")`
    display:flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    ${ButtonStyles.Wrapper}{
      margin-bottom: 1rem;
    }
  `}
` }
  `
  type ModalProps = {
    isOpen: boolean
  }

  const modalModifiers = {
    open: () => css`
      opacity: 1;
    `,

    close: () => css`
      opacity: 0;
      pointer-events: none;
    `
  }
  export const Modal = styled.div<ModalProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
  /* height: max-content; */
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 1);
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    border-radius: 6px;
    z-index: ${theme.layers.modal};
    transition: opacity ${theme.transition.default};
    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.close()}
    ${media.lessThan('small')`
      top: 0;
      position: fixed;
      /* display:flex; */
      flex-direction: column;
      width:100%;
      height:100%;
    `}
  `}
`

export const Close = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    right: 0;
    top: 0;
    cursor: pointer;
    /* width: 100%;
    height: 100%; */
    text-align: right;
  `}
`
export const Content = styled.div`
  display:flex;
  margin:2rem;
  justify-content: space-between;
  img{
    cursor: pointer;
    padding: 2rem;
  }
  ${media.lessThan('small')`
      display: flex;
      flex-direction: column;
      margin: 0;
      width:100%;
      height:100%;
    `}
`
export const ModalHeading = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    /* position: absolute; */
    top: 0;
    padding: 1.2rem;
    border-bottom: 0.1rem solid #E843C4;
    display: flex;
    `
export const ModalText = styled.h1`
 ${({theme})=> css`
    margin-left: ${theme.spacings.small};
 `}
`
export const WrapperIcons = styled.h1`
 ${({theme})=> css`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: space-between;
    font-size: ${theme.font.sizes.small};
 `}
 ${media.lessThan('small')`
  margin:0;
 `}
`


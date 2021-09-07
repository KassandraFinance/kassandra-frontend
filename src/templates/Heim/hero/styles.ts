import styled, {css} from "styled-components";
import media from "styled-media-query";

import * as ButtonStyles from '../../../components/Button/styles'

export const Container = styled.div``

export const DesktopHero = styled.div`
  overflow:hidden;
  max-width: 1520px;
  margin: auto;
  height: calc(100vh - 110px);
  position: relative;
  padding: 0 32px;
  display: grid;
  grid-template-columns: 2.5fr 2.5fr;
  justify-content: space-between;
  align-items: center;
  `
export const MobileHero = styled.div`
  max-width: 1520px;
  height: calc(100vh - 160px);

  display: flex;
  flex-direction:column;
  text-align: center;
  align-content: center;

  position: relative;
  padding: 0 24px;
  margin-bottom: 2.5rem;

  @media(orientation: landscape){
    height: calc(130vw - 160px);
  }
  @media (max-width: 1024px) and (max-height: 1366px){
    margin-top: 15rem;
  }
    @media (max-width: 1024px) and (max-height: 1366px) and (orientation: landscape){
    margin-top: 5rem;
  }
  @media (max-width: 768px) and (max-height: 1024px){
    margin-top:10rem;
  }
  @media (max-width: 768px) and (max-height: 1024px)and (orientation: landscape){
    margin-top:2rem;
  }
  @media (max-width: 540px){
    margin-top:3rem;
  }
  @media (max-width: 425px){
    /* margin-top: 10rem; */
  }
  @media (max-width: 375px) and (min-width: 800px){
    margin-top:15rem;
  }
  @media (max-width: 375px){
    margin-top:0rem;
  }
  @media (max-width: 360px){
    margin-top:1rem;
    /* height: calc(100vh - 200px); */
  }
  @media(max-width: 380px){
    /* height:auto; */
  }
  @media(max-width: 320px){
    margin-top:0rem;
  }
  @media(max-width: 280px){
    margin-top:2rem;
  }
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
  @media(max-width: 320px){
    margin-bottom:2rem;
  }
`

export const ImageMobile = styled.div`
    position: relative;
    display:flex;
    justify-content: flex-end;
    right: -6.5rem;
    margin-top:-2.2rem;

    @media(max-width: 1040px){
      right: -4.25rem;
      margin-top:-2rem;

      position: relative;
      display:flex;
      flex-direction: column;
      justify-content: center;
      right: 0;
      margin-top:0rem;
      align-items:center;
    }
    img {
      max-width: 100%;
      @media (max-width: 1024px) and (max-height: 1366px){
        max-width: 60%;
      }
      @media (max-width: 768px){
      }
      @media (max-width: 540px){
        max-width: 45%;
      }
      @media (max-width: 425px){
        max-width: 60%;
      }
      @media (max-width: 425px) and(min-height: 800px){
        max-width: 80%;
      }
      @media (max-width: 375px) and (min-height: 735px){
        max-width:80%;
      }
      @media (max-width: 360px){
        max-width:50%
      }
      @media(max-width: 380px){
      }
      @media(max-width: 320px){
        max-width: 40%
      }
  }

`
export const ImageDesktop = styled.div`
    position: relative;
    display:flex;
    justify-content: flex-end;
    right: -6.5rem;
    margin-top: -5rem;


    ${media.lessThan('large')`
      right: -4.25rem;
      margin-top:-2rem;
    `}
    ${media.lessThan("medium")`
    position: relative;
    display:flex;
    justify-content: center;
    right: 0;
    margin-top:0rem;
    align-items:center;
      img{
        max-width: 50%;
      }
    `}
    img {
      max-width: 95%;
      ${media.lessThan('medium')`
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
    justify-content: flex-end;
    bottom:2rem;
    right: 1rem;
  img{
    max-width: 50%;
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

  display: block;;
  max-width: 90%;
  ${ButtonStyles.Wrapper}{
    margin-right:2.4rem;
    }

  /* justify-content: space-between; */

  ${media.lessThan("large")`
    display:flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    ${ButtonStyles.Wrapper}{
      margin-right:0rem;
      margin-bottom: 2.4rem;
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


import styled, {css} from 'styled-components'
import media from "styled-media-query";


export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.7);

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  z-index: 20;
`

interface IBorderGradientProps {
  modalOpen: boolean
}

export const BorderGradient = styled.div<IBorderGradientProps>`
  display: ${(props) => props.modalOpen ? "block" : "none" };

  background: linear-gradient(0deg, #FFBF00 -0.02%, #E843C4 99.99%);
  border-radius: 6px;

  padding: 2px;

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
  background: #211426;
  color: #FCFCFC;
  width: 100%;
  height: 100%;
  padding:3.2rem;
`


export const InterBackground = styled.div`
  background: #211426;
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6.8rem;
  padding: 24px;

  @media(max-width: 560px){
    display: flex;
    justify-content: center;
    }


  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    width:2.4rem;
    margin-top: -0.2rem;
  }
  img{
      max-width: 100%;
    }
`


export const ModalText = styled.h1`
${({theme})=> css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.light};
    text-align: center;
    margin-bottom: 4rem;
    @media(max-width: 560px){
      /* margin-bottom: 0; */
      font-size:2.6rem
    }
    @media(max-width: 320px){
    /* width: 300px; */
    font-size:2.2rem;
  }
`}
`
export const WrapperButton = styled.h1`
${({theme})=> css`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 2.4rem;
    background: #211426;
    margin-bottom: -2rem;

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      width:2.4rem;
      margin-top: -0.2rem;
    }
    img{
      width: 1.2rem;
      height: 1.2rem;
    }
`}

`
export const Content = styled.div`
  display:flex;
  justify-content: space-between;
  flex-direction: column;
  @media(max-width: 560px){
    display: flex;
    margin: 0;
    width:100%;
    height:100%;
    justify-content: initial;
  }
`

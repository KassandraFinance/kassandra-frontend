import styled, {css} from 'styled-components'
import media from "styled-media-query";


export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.7);

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  z-index: 9;
`

interface IBorderGradientProps {
  modalOpen: boolean
  otherStakingPools: boolean
}

export const BorderGradient = styled.div<IBorderGradientProps>`
  display: ${(props) => props.modalOpen ? "block" : "none" };

  background: ${(props) => props.otherStakingPools ?
    "linear-gradient(0deg, #26DBDB -0.02%, #E843C4 99.99%)"
    :
    "linear-gradient(0deg, #FFBF00 -0.02%, #E843C4 99.99%)" };
  border-radius: 6px;

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
  background: #000;
  color: white;
  width: 100%;
  height: 100%;
`


export const InterBackground = styled.div`
  background: black;
  border: 0.1rem solid #E843C4;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 6.8rem;
  padding: 24px;


  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    width:2.4rem;
    margin-top: -0.2rem;
    img{
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`


export const ModalText = styled.h1`
${({theme})=> css`
    font-size: 2rem;
    font-weight: ${theme.font.normal};
`}
`
export const WrapperIcons = styled.h1`
${({theme})=> css`
    margin: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: space-between;
    font-size: 1.4rem;
    span{
    margin-top: 5.6px;
    }
    img{
      max-width: 80%;
    }
`}

`
export const Content = styled.div`
  display:flex;
  justify-content: space-between;
  margin: 0 0.8rem;
  img{
    cursor: pointer;
    width: 5.6rem;
    height: 5.6rem;
    /* padding: 2rem; */
  }
  ${media.lessThan('small')`
      display: flex;
      flex-direction: column;
      margin: 0;
      width:100%;
      height:100%;
    `}
`

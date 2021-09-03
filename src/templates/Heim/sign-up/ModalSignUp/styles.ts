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

  /* width: 320px;
  max-height: 100%; */
  padding: 2px;

  position: fixed;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);

  z-index: 10;
  ${media.lessThan('small')`
      top: 0;
      position: fixed;
      /* display:flex; */
      flex-direction: column;
      width:100%;
      height:100%;
    `}
`

export const BackgroundBlack = styled.div`
  background: #211426;
  color: #FCFCFC;
  width: 47rem;
  height: auto;
  padding: 4rem;

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
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.light};
    text-align: center;
    margin-bottom: 4rem;
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
${media.lessThan('small')`
  margin:0;
`}
`
export const Content = styled.div`
  display:flex;
  justify-content: space-between;
  flex-direction: column;
  ${media.lessThan('small')`
      display: flex;
      margin: 0;
      width:100%;
      height:100%;
    `}
`

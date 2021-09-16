import styled, { css } from 'styled-components'
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

// eslint-disable-next-line prettier/prettier
export const BorderGradient = styled.div<IBorderGradientProps>`
  display: ${props => (props.modalOpen ? 'block' : 'none')};

  background: linear-gradient(0deg, #FFBF00 -0.02%, #E843C4 99.99%);
  border-radius: 6px;

  border-radius: 6px;

  padding: 2px;
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
  color: white;
  width: 100%;
  height: 100%;
`

// eslint-disable-next-line prettier/prettier
export const InterBackground = styled.div`
  background: black;
  border: 0.1rem solid #e843c4;
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
`

export const ModalText = styled.div`
  ${({ theme }) => css`
    font-size: 1.8rem;
    font-weight: ${theme.font.normal};
  `}
  ${media.lessThan('small')`
font-size: 1.4rem;
`}
`

export const WrapperIcons = styled.button`
  ${({ theme }) => css`
    /* margin: 1.6rem; */
    cursor: pointer;

    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    padding-top: 1.8rem;
    padding-bottom: 1.8rem;
    padding-left: 2.4rem;

    background-color: #010001;
    img {
      display: flex;
      margin-right: 2.4rem;
      width: 4rem;
      height: 3.56rem;
      padding: 0.2rem;
    }
    span {
      color: #fcfcfc;
      font-size: 1.6rem;
      font-weight: ${theme.font.normal};
    }

    ${media.lessThan('small')`
    margin:0;
    margin-top: 1.5rem;
    max-width: 80%
    font-size:${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
  `}
    &:hover {
      background: #ffbf00;
      border: 1px solid #ffbf00;
    }
  `}
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan('small')`
      margin: 0;
      width:100%;
      height:100%;
      padding: 1.2rem;
    `}
`

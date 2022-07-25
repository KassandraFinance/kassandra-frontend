import styled from 'styled-components'
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

export const ButtonViewNftDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: 2.4rem;
  padding-right: 2.4rem;

  @media (min-width: 1000px) {
    display: none;
  }

  button {
    background-color: transparent;
    border: none;
    border: 1px solid #ffffff;
    border-radius: 2rem;
    min-width: 50rem;
    padding: 0.6rem;

    color: #ffffff;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.normal};

    cursor: pointer;
    transition: 0.3s;

    :hover {
      background-color: #ffffff20;
    }
  }
`

export const testDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-direction: column; */

  height: 100vh;
  width: 100%;
  z-index: 21;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  #Imagett {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

interface ITestImageProps {
  isOpenDetails: boolean;
}

// eslint-disable-next-line prettier/prettier
export const testImage = styled.img<ITestImageProps>`
  /* position: fixed; */
  /* top: 0; */
  /* right: 0; */
  /* top: 50%;
  left: 50%;
  transform: translate(-90%, -50%); */
  width: 400px;
  height: 400px;
  border-radius: 1.2rem;

  @media (max-width: 1000px) {
    width: ${props => (props.isOpenDetails ? '100px' : '400px')};
    height: ${props => (props.isOpenDetails ? '100px' : '400px')};
  }

  /* z-index: 20; */
  animation: OpenImage 2.5s ease;
  @keyframes OpenImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

interface IModalInfoNftContainerProps {
  modalOpen: boolean;
}

// prettier-ignore
export const ModalInfoNftContainer = styled.div<IModalInfoNftContainerProps>`
  /* position: absolute; */
  /* right: 0; */

  /* height: 100vh; */
  /* z-index: 21; */

  /* width: 43rem; */

  @media (max-width: 1000px) {
    /* height: 100vh; */
  }

  animation: OpenModalVotes 1.5s ease;
  animation-fill-mode: both;
  /* animation-direction: ${props => (props.modalOpen ? 'normal' : 'reverse')};*/
  @keyframes OpenModalVotes {
    from {
      margin-right: -43rem;
    }
    to {
      margin-left: 0;
    }
  }
`

export const CloseModalContainer = styled.div`
  /* position: absolute;
  top: 10px;
  left: -50px; */

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;

  background-color: #ffffff10;
  border-radius: 100%;
  cursor: pointer;

  img {
    /* transform: rotate(-90deg); */
  }
`

export const ModalInfoNftContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  height: 100vh;
  max-width: 45rem;

  @media (max-width: 1000px) {
    max-width: 100%;
    max-height: 400px;
  }

  background-color: #232734;

  overflow: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
  }
`

export const NftHeader = styled.header`
  margin-bottom: 2rem;

  h1 {
    color: #ffffff;
    font-size: ${theme.font.sizes.font32};
    font-weight: ${theme.font.weight.medium};
  }

  p {
    color: #ffffff;
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.normal};
    letter-spacing: 0.22rem;
  }

  span {
    color: #8f8f8f;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
  }
`

export const CreaterNftContent = styled.div`
  margin-bottom: 2rem;

  h3 {
    color: #fcfcfc;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.medium};
  }

  span {
    display: flex;
    gap: 0.4rem;

    p {
      color: #8f8f8f;
      font-size: ${theme.font.sizes.font14};
      font-weight: ${theme.font.weight.light};
    }
  }
`

export const CreateWalletNft = styled.span`
  color: #ffffff;
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};
`

export const OwnerContent = styled.div`
  margin-bottom: 2rem;

  span {
    margin-top: 0.7rem;
  }
  div {
    display: flex;
    align-items: center;
    gap: 1.4rem;
  }

  p {
    color: #ffffff;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
  }

  strong {
    color: #8f8f8f;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
  }
`

export const SocialIconsContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

interface ISocialIconProps {
  isActiveSocial?: boolean;
}

// eslint-disable-next-line prettier/prettier
export const SocialIcon = styled.a<ISocialIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.4rem;
  width: 2.4rem;

  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 50%;

  transition: border ${theme.transition.default};
  opacity: ${props => (props.isActiveSocial ? 'none' : '50%')};

  pointer-events: ${props => (props.isActiveSocial ? 'auto' : 'none')};
  cursor: pointer;

  &:hover {
    border: 1.5px solid rgba(255, 255, 255, 0.3);
  }
`

export const CollectionContent = styled.div`
  h3 {
    color: #fcfcfc;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.medium};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-top: 1rem;
  }

  span {
    > p {
      color: #8f8f8f;
      font-size: ${theme.font.sizes.font14};
      font-weight: ${theme.font.weight.light};
    }
  }

  #NftByName {
    color: #ffffff;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
  }

  /* > p {
    margin-top: 1.2rem;

    color: #ffffff;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
  } */
`

export const PropertiesContainer = styled.div`
  margin-top: 2rem;

  h3 {
    color: #fcfcfc;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.medium};
  }

  p {
    margin-top: 1rem;

    color: #ffffff;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    word-break: break-all;
  }
`
export const NftDetailsContainer = styled.div`
  margin-top: 2rem;

  h3 {
    color: #fcfcfc;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.medium};
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  p {
    margin-top: 1rem;

    color: #8f8f8f;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
  }

  span {
    color: #ffffff;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
  }
`
export const WhatIsNftContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  h3 {
    color: #fcfcfc;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.medium};
  }

  p {
    margin-top: 1rem;

    color: #ffffff;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
  }
`

export const buttonOtherSite = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    border: none;
    background-color: transparent;

    color: #fcfcfc;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};

    cursor: pointer;
  }
`

// export const test = styled.div``
// export const test = styled.div``

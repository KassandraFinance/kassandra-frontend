import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.8);

  z-index: 23;
`

export const ModalNftContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;

  z-index: 23;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: space-around;
  }
`

export const ImageContainerNft = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

interface INftImageProps {
  isOpenDetails: boolean;
}

// eslint-disable-next-line prettier/prettier
export const NftImage = styled.img<INftImageProps>`
  width: 40rem;
  height: 40rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  border-radius: 1.2rem;
  z-index: 25;

  @media (max-width: 900px) {
    width: ${props => (props.isOpenDetails ? '20rem' : '50rem')};
    height: ${props => (props.isOpenDetails ? '20rem' : '50rem')};
  }

  @media (max-width: 650px) {
    width: ${props => (props.isOpenDetails ? '10rem' : '35rem')};
    height: ${props => (props.isOpenDetails ? '10rem' : '35rem')};
  }

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
interface IButtonViewProps {
  isOpenDetails: boolean;
}

// eslint-disable-next-line prettier/prettier
export const ButtonViewNftContainer = styled.div<IButtonViewProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-left: 2.4rem;
  padding-right: 2.4rem;

  @media (min-width: 900px) {
    display: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    min-width: ${props => (props.isOpenDetails ? `20rem` : `50rem`)};
    margin-bottom: 1rem;
    padding: 0.8rem;

    background-color: transparent;
    border: none;
    border: 1px solid #ffffff;
    border-radius: 0.4rem;

    color: #ffffff;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.normal};

    cursor: pointer;
    transition: 0.3s;
    z-index: 25;

    @media (max-width: 650px) {
      min-width: ${props => (props.isOpenDetails ? `10rem` : `35rem`)};

      font-size: ${theme.font.sizes.font12};
    }

    img {
      transition: transform 400ms ease;
      transform: ${props =>
        props.isOpenDetails ? `rotate(180deg)` : `rotate(0deg)`};
    }

    :hover,
    &:focus-within {
      background-color: #ffffff20;
    }
  }
`

export const ButtonViewNftDetails = styled.div`
  z-index: 25;

  h1 {
    color: #fcfcfc;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.medium};
  }

  > span {
    display: flex;

    color: #ffffff;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};

    p {
      margin-right: 0.3rem;
    }
  }
`

interface IModalInfoNftContainerProps {
  modalOpen: boolean;
  isOpenDetails: boolean;
}

// prettier-ignore
export const ModalInfoNftContainer = styled.div<IModalInfoNftContainerProps>`
  display: ${props => (props.modalOpen ? 'block' : 'none')};
  z-index: 25;

  background-color: #232734;

  overflow: hidden;
  overflow-y: auto;

  @media (max-width: 900px) {
    width: 100%;
    display: ${props => (props.isOpenDetails ? 'block' : 'none')};

    border-top-left-radius: 1.2rem;
    border-top-right-radius: 1.2rem;

    animation: OpenModalNftMobile 1s ease;
    animation-fill-mode: both;
  }

  animation: OpenModalNft 1.5s ease;
  animation-fill-mode: both;
  @keyframes OpenModalNft {
    from {
      transform: translateX(80%)
    }
    to {
      transform: translateX(0)
    }
  }

  @keyframes OpenModalNftMobile {
    from {
      transform: translateY(50%)
    }
    to {
      transform: translateY(0)
    }
  }
`

export const CloseModalContainer = styled.div`
  position: absolute;
  top: 2rem;
  left: 4rem;
  z-index: 25;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;

  background-color: #ffffff40;
  border-radius: 100%;
  cursor: pointer;
`

export const ModalInfoNftContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  height: 100vh;
  max-width: 55rem;

  background-color: #232734;

  z-index: 22;

  @media (max-width: 900px) {
    max-width: 100%;
  }

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

  > h1 {
    color: #ffffff;
    font-size: ${theme.font.sizes.font32};
    font-weight: ${theme.font.weight.medium};
  }

  > p {
    color: #ffffff;
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.normal};
    text-transform: uppercase;
    letter-spacing: 0.22rem;
  }

  > span {
    color: #8f8f8f;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
  }
`

export const OwnerContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;

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

export const OwnerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: 0.7rem;
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.6rem;

  h3 {
    color: #fcfcfc;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.medium};
  }

  > p {
    color: #ffffff;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};

    @media (max-width: 1359px) {
      font-size: ${theme.font.sizes.font14};
    }
  }

  span {
    color: #ffffff;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};

    > P {
      color: #8f8f8f;
      font-size: ${theme.font.sizes.font14};
      font-weight: ${theme.font.weight.light};
    }
  }
`

export const NftDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  h3 {
    margin-bottom: -0.4rem;

    color: #fcfcfc;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.medium};
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  button {
    margin-left: 1rem;
    background-color: transparent;
    border: 0;

    cursor: pointer;
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
  width: 100%;
  margin-top: 2rem;

  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  h3 {
    color: #fcfcfc;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.medium};
  }

  p {
    margin-top: 0.8rem;

    color: #ffffff;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
  }
`

export const OtherSiteContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 2rem;
  padding-bottom: 2rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    color: #fcfcfc;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};

    cursor: pointer;
    text-decoration: none;
  }
`

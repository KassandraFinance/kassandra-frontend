import styled from 'styled-components'
import theme from '../../../styles/theme'

export const HeroContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;

  padding-inline: 2.4rem;

  overflow: hidden;

  .button {
    flex-direction: row-reverse;
    gap: 0.8rem;
    margin: 0 auto;
    margin-top: 3.2rem;
  }

  @media (max-width: 576px) {
    padding-inline: 1.6rem;
  }

  @keyframes heroContentFadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const ImageContent = styled.div`
  position: absolute;
  bottom: 0;

  background-image: url('/assets/images/hero-token-holder.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    height: 100vh;
    background-position: 50% 35%;
  }

  animation-name: elastic;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;

  @keyframes elastic {
    0% {
      transform: scale(1.5);
    }
    20% {
      transform: scale(1.5);
    }
    50.04% {
      transform: scale(0.87);
    }
    80.93% {
      transform: scale(1.04);
    }
    100.00% {
      transform: scale(1);
    }
  }
`

export const HeroContent = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 87.8rem;

  z-index: 10;

  animation-name: heroContentFadeIn;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`

export const ManagerNumberPage = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  > p {
    color: ${theme.colors.magenta};
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font16};
    text-transform: uppercase;
    letter-spacing: 0.4em;

    @media (max-width: 650px) {
      font-size: ${theme.font.sizes.font14};
    }
  }

  > span {
    width: 6.4rem;
    height: 0.1rem;

    background-color: ${theme.colors.magenta};
  }
`

export const HeroDescription = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1.6rem;

  > h1 {
    color: #ffffff;
    font-weight: ${theme.font.weight.black};
    font-size: ${theme.font.sizes.font48};
    text-align: center;

    @media (max-width: 650px) {
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.font32};
    }

    @media (max-width: 400px) {
      font-size: ${theme.font.sizes.font24};
    }
  }

  > p {
    margin-top: 2.4rem;

    color: #ffffff;
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font16};
    text-align: center;

    @media (max-width: 650px) {
      letter-spacing: 0.05em;
      line-height: 2.4rem;
    }

    @media (max-width: 400px) {
      font-size: ${theme.font.sizes.font14};
    }
  }

  button {
    margin-top: 3.2rem;
  }
`

export const ScrollContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 50%;
  transform: translateX(50%);

  animation-name: heroContentFadeIn;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`

import { device } from '@/styles/theme'
import styled, { css, keyframes } from 'styled-components'

export const Hero = styled.div`
  ${() => css`
    position: relative;

    display: flex;
    justify-content: center;

    height: 100vh;
    width: 100vw;
    padding-inline: 2.4rem;

    @media (max-width: 576px) {
      padding-inline: 1.6rem;
    }
  `}
`

export const LightImageWrapper = styled.div`
  position: absolute;
  bottom: -550px;
  left: -120px;

  z-index: 0;

  @media ${device.mobile} {
    display: none;
  }
`

interface IBackgroundImageProps {
  backgroundImg: string
  backgroundImgHight: string
}

// prettier-ignore
export const BackgroundImage = styled.div<IBackgroundImageProps>`
  ${({ backgroundImg, backgroundImgHight }) => css`
    position: absolute;
    bottom: 0;

    width: 100vw;
    height: ${backgroundImgHight};

    background: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;

    animation-name: ${elastic};
    animation-duration: 2.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;

    z-index: -1;

    @media (max-width: 576px) {
      height: 100vh;
    }
  `}
`

export const TextContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 102rem;

    text-align: center;

    animation-name: ${heroContentFadeIn};
    animation-duration: 2.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;

    > p {
      max-width: 57.9rem;

      margin-top: 2.4rem;
      margin-bottom: 2.4rem;
    }

    h2 {
      margin-top: 1.6rem;

      text-align: center;
    }
  `}
`

const elastic = keyframes`
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
`

const heroContentFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

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

interface IBackgroundImageProps {
  backgroundImg: string;
  backgroundImgHight: string;
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

interface ITitleProps {
  color: string;
}

// prettier-ignore
export const Title = styled.h1<ITitleProps>`
  ${({ theme, color }) => css`
    display: flex;
    align-items: center;

    span {
      color: ${color};
      font-weight: ${theme.font.weight.normal};
      font-size: ${theme.font.sizes.font16};
      line-height: ${theme.font.sizes.font24};
      letter-spacing: 0.4em;
      text-transform: Uppercase;

      @media (max-width: 992px) {
        font-weight: ${theme.font.weight.light};
        font-size: ${theme.font.sizes.font14};
        line-height: ${theme.font.sizes.font16};
      }
    }

    hr {
      width: 6.4rem;
      height: 0.1rem;

      margin-left: 1.6rem;
      margin-right: 1.9rem;
      background-color: ${color};
      border: none;
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

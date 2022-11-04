import styled from 'styled-components'

export const Hero = styled.section`
  height: 100vh;
  max-width: 102rem;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  h1 {
    margin-top: 1.6rem;

    font-size: 4.8rem;
    line-height: 5.3rem;
    font-weight: 900;

    animation-name: heroContentFadeIn;
    animation-duration: 2.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
  }

  span {
    color: #ffffff;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  .start-investing {
    width: 19.4rem;
    height: 4.8rem;

    border-radius: 0.4rem;

    animation-name: heroContentFadeIn;
    animation-duration: 2.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
  }

  @media (max-width: 992px) {
    padding: 0 2.4rem;

    h1 {
      font-size: 4.8rem;
      line-height: 5.28rem;
      font-weight: 900;
    }

    span {
      font-size: 1.4rem;
      line-height: 1.6rem;
      font-weight: 300;
    }
  }

  @media (max-width: 576px) {
    padding-right: 1.6rem;
    padding-left: 1.6rem;

    background-size: 160%;
    background-position: center 130%;

    h1 {
      font-size: 2.4rem;
      line-height: 3.2rem;
      font-weight: 700;
    }

    span {
      font-size: 1.4rem;
      line-height: 1.6rem;
      font-weight: 300;
    }

    > a {
      max-width: 19.2rem;
      max-height: 4.4rem;
    }
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

export const BackgroundImage = styled.div`
  position: absolute;
  z-index: -1;

  width: 100%;
  height: calc(100vh - 10rem);
  bottom: 0;
  background: url('/assets/images/hero-investor.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;

  animation-name: elastic;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;

  @media (max-width: 576px) {
    background-size: 100%;
    width: 100vw;
    height: 100vh;
  }

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

export const Title = styled.div`
  display: flex;
  align-items: center;

  span {
    color: #ffbf00;
    letter-spacing: 0.4em;
  }

  hr {
    width: 6.4rem;
    height: 0.1rem;

    margin-left: 1.6rem;
    margin-right: 1.9rem;
    background-color: #ffbf00;
    border: none;
  }

  animation-name: heroContentFadeIn;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`

export const Description = styled.div`
  max-width: 57.9rem;

  margin-top: 2.4rem;
  margin-bottom: 2.4rem;

  animation-name: heroContentFadeIn;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`

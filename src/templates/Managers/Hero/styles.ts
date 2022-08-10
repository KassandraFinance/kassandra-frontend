import styled from 'styled-components'
import theme from '../../../styles/theme'

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
  width: 100%;

  padding-left: 6rem;
  padding-right: 6rem;

  @media (max-width: 600px) {
    height: 50rem;
  }

  @media (max-width: 500px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`
export const HeroContent = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 87.8rem;

  z-index: 10;
`

export const ScrollContainer = styled.div`
  position: absolute;
  bottom: -25rem;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ImageContent = styled.span`
  position: absolute;
  margin-top: 10rem;

  img {
    width: 81.1rem;
    height: 81.1rem;

    @media (max-width: 872px) {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 700px) {
    margin-top: -12rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: -1;

  animation: fadeInHero ease 3s;
  -webkit-animation: fadeInHero ease 3s;
  -moz-animation: fadeInHero ease 3s;
  -o-animation: fadeInHero ease 3s;
  -ms-animation: fadeInHero ease 3s;
`
export const ManagerNumberPage = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  opacity: 0;

  animation: fadeInHero ease 3s both;
  -webkit-animation: fadeInHero ease 3s both;
  -moz-animation: fadeInHero ease 3s both;
  -o-animation: fadeInHero ease 3s both;
  -ms-animation: fadeInHero ease 3s both;
  animation-delay: 1.4s;

  > p {
    color: #26dbdb;
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

    background-color: #26dbdb;
  }
`

export const HeroDescription = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1.6rem;

  opacity: 0;

  animation: fadeInHero ease 3s both;
  -webkit-animation: fadeInHero ease 3s both;
  -moz-animation: fadeInHero ease 3s both;
  -o-animation: fadeInHero ease 3s both;
  -ms-animation: fadeInHero ease 3s both;
  animation-delay: 1.4s;

  @keyframes fadeInHero {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeInHero {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeInHero {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeInHero {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeInHero {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

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

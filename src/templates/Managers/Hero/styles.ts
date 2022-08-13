import styled from 'styled-components'
import theme from '../../../styles/theme'

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
  width: 100%;

  padding-left: 6rem;
  padding-right: 6rem;

  @media (max-width: 576px) {
    padding-right: 1.6rem;
    padding-left: 1.6rem;
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
  bottom: 1rem;
`

export const ImageContent = styled.span`
  position: absolute;
  bottom: 0;

  background-image: url('/assets/images/manager-hero.svg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  height: calc(100vh - 4rem);
  width: 100%;

  @media (max-width: 768px) {
    height: 100vh;
    background-position: 50% 35%;
  }

  animation: fadeInHeroImg ease 2s;
  -webkit-animation: fadeInHeroImg ease 2s;
  -moz-animation: fadeInHeroImg ease 2s;
  -o-animation: fadeInHeroImg ease 2s;
  -ms-animation: fadeInHeroImg ease 2s;

  @keyframes fadeInHeroImg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeInHeroImg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeInHeroImg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeInHeroImg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeInHeroImg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
export const ManagerNumberPage = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  animation: fadeInHero ease 3.5s both;
  -webkit-animation: fadeInHero ease 3.5s both;
  -moz-animation: fadeInHero ease 3.5s both;
  -o-animation: fadeInHero ease 3.5s both;
  -ms-animation: fadeInHero ease 3.5s both;

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

  animation: fadeInHero ease 3.5s both;
  -webkit-animation: fadeInHero ease 3.5s both;
  -moz-animation: fadeInHero ease 3.5s both;
  -o-animation: fadeInHero ease 3.5s both;
  -ms-animation: fadeInHero ease 3.5s both;

  @keyframes fadeInHero {
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

  @-moz-keyframes fadeInHero {
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

  @-webkit-keyframes fadeInHero {
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

  @-o-keyframes fadeInHero {
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

  @-ms-keyframes fadeInHero {
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

  a {
    margin-top: 3.2rem;
  }
`

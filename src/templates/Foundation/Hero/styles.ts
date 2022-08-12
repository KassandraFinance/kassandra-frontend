import styled from 'styled-components'
import theme from '../../../styles/theme'

export const HeroBackground = styled.div`
  background-image: url('./assets/images/background-foundation-mobile-hero.png');
  background-repeat: no-repeat;
  background-position: center bottom;

  @media (min-width: 576px) {
    background-image: url('./assets/images/background-foundation-tablet-hero.png');
  }

  @media (min-width: 992px) {
    background-image: url('./assets/images/background-foundation-hero.png');
    background-position: center top;
  }

  animation: FoundationHeroImg ease 3s;
  -webkit-animation: FoundationHeroImg ease 3s;
  -moz-animation: FoundationHeroImg ease 3s;
  -o-animation: FoundationHeroImg ease 3s;
  -ms-animation: FoundationHeroImg ease 3s;

  @keyframes FoundationHeroImg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes FoundationHeroImg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes FoundationHeroImg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes FoundationHeroImg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes FoundationHeroImg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const Hero = styled.section`
  position: relative;

  display: flex;
  align-items: center;

  max-width: 110.8rem;
  margin: 0 auto;
  height: 100vh;
  padding-inline: 2.4rem;
  margin-bottom: 13.5rem;

  @media (max-width: 992px) {
    justify-content: center;

    margin-bottom: 10rem;
  }

  @media (max-width: 576px) {
    padding-inline: 1.6rem;
  }
`

export const HeroText = styled.div`
  width: 54.5rem;
  margin-bottom: 20rem;

  @media (max-width: 992px) {
    margin-left: 0;

    text-align: center;
  }

  animation: FoundationHero ease 3s both;
  -webkit-animation: FoundationHero ease 3s both;
  -moz-animation: FoundationHero ease 3s both;
  -o-animation: FoundationHero ease 3s both;
  -ms-animation: FoundationHero ease 3s both;

  @keyframes FoundationHero {
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

  @-moz-keyframes FoundationHero {
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

  @-webkit-keyframes FoundationHero {
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

  @-o-keyframes FoundationHero {
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

  @-ms-keyframes FoundationHero {
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

export const Title = styled.h1`
  margin-bottom: 1.6rem;

  color: ${theme.colors.amber};
  font-weight: ${theme.font.weight.normal};
  font-size: ${theme.font.sizes.font14};
  line-height: ${theme.font.sizes.font16};
  letter-spacing: 0.4em;
  text-transform: uppercase;

  @media (max-width: 992px) {
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font16};
    line-height: ${theme.font.sizes.font20};
  }

  @media (max-width: 576px) {
    font-size: ${theme.font.sizes.font14};
    line-height: ${theme.font.sizes.font16};
  }
`

export const SubTitle = styled.h2`
  margin-bottom: 3.2rem;

  color: ${theme.colors.white};
  font-weight: ${theme.font.weight.black};
  font-size: ${theme.font.sizes.font48};
  line-height: 5rem;

  @media (max-width: 992px) {
    margin-bottom: 2.4rem;
    line-height: 5.3rem;
  }

  @media (max-width: 576px) {
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.font24};
    line-height: ${theme.font.sizes.font32};
  }
`

export const ScroolContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 50%;
  transform: translateX(50%);
`

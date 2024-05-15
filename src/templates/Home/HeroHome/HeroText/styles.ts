import styled from 'styled-components'
import theme from '../../../../styles/theme'

export const TitleContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  max-width: 106rem;

  @media (max-height: 800px) {
    margin-top: 8rem;
    gap: 1rem;
  }
`

export const Title = styled.h1`
  width: fit-content;
  height: 2rem;

  color: ${theme.colors.snow};
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font16};
  line-height: ${theme.font.sizes.font20};
  letter-spacing: 0.4em;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 693px) {
    height: 1.6rem;

    font-size: ${theme.font.sizes.font14};
    line-height: ${theme.font.sizes.font16};
    letter-spacing: 0.3em;
  }
`

export const SubTitleWrapper = styled.div`
  position: relative;
`

export const SubTitle = styled.div`
  position: relative;
  max-width: 101.67rem;

  font-weight: 900;
  font-size: clamp(${theme.font.sizes.font40}, 9vw, 6.4rem);
  line-height: 7.2rem;
  text-align: center;
  text-shadow: 0rem 0.2rem 3rem rgba(0, 0, 0, 0.7);

  @media (max-width: 693px) {
    font-size: ${theme.font.sizes.font40};
    line-height: ${theme.font.sizes.font40};
  }
`

export const TextBox = styled.div`
  display: inline-block;
  position: relative;
`

export const VisibilityHidden = styled.span`
  visibility: hidden;
`

export const Text = styled.div`
  position: absolute;
  top: -10rem;

  display: inline-block;

  width: 29.486rem;

  text-align: right;

  opacity: 0;
  transform: rotateX(-30deg);
  animation-timing-function: ease;
  white-space: nowrap;

  @media (max-width: 693px) {
    top: -3.3rem;

    width: 18.428rem;
  }

  @media (max-width: 435px) {
    text-align: center;
  }

  &:nth-child(1) {
    color: ${theme.colors.amber};

    animation: rollDown 15s forwards infinite;

    @media (max-width: 693px) {
      animation: rollDown670 15s forwards infinite;
    }
  }

  &:nth-child(2) {
    color: ${theme.colors.cyan};

    animation: rollDown2 15s forwards infinite;

    @media (max-width: 693px) {
      animation: rollDown2670 15s forwards infinite;
    }
  }

  &:nth-child(3) {
    color: ${theme.colors.magenta};

    animation: rollDown3 15s forwards infinite;

    @media (max-width: 693px) {
      animation: rollDown3670 15s forwards infinite;
    }
  }

  &:nth-child(4) {
    color: ${theme.colors.cyan};

    animation: rollDown4 15s forwards infinite;

    @media (max-width: 693px) {
      animation: rollDown4670 15s forwards infinite;
    }
  }

  &:nth-child(5) {
    color: ${theme.colors.amber};

    animation: rollDown5 15s forwards infinite;

    @media (max-width: 693px) {
      animation: rollDown5670 15s forwards infinite;
    }
  }

  @keyframes rollDown {
    0% {
      top: -10rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
    5% {
      top: -5.8rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    10% {
      top: -5.8rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    15% {
      top: -1.6rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
  }

  @keyframes rollDown2 {
    20% {
      top: -10rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
    25% {
      top: -5.8rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    30% {
      top: -5.8rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    35% {
      top: -1.6rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
  }

  @keyframes rollDown3 {
    40% {
      top: -10rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
    45% {
      top: -5.8rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    50% {
      top: -5.8rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    55% {
      top: -1.6rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
  }

  @keyframes rollDown4 {
    60% {
      top: -10rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
    65% {
      top: -5.8rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    70% {
      top: -5.8rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    75% {
      top: -1.6rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
  }

  @keyframes rollDown5 {
    80% {
      top: -10rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
    85% {
      top: -5.8rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    90% {
      top: -5.8rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    95% {
      top: -1.6rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
  }

  @keyframes rollDown670 {
    0% {
      top: -5rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
    5% {
      top: -3.3rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    10% {
      top: -3.3rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    15% {
      top: -1.6rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
  }

  @keyframes rollDown2670 {
    20% {
      top: -5rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
    25% {
      top: -3.3rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    30% {
      top: -3.3rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    35% {
      top: -1.6rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
  }

  @keyframes rollDown3670 {
    40% {
      top: -5rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
    45% {
      top: -3.3rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    50% {
      top: -3.3rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    55% {
      top: -1.6rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
  }

  @keyframes rollDown4670 {
    60% {
      top: -5rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
    65% {
      top: -3.3rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    70% {
      top: -3.3rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    75% {
      top: -1.6rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
  }

  @keyframes rollDown5670 {
    80% {
      top: -5rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
    85% {
      top: -3.3rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    90% {
      top: -3.3rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    95% {
      top: -1.6rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
  }
`

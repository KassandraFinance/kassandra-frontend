import styled from 'styled-components'
import theme from '../../../../styles/theme'

export const TitleContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 106.5rem;
  padding-inline: 2.4rem;

  @media (max-width: 576px) {
    padding-inline: 1.6rem;
  }
`

export const Title = styled.h1`
  height: 2rem;
  padding-inline: 2.4rem;

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
    letter-spacing: 0.2em;
  }
`

export const SubTitleWrapper = styled.div`
  position: relative;
`

export const SubTitle = styled.div`
  position: relative;

  font-weight: ${theme.font.weight.black};
  font-size: 6.4rem;
  line-height: 7.2rem;
  text-align: center;

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
  display: inline-block;
  position: absolute;
  top: -20rem;
  transform: rotateX(-90deg);

  opacity: 0;

  animation-timing-function: ease;

  white-space: nowrap;

  &:nth-child(1) {
    left: 6rem;

    color: #ffbf00;
    animation: rollDown 10s forwards infinite;

    @media (max-width: 693px) {
      left: 3.7rem;
      animation: rollDown670 10s forwards infinite;
    }

    @media (max-width: 435px) {
      left: 1.85rem;
    }
  }

  &:nth-child(2) {
    color: #26dbdb;
    animation: rollDown2 10s forwards infinite;

    @media (max-width: 693px) {
      animation: rollDown2670 10s forwards infinite;
    }

    @media (max-width: 435px) {
    }
  }

  &:nth-child(3) {
    left: 3.3rem;

    color: #e843c4;
    animation: rollDown3 10s forwards infinite;

    @media (max-width: 693px) {
      left: 2rem;
      animation: rollDown3670 10s forwards infinite;
    }

    @media (max-width: 435px) {
      left: 1.05rem;
    }
  }

  @keyframes rollDown {
    0% {
      top: -10rem;
      transform: rotateX(-90deg);
    }
    11% {
      top: -5.8rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    22% {
      top: -5.8rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    33% {
      top: -1.6rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
  }

  @keyframes rollDown2 {
    33% {
      top: -10rem;
      transform: rotateX(-90deg);
    }
    44% {
      top: -5.8rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    55% {
      top: -5.8rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    66% {
      top: -1.6rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
  }

  @keyframes rollDown3 {
    66% {
      top: -10rem;
      transform: rotateX(-90deg);
    }
    77% {
      top: -5.8rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    88% {
      top: -5.8rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    99% {
      top: -1.6rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
  }

  @keyframes rollDown670 {
    0% {
      top: -7rem;
      transform: rotateX(-90deg);
    }
    11% {
      top: -3.3rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    22% {
      top: -3.3rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    33% {
      top: -1.6rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
  }

  @keyframes rollDown2670 {
    33% {
      top: -7rem;
      transform: rotateX(-90deg);
    }
    44% {
      top: -3.3rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    55% {
      top: -3.3rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    66% {
      top: -1.6rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
  }

  @keyframes rollDown3670 {
    66% {
      top: -7rem;
      transform: rotateX(-90deg);
    }
    77% {
      top: -3.3rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    88% {
      top: -3.3rem;
      transform: rotateX(0deg);
      opacity: 1;
    }
    99% {
      top: -1.6rem;
      transform: rotateX(30deg);
      opacity: 0;
    }
  }
`

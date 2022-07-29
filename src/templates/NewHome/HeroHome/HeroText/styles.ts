import styled from 'styled-components'
import theme from '../../../../styles/theme'

export const TitleContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  max-width: 106.5rem;
  padding-inline: 2.4rem;

  @media (max-width: 576px) {
    padding-inline: 1.6rem;
  }
`

export const Title = styled.h1`
  height: 2rem;
  width: fit-content;

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
  top: -10rem;

  width: 29.486rem;

  text-align: right;

  transform: rotateX(-90deg);
  opacity: 0;
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
    color: #ffbf00;
    animation: rollDown 10s forwards infinite;

    @media (max-width: 693px) {
      animation: rollDown670 10s forwards infinite;
    }
  }

  &:nth-child(2) {
    color: #26dbdb;
    animation: rollDown2 10s forwards infinite;

    @media (max-width: 693px) {
      animation: rollDown2670 10s forwards infinite;
    }
  }

  &:nth-child(3) {
    color: #e843c4;
    animation: rollDown3 10s forwards infinite;

    @media (max-width: 693px) {
      animation: rollDown3670 10s forwards infinite;
    }
  }

  @keyframes rollDown {
    0% {
      top: -10rem;
      transform: rotateX(30deg);
      opacity: 0;
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
      transform: rotateX(30deg);
      opacity: 0;
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
      transform: rotateX(30deg);
      opacity: 0;
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
      top: -5rem;
      transform: rotateX(30deg);
      opacity: 0;
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
      top: -5rem;
      transform: rotateX(30deg);
      opacity: 0;
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
      top: -5rem;
      transform: rotateX(30deg);
      opacity: 0;
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

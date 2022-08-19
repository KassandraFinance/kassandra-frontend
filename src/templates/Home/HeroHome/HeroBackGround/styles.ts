import styled from 'styled-components'

export const Grid = styled.div`
  position: absolute;

  width: 100%;
  height: 100vh;

  background-image: url('./assets/images/grid-desktop.png');
  background-repeat: no-repeat;
  background-position: top 6.7rem center;

  opacity: 0;

  animation-timing-function: ease;
  animation: gridAnimation 1s forwards;

  @media (max-height: 768px) {
    background-position: top -7rem center;
  }

  @media (max-height: 915px) and (max-width: 576px) {
    background-position: top -3rem center;
  }

  @keyframes gridAnimation {
    0% {
      top: -2rem;
      opacity: 0;
    }
    100% {
      top: 0;
      opacity: 1;
    }
  }
`

export const Sun = styled.div`
  position: absolute;

  width: 100%;
  height: 100vh;

  background-image: url('./assets/images/sun.png');
  background-repeat: no-repeat;
  background-position: center top 6.2rem;

  opacity: 0;

  animation-timing-function: ease;
  animation: sunAnimation 1s forwards;

  animation-delay: 1s;

  @media (max-height: 768px) {
    background-position: top -7.5rem center;
  }

  @media (max-height: 915px) and (max-width: 576px) {
    background-position: top -3.5rem center;
  }

  @keyframes sunAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const LightHero = styled.div`
  position: absolute;
  height: 100vh;

  opacity: 0;

  @media (min-width: 576px) and (max-width: 991px) {
    width: 100%;

    background-image: url('./assets/images/backgroundHome/light-tablet2.png');
    background-repeat: no-repeat;
    background-position: top right;
  }

  animation-timing-function: ease;
  animation: lightAnimation 1s forwards;

  animation-delay: 1s;

  @keyframes lightAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const ImgWrapper = styled.div`
  position: absolute;

  display: none;

  @media (min-width: 576px) and (max-width: 991px) {
    right: 0;
    bottom: -45rem;
    display: block;
  }
`

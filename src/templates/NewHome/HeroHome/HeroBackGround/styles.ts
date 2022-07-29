import styled from 'styled-components'

export const Grid = styled.div`
  position: absolute;

  width: 100%;
  height: 100vh;

  background-image: url('./assets/images/grid-desktop.png');
  background-repeat: no-repeat;
  background-position: bottom;

  opacity: 0;

  animation-timing-function: ease;
  animation: gridAnimation 1s forwards;

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
  background-position: center bottom 13.8rem;

  opacity: 0;

  animation-timing-function: ease;
  animation: sunAnimation 1s forwards;

  animation-delay: 1s;

  @keyframes sunAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

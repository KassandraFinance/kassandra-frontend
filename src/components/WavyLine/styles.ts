import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 20.1rem;
  margin-bottom: 13.1rem;

  overflow-x: hidden;
`

export const Wave = styled.div`
  background: url(./assets/images/wave-line1.svg);
  background-position: bottom;

  width: 777.3rem;
  height: 17rem;

  animation: wave 8s linear infinite;
  transform: translate3d(0, 0, 0);

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -585.3rem;
    }
  }
`

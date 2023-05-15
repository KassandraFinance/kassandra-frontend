import styled, { css } from 'styled-components'

const lineColor = {
  color1: () => css`
    background: url(./assets/images/wave-line1.svg);
  `,
  color2: () => css`
    background: url(./assets/images/wave-line2.svg);
  `
}

export const WaveContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 20.1rem;
  margin-bottom: 13.1rem;

  overflow-x: hidden;
`

interface IWaveProps {
  color: 'color1' | 'color2'
}

export const Wave = styled.div`
  ${({ color }: IWaveProps) => css`
    ${lineColor[color]}
  `}

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

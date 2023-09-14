import styled, { css } from 'styled-components'

export const IncentivesProgram = styled.main`
  ${() => css`
    position: relative;
    overflow: hidden;
  `}
`

export const IncentivesProgramWrapper = styled.div`
  ${() => css`
    max-width: 144rem;
    margin: 0 auto;
    margin-top: 10.8rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 576px) {
      padding-inline: 1.6rem;
    }
  `}
`

interface IBackgroundBallProps {
  top?: number
  bottom?: number
  left?: number
  right?: number
  deg?: number
}

export const BackgroundBall = styled.div<IBackgroundBallProps>`
  ${({ deg = 93.84 }) => css`
    position: absolute;

    width: 70rem;
    height: 70rem;

    border-radius: 50%;
    filter: blur(20rem);

    background: linear-gradient(${deg}deg, #e843c4 0.12%, #0c3ddc 100%);

    z-index: -1;
  `}

  ${({ bottom }) =>
    bottom &&
    css`
      bottom: ${bottom}rem;
    `}
  ${({ top }) =>
    top &&
    css`
      top: ${top}rem;
    `}
  ${({ left }) =>
    left &&
    css`
      left: ${left}rem;
    `}
  ${({ right }) =>
    right &&
    css`
      right: ${right}rem;
    `}
`

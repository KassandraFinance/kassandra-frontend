import styled, { css } from 'styled-components'
import { Position } from '.'

export type LinearGradient = {
  colors: string[]
  porcentage: string[]
  deg?: number
}

export interface IBackgroundBallProps {
  position: Position
  linearGradient: LinearGradient
}

export const BackgroundBall = styled.div<IBackgroundBallProps>`
  ${() => css`
    position: absolute;

    display: flex;
    width: 70rem;
    height: 70rem;

    border-radius: 50%;

    filter: blur(20rem);
    pointer-events: none;
    z-index: -1;
  `}

  ${({ position }) => css`
    ${position.top && `top: ${position.top}rem;`}
    ${position.bottom && `bottom: ${position.bottom}rem;`}
    ${position.right && `right: ${position.right}rem;`}
    ${position.left && `left: ${position.left}rem;`}
  `}

  ${({ linearGradient: lg }) => css`
    background: linear-gradient(
      ${lg.deg ?? 93.84}deg,
      ${lg.colors[0]} ${lg.porcentage[0] ?? 8.85}%,
      ${lg.colors[1] ?? lg.colors[0]} ${lg.porcentage[1] ?? 100}%
    );
  `}
`

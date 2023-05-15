import styled, { css } from 'styled-components'

interface IFadeInHorizontalContainerProps {
  inView: boolean
  invert: string
}

export const FadeInHorizontalContainer = styled.div`
  ${({ invert }: IFadeInHorizontalContainerProps) =>
    css`
      opacity: 0;
      transform: translateX(${invert});
    `}

  transition-duration: 600ms;
  transition-timing-function: ease-in-out;
  transition-property: opacity transform;

  ${({ inView }: IFadeInHorizontalContainerProps) =>
    inView &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
`

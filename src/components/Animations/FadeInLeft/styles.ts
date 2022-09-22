import styled, { css } from 'styled-components'

interface IFadeInLeftContainerProps {
  inView: boolean;
  invert: string;
}

export const FadeInLeftContainer = styled.div`
  ${({ invert }: IFadeInLeftContainerProps) =>
    css`
      opacity: 1;
      transform: translateX(${invert});
    `}
  opacity: 0;

  transition-duration: 600ms;
  transition-timing-function: ease-in-out;
  transition-property: opacity transform;

  ${({ inView }: IFadeInLeftContainerProps) =>
    inView &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
`

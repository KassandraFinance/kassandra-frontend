import styled, { css } from 'styled-components'

interface IFadeInVerticalContainerProps {
  inView: boolean
}

export const FadeInVerticalContainer = styled.div`
  opacity: 0;
  transform: translateY(-20px);

  transition-duration: 600ms;
  transition-timing-function: ease-in-out;
  transition-property: opacity transform;

  ${({ inView }: IFadeInVerticalContainerProps) =>
    inView &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`

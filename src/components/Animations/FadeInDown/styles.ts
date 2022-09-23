import styled, { css } from 'styled-components'

interface IFadeInDownContainerProps {
  inView: boolean;
}

export const FadeInDownContainer = styled.div`
  opacity: 0;
  transform: translateY(-20px);

  transition-duration: 600ms;
  transition-timing-function: ease-in-out;
  transition-property: opacity transform;

  ${({ inView }: IFadeInDownContainerProps) =>
    inView &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`

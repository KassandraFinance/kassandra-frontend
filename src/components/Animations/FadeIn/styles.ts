import styled, { css } from 'styled-components'

interface IFadeInContainerProps {
  inView: boolean
}

export const FadeInContainer = styled.div`
  opacity: 0;

  transition-duration: 600ms;
  transition-timing-function: ease-in-out;
  transition-property: opacity;

  ${({ inView }: IFadeInContainerProps) =>
    inView &&
    css`
      opacity: 1;
    `}
`

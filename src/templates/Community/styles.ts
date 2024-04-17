import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const TextWrapper = styled.div``

export const H1 = styled.h1`
  font-weight: 900;
  font-family: 'Rubik';
  font-size: 4.8rem;
  line-height: 5rem;
  color: white;
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.grayDisabled};
    font: ${theme.font.text.textBase400};
  `}
`

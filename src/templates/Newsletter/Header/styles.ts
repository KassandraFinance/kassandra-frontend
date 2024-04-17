import styled, { css } from 'styled-components'
import { headerSize } from '@/styles/theme'

export const Wrapper = styled.div`
  margin-top: calc(${headerSize.desktop} + 8.3rem);
  background-color: rgba(252, 252, 252, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 8rem;
  text-align: center;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  max-width: 73.6rem;
`

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

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 3.2rem;
  padding-inline: 5.6rem;
`

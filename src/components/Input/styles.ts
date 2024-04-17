import styled, { css } from 'styled-components'

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: 1.6rem;
    border: 0.1rem;
    border-radius: 0.8rem;
    border-color: #fcfcfc;
    background-color: #fcfcfc;
    color: #ffffff;
    font-size: 1.6rem;
    line-height: 1.6rem;
    &::placeholder {
      font-size: 1.6rem;
      line-height: 1.8rem;
      font-weight: 300;
      color: ${theme.colors.grayDisabled};
    }
  `}
`

import styled, { css } from 'styled-components'

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font16};
    line-height: ${theme.font.sizes.font24};

    @media (max-width: 576px) {
      font-size: ${theme.font.sizes.font14};
    }
  `}
`

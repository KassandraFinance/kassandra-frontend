import styled, { css } from 'styled-components'

export const SectionSubtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.font32};
    line-height: 3.5rem;

    @media (max-width: 576px) {
      font-size: ${theme.font.sizes.font24};
      line-height: ${theme.font.sizes.font32};
    }
  `}
`

import styled, { css } from 'styled-components'

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.black};
    font-size: ${theme.font.sizes.font48};
    line-height: 5rem;

    @media (max-width: 992px) {
      font-size: ${theme.font.sizes.font40};
      line-height: ${theme.font.sizes.font40};
    }

    @media (max-width: 576px) {
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.font24};
      line-height: ${theme.font.sizes.font32};
    }
  `}
`

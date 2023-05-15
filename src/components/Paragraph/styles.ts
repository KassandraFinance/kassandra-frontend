import styled, { css } from 'styled-components'

interface IParagraphProps {
  fontWeight: number
}

// eslint-disable-next-line prettier/prettier
export const Paragraph = styled.p<IParagraphProps>`
  ${({ theme, fontWeight }) => css`
    color: ${theme.colors.white};
    font-weight: ${fontWeight};
    font-size: ${theme.font.sizes.font16};
    line-height: ${theme.font.sizes.font24};

    @media (max-width: 576px) {
      font-size: ${theme.font.sizes.font14};
    }
  `}
`

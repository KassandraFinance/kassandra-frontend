import styled, { css } from 'styled-components'

interface ITitleProps {
  color: string;
}
// eslint-disable-next-line prettier/prettier
export const SectionTitle = styled.h1<ITitleProps>`
  ${({ theme, color }) => css`
    display: flex;
    align-items: center;

    span {
      color: ${color};
      font-weight: ${theme.font.weight.normal};
      font-size: ${theme.font.sizes.font16};
      line-height: ${theme.font.sizes.font24};
      letter-spacing: 0.4em;
      text-transform: Uppercase;

      @media (max-width: 992px) {
        font-weight: ${theme.font.weight.light};
        font-size: ${theme.font.sizes.font14};
        line-height: ${theme.font.sizes.font16};
      }
    }

    hr {
      width: 6.4rem;
      height: 0.1rem;

      margin-left: 1.6rem;
      margin-right: 1.9rem;
      background-color: ${color};
      border: none;
    }
  `}
`

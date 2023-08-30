import styled, { css } from 'styled-components'

export const IconContent = styled.span`
  ${() => css`
    width: 2.4rem;
    height: 2.4rem;
  `}
`

export const CardLinkWrapper = styled.a`
  ${() => css`
    display: flex;
    align-items: start;
    gap: 1.6rem;
    padding-inline: 2.4rem;
    padding-block: 1.6rem;
    border-radius: 4px;

    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
    transition-property: background;

    text-decoration: none;

    &:hover,
    &:focus {
      background: rgba(252, 252, 252, 0.05);
    }
  `}
`

interface ITextWrapperProps {
  isActive: boolean
}

export const TextWrapper = styled.div<ITextWrapperProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    p {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.font16};
      font-weight: ${theme.font.weight.medium};
    }

    span {
      display: -webkit-box;

      color: ${theme.colors.grayDisabled};
      font-size: ${theme.font.sizes.font16};
      font-weight: ${theme.font.weight.light};

      -webkit-line-clamp: 2;
      overflow: hidden;
      -webkit-box-orient: vertical;
    }
  `}

  ${({ isActive }) =>
    isActive &&
    css`
      @media (max-width: 992px) {
        p {
          background-image: linear-gradient(20deg, #e843c4 0%, #ffbf00 35%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    `}
`

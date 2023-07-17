import styled, { css } from 'styled-components'

export const Recommended = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-items: flex-start;

    padding-bottom: 6.4rem;

    .readmore-btn {
      color: ${theme.colors.primary50};

      svg {
        path {
          fill: ${theme.colors.primary50};
        }
      }
    }
  `}
`

export const RecommendedContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .recommended-title {
      color: ${theme.colors.white};
      font: ${theme.font.text.textBase500};
      letter-spacing: 0.48rem;
      text-transform: uppercase;
    }
  `}
`

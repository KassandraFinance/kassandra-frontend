import styled, { css } from 'styled-components'

export const Recommended = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-items: center;

    padding-bottom: 6.4rem;

    .readmore-btn {
      text-decoration: none;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 300;
      line-height: 1.6rem;
      color: ${theme.colors.snow};

      svg {
        transition: ${theme.transition.default};

        path {
          transition: ${theme.transition.default};
          fill: ${theme.colors.snow};
        }
      }

      &[aria-disabled='false']:hover:not(:disabled) {
        svg {
          transform: translateX(0.8rem);
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
    width: 100%;

    .recommended-title {
      color: ${theme.colors.snow};
      font: ${theme.font.text.textBase500};
      letter-spacing: 0.48rem;
      text-transform: uppercase;
    }
  `}
`

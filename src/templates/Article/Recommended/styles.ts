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
      color: ${theme.colors.white};
      font: ${theme.font.text.textBase500};
      letter-spacing: 0.48rem;
      text-transform: uppercase;
    }
  `}
`

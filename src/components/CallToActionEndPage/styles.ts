import styled, { css } from 'styled-components'

export const CallToActionEndPage = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1.6rem;

    > p {
      color: ${theme.colors.white};
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.font32};
      line-height: ${theme.font.sizes.font36};
      text-align: center;
    }

    @media (max-width: 576px) {
      font-size: ${theme.font.sizes.font14};
    }
  `}
`

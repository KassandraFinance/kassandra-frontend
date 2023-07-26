import styled, { css } from 'styled-components'

export const JoinIncentiveProgram = styled.div`
  ${() => css`
    width: 63rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 24rem;
    margin-bottom: 12rem;
    gap: 3.2rem;

    @media (max-width: 992px) {
      margin-top: 16rem;
      width: 32rem;
    }
  `}
`

export const ButtonWrapper = styled.div`
  ${() => css`
    .join {
      width: 18.2rem;
      height: 4rem;
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.black};
    font-size: ${theme.font.sizes.font64};
    line-height: 7.2rem;

    @media (max-width: 992px) {
      font-size: ${theme.font.sizes.font32};
      font-weight: ${theme.font.weight.bold};
      line-height: 110%;
    }

    @media (max-width: 576px) {
      font-size: ${theme.font.sizes.font32};
      font-weight: ${theme.font.weight.bold};
      line-height: 110%;
    }
  `}
`

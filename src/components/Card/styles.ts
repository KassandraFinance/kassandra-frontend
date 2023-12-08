import styled, { css } from 'styled-components'

export const Card = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 4.6rem;

    background-color: #1d1221;
    border-radius: 16px;

    overflow: hidden;

    .btn-link {
      min-width: 16rem;
      max-width: 24rem;
    }
  `}
`

export const paragraph = styled.span`
  ${({ theme }) => css`
    margin-bottom: 2.4rem;

    font-size: ${theme.font.sizes.font32};
    font-weight: ${theme.font.weight.medium};
    line-height: 3.2rem;
    letter-spacing: 1.6px;
    text-align: center;
    text-decoration: none;
  `}
`

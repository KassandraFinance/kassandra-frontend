import styled, { css } from 'styled-components'

export const Card = styled.div`
  ${() => css`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 4.6rem;

    background-color: #1d1221;
    background-image: url('/assets/images/background-card.png');
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center center;
    border-radius: 16px;

    overflow: hidden;
    z-index: 2;

    &::after {
      content: '';

      position: absolute;
      bottom: -3rem;

      height: 100%;
      width: 100%;

      background-image: url('/assets/images/gradient-line-card.png');
      background-repeat: no-repeat;
      background-size: auto;
      background-position: center center;

      z-index: 1;
    }

    .btn-link {
      min-width: 16rem;
      max-width: 24rem;

      z-index: 3;
    }

    @media (max-width: 576px) {
      padding: 3.2rem;
    }
  `}
`

export const Title = styled.span`
  ${({ theme }) => css`
    margin-bottom: 2.4rem;
    z-index: 3;

    font-size: ${theme.font.sizes.font32};
    font-weight: ${theme.font.weight.medium};
    line-height: 3.2rem;
    text-align: center;
    text-decoration: none;

    @media (max-width: 576px) {
      font-size: ${theme.font.sizes.font24};
    }
  `}
`

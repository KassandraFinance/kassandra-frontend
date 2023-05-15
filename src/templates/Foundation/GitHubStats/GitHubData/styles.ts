import styled from 'styled-components'

import theme from '../../../../styles/theme'

interface IGitHubProps {
  isCurrentYar: boolean
}

// prettier-ignore
export const GitHubStats = styled.div<IGitHubProps>`
  width: 53rem;

  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.6rem;

    font-size: ${theme.font.sizes.font14};
    line-height: 1.6rem;
    letter-spacing: 0.22em;
    font-weight: ${theme.font.weight.normal};
    color: #ffbf00;
  }

  .data {
    display: flex;
    justify-content: ${({ isCurrentYar }) =>
      isCurrentYar ? 'space-between' : 'right'} ;
    padding: 0 3.2rem;
    border-top: solid 0.1rem #ffbf00;

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      span {
        margin-top: 2.4rem;
        margin-bottom: 0.8rem;
        font-size: ${theme.font.sizes.font56};
        line-height: 4.8rem;
        font-weight: ${theme.font.weight.medium};
      }

      p {
        font-size: ${theme.font.sizes.font14};
        line-height: 1.6rem;
        letter-spacing: 0.22em;
        font-weight: ${theme.font.weight.normal};
        color: #ffbf00;
      }
    }
  }

  @media (max-width: 992px) {
    width: 100%;
    .data {
      padding: 0 4.05rem;
    }
  }

  @media (max-width: 576px) {
    .data {
      padding: 0 2.15rem;
      .stat {
        span {
          font-size: ${theme.font.sizes.font32};
          line-height: 4.8rem;
          font-weight: ${theme.font.weight.medium};
        }

        p {
          font-size: ${theme.font.sizes.font12};
          line-height: 1.2rem;
          letter-spacing: 0.22em;
        }
      }
    }
  }
`

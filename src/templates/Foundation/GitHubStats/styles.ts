import styled from 'styled-components'

import theme from '../../../styles/theme'

export const GitHubStatsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 2rem;
    letter-spacing: 0.4em;
    color: #ffbf00;
  }
`

export const Divider = styled.div`
  width: 9.8rem;
  height: 0.1rem;
  margin-top: 2.4rem;

  background: #ffbf00;
  border-radius: 0.05rem;
`

export const GitHubStatsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 9.3rem;
  margin-top: 5.6rem;

  @media (max-width: 1080px) {
    width: 100%;

    padding: 0 2.4rem;
    gap: 0;
    justify-content: space-between;
  }

  @media (max-width: 992px) {
    width: 100%;

    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 6.47rem;
  }

  @media (max-width: 576px) {
    padding: 0 1.6rem;
  }
`

export const GitHub = styled.div`
  max-width: 39.2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .logoGitHub {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-left: 1.6rem;

      font-size: ${theme.font.sizes.font14};
      font-weight: ${theme.font.weight.normal};
      letter-spacing: 0.22em;
      line-height: 1.4rem;
      color: #ffbf00;
    }
  }

  h1 {
    margin-top: 1.29rem;
    margin-bottom: 2.4rem;

    font-size: ${theme.font.sizes.font24};
    line-height: 3.2rem;
    font-weight: ${theme.font.weight.medium};
  }

  p {
    margin-bottom: 3.2rem;

    font-size: ${theme.font.sizes.font16};
    line-height: 2.4rem;
    font-weight: ${theme.font.weight.light};
  }

  @media (max-width: 992px) {
    max-width: 100%;
  }
`

export const GitHubStatsData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8.15rem;

  @media (max-width: 992px) {
    min-width: 100%;
  }
`

export const ArticlesContent = styled.div`
  width: 102.8rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 11.5rem;

  margin-top: 13.3rem;

  @media (max-width: 1080px) {
    width: 100%;

    padding: 0 2.4rem;
    gap: 0;
    justify-content: space-between;
  }

  @media (max-width: 992px) {
    width: 100%;

    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    gap: 6.47rem;
  }

  @media (max-width: 576px) {
    padding: 0 1.6rem;
  }
`

export const ArticlesData = styled.div`
  max-width: 52rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h1 {
    margin-bottom: 1rem;

    font-size: 4.7rem;
    line-height: 5rem;
    font-weight: ${theme.font.weight.medium};
  }

  .totalArticles {
    margin-top: 4rem;

    font-size: 8rem;
    line-height: 9rem;
    font-weight: ${theme.font.weight.medium};
  }

  p {
    font-size: ${theme.font.sizes.font14};
    line-height: 1.6rem;
    letter-spacing: 0.22em;
    font-weight: ${theme.font.weight.normal};
    color: #ffbf00;
  }

  a {
    color: #ffbf00;

    svg {
      path {
        stroke: #ffbf00;
      }
    }

    &:hover {
      color: ${theme.colors.amber};
      .icon {
        > svg {
          path {
            stroke: ${theme.colors.amber};
          }
        }
      }
    }
  }

  @media (max-width: 992px) {
    width: 100%;
    align-items: center;
  }

  @media (max-width: 576px) {
    align-items: flex-start;

    h1 {
      margin-bottom: 1rem;

      font-size: 3.2rem;
      line-height: 3.2rem;
    }

    .totalArticles {
      font-size: 4.8rem;
      line-height: 4.8rem;
    }
  }
`

export const Medium = styled.div`
  max-width: 39.2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .logoGitHub {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-left: 1.6rem;

      font-size: ${theme.font.sizes.font14};
      font-weight: ${theme.font.weight.normal};
      letter-spacing: 0.22em;
      line-height: 1.4rem;
      color: #ffbf00;
    }
  }

  h1 {
    font-size: ${theme.font.sizes.font24};
    line-height: 3.2rem;
    font-weight: ${theme.font.weight.medium};

    margin-top: 1.29rem;
    margin-bottom: 2.4rem;
  }

  p {
    font-size: ${theme.font.sizes.font16};
    line-height: 2.4rem;
    font-weight: ${theme.font.weight.light};

    margin-bottom: 3.2rem;
  }

  @media (max-width: 992px) {
    max-width: 100%;
  }
`

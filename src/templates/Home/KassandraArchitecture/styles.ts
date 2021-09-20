import styled, { css } from 'styled-components'

export const KassandraArchitecture = styled.section`
  ${({ theme }) => css`
    text-align: center;
    padding: 80px 32px;
    max-width: 1520px;
    margin: 0 auto;
    @media (max-width: 320px) {
      padding: 40px 20px;
    }
    h1 {
      font-size: ${theme.font.sizes.font40};
      font-weight: ${theme.font.weight.medium};
      text-align: center;
      @media (max-width: 800px) {
        font-size: ${theme.font.sizes.font32};
      }
      @media (max-width: 500px) {
        font-size: ${theme.font.sizes.font24};
      }
    }
    p {
      font-size: ${theme.font.sizes.font24};
      font-weight: ${theme.font.weight.light};
      text-align: center;
      max-width: 1000px;
      margin: 48px auto;
      @media (max-width: 800px) {
        font-size: ${theme.font.sizes.font18};
      }
      @media (max-width: 500px) {
        font-size: ${theme.font.sizes.font16};
        margin: ${theme.spacings.space16} auto 32px;
      }
    }
    .img-kassandra-architecture {
      max-width: 100%;
    }
    .grid-paragraph {
      display: grid;
      grid-template-columns: 4fr 5fr;
      gap: 80px;
      margin: 64px 0;
      @media (max-width: 800px) {
        grid-template-columns: 1fr;
        gap: 0px;
      }
      p {
        font-size: ${theme.font.sizes.font18};
        text-align: left;
        margin: 8px 0;
        @media (max-width: 800px) {
          font-size: ${theme.font.sizes.font16};
        }
        @media (max-width: 500px) {
          font-size: 15px;
        }
      }
    }
  `}
`

export const Text = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 4fr 5fr;
    gap: 80px;
    margin: 64px 0;
    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      gap: 0px;
    }
    p {
      font-size: ${theme.font.sizes.font18};
      text-align: left;
      margin: 8px 0;
      @media (max-width: 800px) {
        font-size: ${theme.font.sizes.font16};
      }
      @media (max-width: 500px) {
        font-size: 15px;
      }
    }
  `}
`

import styled, { css } from 'styled-components'

export const Supporters = styled.section`
  ${({ theme }) => css`
    padding: 40px 32px 0;
    h1 {
      font-size: 44px;
      font-weight: ${theme.font.weight.medium};
      text-align: center;
      @media (max-width: 600px) {
        font-size: ${theme.font.sizes.font24};
      }
    }

    p {
      font-size: ${theme.font.sizes.font24};
      max-width: 700px;
      margin: 36px auto 0;
      text-align: center;
      @media (max-width: 600px) {
        font-size: ${theme.font.sizes.font16};
        max-width: 280px;
        margin: ${theme.spacings.space16} auto 0;
      }
    }
    .grid-supporters {
      display: flex;
      justify-items: center;
      align-items: center;
      padding: 64px 0;
      a {
        flex: auto;
        text-align: center;
        img {
          height: 50px;
          width: 100%;
        }
      }
      @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
      }
      @media (max-width: 600px) {
        grid-template-columns: 1fr;
        gap: 40px;
      }
    }
  `}
`

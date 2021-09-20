import styled, { css } from 'styled-components'

export const Products = styled.section`
  ${({ theme }) => css`
    padding: 80px ${theme.spacings.space32};
    margin: 0 auto;
    max-width: 1520px;

    @media (min-width: 900px) {
      padding: 80px ${theme.spacings.space32};
    }

    @media (max-width: 375px) and (max-height: 800px) {
      padding-top: 100px;
    }
    @media (max-width: 370px) {
      padding-top: 120px;
    }
    @media (max-width: 330px) {
      padding: 180px 20px 0;
    }
    h1 {
      font-size: ${theme.font.sizes.font40};
      font-weight: ${theme.font.weight.medium};
      text-align: center;

      margin-bottom: ${theme.spacings.space48}
;
    }
    p {
      font-size: ${theme.font.sizes.font24};
      font-weight: ${theme.font.weight.light};
      max-width: 700px;
      margin: 0 auto;
      text-align: center;
      @media (max-width: 600px) {
        font-size: 22px;
      }
      @media (max-width: 500px) {
        font-size: ${theme.font.sizes.font20};
      }
    }
    .more-icon {
      display: block;
      margin: ${theme.spacings.space16} auto;
    }
    .more-text {
      font-size: ${theme.font.sizes.font20};
      font-weight: ${theme.font.weight.medium};
      text-align: center;
      margin: ${theme.spacings.space16} auto;
    }
  `}
`

export const Heim = styled.div`
  ${({ theme }) => css`
    border: none;
    border-radius: 50px;
    box-shadow:
      inset 0px 48.9702px 70.3162px -45.2033px rgba(255, 255, 255, 0.7),
      inset 0px 8.78952px 13.8121px -5.02258px rgba(255, 255, 255, 0.5),
      inset 0px -102.963px 85.3839px -80.3614px rgba(96, 68, 145, 0.3),
      inset 0px 123.053px 125.565px -60.271px rgba(202, 172, 255, 0.3), inset 0px 5.02258px 22.6016px rgba(154, 146, 210, 0.3),
      inset 0px 1.25565px 50.2258px rgba(227, 222, 255, 0.2);

    display: grid;
    grid-template-columns: 200px auto 200px;
    gap: 40px;
    justify-items: center;
    align-items: center;

    margin-top: ${theme.spacings.space48};
    padding: 56px 64px;
    position: relative;
    img {
      max-width: 100%;
      @media (max-width: 600px) {
        max-width: 170px;
      }
    }
    .arrow-right {
      color: ${theme.colors.cyan};
      font-size: ${theme.font.sizes.font16};
      text-decoration: none;
      @media (max-width: 420px) {
        margin: 20px 0;
      }
      &:hover {
        text-decoration: underline;
      }
      img {
        margin-left: ${theme.spacings.space8};
      }
    }
    @media (max-width: 880px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    @media (max-width: 700px) {
      padding: ${theme.spacings.space32} 56px;
    }
    @media (max-width: 500px) {
      padding: ${theme.spacings.space32} 48px;
    }
    @media (max-width: 420px) {
      padding: ${theme.spacings.space32};
    }
  `}
`

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    a {
      background ${`linear-gradient(264.12deg, ${theme.colors.magenta} -179.71%, ${theme.colors.darkBlue} 205.21%)`};
      border: none;
      border-radius: ${theme.border.radius};
      color: ${theme.colors.snow};
      text-align: center;
      text-decoration: none;
      font-size: ${theme.font.sizes.font20};
      line-height: 20px;

      height: 52px;
      padding: ${theme.spacings.space16} 32px;
      margin: ${theme.spacings.space16} 0;
      cursor: pointer;
      &:hover {
        background: #020887;
      }
      @media (max-width: 600px) {
        font-size: ${theme.font.sizes.font16};
        line-height: 16px;
        height: 48px;
      }
    }
  `}
`

export const LearnMore = styled.a`
  ${({ theme }) => css`
    background: transparent !important;
    border: 1px solid ${theme.colors.cyan} !important;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.snow} !important;
    text-decoration: none;
    font-size: ${theme.font.sizes.font20};

    height: 52px;
    padding: 12px 32px;
    cursor: pointer;
    transition-duration: 300ms;
    &:hover {
      background-color: ${theme.colors.cyan} !important;
      color: ${theme.colors.darkPurple}
 !important;
    }
    @media (max-width: 600px) {
      font-size: ${theme.font.sizes.font16};
      height: 48px;
    }
  `}
`

export const HeimDescription = styled.div`
  ${({ theme }) => css`
    text-align: left;
    h3 {
      font-size: ${theme.font.sizes.font24};
      font-weight: ${theme.font.weight.medium};
    }
    p {
      font-size: ${theme.font.sizes.font18};
      text-align: left;

      max-width: 600px;
      margin: ${theme.spacings.space16} 0;
    }
    .first-paragraph {
      font-weight: ${theme.font.weight.light};
    }
    .second-paragraph {
      font-weight: ${theme.font.weight.medium};
    }
    @media (max-width: 960px) {
      h3 {
        font-size: 28px;
      }
      p {
        font-size: ${theme.font.sizes.font18};
      }
    }
    @media (max-width: 880px) {
      h3 {
        font-size: ${theme.font.sizes.font32};
      }
      p {
        font-size: 22px;
      }
    }
    @media (max-width: 540px) {
      h3 {
        font-size: ${theme.font.sizes.font20};
      }
      p {
        font-size: ${theme.font.sizes.font16};
      }
    }
  `}
`

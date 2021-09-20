import styled, { css } from 'styled-components'

export const Hero = styled.section`
  ${({ theme }) => css`
    height: calc(100vh - 110px);
    padding: 0 ${theme.spacings.space32}
;
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    max-width: 1520px;
    @media (max-width: 959px) {
      display: flex;
      flex-direction: column;
      height: calc(100vh - 160px);
      margin-bottom: 32px;
    }
    @media (max-width: 600px) {
      height: calc(100vh - 120px);
    }
    @media (max-width: 370px) {
      height: calc(100vh - 160px);
    }
    @media (max-width: 330px) {
      height: calc(100vh - 200px);
      padding: 0 20px;
    }
    @media (min-height: 300px) and (max-height: 420px) {
      min-height: 600px;
    }
    h1 {
      font-size: 112px;
      font-weight: ${theme.font.weight.normal};

      line-height: 94px;
      @media (max-width: 1200px) {
        font-size: 80px;
        line-height: 70px;
      }
      @media (max-width: 959px) {
        font-size: 70px;
        line-height: 60px;
      }
      @media (max-width: 770px) {
        font-size: 60px;
        margin-bottom: 32px;
      }
      @media (max-width: 600px) {
        font-size: 50px;
      }
      @media (max-width: 420px) {
        font-size: 36px;
        margin-bottom: 0;
      }
    }
    h3 {
      font-size: ${theme.font.sizes.font24};
      font-weight: ${theme.font.weight.light};
      margin: 32px 0;
      max-width: 600px;
      @media (max-width: 1200px) {
        font-size: 27px;
      }
      @media (max-width: 959px) {
        text-align: center;
        margin: 0 auto;
        margin: 8px 0 32px;
        font-size: 22px;
      }
      @media (max-width: 770px) {
        font-size: ${theme.font.sizes.font18};
        max-width: 500px;
      }
      @media (max-width: 420px) {
        max-width: 360px;
      }
      @media (min-width: 375px) {
        margin: 8px 0 16px;
      }
    }
    .kassandra {
      max-width: 500px;
      max-height: 700px;

      width: 100%;

      @media (min-width: 1440px) {
        max-width: 100%;
      }
      @media (max-width: 1240px) {
        max-width: 100%;
        min-width: 230px;
      }
      @media (max-width: 959px) {
        max-width: 400px;
      }
      @media (max-width: 600px) {
        max-width: 300px;
      }
      @media (max-width: 360px) {
        max-width: 240px;
      }
    }
  `}
`

export const DesktopScreen = styled.div`
  @media (max-width: 959px) {
    display: none;
  }
`

export const MobileScreen = styled.div`
  @media (min-width: 960px) {
    display: none;
  }
`

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    max-width: 460px;
    @media (max-width: 960px) {
      margin: 0 auto;
    }
    @media (max-width: 560px) {
      max-width: 400px;
    }
    @media (max-width: 440px) {
      flex-direction: column;
      height: 110px;
    }

    a {
      border-color: ${theme.colors.cyan};
      border-radius: ${theme.border.radius};
      color: ${theme.colors.snow};
      text-align: center;
      text-decoration: none;
      font-size: ${theme.font.sizes.font20};
      line-height: 20px;

      height: 52px;
      padding: ${theme.spacings.space16} 32px;
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

export const WithpaperButton = styled.a`
  ${({ theme }) => css`
    border: none;
    border-radius: ${theme.border.radius};
    font-family: ${theme.font.family};
    text-decoration: none;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    position: relative;
    padding: ${theme.spacings.space8};

    overflow: hidden;
    cursor: pointer;
    z-index: 1;
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
    &:after {
      content: '';
      border-radius: ${theme.border.radius};

      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;

      z-index: -2;
    }
    &:hover {
      background-color: ${theme.colors.cyan} !important;
      color: ${theme.colors.darkPurple} !important;
    }
    @media (max-width: 600px) {
      font-size: ${theme.font.sizes.font16};
      height: 48px;
    }
  `}
`

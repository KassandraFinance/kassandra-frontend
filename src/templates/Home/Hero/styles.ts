import styled from 'styled-components'
import theme from '../../../styles/theme'

import * as ButtonStyles from '../../../components/Button/styles'

export const Hero = styled.section`

    height: 170vh;
    /* padding: 0 ${theme.spacings.space32}; */
    margin-bottom: -20vh;

    background: url('assets/home-hero-background.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;

`
export const IntroHero = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    margin: 0 auto;
    margin-top: 300px;
    max-width: 925px;

    @media(min-width: 2350px) {
      margin-top: 360px;
    }

    h1 {
      font-size: 72px;
      font-weight: ${theme.font.weight.black};
      text-align: center;
      line-height: 72px;
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
      font-size: ${theme.font.sizes.font18};
      font-weight: ${theme.font.weight.light};
      margin-bottom: 85px;
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
      @media (max-width: 375px) {
        margin: 8px 0 16px;
      }
    }
    `
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 72px;
    ${ButtonStyles.Wrapper} {
      padding: 16px 24px;
      font-size: ${theme.font.sizes.font18};
      font-weight: ${theme.font.weight.medium};
      height: 50px;

    }
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



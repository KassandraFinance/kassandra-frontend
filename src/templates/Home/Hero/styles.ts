import styled from 'styled-components'
import theme from '../../../styles/theme'

import * as ButtonStyles from '../../../components/Button/styles'

export const Hero = styled.section`

    min-height: 170vh;
    margin-bottom: -600px;
    background: url('assets/home-hero-background.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    @media(max-height: 600px) {
      margin-bottom: 0px ;
    }
    @media(max-width: 960px) {
      margin-bottom: -50vh;
    }
    @media(max-width: 600px) {
      height: 130vh;
      margin-bottom: 0vh;
    }
`
export const IntroHero = styled.div`

    display: flex;
    flex-direction:column;
    align-items: center;
    margin: 0 auto;
    margin-top: 280px;
    max-width: 925px;

    @media (min-width: 2350px) {
      margin-top: 360px;
    }
    @media (max-width: 960px) {
      margin-top: 170px;
    }
    @media (max-width: 780px) {
      margin-top: 230px;
    }
    @media (max-width: 360px) {
      margin-top: 130px;
      @media (min-height: 800px ) {
        margin-top: 200px;
      }
    }
    @media (max-width: 330px) {
      margin-top: 90px;
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
        font-size: 60px;
        line-height: 60px;
      }
      @media (max-width: 770px) {
        font-size: 50px;
        margin-bottom: 40px;
      }
      @media (max-width: 600px) {
        font-size: 36px;
      }

      @media (max-width: 375px) {
        font-size: ${theme.font.sizes.font24};
        margin-bottom: 0;
        line-height: 20px;
      }
      @media (max-width: 350px) {
        font-size: ${theme.font.sizes.font20};
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
        margin: 8px 0 85px;
        font-size: 22px;
      }
      @media (max-width: 770px) {
        font-size: ${theme.font.sizes.font18};
        max-width: 500px;
      }
      @media (max-width: 420px) {
        font-size: ${theme.font.sizes.font14};
        max-width: 360px;
        margin-bottom: 35px;
        @media (min-height: 800px ) {
          margin-bottom: 100px;
        }
      }
      @media (max-width: 330px) {
        margin: 8px 0 16px;
        font-size: ${theme.font.sizes.font14};
        margin-bottom: 75px;
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
      height: 4.4rem;
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



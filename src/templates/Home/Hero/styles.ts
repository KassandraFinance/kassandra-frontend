import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Hero = styled.section`
  min-height: 170vh;
  margin-bottom: -50vh;

  background: url('/assets/home-hero-background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  @media (max-height: 600px) {
    margin-bottom: 0px;
    @media (max-width: 960px) {
      margin-bottom: -50vh;
    }
  }
  @media (max-width: 600px) {
    height: 130vh;
  }
`
export const IntroHero = styled.div`
  margin: 0 auto;
  margin-top: 280px;
  max-width: 925px;

  display: flex;
  flex-direction: column;
  align-items: center;
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
    @media (min-height: 800px) {
      margin-top: 200px;
    }
  }
  @media (max-width: 330px) {
    margin-top: 90px;
  }
  @media (max-height: 940px) {
    margin-top: 190px;
  }
  @media (max-height: 760px) {
    margin-top: 170px;
  }
  @media (max-height: 645px) {
    margin-top: 120px;
  }
  @media (max-height: 595px) {
    margin-top: 50px;
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
    @media (max-width: 450px) {
      font-size: 32px;
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
    max-width: 600px;
    margin-bottom: 85px;

    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.light};
    @media (max-width: 1200px) {
      font-size: 27px;
    }
    @media (max-width: 959px) {
      margin: 0 auto;
      margin: 8px 0 85px;

      text-align: center;
      font-size: 22px;
    }
    @media (max-width: 770px) {
      max-width: 500px;

      font-size: ${theme.font.sizes.font18};
    }
    @media (max-width: 420px) {
      max-width: 360px;
      margin-bottom: 35px;

      font-size: ${theme.font.sizes.font14};
      @media (min-height: 800px) {
        margin-bottom: 100px;
      }
    }
    @media (max-width: 330px) {
      margin: 8px 0 75px;

      font-size: ${theme.font.sizes.font14};
    }
  }
`

export const ButtonWrapper = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  gap: 16px;

  width: 314px;
  margin: 72px auto 0;
  @media (max-width: 420px) {
    text-align: center;
    grid-template-columns: 1fr;
    gap: 16px;
    width: 154px;
    .btn-cta {
      width: 100%;
    }
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

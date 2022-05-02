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
    margin-bottom: 0;

    @media (max-width: 960px) {
      margin-bottom: -50vh;
    }
  }
  @media (max-width: 600px) {
    height: 130vh;
  }
`

export const IntroHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 92.5rem;
  margin: 0 auto;
  margin-top: 28rem;

  @media (min-width: 2350px) {
    margin-top: 36rem;
  }
  @media (max-width: 960px) {
    margin-top: 17rem;
  }
  @media (max-width: 780px) {
    margin-top: 23rem;
  }
  @media (max-width: 360px) {
    margin-top: 13rem;
    @media (min-height: 800px) {
      margin-top: 20rem;
    }
  }
  @media (max-width: 330px) {
    margin-top: 9rem;
  }
  @media (max-height: 940px) {
    margin-top: 19rem;
  }
  @media (max-height: 760px) {
    margin-top: 17rem;
  }
  @media (max-height: 645px) {
    margin-top: 12rem;
  }
  @media (max-height: 595px) {
    margin-top: 5rem;
  }

  h1 {
    font-size: 7.2rem;
    font-weight: ${theme.font.weight.black};
    text-align: center;
    line-height: 7.2rem;

    @media (max-width: 1200px) {
      font-size: 8rem;
      line-height: 7rem;
    }
    @media (max-width: 959px) {
      font-size: 6rem;
      line-height: 6rem;
    }
    @media (max-width: 770px) {
      margin-bottom: 4rem;
      font-size: 5rem;
    }
    @media (max-width: 600px) {
      font-size: 3.6rem;
    }
    @media (max-width: 450px) {
      font-size: 3.2rem;
    }
    @media (max-width: 375px) {
      margin-bottom: 0;

      font-size: ${theme.font.sizes.font24};
      line-height: 2rem;
    }
    @media (max-width: 350px) {
      font-size: ${theme.font.sizes.font20};
    }
  }

  h3 {
    max-width: 60rem;
    margin-bottom: 8.5rem;

    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.light};

    @media (max-width: 1200px) {
      font-size: 2.7rem;
    }
    @media (max-width: 959px) {
      margin: 0 auto;
      margin: 0.8rem 0 8.5rem;

      text-align: center;
      font-size: 2.2rem;
    }
    @media (max-width: 770px) {
      max-width: 50rem;

      font-size: ${theme.font.sizes.font18};
    }
    @media (max-width: 420px) {
      max-width: 36rem;
      margin-bottom: 3.5rem;

      font-size: ${theme.font.sizes.font14};
      @media (min-height: 800px) {
        margin-bottom: 10rem;
      }
    }
    @media (max-width: 330px) {
      margin: 0.8rem 0 7.5rem;

      font-size: ${theme.font.sizes.font14};
    }
  }
`

export const ButtonWrapper = styled.ul`
  display: grid;
  grid-template-columns: auto auto;

  width: 31.4rem;
  margin: 7.2rem auto 0;
  gap: 1.6rem;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;

    width: 15.4rem;
    gap: 1.6rem;
    text-align: center;

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

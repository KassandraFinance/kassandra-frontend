import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Hero = styled.section`
  display: grid;
  align-content: center;
  grid-template-columns: 1.1fr 1fr;
  grid-column-gap: 6rem;
  margin: 5.6rem auto 10rem;

  max-width: 104.2rem;
  align-items: center;
  padding: 0 3.2rem;
  align-items: start;
  p {
    font-size: 1.6rem;
    font-weight: ${theme.font.weight.light};
    line-height: 180%;
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    margin: 2rem auto 4rem;

    img {
      display: none;
    }
  }
`

export const HeroImage = styled.div`
  img {
    max-width: 100%;
  }
`

export const Divider = styled.div`
  max-width: 10rem;
  border: 1px solid #f79640;
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
`
export const IntroHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: ${theme.font.sizes.font40};
    font-weight: ${theme.font.weight.black};
    text-align: left;
    max-width: 45.5rem;
    margin-top: 2.8rem;

    @media (max-width: 960px) {
      max-width: 100%;
    }

    @media (max-width: 770px) {
      margin: 12px 0 40px;
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
    }
    @media (max-width: 350px) {
      font-size: ${theme.font.sizes.font20};
    }
  }
  span {
    font-size: ${theme.font.sizes.font16};
    letter-spacing: 0.4rem;
    color: ${theme.colors.amber};
    margin-top: 10rem;
    @media (max-width: 960px) {
      margin-top: 0;
    }
    @media (max-width: 570px) {
      font-size: ${theme.font.sizes.font14};
    }
  }
`
//IntroTextWrapper
export const IntroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 960px) {
    margin-top: 5rem;
    img {
      display: block;
    }
  }
  @media (max-width: 488px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
  }
`
export const Card = styled.div`
  margin: 0 auto;
  @media (max-width: 960px) {
    margin: 0;
  }
  @media (max-width: 488px) {
    display: flex;
    flex-direction: row;
    margin: 0 0 2.4rem;
  }
  span {
    display: block;
    margin: 1.6rem 0 1rem;

    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.bold};
    line-height: 104%;
    color: #ffffff;
    letter-spacing: 0;
    @media (max-width: 488px) {
      margin-left: 1.6rem;
    }
  }
`
export const IconWrapper = styled.div`
  width: 68px;
  height: 68px;
  padding: 2px;
  background-image: linear-gradient(
    180deg,
    rgba(232, 67, 196, 0.2) 0%,
    rgba(255, 191, 0, 0.2) 100%
  );
  border-radius: 50%;
`
export const BackgroundIcon = styled.div`
  display: flex;
  width: 99%;
  height: 99%;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`
export const GradienteDivider = styled.div`
  max-width: 3.5rem;
  height: 0.1rem;
  background: linear-gradient(90deg, #e843c4 0%, #ffbf00 100%);
  margin: 1.6rem 0 0;
`
export const CardRectangleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 104.2rem;

  margin: 0 auto;
  justify-content: space-around;
  @media (max-width: 1100px) {
    padding: 0 3.2rem;
    column-gap: 1.6rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const CardRectangle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  max-width: 46rem;
  min-height: 22rem;
  background: #ffffff0a;
  border-radius: 1.2rem;
  padding: 2.4rem;
  margin: 0 auto 10rem;
  span {
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 0.4rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 180%;
  }
  @media (max-width: 960px) {
    flex-direction: column;
    margin-bottom: 4rem;
  }
`

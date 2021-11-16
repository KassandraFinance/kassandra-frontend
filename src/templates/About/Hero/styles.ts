import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Hero = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 6rem;
  margin: 0 auto;
  margin-top: 5.6rem;
  max-width: 104.2rem;
  align-items: center;
  padding: 0 3.2rem;
  align-items: start;
  p {
    font-size: 1.6rem;
    font-weight: ${theme.font.weight.light};
    line-height: 180%;
  }
`
export const Divider = styled.div`
  max-width: 10rem;
  height: 0.1rem;
  background-color: #f79640;
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
`
export const IntroHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 4.8rem;
    font-weight: ${theme.font.weight.black};
    text-align: left;
    max-width: 35.5rem;
    margin-top: 3.2rem;

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
  span {
    font-size: ${theme.font.sizes.font16};
    letter-spacing: 0.04rem;
    color: ${theme.colors.amber};
    margin-top: 10rem;
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 72px;
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
  justify-content: space-between;

  p {
    font-size: ${theme.font.sizes.font14};
    color: ${theme.colors.amber};
    text-align: left;
    letter-spacing: 5.6px;
    letter-spacing: 4px;
    margin-top: 26px;
    margin-bottom: 12px;
  }
  span {
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    line-height: 122.5%;
    text-align: left;
  }
`
export const Card = styled.div`
  margin: 0 auto;
  p {
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.bold};
    line-height: 104%;
    color: #ffffff;
    letter-spacing: 0;
    margin: 1.6rem 0 1rem;
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
`

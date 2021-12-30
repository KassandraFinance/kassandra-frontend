import { HowItWorks } from './../../Heim/HowItWorks/index'
import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Intro = styled.section`
  max-width: 950px;
  margin: 0 auto;

  justify-content: center;
  text-align: center;
  @media (max-width: 960px) {
    padding: 40px 32px;
  }
  h1 {
    max-width: 620px;
    margin: auto;
    margin-top: 25px;
    margin-bottom: ${theme.spacings.space24};

    font-size: ${theme.font.sizes.font40};
    font-weight: ${theme.font.weight.black};
    line-height: 110%;
    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font36};
    }
    @media (max-width: 450px) {
      font-size: ${theme.font.sizes.font32};
    }
  }
`
export const Divider = styled.div`
  background: linear-gradient(99.25deg, #e843c4 0%, #ffbf00 100%, #ffbf00 100%);

  max-width: 100px;
  height: 3px;
  margin: 25px auto;
`
export const IconContainer = styled.div`
  margin: auto;
  max-width: 50px;
`
export const IconWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 100px;

  max-width: auto;
  width: 48px;
  height: 44px;

  display: table-cell;
  vertical-align: middle;

  text-align: center;
`
export const Grid = styled.div`
  max-width: 950px;
  margin: auto;

  display: grid;
  grid-template-columns: 2fr 1fr;
  @media (max-width: 960px) {
    padding: 0 32px;

    display: flex;
    flex-direction: column;
  }
`
export const TextWrapper = styled.div`
  max-width: 280px;
  margin-top: 30px;
  h1 {
    margin-block: 15px;

    font-size: ${theme.font.sizes.font24};
    line-height: 110%;
  }
  span {
    text-align: left;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 155%;
  }
  @media (max-width: 960px) {
    margin: auto;
    margin-top: 16px;
    max-width: 100%;
    text-align: center;
  }
`
export const TokenInfoWrapper = styled.section`
  background-color: transparent;
  border-top: 1px solid #282828;
  border-bottom: 1px solid #282828;

  max-width: 1000px;
  margin: 90px auto;
  padding: 1px;
  /* display: none; */
`
export const TokenInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 32px;
  }
`
export const Values = styled.div`
  margin: 60px auto;

  display: flex;
  flex-direction: column;

  text-align: center;
  p {
    margin-bottom: 16px;
    color: ${theme.colors.magenta};
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 4px;
    @media (max-width: 400px) {
      font-size: ${theme.font.sizes.font12};
    }
  }
  span {
    font-size: ${theme.font.sizes.font40};
    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font24};
    }
    @media (max-width: 400px) {
      font-size: ${theme.font.sizes.font18};
    }
  }
`
export const Link = styled.a`
  max-width: 290px;
  margin: 2.4rem auto;

  display: flex;

  text-decoration: none;
  cursor: pointer;
  a {
    margin-right: ${theme.spacings.space8};

    display: flex;
    align-items: space-between;
    justify-items: center;

    text-decoration: none;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    color: ${theme.colors.snow};
    transition: 0.15s;
    svg {
      margin-left: ${theme.spacings.space8};
    }
    &:hover {
      color: ${theme.colors.cyan};
      > svg {
        path {
          stroke: ${theme.colors.cyan};
        }
      }
    }
  }
`

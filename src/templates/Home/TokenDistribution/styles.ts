import { HowItWorks } from './../../Heim/HowItWorks/index';
import styled from 'styled-components'
import theme from '../../../styles/theme'


export const Intro = styled.section`
  max-width: 950px;
  margin: 0 auto ;
  /* padding: 80px 32px; */
  text-align: center;
  justify-content: center;
  @media(max-width: 960px) {
    padding: 40px 32px;
  }
  h1 {
  max-width: 620px;
  font-size: ${theme.font.sizes.font40};
  font-weight: ${theme.font.weight.black};
  line-height: 110%;
  margin: auto;
  margin-top: 25px;
  margin-bottom: ${theme.spacings.space24};
  @media(max-width: 960px) {
    font-size: ${theme.font.sizes.font36};
  }
  @media(max-width: 450px) {
    font-size: ${theme.font.sizes.font32};
  }
 }
`
export const Divider = styled.div`
  max-width: 100px;
  background: linear-gradient(99.25deg, #E843C4 0%, #FFBF00 100%, #FFBF00 100%);
  height: 3px;
  margin: 25px auto;
`
export const IconContainer = styled.div`
  margin: auto;
  max-width: 50px;
`
export const IconWrapper = styled.div`
  background-color: rgba(255, 255, 255, .1);
  max-width: auto;
  width: 48px;
  height: 44px;
  border-radius: 100px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;

`
export const Grid = styled.div`
  max-width: 950px;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  @media(max-width: 960px) {
    display: flex;
    flex-direction: column;
    padding: 0 32px;
  }
`
export const TextWrapper = styled.div`
  max-width: 280px;
  margin-top: 30px;
  h1{
    font-size: ${theme.font.sizes.font24};
    line-height: 110%;
    margin-block: 15px;
  }
  span{
    text-align: left;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 155%;
  }
  @media(max-width: 960px) {
    margin: auto;
    max-width: 100%;
    text-align: center;
    margin-top: 16px;
  }
`
export const TokenInfoWrapper = styled.section`
  max-width: 1000px;
  margin: 90px auto;
  background-color: transparent;
  padding: 1px;
  border-top: 1px solid #282828;
  border-bottom: 1px solid #282828;
  /* display: none; */
`
export const TokenInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media(max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 32px;
  }
`
export const Values = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px auto;
  text-align: center;
  p{
    margin-bottom: 16px;
    color: ${theme.colors.magenta};
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 4px;
    @media(max-width: 400px) {
      font-size: ${theme.font.sizes.font12};
    }
  }
  span{
    font-size: ${theme.font.sizes.font40};
    @media(max-width: 960px) {
      font-size: ${theme.font.sizes.font24};
    }
    @media(max-width: 400px) {
      font-size: ${theme.font.sizes.font18};
    }
  }
`
export const Link = styled.a`
  display: flex;
  text-decoration: none;
  max-width: 290px;
  margin:  2.4rem auto;
  cursor: pointer;
  a {
  display: flex;
  align-items: space-between;
  text-decoration: none;
  justify-items: center;
  text-decoration: none;
  font-size: ${theme.font.sizes.font14};
  font-weight: ${theme.font.weight.light};
  color: ${theme.colors.snow};
  margin-right: ${theme.spacings.space8};
  transition: 0.15s;
  svg{
    margin-left: ${theme.spacings.space8};
  }
  &:hover {
      color: ${theme.colors.cyan};
      >svg {
        path{
          stroke: ${theme.colors.cyan};
        }
      }
    }
  }
`

import { HowItWorks } from './../../Heim/HowItWorks/index';
import styled from 'styled-components'
import theme from '../../../styles/theme'

import * as ButtonStyles from '../../../components/Button/styles'

export const Container = styled.div`
  max-width: 100%;
  background: url('assets/backgroundTokensPage.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
`
export const Intro = styled.section`
  max-width: 950px;
  margin: 0 auto;
  padding: 80px 32px;
  text-align: center;
  justify-content: center;
  h1 {
    max-width: 620px;
    font-size: ${theme.font.sizes.font40};
    font-weight: ${theme.font.weight.black};
    line-height: 110%;
    margin: auto;
    margin-top: 25px;
    margin-bottom: ${theme.spacings.space24};
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
`
export const TokenInfoWrapper = styled.section`
  max-width: 1000px;
  margin: 90px auto;
  background-color: transparent;
  padding: 1px;
  border-top: 1px solid #282828;
  border-bottom: 1px solid #282828;
`
export const TokenInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
  }
  span{
    font-size: ${theme.font.sizes.font40};
  }
`
export const Link = styled.div`
  display: flex;
  max-width: 290px;
  margin: auto;
  p{
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    margin-right: 16px;
  }
`

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
export const Token = styled.section`

  padding: 80px 32px;
  text-align: center;

  span{
    display: flex;
    font-size: ${theme.font.sizes.font16};
    line-height: 155%;
    max-width: 500px;
    margin: 0 auto;
  }
  h1 {
    max-width: 620px;
    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.black};
    line-height: 104%;
    margin: auto;
    margin-bottom: ${theme.spacings.space24};
  }
  p {
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 4px;
    color: ${theme.colors.cyan};
    text-align: center;
    margin: 0 auto;
  }

`
export const Divider = styled.div`
  max-width: 100px;
  border: 1px solid ${theme.colors.cyan};
  margin: 25px auto;
`
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 75px auto;
  max-width: 1000px;
  gap: 24px;
  @media(max-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
export const Card = styled.div`
  max-width: 490px;
  max-height: max-content;
  border-radius: 12px;
  background: rgba(31, 31, 31, 0.72);
  box-shadow: 0px 4px 69px -17px rgba(0, 0, 0, 0,51);

`
export const CardHeader = styled.div`
  max-width: 100%;
  height: 100px;
  background:#190E1D url('assets/backgroundHeimToken.png') no-repeat;
  background-position: right 20% center;
  border-radius: 12px;
`
export const ImageWrapper = styled.div`
    background: rgba(33, 20, 38, 1);
    max-width: 96px;
    height: 96px;
    border-radius: 100px;
    display: flex;
    position: absolute;
    margin-top: 36px;
    margin-left: 57px;

`
export const TextWrapper = styled.div`
  text-align: left;
  margin: 55px auto;
  max-width: 360px;
  h1{
    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.light};
    line-height: 104%;
    margin: 0;
  }
  p{
    text-align: left;
    font-size: ${theme.font.sizes.font12};
    color: ${theme.colors.snow};
    letter-spacing: 0px;
  }
  span{
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    line-height: 180%;
    margin-top: 30px;
  }
`
export const TokenInfo = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  gap: 50px;
  margin: auto;
  max-width: 360px;
  margin-bottom: 14px;

`
export const Price = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;


  > div{
    display: flex;
    margin-left: 6px;
    align-items: center;
    p{
      color:#5EE56B;
    }
  }
  span {
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
  }
`
export const TokensSymbols = styled.div`
  display: flex;
  span{
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.light};
    margin-left: 6px;
  }
  img{
    max-height: 80%;
  }
`
export const CardFooter = styled.div`
  margin: 28px auto;
  max-width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${ButtonStyles.Wrapper} {
      width: 65%;
      padding: 16px 24px;
      font-size: ${theme.font.sizes.font18};
      font-weight: ${theme.font.weight.medium};
      height: 50px;
    }
  a{
    justify-items: center;
    /* display: block; */
    text-decoration: none;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    color: ${theme.colors.snow};
    margin-right: 8px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`
export const ComingSoon = styled.div`
  position: relative;
  max-width: 490px;
  height: 100%;
  border-radius: 12px;
  background: rgba(31, 31, 31, 0.72);
  box-shadow: 0px 4px 69px -17px rgba(0, 0, 0, 0,51);

`
export const ComingSoonContent = styled.div`
  background: linear-gradient(0deg, #FFBF00 -0.2%, #E843C4 30%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  img{
    max-width: 96px;
  }
  span{
    height: 60px;
    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.light};
    line-height: 104%;
    margin-top:18px;
  }
`
export const KassandraToken = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1000px;
  margin: 150px auto;
`
export const KassandraInfo = styled.div`
    max-width: 455px;

  p{
    color: #E843C4;
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 4px;
  }
  h1{
    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.black};
    line-height: 104%;
    margin-top: 20px;
  }
  span{
    display: inline-block;
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font16};
    line-height: 155%;
    margin-top: 40px;
  }
`
export const Content = styled.div`
  display: flex;
  div {
    display: flex;
    justify-content: space-between;
  }
  img {
    cursor: pointer;
    padding: 2px;
    /* width: auto;
    height: 30px; */
  }
`
export const WrapperIcons = styled.div`
  margin-top:20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const KasasndraCardHeader = styled.div`
  width: 100%;
  height: 100px;
  -webkit-box-shadow: inset 0px -81px 61px -20px rgba(19,9,22,0.75);
  -moz-box-shadow: inset 0px -81px 61px -20px rgba(19,9,22,0.75);
  box-shadow: inset 0px -81px 61px -20px rgba(19,9,22,0.75);
  background:#130916 url('assets/kassandra-600-cardHeader.png') no-repeat;
  background-position: right 20% bottom 60%;
  background-size: 65%;
  border-radius: 12px;
`
export const Responsabilities = styled.section`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
`
export const ResponsabilitiesTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
  h1{
    font-size: 36px;
    line-height: 104%;
    font-weight: ${theme.font.weight.semibold};
  }
`

export const ResponsabilitiesDivider = styled.div`
  max-width: 100px;
  border: 1px solid ${theme.colors.cyan};
  margin-block: 18px ;
  `

export const ResponsabilitiesCards = styled.div`
  margin-right: 40px;
  span{
    display: inline-block;
    margin-top: 26px;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 104%;
  }
`
export const IconWrapper = styled.div`
  background-color: rgba(255, 255, 255, .1);
  max-width: auto;
  width: 78px;
  height: 73px;
  border-radius: 12px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`
export const KassandraCardWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  margin-top: 75px;
  max-width: 890px;
`
export const KassandraCard = styled.div`
  display: flex;
  height: max-content;
  flex-direction: column;
  max-width: 390px;
  background-color:rgba(33, 20, 38, 0.33);
  border-radius: 12px;
  border: 1px solid #FFFFFF0D;
  text-align: left;
  padding: 31px;
  img{
    max-width: min-content;
  }
  p{
    text-align: left;
    display: inline-block;
    color: ${theme.colors.amber};
    letter-spacing: 0.22em;
    margin: 0;
    margin-top:30px;
  }
  h1{
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
  }
`

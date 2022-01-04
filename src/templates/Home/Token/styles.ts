import styled, { css } from 'styled-components'
import theme from '../../../styles/theme'

import * as ButtonStyles from '../../../components/Button/styles'

export const Token = styled.section`
  margin: 0 auto 160px;
  padding: 0 32px;
  text-align: center;
  @media (max-width: 960px) {
    padding: 0 32px;
  }
  span {
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
    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font36};
    }
    @media (max-width: 450px) {
      font-size: ${theme.font.sizes.font24};
    }
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
  gap: 32px;
  z-index: 10;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`
export const Card = styled.div`
  max-width: 490px;
  max-height: max-content;
  border-radius: 12px;
  background: rgba(31, 31, 31, 0.72);
  box-shadow: 0px 4px 69px -17px rgba(0, 0, 0, 0, 51);
  img {
    max-width: 80%;
  }
  @media (max-width: 960px) {
    margin: 0 auto;
    margin-top: 8px;
    width: 100%;
  }
`
export const CardHeader = styled.div`
  max-width: 100%;
  height: 100px;
  background: #190e1d url('assets/backgroundHeimToken.png') no-repeat;
  background-position: right 20% center;
  border-radius: 12px;
  z-index: -9;
`
export const ImageWrapper = styled.div`
  background: rgba(33, 20, 38, 1);
  max-width: 96px;
  height: 96px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  position: absolute;
  margin-top: 36px;
  margin-left: 57px;
  img {
    max-width: 60%;
  }
  @media (max-width: 960px) {
    padding-top: 8px;
    width: 80px;
    height: 80px;
    margin-top: 52px;
    margin-left: 28px;
    img {
      width: 66px;
      height: 64.2px;
    }
  }
`
export const TextWrapper = styled.div`
  text-align: left;
  margin: 55px auto;
  max-width: 365px;
  @media (max-width: 960px) {
    padding: 0 32px;
    margin: 40px auto;
  }
  p {
    text-align: left;
    font-size: ${theme.font.sizes.font12};
    color: #c4c4c4;
    letter-spacing: 0px;
    margin: 8px 0;
  }
  span {
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    line-height: 180%;
    margin-top: 30px;
  }
`
export const NameAndSymbol = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: ${theme.font.sizes.font32};
    font-weight: ${theme.font.weight.bold};
    line-height: 104%;
    margin: 0;
    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font24};
    }
    @media (max-width: 450px) {
      font-size: ${theme.font.sizes.font20};
    }
  }
`
export const TokenInfo = styled.div`
  display: flex;
  justify-content: space-between;
  /* justify-items: center; */
  gap: 50px;
  margin: auto;
  max-width: 360px;
  margin-bottom: 14px;
  @media (max-width: 960px) {
    padding: 0 24px;
  }
  @media (max-width: 340px) {
    padding: 0 0;
  }
`
export interface PriceProps {
  change: number;
}

// eslint-disable-next-line prettier/prettier
export const Price = styled.div<PriceProps>`
${({ change }) => css`
  display: flex;
  min-width: 140px;
  max-width: 100%;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 960px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  > div {
    display: flex;
    margin-left: 6px;
    align-items: center;
    p {
      margin: 0 0;
      color: ${change >= 0 ? '#5ee56b' : '#ff5a5f'};
    }
  }
  span {
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    margin: 0 6px;
  }
`}
`

export const TokensSymbols = styled.div`
  display: flex;
  align-items: center;
  z-index: 10;
  span {
    font-size: 11px;
    font-weight: ${theme.font.weight.light};
    margin-left: 16px;
    min-width: 50px;
    @media (max-width: 960px) {
      margin-left: 0;
    }
  }
  @media (max-width: 960px) {
    flex-direction: column;
    align-content: center;
  }
  img {
    max-height: 80%;
    @media (max-width: 960px) {
      max-height: 50%;
    }
  }
`
export const CardFooter = styled.div`
  margin: 28px auto;
  max-width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0 32px;
    flex-direction: column;
  }
  ${ButtonStyles.Wrapper} {
    width: 65%;
    @media (max-width: 960px) {
      margin-bottom: 16px;
      width: 100%;
    }
  }
  a {
    margin-right: 8px;
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
export const ComingSoon = styled.div`
  position: relative;
  max-width: 490px;
  height: 100%;
  border-radius: 12px;
  background: rgba(31, 31, 31, 0.72);
  box-shadow: 0px 4px 69px -17px rgba(0, 0, 0, 0, 51);
  @media (max-width: 960px) {
    display: none;
  }
`
export const ComingSoonContent = styled.div`
  background: linear-gradient(0deg, #ffbf00 -0.2%, #e843c4 30%);
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
  img {
    max-width: 96px;
  }
  span {
    height: 60px;
    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.light};
    line-height: 104%;
    margin-top: 18px;
  }
`
export const BarChartWrapper = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  border-radius: 12px;
`

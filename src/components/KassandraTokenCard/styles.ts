import styled from 'styled-components'
import theme from '../../styles/theme'

import * as ButtonStyles from '../Button/styles'

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto 160px;
  background: url('assets/BlurDivisor.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 100px 0 0;
  @media (max-width: 1050px) {
    margin: 0 auto 7rem;
    padding: 0 32px;
  }
  @media (max-width: 560px) {
    margin: 0 auto 4rem;
  }
`
export const KassandraToken = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1000px;
  margin: 0 auto 140px;
  gap: 32px;
  /* background: url('assets/BlurDivisor.svg'); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center -100px;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`
export const KassandraInfo = styled.div`
  max-width: 455px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
  h1 {
    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.bold};
    line-height: 104%;
    margin: 0;
    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font36};
    }
    @media (max-width: 450px) {
      font-size: ${theme.font.sizes.font32};
    }
  }
  p {
    color: #e843c4;
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 4px;
    margin-bottom: 8px;
  }
  span {
    display: inline-block;
    font-weight: ${theme.font.weight.light};
    color: #c4c4c4;
    font-size: ${theme.font.sizes.font16};
    line-height: 155%;
    margin-top: 40px;
  }
`
export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 960px) {
    margin: 0 auto;
    justify-content: center;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  img {
    cursor: pointer;
    padding: 2px;
    @media (max-width: 450px) {
      max-width: 80%;
    }
  }
`
export const WrapperIcons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 48px;
    margin-right: 16px;
  }
`
export const KasasndraCardHeader = styled.div`
  width: 100%;
  height: 100px;
  -webkit-box-shadow: inset 0px -81px 61px -20px rgba(19, 9, 22, 0.75);
  -moz-box-shadow: inset 0px -81px 61px -20px rgba(19, 9, 22, 0.75);
  box-shadow: inset 0px -81px 61px -20px rgba(19, 9, 22, 0.75);
  background: #130916 url('assets/kassandra-600-cardHeader.png') no-repeat;
  background-position: right 20% bottom 60%;
  background-size: 65%;
  border-radius: 12px;
`
export const Responsabilities = styled.section`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 960px) {
    padding: 0 32px;
    margin: 40px 0;
  }
  @media (max-width: 820px) {
    flex-direction: column;
  }
`
export const ResponsabilitiesTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
  max-width: 220px;
  h1 {
    font-size: 36px;
    line-height: 104%;
    font-weight: ${theme.font.weight.semibold};
  }
  @media (max-width: 960px) {
    margin: 0 32px 30px;
  }
  @media (max-width: 820px) {
    max-width: 100%;
  }
`
export const ResponsabilitiesDivider = styled.div`
  max-width: 100px;
  border: 1px solid ${theme.colors.cyan};
  margin-block: 18px;
`
export const ResponsabilitiesCards = styled.div`
  margin-right: 40px;
  max-width: 140px;
  span {
    display: inline-block;
    margin-top: 26px;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 104%;
    @media (max-width: 960px) {
      margin-bottom: 24px;
      max-width: 100px;
    }
  }
`
export const MobileCards = styled.div`
  @media (min-width: 621px) {
    display: flex;
  }

  @media (max-width: 820px) {
    margin: 0 auto;
  }

  @media (max-width: 620px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
  }
`
export const IconWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  max-width: auto;
  width: 78px;
  height: 73px;
  border-radius: 12px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
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
  @media (max-width: 960px) {
    margin-top: 36px;
    margin-left: 12px;
  }
`
export const TextWrapper = styled.div`
  text-align: left;
  /* margin: 55px auto; */
  margin: 55px auto 24px;
  max-width: 360px;
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
    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.light};
    line-height: 104%;
    margin: 0;
    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font36};
    }
    @media (max-width: 450px) {
      font-size: ${theme.font.sizes.font32};
    }
  }

  h3 {
    background-color: rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.light};

    margin-left: ${theme.spacings.space16};
    padding: 8px 12px;
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
  @media (max-width: 960px) {
    padding: 0 32px;
  }
`
export const Card = styled.div`
  max-width: 490px;
  max-height: max-content;
  border-radius: 12px;
  background: rgba(31, 31, 31, 0.72);
  box-shadow: 0px 4px 69px -17px rgba(0, 0, 0, 0, 51);
  @media (max-width: 960px) {
    margin: 0 auto;
    margin-top: 30px;
    width: 100%;
  }
`
export const Price = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  > div {
    display: flex;
    margin-left: 6px;
    align-items: center;
    p {
      color: #5ee56b;
    }
  }
  span {
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
  }
`
export const CardFooter = styled.div`
  margin: 28px auto;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  align-items: left;
  @media (max-width: 960px) {
    padding: 0 32px;
  }
  ${ButtonStyles.Wrapper} {
    width: 65%;
    @media (max-width: 960px) {
      margin-bottom: 16px;
      width: 100%;
    }
  }
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
  div {
    display: flex;
    flex-direction: row;
  }
`

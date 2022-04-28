import styled, { css } from 'styled-components'
import theme from '../../../styles/theme'

import * as ButtonStyles from '../../../components/Button/styles'

export const Token = styled.section`
  text-align: center;

  margin: 0 auto 160px;
  padding: 0 32px;

  @media (max-width: 960px) {
    padding: 0 32px;
  }

  span {
    font-size: ${theme.font.sizes.font16};
    line-height: 155%;

    max-width: 500px;
    display: flex;
    margin: 0 auto;
  }

  h1 {
    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.black};
    line-height: 104%;

    max-width: 620px;
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
  margin: 75px auto;
  max-width: 1000px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  /* gap: 32px; */

  z-index: 10;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`
export const Card = styled.div`
  border-radius: 12px;
  background: rgba(31, 31, 31, 0.72);
  box-shadow: 0px 4px 69px -17px rgba(0, 0, 0, 0, 51);

  max-width: 490px;
  max-height: max-content;
  img {
    max-width: 80%;
  }
  @media (max-width: 960px) {
    width: 100%;
    margin: 0 auto;
    margin-top: 8px;
  }
`

interface CardHeaderProps {
  isTricrypto?: boolean;
}

export const CardHeader =
  styled.div <
  CardHeaderProps >
  `
  background-color: #190e1d;
  background-repeat: no-repeat;
  background-image: ${({ isTricrypto }) =>
    isTricrypto
      ? css`url('assets/backgroundTricrypto.svg')`
      : css`url('assets/backgroundAvaxToken.svg')`};
  background-position: right 20% center;
  border-radius: 12px;

  max-width: 100%;
  height: 100px;

  z-index: -9;
`
export const ImageWrapper = styled.div`
  width: 96px;
  height: 96px;

  display: flex;
  justify-content: center;
  position: absolute;

  margin-top: 45px;
  margin-left: 45px;

  @media (max-width: 960px) {
    width: 80px;
    height: 80px;
    padding-top: 8px;
    margin: 52px 0 0 28px;
    img {
      width: 66px;
      height: 64.2px;
    }
  }
`
export const TextWrapper = styled.div`
  text-align: left;

  max-width: 365px;
  margin: 55px auto;

  @media (max-width: 960px) {
    margin: 40px auto;
    padding: 0 32px;
  }
  p {
    text-align: left;
    font-size: ${theme.font.sizes.font12};
    color: #bdbdbd;
    letter-spacing: 0px;
    text-transform: uppercase;

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
export interface IPriceProps {
  change: number;
}

// eslint-disable-next-line prettier/prettier
export const Price =
  styled.div <
  IPriceProps >
  `
  min-width: 140px;
  max-width: 100%;

  display: flex;
  align-items: center;
  @media (max-width: 960px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  > div {
    display: flex;
    margin-left: 6px;
    align-items: center;
    p {
      letter-spacing: 0;
      margin: 0 0;
      color: ${props => (props.change >= 0 ? '#5ee56b' : '#ff5a5f')};
    }
  }
  span {
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    margin: 0 6px;
  }
`

export const TokensSymbols = styled.div`
  display: flex;
  align-items: center;

  z-index: 10;
  span {
    font-size: 11px;
    font-weight: ${theme.font.weight.light};
    min-width: 50px;
    margin-left: 16px;
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
  max-width: 360px;
  margin: 28px auto;

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
    text-decoration: none;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    color: ${theme.colors.snow};

    margin-right: 8px;
    margin-right: ${theme.spacings.space8};

    display: flex;
    align-items: space-between;
    justify-items: center;

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
  border-radius: 12px;
  background: rgba(31, 31, 31, 0.72);
  box-shadow: 0px 4px 69px -17px rgba(0, 0, 0, 0, 51);

  max-width: 490px;
  height: 100%;

  position: relative;

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
  width: 100%;
  margin: 0 auto;
  max-width: 360px;

  display: block;
  border-radius: 12px;

  @media (max-width: 960px) {
    padding: 0 2.4rem;
  }
`

export const Info = styled.div`
  padding-left: 9rem;
  padding-right: 2rem;

  &:first-child {
    padding-right: 9rem;
    padding-left: 2rem;
  }

  @media (max-width: 1060px) {
    padding-left: 4rem;
    padding-right: 1rem;

    &:first-child {
      padding-right: 4rem;
      padding-left: 1rem;
    }
  }

  @media (max-width: 960px) {
    margin: 5rem auto;
    max-width: 49rem;
    width: 100%;

    padding: 0;

    &:first-child {
      padding: 0;
      order: 1;
    }
  }

  h2 {
    font-size: 3.2rem;
    text-align: left;
  }

  h4 {
    color: #ffbf00;
    font-size: 1.4rem;
    margin-bottom: 1.6rem;
    line-height: 1.6rem;
    letter-spacing: 0.6rem;
    text-transform: uppercase;
    text-align: left;
    font-weight: 400;
  }

  span {
    margin-top: 2.5rem;
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 2.4rem;
    text-align: left;
  }
`

export const InfoList = styled.ul`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  li {
    display: flex;
    align-items: center;
    gap: 1rem;

    font-size: 1.2rem;
    line-height: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.16rem;
  }
`

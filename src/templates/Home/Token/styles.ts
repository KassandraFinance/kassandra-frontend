import styled, { css } from 'styled-components'
import theme from '../../../styles/theme'

import * as ButtonStyles from '../../../components/Button/styles'

export const Token = styled.section`
  margin: 0 auto 16rem;
  padding: 0 3.2rem;

  text-align: center;

  @media (max-width: 960px) {
    padding: 0 3.2rem;
  }

  span {
    display: flex;
    max-width: 50rem;
    margin: 0 auto;

    font-size: ${theme.font.sizes.font16};
    line-height: 155%;
  }

  h1 {
    max-width: 62rem;
    margin: auto;
    margin-bottom: ${theme.spacings.space24};

    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.black};
    line-height: 104%;

    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font36};
    }

    @media (max-width: 450px) {
      font-size: ${theme.font.sizes.font24};
    }
  }

  p {
    margin: 0 auto;

    color: ${theme.colors.cyan};
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 0.4rem;
    text-align: center;
  }
`

export const Divider = styled.div`
  max-width: 10rem;
  margin: 2.5rem auto;

  border: 0.1rem solid ${theme.colors.cyan};
`

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 3.2rem;

  margin: 7.5rem auto;
  max-width: 100rem;

  z-index: 10;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`

export const Card = styled.div`
  max-width: 49rem;
  max-height: max-content;

  border-radius: 1.2rem;
  background: rgba(31, 31, 31, 0.72);
  box-shadow: 0px 0.4rem 6.9rem -1.7rem rgba(0, 0, 0, 0, 51);

  @media (max-width: 960px) {
    order: 2;
    width: 100%;
    margin: 0 auto;
    margin-top: 0.8rem;
  }
`

interface CardHeaderProps {
  isTricrypto?: boolean;
}

// eslint-disable-next-line prettier/prettier
export const CardHeader = styled.div<CardHeaderProps>`
  max-width: 100%;
  height: 10rem;

  background: #190e1d url('assets/backgroundAvaxToken.svg') no-repeat;
  background-position: right 20% center;
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;

  z-index: -9;

  background-color: #190e1d;
  background-repeat: no-repeat;
  background-image: ${({ isTricrypto }) =>
    isTricrypto
      ? css`url('assets/background-k3c.png')`
      : css`url('assets/background-ahype.png')`};
  background-position: right 20% bottom;
`
export const ImageWrapper = styled.div`
  display: flex;
  position: absolute;

  margin-top: 4.5rem;
  margin-left: 5rem;

  @media (max-width: 500px) {
    width: 8rem;
    padding-top: 0.8rem;
    margin: 5.2rem 0 0 2.8rem;
  }

  @media (max-width: 500px) {
    margin-left: 2rem;
  }
`
export const TextWrapper = styled.div`
  max-width: 36.5rem;

  margin-top: 6.8rem;
  margin-left: 5rem;
  margin-bottom: 2.4rem;

  text-align: left;

  @media (max-width: 500px) {
    margin-top: 4.4rem;
    margin-left: 2rem;
    margin-bottom: 2.3rem;
  }

  p {
    text-align: left;
    color: #c4c4c4;
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.normal};
    letter-spacing: 0px;
    text-transform: uppercase;
  }

  strong {
    color: #ffffff;
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.normal};
  }

  span {
    margin-top: 3rem;

    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    line-height: 180%;
  }
`

export const NameAndSymbol = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  h1 {
    margin: 0;

    font-size: ${theme.font.sizes.font32};
    font-weight: ${theme.font.weight.bold};
    line-height: 35.2px;

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
  align-items: center;

  padding-left: 5rem;
  padding-right: 5rem;
  margin-bottom: 1rem;

  @media (max-width: 500px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

export interface IPriceProps {
  change: number;
}

// prettier-ignore
export const Price = styled.div<IPriceProps>`
  max-width: 100%;

  display: flex;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    margin-left: 0.8rem;

    p {
      margin-left: 0.3rem;
      letter-spacing: 0;
      color: ${props => (props.change >= 0 ? '#5ee56b' : '#ff5a5f')};
    }
  }

  span {
    margin: 0;
    text-align: start;

    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
  }
`

export const TokensSymbols = styled.div`
  z-index: 10;

  display: flex;
  align-items: center;

  z-index: 10;

  span {
    min-width: 1.8rem;
    min-height: 1.8rem;
    margin-left: 0.6rem;

    font-size: 1.1rem;
    font-weight: ${theme.font.weight.light};

    @media (max-width: 960px) {
      margin-left: 0;
    }
  }
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  gap: 2.2rem;

  padding-top: 3.2rem;
  padding-right: 5rem;
  padding-bottom: 5.6rem;
  padding-left: 5rem;

  @media (max-width: 960px) {
    flex-direction: column;
    padding-bottom: 3rem;
  }

  @media (max-width: 500px) {
    padding-top: 3.2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
    padding-left: 2rem;
  }

  ${ButtonStyles.Wrapper} {
    width: 65%;
    height: 4.8rem;

    @media (max-width: 960px) {
      width: 100%;
    }
  }

  a {
    display: flex;
    align-items: space-between;
    justify-items: center;

    text-decoration: none;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    color: ${theme.colors.snow};

    transition: 0.15s;

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

  max-width: 49rem;
  height: 100%;

  border-radius: 1.2rem;
  background: rgba(31, 31, 31, 0.72);
  box-shadow: 0px 0.4rem 6.9rem -1.7rem rgba(0, 0, 0, 0, 51);

  @media (max-width: 960px) {
    display: none;
  }
`

export const ComingSoonContent = styled.div`
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  margin-right: -50%;

  color: transparent;

  background: linear-gradient(0deg, #ffbf00 -0.2%, #e843c4 30%);
  -webkit-background-clip: text;
  background-clip: text;
  transform: translate(-50%, -50%);

  span {
    height: 6rem;
    margin-top: 1.8rem;

    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.light};
    line-height: 104%;
  }
`

export const BarChartWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-left: 5rem;
  padding-right: 5rem;

  svg {
    border-radius: 12px;
  }

  @media (max-width: 500px) {
    padding-right: 2rem;
    padding-left: 2rem;
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
    font-weight: ${theme.font.weight.bold};
    text-align: left;

    @media (max-width: 500px) {
      font-size: 2.4rem;
      font-weight: ${theme.font.weight.bold};
    }
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
    margin-top: 2.4rem;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 2.4rem;
    text-align: left;

    @media (max-width: 500px) {
      font-size: ${theme.font.sizes.font14};
    }
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
    font-weight: ${theme.font.weight.light};
    letter-spacing: 0.21rem;
    word-break: break-all;
  }
`

import styled, { css } from 'styled-components'
import theme from '../../../styles/theme'

import * as ButtonStyles from '../../../components/Button/styles'

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 100rem;
  gap: 7rem;

  z-index: 10;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 6.4rem;
  }

  @media (max-width: 576px) {
    align-items: flex-start;
    width: 100%;
  }
`

export const Card = styled.div`
  max-width: 49rem;
  max-height: max-content;

  border-radius: 1.2rem;
  background: rgba(31, 31, 31, 0.72);
  box-shadow: 0px 0.4rem 6.9rem -1.7rem rgba(0, 0, 0, 0, 51);

  @media (max-width: 960px) {
    width: 100%;
    margin: 0 auto;
    margin-top: 0.8rem;
    order: 2;
  }
`

interface CardHeaderProps {
  isTricrypto?: boolean
}

export const CardHeader = styled.div<CardHeaderProps>`
  max-width: 100%;
  height: 10rem;
  z-index: -9;

  background-color: #190e1d;

  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;

  @media (max-width: 500px) {
    height: 8.2rem;
  }
`

export const ImageWrapper = styled.div`
  position: absolute;

  display: flex;
  margin-top: 4.5rem;
  margin-left: 5rem;

  @media (max-width: 500px) {
    width: 8rem;
    padding-top: 0.8rem;
    margin: 5.2rem 0 0 2.8rem;
  }

  @media (max-width: 500px) {
    margin-left: 2rem;

    width: 4.8rem;
    height: 4.8rem;
    padding-top: 0;
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
    color: #c4c4c4;
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.normal};
    letter-spacing: 0;
    text-align: left;
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
    line-height: 3.5rem;

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

  @media (max-width: 400px) {
    margin-bottom: 0rem;
  }
`

export interface IPriceProps {
  change: number
}

export const Price = styled.div<IPriceProps>`
  display: flex;
  align-items: center;
  max-width: 100%;

  > div {
    display: flex;
    align-items: center;
    margin-left: 0.8rem;

    p {
      margin-left: 0.3rem;

      color: ${props => (props.change >= 0 ? '#5ee56b' : '#ff5a5f')};
      letter-spacing: 0;
    }
  }

  span {
    margin: 0;

    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    text-align: start;
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

    @media (max-width: 400px) {
      font-size: 1.4rem;
      height: 4.2rem;
    }
  }

  a {
    display: flex;
    align-items: space-between;
    justify-items: center;

    color: ${theme.colors.snow};
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    text-decoration: none;

    transition: 0.15s;

    &:hover {
      color: ${theme.colors.cyan};

      > svg {
        path {
          stroke: ${theme.colors.cyan};
        }
      }
    }

    span {
      @media (max-width: 400px) {
        font-size: 1.4rem;
      }
    }
  }
`

export const BarChartWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-left: 5rem;
  padding-right: 5rem;

  svg {
    border-radius: 1.2rem;
  }

  @media (max-width: 500px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`

export const Info = styled.div`
  width: 39.1rem;

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
    margin-bottom: 2.4rem;
    text-align: left;

    @media (max-width: 960px) {
      text-align: center;
    }
    @media (max-width: 576px) {
      text-align: left;
    }
  }

  p {
    text-align: left;

    @media (max-width: 960px) {
      text-align: center;
    }

    @media (max-width: 576px) {
      text-align: left;
    }
  }
`

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-top: 2.4rem;

  @media (max-width: 960px) {
    align-items: center;
  }

  @media (max-width: 576px) {
    align-items: flex-start;
  }

  li {
    display: flex;
    align-items: center;
    gap: 1rem;

    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.normal};
    line-height: 1.2rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    text-align: left;

    @media (max-width: 576px) {
      font-size: 1.1rem;
    }
  }
`

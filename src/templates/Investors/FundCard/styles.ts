import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Card = styled.div`
  width: 31.8rem;

  padding-bottom: 3.2rem;
  border-radius: 1.2rem;
  background: rgba(31, 31, 31, 0.72);
  box-shadow: 0 0.4rem 6.9rem -1.7rem rgba(0, 0, 0, 0, 51);
`

export const CardHeader = styled.div`
  max-width: 100%;
  height: 10rem;

  z-index: -9;

  background-color: #190e1d;

  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
`

export const ImageWrapper = styled.div`
  position: absolute;
  margin-top: 5.55rem;
  margin-left: 4.5rem;
`

export const TextWrapper = styled.div`
  max-width: 100%;
  margin-top: 5.25rem;
`

export const NameAndSymbol = styled.div`
  margin-left: 3.2rem;
  width: 100%;

  h1 {
    font-size: 2.5rem;
    line-height: 2.5rem;
    font-weight: 700;
  }

  p {
    text-transform: Uppercase;
    margin-top: 0.8rem;

    font-size: 1.2rem;
    line-height: 1.46rem;
    font-weight: 400;
    color: #c4c4c4;
    width: 100%;

    span {
      color: #ffffff;
    }
  }
`
export const TokenInfo = styled.div`
  margin-top: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 25.4rem;
  margin-left: 3.2rem;
`

export interface IPriceProps {
  change: number
}

// prettier-ignore
export const Price = styled.div<IPriceProps>`
  display: flex;
  max-width: 25.4rem;
  align-items: center;

  span {
    margin-top: 0;

    font-size: ${theme.font.sizes.font14};
    line-height: 1.8rem;
    font-weight: ${theme.font.weight.normal};
    text-align: start;
  }

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
`

export const TokensSymbols = styled.div`
  height: 1.8rem;
  display: flex;
  align-items: center;

  justify-content: center;
  z-index: 10;

  span {
    margin-top: 0;
    min-width: 1.8rem;
    min-height: 1.8rem;
    margin-left: 0.6rem;

    font-size: 1.1rem;
    font-weight: ${theme.font.weight.light};
  }
`

export const CardFooter = styled.div`
  padding-top: 3.1rem;
  max-width: 25.4rem;
  margin-left: 3.2rem;

  a {
    width: 100%;
    height: 4.8rem;
  }
`

export const BarChartWrapper = styled.div`
  max-width: 25.4rem;
  margin-left: 3.2rem;
  margin-top: 1.7rem;

  svg {
    border-radius: 1.2rem;
  }
`

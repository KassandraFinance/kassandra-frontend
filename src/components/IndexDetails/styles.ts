import styled, { css } from 'styled-components'

export const IndexDetailsContainer = styled.section`
 ${({ theme }) => css`
    width: 100%;
    padding: 32px;
    h1 {
      font-size: ${theme.font.sizes.font32};
      font-weight: ${theme.font.weight.normal};
    }

    .colour {
      width: 30px;
      height: 30px;
      border-radius: 8px;
    }
  `}
`

export const Table = styled.table`
  width: 100%;
  margin: 40px 0;
  @media (max-width: 660px) {
    display: block;
    overflow: auto;
  }
`


export const Tr = styled.tr`
  display: grid;
  grid-template-columns: .5fr repeat(3, 3fr) 2fr;
  justify-items: center;
  height: 38px;
  margin: 16px 0;
  @media (max-width: 660px) {
    grid-template-columns: .5fr 3fr 4fr repeat(2, 2fr);
    gap: 16px;
    width: 600px;
  }
  @media (max-width: 660px) {
    width: 500px;
  }
`

export const Th = styled.th`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.normal};
    letter-spacing: .5px;
    @media (max-width: 660px) {
      font-size: 15px;
    }
  `}
`
interface ITdProps {
  change24h: boolean
  negative?: boolean
}

export const Td = styled.td<ITdProps>`
  ${props => props.change24h && {
    color: `${props.negative ? '#EB5757': '#6FCF97'}`
  }};
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.light};
    letter-spacing: .5px;
    @media (max-width: 660px) {
      font-size: 21px;
    }
  `}
`

interface ICoinProps {
  width: number
}

export const Coin = styled.div<ICoinProps>`
  display: flex;
  align-items: flex-start;
  width: ${props => props.width}px;
  img {
    max-width: 30px;
    margin-right: 16px;
  }
`

export const Colour = styled.td`
  ${({ theme }) => css`
    background-color: ${theme.colors.cyan};
    border-radius: 8px;

    width: 36px;
    height: 36px;
  `}
`

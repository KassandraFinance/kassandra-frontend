import styled, { css } from 'styled-components'
import theme from '../../styles/theme'


export const IndexDetailsContainer = styled.section`
 ${({ theme }) => css`
    width: 100%;

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
  grid-template-columns: 1fr repeat(3, 3fr) 2fr;
  justify-items: center;
  height: 38px;
  @media (max-width: 660px) {
    grid-template-columns: 1fr repeat(4, 2fr);
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

export const Td = styled.td`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.light};
    letter-spacing: .5px;
    @media (max-width: 660px) {
      font-size: 21px;
    }
  `}
`

export const Colour = styled.td`
  ${({ theme }) => css`
    background-color: ${theme.colors.cyan};
    border-radius: 8px;

    width: 30px;
    height: 30px;
  `}
`

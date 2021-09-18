import styled from 'styled-components'

export const IndexDetailsContainer = styled.section`
  width: 100%;

  h1 {
    font-size: 32px;
    font-weight: 400;
  }

  .colour {
    width: 30px;
    height: 30px;
    border-radius: 8px;
  }
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
  font-size: 16px;
  letter-spacing: .5px;
  font-weight: 400;
  @media (max-width: 660px) {
    font-size: 15px;
  }
`

export const Td = styled.td`
  font-size: 24px;
  font-weight: 300;
  letter-spacing: .5px;
  @media (max-width: 660px) {
    font-size: 21px;
  }
`

export const Colour = styled.td`
  background-color: ${theme.colors.cyan};
  border-radius: 8px;

  width: 30px;
  height: 30px;
`

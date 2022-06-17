import styled from 'styled-components'
import theme from '../../../../styles/theme'

export const TableWrapper = styled.div`
  margin-top: 1.6rem;

  display: block;
  overflow-x: auto;
  white-space: nowrap;

  @media (max-width: 960px) {
    margin-top: 2.4rem;
  }
`

export const Table = styled.table`
  width: 100%;

  -webkit-border-radius: 2rem;
  -moz-border-radius: 2rem;
  border-radius: 2rem;
  -webkit-border-horizontal-spacing: 0;
  -webkit-border-vertical-spacing: 0;
  border-spacing: 0;

  color: ${theme.colors.snow};

  border-collapse: collapse;
  overflow: hidden;

  @media (max-width: 960px) {
    width: 114rem;
  }

  @media (max-width: 540px) {
    width: 93.5rem;

    -webkit-border-radius: 1.2rem;
    -moz-border-radius: 1.2rem;
    border-radius: 1.2rem;
  }
`

export const THead = styled.thead`
  background: rgba(0, 0, 0, 0.25);
`

export const TBody = styled.tbody`
  background: rgba(255, 255, 255, 0.04);

  tr {
    margin-top: -0.1rem;
    border-top: 0.1rem solid rgba(255, 255, 255, 0);
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.3);
    transition: background-color ease-in-out 0.3s, border ease-in-out 0.3s,
      padding ease-in-out 0.3s, margin ease-in-out 0.3s;

    &:hover {
      margin: 0;
      margin-top: -0.1rem;
      padding: 2.4rem 3.2rem;

      background-color: ${theme.colors.darkPurple};
      border-top: 0.1rem solid ${theme.colors.grayDisabled};
      border-bottom: 0.1rem solid ${theme.colors.grayDisabled};

      cursor: pointer;

      @media (max-width: 540px) {
        padding: 2rem;
      }
    }

    &:first-child {
      border-top: none;
    }

    &:last-child,
    last-child:hover {
      border-bottom: none;
    }
  }
`

export const Tr = styled.tr`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;

  margin: 0 3.2rem;
  padding: 2.4rem 0;

  @media (max-width: 540px) {
    grid-template-columns: 1fr 0.5fr repeat(4, 1fr);

    margin: 0 2rem;
    padding: 2rem 0;
  }
`

export const Th = styled.th`
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font16};
  line-height: 1.6rem;
  letter-spacing: 0.05em;

  &:first-of-type {
    text-align: left;
  }

  @media (max-width: 540px) {
    font-size: ${theme.font.sizes.font14};
  }
`

export const Td = styled.td`
  font-weight: ${theme.font.weight.medium};
  font-size: ${theme.font.sizes.font14};
  text-align: center;

  &:first-child {
    text-align: left;
  }
`

export const NetworkWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;

  @media (max-width: 540px) {
    span {
      display: none;
    }
  }
`

export const FlexWrapper = styled.div`
  span {
    color: #d3d3d3;
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.sizes.font12};
  }

  div {
    span {
      color: #fcfcfc;
      font-weight: ${theme.font.weight.light};
      font-size: ${theme.font.sizes.font12};
      text-transform: uppercase;
    }
  }
`

export const PoolWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

export const PoolIconWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
`

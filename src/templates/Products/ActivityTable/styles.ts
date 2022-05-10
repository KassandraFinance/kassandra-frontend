import styled from 'styled-components'
import theme from '../../../styles/theme'

export const ActivityTableContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 5rem;
`

export const ActivityTableTitle = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding-bottom: 1.8rem;

  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);

  p {
    margin-left: 2rem;

    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.bold};
  }
`

export const TableActivity = styled.table`
  width: 100%;
  margin-top: 2.8rem;

  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;

  border-collapse: collapse;
  text-indent: initial;
  overflow: hidden;

  -webkit-border-horizontal-spacing: 0;
  -webkit-border-vertical-spacing: 0;

  ::-webkit-scrollbar {
    height: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
  }

  @media (max-width: 960px) {
    display: block;
    overflow: auto;
  }

  thead {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;

    width: 100%;
    padding: 2.4rem;

    background-color: rgba(0, 0, 0, 0.25);
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;

    @media (max-width: 960px) {
      min-width: 88.3rem;
    }
  }

  th {
    color: #fcfcfc;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
  }
`

export const TBodyActivity = styled.tbody`
  width: 100%;
  max-height: 100%;

  background-color: rgba(255, 255, 255, 0.04);
`

export const TransactionContent = styled.tr`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;

  width: 100%;
  padding-top: 3rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;

  :last-child {
    padding-bottom: 2.4rem;
  }

  @media (max-width: 960px) {
    min-width: 88.3rem;
  }
`

export const TitleTransaction = styled.td`
  display: flex;
  flex-direction: column;

  span {
    display: flex;

    color: #fcfcfc;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.medium};
  }

  a {
    margin-left: 0.8rem;
  }

  p {
    color: #c4c4c4;
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.normal};
  }
`

export const TransactionOutAndIn = styled.td`
  span {
    display: flex;
    gap: 0.4rem;

    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.medium};
  }

  p {
    color: #c4c4c4;
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.light};
  }
`

export const TransactionInfo = styled.td`
  display: flex;
  flex-direction: column;

  p {
    color: #ffffff;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.medium};
  }

  span {
    display: flex;

    color: #fcfcfc;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
  }
`

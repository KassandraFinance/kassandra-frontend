import styled from 'styled-components'
import theme from '../../../styles/theme'

export const OwnAndReceivedTable = styled.section`
  margin-top: 4rem;
`

export const Table = styled.table`
  width: 100%;

  font-size: ${theme.font.sizes.font14};
  border-radius: 2rem;

  border-collapse: collapse;
  text-indent: initial;
  overflow: hidden;

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
    width: 100%;
    background-color: rgba(0, 0, 0, 0.25);
  }

  tbody {
    width: 100%;
    max-height: 100%;
    background-color: rgba(255, 255, 255, 0.04);
  }
`

export const Tr = styled.tr`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr 1.5fr;

  max-height: 8.1rem;
  margin-left: 3.2rem;
  margin-right: 3.2rem;
  padding: 2.4rem 0;

  border-top: 1px solid ${theme.colors.grayDisabled};

  @media (max-width: 960px) {
    min-width: 960px;
  }

  :first-child {
    border: none;
  }

  .headTable {
    margin: 0;
  }

  .pool,
  .delegating-to,
  .staked,
  .voting-power-allocated,
  .proposals-voted {
    flex-direction: column;
  }

  .delegating {
    margin-left: 0.4rem;
  }

  .pool {
    flex-direction: row;

    p {
      margin-left: 1.4rem;
      font-size: ${theme.font.sizes.font16};
      font-weight: ${theme.font.weight.medium};
    }

    span {
      margin-left: 1.4rem;
      font-size: ${theme.font.sizes.font14};
      font-weight: ${theme.font.weight.light};
    }
  }

  .delegating-to {
    flex-direction: row;

    span {
      margin-left: 0.8rem;
      font-size: ${theme.font.sizes.font14};
      font-weight: ${theme.font.weight.light};
    }
  }

  .staked {
    p {
      font-size: ${theme.font.sizes.font16};
      font-weight: ${theme.font.weight.medium};
    }

    span {
      color: #d3d3d3;
      font-size: ${theme.font.sizes.font12};
      font-weight: ${theme.font.weight.light};
    }
  }

  .voting-power-allocated {
    p {
      font-size: ${theme.font.sizes.font16};
      font-weight: ${theme.font.weight.medium};
    }
    span {
      color: #d3d3d3;
      font-size: ${theme.font.sizes.font12};
      font-weight: ${theme.font.weight.normal};
    }
  }
`

export const Th = styled.th`
  display: flex;
  justify-content: center;

  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};

  :first-child {
    justify-content: flex-start;
    margin-left: 3.2rem;
  }

  @media (max-width: 960px) {
    line-height: ${theme.font.sizes.font14};
    font-size: ${theme.font.sizes.font14};
  }

  @media (max-width: 540px) {
    line-height: ${theme.font.sizes.font12};
    font-size: ${theme.font.sizes.font12};
  }
`

export const Td = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
`

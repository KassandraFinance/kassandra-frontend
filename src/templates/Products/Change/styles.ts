import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Change = styled.div`
  margin: ${theme.spacings.space48} 0;

  table {
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-collapse: collapse;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;

    overflow: hidden;
    text-indent: initial;

    border-spacing: 0;
    -webkit-border-horizontal-spacing: 0;
    -webkit-border-vertical-spacing: 0;

    width: 100%;
    margin-top: 20px;
    font-size: ${theme.font.sizes.font14};

    thead {
      background-color: rgba(0, 0, 0, 0.25);
      th {
        color: ${theme.colors.grayDisabled};
        font-weight: ${theme.font.weight.light};
        padding: 10px 0;
      }
    }

    tbody {
      background-color: rgba(255, 255, 255, 0.04);
      text-align: center;
      font-weight: ${theme.font.weight.light};
      td {
        padding: 12px 0;
      }
    }
  }
`

interface ITdProps {
  value: number;
}

// eslint-disable-next-line prettier/prettier
export const Td = styled.td<ITdProps>`
  color: ${props => (props.value > 0 ? theme.colors.green : theme.colors.red)};
  color: ${props =>
    (props.value === 0 || isNaN(props.value)) && theme.colors.snow};
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  h2 {
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.bold};
    margin-left: ${theme.spacings.space16};
  }
`

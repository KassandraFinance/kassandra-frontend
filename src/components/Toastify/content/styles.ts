import styled from 'styled-components'
import theme from '../../../styles/theme'

export const NotificationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
  padding: 4px;

  font-family: 'Rubik';
  img {
    margin-right: 12px;
  }
`

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Rubik';
  h3 {
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.bold};
    margin-bottom: 8px;
  }
  span {
    font-size: 15px;
    font-weight: ${theme.font.weight.light};
    margin: auto;
  }
`

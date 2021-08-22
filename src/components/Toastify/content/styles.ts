import styled from 'styled-components'

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
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px; 
  }
  span {
    font-size: 16px;
    font-weight: 300;
    margin: auto;
  }
`
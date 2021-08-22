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
  h3 {
    font-family: 'Rubik';
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px; 
  }
`
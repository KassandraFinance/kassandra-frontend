import React from 'react';

import { NotificationContainer, MessageContainer } from './styles'

interface IStyledToastContentProps {
  type: string
  title: string
  message: string
}

const StyledToastContent = ({ type, title, message }: IStyledToastContentProps) => {
  return (
    <>  
      {type === "error" && 
        <NotificationContainer>
          <img src="assets/error.svg" alt="" />
          <MessageContainer>
            <h3 style={{ color: "#E8372C" }}>{title}</h3>
            <span style={{fontSize:"16px", margin: "auto", fontWeight: 300}}>{message}</span>
          </MessageContainer>
        </NotificationContainer>
      }
    </>
  )
}

export default StyledToastContent;
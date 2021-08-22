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
      {type === "success" && 
        <NotificationContainer>
          <img src="assets/IconNotification/success.svg" alt="" />
          <MessageContainer>
            <h3 style={{ color: "#2CE878" }}>{title}</h3>
            <span>{message}</span>
          </MessageContainer>
        </NotificationContainer>
      }
      {type === "error" && 
        <NotificationContainer>
          <img src="assets/IconNotification/error.svg" alt="" />
          <MessageContainer>
            <h3 style={{ color: "#E8372C" }}>{title}</h3>
            <span>{message}</span>
          </MessageContainer>
        </NotificationContainer>
      }
      {type === "info" && 
        <NotificationContainer>
          <img src="assets/IconNotification/info.svg" alt="" />
          <MessageContainer>
            <h3 style={{ color: "#26DBDB" }}>{title}</h3>
            <span>{message}</span>
          </MessageContainer>
        </NotificationContainer>
      }
    </>
  )
}

export default StyledToastContent;
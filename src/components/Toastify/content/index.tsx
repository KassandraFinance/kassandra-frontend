import React from 'react'

import { NotificationContainer, MessageContainer } from './styles'

interface IStyledToastContentProps {
  type: string;
  title: string;
  message: string;
}

const StyledToastContent = ({
  type,
  title,
  message
}: IStyledToastContentProps) => {
  return (
    <>
      {type === 'success' && (
        <NotificationContainer>
          <img
            src="/assets/IconNotification/success.svg"
            alt="New success notification"
          />
          <MessageContainer>
            <h3>{title}</h3>
            <span>{message}</span>
          </MessageContainer>
        </NotificationContainer>
      )}
      {type === 'warning' && (
        <NotificationContainer>
          <img
            src="/assets/IconNotification/warning.svg"
            alt="New warning notification"
          />
          <MessageContainer>
            <h3>{title}</h3>
            <span>{message}</span>
          </MessageContainer>
        </NotificationContainer>
      )}
      {type === 'error' && (
        <NotificationContainer>
          <img
            src="/assets/IconNotification/error.svg"
            alt="New error notification"
          />
          <MessageContainer>
            <h3>{title}</h3>
            <span>{message}</span>
          </MessageContainer>
        </NotificationContainer>
      )}
      {type === 'info' && (
        <NotificationContainer>
          <img
            src="/assets/IconNotification/info.svg"
            alt="New informational notification"
          />
          <MessageContainer>
            <h3>{title}</h3>
            <span>{message}</span>
          </MessageContainer>
        </NotificationContainer>
      )}
    </>
  )
}

export default StyledToastContent

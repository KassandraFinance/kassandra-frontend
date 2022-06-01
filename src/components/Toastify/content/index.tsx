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
    <NotificationContainer>
      <img
        src={`/assets/notificationStatus/${type}.svg`}
        alt="New notification"
      />
      <MessageContainer>
        <h3>{title}</h3>
        <span>{message}</span>
      </MessageContainer>
    </NotificationContainer>
  )
}

export default StyledToastContent

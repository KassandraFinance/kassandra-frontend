import styled, { keyframes } from 'styled-components'

export const ImgLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 140px;
`

const pulse = keyframes`
  0% { transform: scale(1); }
  60% { transform: scale(1.1); }
  100% { transform: scale(1); }
`

export const AnimatedImg = styled.div`
  animation: ${pulse} 900ms linear infinite;
`

import styled, { keyframes } from 'styled-components'

interface IImgLoadingProps {
  marginTop: number;
}

// eslint-disable-next-line prettier/prettier
export const ImgLoading = styled.div<IImgLoadingProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.marginTop}rem;
`

const pulse = keyframes`
  0% { transform: scale(1); }
  60% { transform: scale(1.1); }
  100% { transform: scale(1); }
`

export const AnimatedImg = styled.div`
  animation: ${pulse} 900ms linear infinite;
`

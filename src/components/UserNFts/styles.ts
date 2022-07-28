import styled, { keyframes } from 'styled-components'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: transparent;

  z-index: 24;

  animation: OpenUserNftDropdown 500ms ease;
  @keyframes OpenUserNftDropdown {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 23rem;
  max-height: 29.5rem;
  padding-top: 0.2rem;

  background-color: #1b1d22;

  overflow: auto;
  z-index: 25;

  ::-webkit-scrollbar {
    width: 0.8rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
  }
`

export const NftContent = styled.li`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 1.2rem;

  transition: 0.2s;
  cursor: pointer;

  > img {
    margin-top: 0;

    min-height: 5rem;
    min-width: 5rem;
  }

  &:hover {
    background-color: #c4c4c410;
  }

  p {
    margin-bottom: 0.4rem;
  }

  span {
    display: flex;
    align-items: center;
  }

  div {
    margin-left: 1.2rem;

    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 500;
  }

  strong {
    margin-left: 0.4rem;

    font-size: 1.2rem;
    font-weight: 300;
    text-transform: uppercase;
  }
`

export const noHaveNFT = styled.p`
  display: flex;
  justify-content: center;

  width: 17rem;
  padding: 2rem;
`
const pulse = keyframes`
  0% { transform: scale(1); }
  60% { transform: scale(1.1); }
  100% { transform: scale(1); }
`

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
`

export const ImageLoadingPulse = styled.div`
  animation: ${pulse} 900ms linear infinite;
`

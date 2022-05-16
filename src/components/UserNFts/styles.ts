import styled from 'styled-components'

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

  width: 100%;
  max-height: 29.5rem;

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

  li {
    display: flex;
    align-items: center;

    width: 100%;
    padding: 1.2rem;
    gap: 1rem;

    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background-color: #c4c4c410;
    }
  }

  span {
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 500;
  }
`

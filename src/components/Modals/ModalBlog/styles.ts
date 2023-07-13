import styled, { css, keyframes } from 'styled-components'
import { Content, Overlay, Close, Title } from '@radix-ui/react-dialog'
import { device } from 'src/styles/theme'

export const ModalOverlay = styled(Overlay)`
  ${({ theme }) => css`
    position: fixed;
    inset: 0;
    z-index: 1000;

    background-color: ${theme.colors.dark};

    opacity: 0.5;

    animation: ${overlayShow} 200ms cubic-bezier(0.16, 1, 0.3, 1);

    &[data-state='closed'] {
      animation: ${overlayHide} 200ms cubic-bezier(0.16, 1, 0.3, 1);
    }
  `}
`

export const ModalContent = styled(Content)`
  ${() => css`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1000;

    display: flex;
    flex-direction: column;

    width: min(54rem, 100%);
    max-height: 92%;

    transform: translate(-50%, -50%);

    &[data-state='open'] {
      animation: ${contentShow} 200ms cubic-bezier(0.16, 1, 0.3, 1);

      input {
        width: 100%;

        &:first-of-type {
          margin-left: 1.6rem;
        }

        &:last-of-type {
          margin-right: 1.6rem;
        }
      }
    }

    &[data-state='closed'] {
      animation: ${contentHide} 200ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    @media ${device.mobile} {
      top: auto;
      bottom: 0;
      left: 50%;

      width: 100%;

      transform: translate(-50%, 0);

      &[data-state='open'] {
        max-width: 100%;

        animation: ${mobileContentShow} 400ms cubic-bezier(0.16, 1, 0.3, 1);
      }

      &[data-state='closed'] {
        animation: ${mobileContentHide} 400ms cubic-bezier(0.16, 1, 0.3, 1);
      }
    }
  `}
`

export const ModalTitle = styled(Title)`
  ${({ theme }) => css`
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    align-items: center;

    padding: 2rem 2.4rem;
    border: 1px solid ${theme.colors.neutral95};
    border-bottom: 0;
    border-radius: 8px 8px 0 0;

    color: ${theme.colors.dark10};
    font-size: ${theme.font.sizes.font20};
    line-height: 3.2rem;

    background-color: ${theme.colors.white};

    svg {
      width: 2.4rem;
      height: 2.4rem;

      fill: ${theme.colors.dark10};

      path {
        fill: ${theme.colors.dark10};
      }
    }

    .modal-image {
      border-radius: 50%;
    }
  `}
`

export const ModalContentWrapper = styled.div`
  ${({ theme }) => css`
    flex: 1 1 0%;
    overflow: auto;

    max-height: 54rem;
    border: 1px solid ${theme.colors.neutral95};
    border-bottom: none;

    color: ${theme.colors.neutral30};
    font-size: 1.6rem;
    line-height: 2.4rem;

    background-color: ${theme.colors.white};
  `}
`

export const ModalFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1.6rem;
    justify-content: center;
    align-items: center;

    padding: 2.4rem 1.6rem;
    border: 1px solid ${theme.colors.neutral95};
    border-radius: 0 0 8px 8px;

    background-color: ${theme.colors.white};

    > * {
      flex: 1 1 0%;
    }

    @media ${device.mobile} {
      border-radius: 0;
    }
  `}
`

export const ModalCloseButton = styled(Close)`
  ${({ theme }) => css`
    position: fixed;
    top: 2.55rem;
    right: 2.3rem;

    border: none;

    line-height: 0;

    background-color: transparent;

    cursor: pointer;

    svg {
      width: 2.4rem;
      height: 2.4rem;

      line-height: 0;

      fill: ${theme.colors.dark10};
    }
  `}
`

const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
`

const overlayHide = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 0;
  }
`

const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`

const contentHide = keyframes`
  from {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
`

const mobileContentShow = keyframes`
  from {
    transform: translate(-50%, 100%);
  }
  to {
    transform: translate(-50%, 0);
  }
`

const mobileContentHide = keyframes`
  from {
    transform: translate(-50%, 0);
  }
  to {
    transform: translate(-50%, 100%);
  }
`

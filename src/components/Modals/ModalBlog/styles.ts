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
    background-color: rgba(31, 31, 31, 0.95);
    border-radius: 8px;

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
    justify-content: flex-start;
    align-items: center;

    padding: 2rem 2.4rem;
    border: 1px solid rgba(31, 31, 31, 0.95);
    border-bottom: 1px solid ${theme.colors.gray};
    margin-bottom: 1.6rem;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    color: ${theme.colors.snow};
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 1.8rem */
    letter-spacing: 0.09rem;

    background-color: rgba(31, 31, 31, 0.95);

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
    border: 1px solid rgba(31, 31, 31, 0.95);
    border-bottom: none;

    color: ${theme.colors.neutral30};
    font-size: 1.6rem;
    line-height: 2.4rem;

    background-color: rgba(31, 31, 31, 0.95);
  `}
`

export const ModalFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1.6rem;
    justify-content: center;
    align-items: center;

    padding: 2.4rem 1.6rem;
    border: 1px solid rgba(31, 31, 31, 0.95);
    border-radius: 0 0 8px 8px;

    background-color: rgba(31, 31, 31, 0.95);

    > * {
      flex: 1 1 0%;
      padding-inline: 0 !important;
    }

    @media ${device.mobile} {
      border-radius: 0;
    }

    .variant-white {
      border: 0.1rem solid ${theme.colors.snow};
      width: fit-content;
      padding: 1.2rem 2.4rem;

      font-size: ${theme.font.sizes.font14};
      font-weight: 400;

      transition: 300ms;

      img {
        width: 1.6rem;
      }

      &:hover,
      &:focus {
        border-color: ${theme.colors.snow};
        background-color: ${theme.colors.snow};

        color: ${theme.colors.darkPurple};
        /* outline-color: ${theme.colors.snow}; */
        outline: none;
      }
    }

    .with-blue-border {
      border: 1px solid rgb(12, 61, 220);

      &:hover {
        border-color: #11319a;
      }
    }
  `}
`

export const ModalCloseButton = styled(Close)`
  ${({ theme }) => css`
    position: fixed;
    top: 2.25rem;
    right: 2.4rem;

    border: none;

    line-height: 0;

    background-color: transparent;

    cursor: pointer;

    svg {
      width: 1.6rem;
      height: 1.6rem;

      line-height: 0;

      fill: ${theme.colors.snow};
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

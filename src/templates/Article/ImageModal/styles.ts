import * as RadixModal from '@radix-ui/react-dialog'
import styled, { keyframes } from 'styled-components'
import { css } from 'styled-components'

export const ImageModalTrigger = styled(RadixModal.Trigger)`
  cursor: pointer;
  all: unset;
`

export const ImageModalContent = styled(RadixModal.Content)`
  ${() => css`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1000;

    display: flex;
    flex-direction: column;

    width: min(94rem, 92%);
    max-height: 92%;

    transform: translate(-50%, -50%);
    animation: ${fadeIn} 800ms cubic-bezier(0.16, 1, 0.3, 1);

    &[data-state='closed'] {
      animation: ${fadeOut} 800ms cubic-bezier(0.16, 1, 0.3, 1);
    }
  `}
`

export const ModalOverlay = styled(RadixModal.Overlay)`
  ${({ theme }) => css`
    position: fixed;
    inset: 0;
    z-index: 1000;

    background-color: ${theme.colors.dark};

    opacity: 0.8;

    animation: ${overlayShow} 200ms cubic-bezier(0.16, 1, 0.3, 1);

    &[data-state='closed'] {
      animation: ${overlayHide} 200ms cubic-bezier(0.16, 1, 0.3, 1);
    }
  `}
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.8;
  }
`

const overlayHide = keyframes`
  from {
    opacity: 0.8;
  }
  to {
    opacity: 0;
  }
`

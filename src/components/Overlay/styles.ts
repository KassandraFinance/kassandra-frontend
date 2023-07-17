import styled, { css, keyframes } from 'styled-components'

interface IOverlayProps {
  isShowMenu: boolean
}

// prettier-ignore
export const Overlay = styled.div<IOverlayProps>`
  ${() => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(1rem);

    opacity: 0;

    animation: ${fadeInAnimation} 750ms forwards;

    z-index: 1040;
  `}

  ${({ isShowMenu }) => isShowMenu === false && css`
    animation: ${fadeOutAnimation} 750ms forwards;
  `}
`

const fadeInAnimation = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`

const fadeOutAnimation = keyframes`
 0% { opacity: 1; }
 100% { opacity: 0; }
`

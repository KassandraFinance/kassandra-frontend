import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding-block: 3.2rem;
  max-width: 118.8rem;

  background: transparent;
  &[data-fixed='true'] {
    background: #151117;
  }
  padding-inline: 2.4rem;

  z-index: ${theme.layers.menu};

  @media (max-width: 992px) {
    &[data-fixed='true'] {
      position: fixed;
    }
  }

  @media (max-width: 992px) {
    height: var(--header-height);
  }
`

export const LogoWrapper = styled.div`
  .logo-desktop {
    @media (max-width: 992px) {
      display: none;
    }
  }

  .logo-ipad {
    @media (min-width: 991px) {
      display: none;
    }
  }

  cursor: pointer;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const MenuWrapper = styled.div`
  ${() => css`
    display: flex;
    gap: 2rem;

    @media (max-width: 768px) {
      flex-direction: row-reverse;
    }

    .button-mobile {
      border: 0.1rem solid ${theme.colors.snow};
      width: fit-content;
      padding: 1.2rem 2.4rem;

      font-size: ${theme.font.sizes.font14};
      font-weight: 400;

      transition: 300ms;

      &:hover,
      &:focus {
        border-color: ${theme.colors.snow};
        background-color: ${theme.colors.snow};

        color: ${theme.colors.darkPurple};
        outline: none;
      }
    }
  `}
`

export const HamburgerButton = styled.button`
  ${() => css`
    position: relative;

    display: none;

    @media (max-width: 768px) {
      z-index: 1050;

      display: flex;
      justify-content: center;
      align-items: center;

      width: 4rem;
      height: 4rem;
      border: none;
      border-radius: 50%;

      background-color: rgb(255 255 255 / 0.1);

      cursor: pointer;
    }
  `}
`

interface IHambuergerMenuProps {
  isShowMenu: boolean
}

export const HamburgerMenu = styled.div<IHambuergerMenuProps>`
  ${() => css`
    @media (max-width: 768px) {
      position: absolute;

      width: 1.2rem;
      height: 1.2rem;

      div {
        position: relative;
        top: 0;

        height: 0.1rem;
        margin-bottom: 0.4rem;
        border-radius: 0.2rem;

        background-color: ${theme.colors.snow};

        transition-timing-function: ease-in-out;
        transition-duration: 300ms;
        transition-property: transform top width right;
      }

      div:first-child {
        transform-origin: 0;
      }

      div:last-child {
        margin-bottom: 0;

        transform-origin: 1.2rem;
      }

      div:nth-child(2) {
        right: 0;

        width: 1.2rem;
      }
    }
  `}

  ${({ isShowMenu }) =>
    isShowMenu &&
    css`
      div:first-child {
        top: -0.1rem;

        transform: rotateZ(45deg);
      }

      div:last-child {
        top: 0.1rem;

        transform: rotateZ(45deg);
      }

      div:nth-child(2) {
        top: 0;
        right: 0.3rem;

        width: 1.697rem;

        transform: rotateZ(-45deg);
      }
    `}
`

import styled, { css } from 'styled-components'
import { Overlay } from '../../Overlay/styles'
import { CardLinkWrapper } from '../LinkCard/styles'

export const NavSectionButtonWrapper = styled.div`
  ${() => css`
    position: relative;

    ${Overlay} {
      background-color: transparent;
      backdrop-filter: none;
    }

    @media (max-width: 1600px) {
      position: static;
    }
    @media (max-width: 992px) {
      width: 100%;
    }
  `}
`

export const NavegationCardDesktopWrapper = styled.div`
  ${() => css`
    @media (max-width: 992px) {
      display: none;
    }
  `}
`

interface INameWrapperProps {
  isActive?: boolean
}

export const NavegationLinkButton = styled.button<INameWrapperProps>`
  ${({ theme }) => css`
    position: relative;

    display: flex;
    align-items: center;

    gap: 0.8rem;

    font-family: ${theme.font.family};
    color: ${theme.colors.snow};
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.normal};

    background: transparent;
    border: none;

    cursor: pointer;
    text-decoration: none;

    > svg {
      transform: rotate(0);

      transition-duration: 300ms;
      transition-timing-function: ease-in-out;
      transition-property: transform;
    }

    @media (min-width: 992px) {
      &::after {
        content: '';
        position: absolute;
        bottom: -1rem;
        left: 50%;

        width: 0;
        height: 0.2rem;
        border-radius: 4px;

        background-color: ${theme.colors.cyan};
        box-shadow: 0 0 0.6rem ${theme.colors.cyan};

        transition-timing-function: ease-in-out;
        transition-duration: 300ms;
        transition-property: width left opacity;
      }

      &:focus::after {
        left: 0%;
        width: 100%;
      }
      &:hover::after {
        left: 0%;
        width: 100%;
      }
    }

    @media (max-width: 992px) {
      justify-content: space-between;
      width: 100%;
      padding-block: 1.2rem;

      color: ${theme.colors.white};
      font-weight: ${theme.font.weight.medium};

      > svg {
        path {
          stroke: ${theme.colors.white};
        }
      }
    }
  `}

  ${({ isActive }) =>
    isActive &&
    css`
      svg {
        transform: rotate(180deg);
      }

      @media (min-width: 992px) {
        &::after {
          left: 0%;
          width: 100%;
        }
      }
    `}
`

interface ILinkDropDownProps {
  openCard: boolean
  height: number
}

export const LinkDropDownMobile = styled.div<ILinkDropDownProps>`
  ${() => css`
    height: 0;
    opacity: 0;
    overflow-y: hidden;

    display: flex;
    flex-direction: column;

    ${CardLinkWrapper} {
      pointer-events: none;

      &:first-child {
        margin-top: 1.6rem;
      }
    }

    @media (min-width: 992px) {
      display: none;
    }

    transition-duration: 300ms;
    transition-timing-function: ease;
    transition-property: height opacity;
  `}

  ${({ openCard, height }) =>
    openCard &&
    css`
      opacity: 1;
      height: ${height}rem;

      ${CardLinkWrapper} {
        pointer-events: auto;
      }
    `}
`

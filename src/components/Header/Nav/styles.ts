import { SocialMidia } from '@/components/SocialMidia/styles'
import styled, { css } from 'styled-components'

interface IMenuProps {
  isShowMenu: boolean
}
export const NavWrapper = styled.div<IMenuProps>`
  ${() => css`
    display: flex;

    transition-timing-function: ease-in-out;
    transition-duration: 450ms;
    transition-property: left;

    @media (max-width: 768px) {
      position: fixed;
      top: 0;
      bottom: 0;
      left: -100%;
      z-index: 1050;

      flex-direction: column;
      gap: 0;
      justify-content: space-between;
      align-items: flex-start;
      overflow-y: auto;

      width: 29.7rem;
      /* height: 100vh; */

      background: linear-gradient(164.99deg, #1b1d22 19.85%, #333437 116.33%);

      isolation: isolate;

      @media (max-width: 576px) {
        width: 28rem;
      }
    }
  `}

  ${({ isShowMenu }) =>
    isShowMenu &&
    css`
      @media (max-width: 768px) {
        left: 0;
      }
    `}
`

export const Nav = styled.nav`
  ${() => css`
    display: flex;
    align-items: center;
    gap: 3.2rem;

    @media (max-width: 1030px) {
      gap: 2.4rem;
    }

    @media (max-width: 790px) {
      gap: 1.6rem;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      gap: 0;
    }
  `}
`

interface IMenuLinkProps {
  active: boolean
}

export const MenuLink = styled.a<IMenuLinkProps>`
  ${({ theme, active }) => css`
    position: relative;

    color: ${theme.colors.snow};
    font-weight: ${active
      ? theme.font.weight.semibold
      : theme.font.weight.light};
    font-size: ${theme.font.sizes.font16};
    text-align: center;
    text-decoration: none;

    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      bottom: -1rem;
      left: ${active ? '0' : '50%'};

      width: ${active ? '100%' : '0'};
      height: 0.2rem;
      border-radius: 1px;

      background-color: ${theme.colors.cyan};
      box-shadow: 0 0 0.6rem ${theme.colors.cyan};

      transition-timing-function: ease-in-out;
      transition-duration: 300ms;
      transition-property: width left opacity;
    }

    &:hover::after {
      left: 0%;

      width: 100%;
    }

    &:first-of-type {
      display: none;
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 2rem 2.4rem;
      border-bottom: 0.1rem solid rgb(255 255 255 / 0.15);

      font-weight: ${theme.font.weight.normal};
      font-size: ${theme.font.sizes.font14};
      letter-spacing: 0.05em;
      text-align: left;

      &:first-of-type {
        display: block;
      }

      &::after {
        bottom: 50%;
        left: 1rem;

        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;

        opacity: ${active ? '1' : '0'};

        transform: translateY(50%);
      }

      &:hover::after {
        left: 1rem;

        width: 0.6rem;
        height: 0.6rem;

        opacity: 1;
      }
    }
  `}
`

export const NavFooter = styled.div`
  display: none;

  ${SocialMidia} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2.4rem;
  }

  @media (max-width: 576px) {
    padding: 2.4rem;
  }
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.6rem;

    span {
      font-size: ${theme.font.sizes.font16};
      font-weight: ${theme.font.weight.light};
    }
  `}
`

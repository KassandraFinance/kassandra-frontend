import styled, { css } from 'styled-components'

interface IMenuProps {
  isShowMenu: boolean
}
export const NavMenuMobileWrapper = styled.div<IMenuProps>`
  ${() => css`
    transition-timing-function: ease-in-out;
    transition-duration: 450ms;
    transition-property: top opacity;

    @media (max-width: 992px) {
      position: fixed;
      top: -100%;
      left: 0;
      right: 0;

      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      height: 100%;
      gap: 0;

      overflow-y: auto;
      z-index: 1049;

      background: linear-gradient(164.99deg, #1b1d22 19.85%, #333437 116.33%);

      isolation: isolate;
    }
  `}

  ${({ isShowMenu }) =>
    isShowMenu &&
    css`
      @media (max-width: 992px) {
        top: 0;
      }
    `}
`

export const NavWrapper = styled.div`
  ${() => css`
    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      height: 100%;
    }
  `}
`

export const Nav = styled.nav`
  ${() => css`
    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      padding: 1.8rem 1.6rem;

      gap: 0;
    }
  `}
`

export const IconsWrapper = styled.div`
  ${() => css`
    @media (max-width: 992px) {
      width: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `}
`

export const CloseIconWrapper = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;

    border-radius: 50%;
    background: #ffffff10;
    border: 1px solid transparent;

    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
    transition-property: border;

    cursor: pointer;

    &:hover {
      border: 1px solid #ffffff30;
    }
  `}
`

export const MenuLink = styled.div`
  ${() => css`
    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      margin-top: 4.2rem;
      width: 100%;
    }
  `}
`

export const NavFooter = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    padding: 4rem 2.4rem;
    width: 100%;
    gap: 2.4rem;
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

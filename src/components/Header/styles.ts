import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    max-width: 1530px;
    padding: 24px 32px;
    position: relative;
    height: 110px;
    z-index: ${theme.layers.menu};

    ${media.lessThan('medium')`
    `}
  `}
`

export const LogoWrapper = styled.div`

  ${media.lessThan('large')`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
    img {
      position:relative;
      max-width: 100%;
      /* height: 48px; */
    }
  `}
  cursor: pointer;
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
			margin-left: ${theme.spacings.small};
		`}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: #26DBDB;
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`
export const MenuLinkDisable = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.lightGray};
    font-size: ${theme.font.sizes.small};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;
    cursor: not-allowed;
    &:hover {
      &::after {
        content: '';
        text-align: left;
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.lightGray};
        animation: hoverAnimation 0.3s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: black;
    position: fixed;
    z-index: ${theme.layers.menu};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;

    }

    ${MenuLink} {
      color: ${theme.colors.white};
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.medium};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
    ${MenuLinkDisable} {
      color: ${theme.colors.lightGray};
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.medium};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }

  `}
`
export const LinkInstallMetaMask = styled.a`
  background-color: transparent;
  border: 1px solid #26DBDB;
  border-radius: 8px;
  color:  #26DBDB !important;
  font-size: 16px;
  text-transform: none;
  text-align: center;

  width: 186px;
  height: 48px;
  padding: 12px 0;
  cursor: pointer;
  &:hover {
    background-color:  #26DBDB;
    color: #211426 !important;
  }
`
export const ButtonConnectWallet = styled.button`
  background-color: transparent;
  border: 1px solid #26DBDB;
  border-radius: 8px;
  color:  #26DBDB;
  font-size: 16px;
  width: 186px;
  height: 48px;

  cursor: pointer;
  &:hover {
    background-color:  #26DBDB;
    color: #211426;
  }
`

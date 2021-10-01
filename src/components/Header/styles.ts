/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components'
import media from 'styled-media-query'


interface IWrapperProps {
  pageHeim: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Wrapper = styled.menu<IWrapperProps>`
  max-width: 1520px;
  margin: 0 auto;
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.space24};
    padding: ${theme.spacings.space32};
    position: relative;
    height: 110px;
    z-index: ${theme.layers.menu};

    ${media.lessThan('medium')`
    padding: 1.5rem;
    margin-bottom: 3rem;
    `}
  `}
`

export const LogoWrapper = styled.div`
  cursor: pointer;

  @media(max-width: 1190px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    img {
      position:relative;
      max-width: 100%;
    }
  }
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.snow};
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
      margin-left: ${theme.spacings.space8};
    }
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
			margin-left: ${theme.spacings.space24};
		`}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.snow};
    font-size: ${theme.font.sizes.font18};
    margin: 0.3rem ${theme.spacings.space24} 0;
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.cyan};
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
    font-size: ${theme.font.sizes.font16};
    margin: 0.3rem ${theme.spacings.space24} 0;
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

export const MenuFull = styled.nav <MenuFullProps >`
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
      margin: ${theme.spacings.space8};
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
      color: ${theme.colors.snow};
      font-weight: ${theme.font.weight.normal};
      font-size: ${theme.font.sizes.font18};
      margin-bottom: ${theme.spacings.space24};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
    ${MenuLinkDisable} {
      color: ${theme.colors.lightGray};
      font-weight: ${theme.font.weight.normal};
      font-size: ${theme.font.sizes.font18};
      margin-bottom: ${theme.spacings.space24};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`
export const LinkInstallMetaMask = styled.a`
  ${({ theme }) => css`
    background-color: transparent;
    border: 1px solid ${theme.colors.cyan};
    border-radius: 8px;
    color: ${theme.colors.cyan} !important;
    font-size: ${theme.font.sizes.font16};
    text-transform: none;
    text-align: center;

    width: 186px;
    height: 48px;
    padding: 12px 0;
    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.cyan};
      color: ${theme.colors.darkPurple}
 !important;
    }
  `}
`
export const ButtonConnectWallet = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    border: 1px solid ${theme.colors.cyan};
    border-radius: 8px;
    color: ${theme.colors.cyan};
    font-size: ${theme.font.sizes.font16};
    width: 186px;
    height: 48px;

    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.cyan};
      color: ${theme.colors.darkPurple}
;
    }
  `}
`
export const MenuIconContainer = styled.div`
  @media(min-width: 1190px) {
    display: none;
  }
`
export const MenuDesktop = styled.div`
  @media(max-width: 1190px) {
    display: none;
  }
`

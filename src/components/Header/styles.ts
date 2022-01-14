import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  max-width: 1140px;
  height: 110px;

  position: relative;
  z-index: ${theme.layers.menu};

  @media(max-width: 1200px ) {
    padding: 0 30px;
  }

  @media(max-width: 540px ) {
    height: 80px;

    padding: 0 16px;
  }
`

export const LogoWrapper = styled.div`
  .logo-desktop {
    img {
      height: 40px;
    }
    @media (max-width: 960px) {
      display: none;
    }
  }
  .logo-ipad {
    img {
      width: 70px;
    }
    @media (max-width: 540px) {
      display: none;
    }
  }

  cursor: pointer;
`

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 580px;
  .logo-mobile {
    width: 46px;
    margin-right: -8px;
    @media (min-width: 540px) {
      display: none;
    }
  }

  @media (max-width: 960px) {
    min-width: 480px;
  }
  @media (max-width: 768px) {
    min-width: 300px;
  }
  @media (max-width: 540px) {
    min-width: 100%;
  }
  .connect-wallet {
    @media (max-width: 768px) {
      display: none;
    }
  }
`

export const MenuLink = styled.a`
  color: ${theme.colors.snow};
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};
  text-decoration: none;
  text-align: center;
  
  margin: 0.3rem ${theme.spacings.space24};
  position: relative;

  &:hover {
    &::after {
      content: "";
      display: block;
      
      height: 0.3rem;
      border-radius: 0.3rem;
      background-color: ${theme.colors.cyan};
      margin-top: 12px;

      position: absolute;
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
  @media (max-width: 960px) {
    margin: 0.3rem 0;
  }
  @media (max-width: 540px) {
    font-size: ${theme.font.sizes.font14};
  }
`

export const MenuLinkDisable = styled.a`
  color: ${theme.colors.lightGray};
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};
  text-decoration: none;
  text-align: center;

  margin: 0.3rem ${theme.spacings.space24};
  position: relative;

  cursor: not-allowed;
  &:hover {
    &::after {
      content: "";
      display: block;

      background-color: ${theme.colors.lightGray};
      height: 0.3rem;
      border-radius: 0.3rem;
      margin-top: 12px;

      position: absolute;
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
  @media (max-width: 960px) {
    margin: 0.3rem 0;
  }
  @media (max-width: 540px) {
    font-size: ${theme.font.sizes.font14};
  }
`

export const MenuBottom = styled.div`
  background-color: ${theme.colors.darkPurple};
  display: block;
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 68px;
  z-index: ${theme.layers.menu};
`
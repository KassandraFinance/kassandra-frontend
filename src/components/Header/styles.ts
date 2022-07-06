import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  max-width: 114rem;
  height: 11rem;

  z-index: ${theme.layers.menu};
  @media (max-width: 1200px) {
    padding: 0 3rem;
  }

  @media (max-width: 540px) {
    height: 8rem;
    padding: 0 1.6rem;
  }
`

export const LogoWrapper = styled.div`
  .logo-desktop {
    img {
      height: 4rem;
    }

    @media (max-width: 960px) {
      display: none;
    }
  }

  .logo-ipad {
    img {
      width: 7rem;
    }

    @media (min-width: 961px) {
      display: none;
    }

    @media (max-width: 539px) {
      display: none;
    }
  }

  cursor: pointer;
`

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-mobile {
    width: 4.6rem;
    margin-right: -0.8rem;

    @media (min-width: 541px) {
      display: none;
    }
    @media (max-width: 360px) {
      width: 4.2rem;
    }
  }

  @media (max-width: 960px) {
    min-width: 58rem;
  }

  @media (max-width: 768px) {
    min-width: 42rem;
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
  position: relative;

  margin-right: 2.4rem;
  padding-top: 1.2rem;
  padding-bottom: 1.3rem;

  color: ${theme.colors.snow};
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};
  text-decoration: none;
  text-align: center;

  &:hover {
    &::after {
      content: '';
      position: absolute;

      display: block;
      height: 0.3rem;
      margin-top: 1.2rem;

      background-color: ${theme.colors.cyan};
      border-radius: 0.3rem;

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

  @media (max-width: 540px) {
    font-size: ${theme.font.sizes.font14};
    margin-right: 0;
  }
`

export const MenuLinkDisable = styled.a`
  position: relative;

  margin-right: 4.2rem;
  padding-top: 1.2rem;
  padding-bottom: 1.3rem;

  color: ${theme.colors.grayDisabled};
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};
  text-decoration: none;
  text-align: center;

  cursor: not-allowed;
  &:hover {
    &::after {
      content: '';
      position: absolute;

      display: block;
      height: 0.3rem;
      margin-top: 1.2rem;

      background-color: ${theme.colors.grayDisabled};
      border-radius: 0.3rem;

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

  @media (max-width: 768px) {
    margin-right: 3.2rem;
  }

  @media (max-width: 541px) {
    margin-right: 2rem;
    font-size: ${theme.font.sizes.font14};
  }

  @media (max-width: 360px) {
    margin-right: 1.4rem;
    font-size: ${theme.font.sizes.font12};
  }

  @media (max-width: 540px) {
    font-size: ${theme.font.sizes.font14};
  }
`

export const MenuBottom = styled.div`
  position: fixed;
  bottom: 0;
  z-index: ${theme.layers.menu};

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6.8rem;
  padding: 1.6rem;

  background-color: ${theme.colors.darkPurple};

  @media (min-width: 769px) {
    display: none;
  }

  .button-mobile {
    max-width: 100%;
    height: 3.6rem;

    font-size: ${theme.font.sizes.font12};

    img {
      width: 1.6rem;
    }
  }
`

export const KacyAmount = styled.div`
  display: flex;
  align-items: center;
  height: 3.6rem;
  padding: 0.6rem;
  max-width: 100%;

  border: 0.1rem solid ${theme.colors.snow};
  border-radius: ${theme.border.radius};

  img {
    width: 2rem;
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
`

export const ButtonOptions = styled.button`
  width: 3.2rem;
  height: 3.2rem;

  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
`

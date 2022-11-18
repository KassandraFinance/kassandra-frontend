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
  margin-top: 3.2rem;
  max-width: 118.8rem;
  padding-inline: 2.4rem;

  z-index: ${theme.layers.menu};

  @media (max-width: 992px) {
    margin-top: 2.4rem;
  }

  @media (max-width: 576px) {
    padding-inline: 1.6rem;
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

export const Menu = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 3.2rem;

  @media (max-width: 992px) {
    gap: 1.6rem;
  }
`

interface IMenuLinkProps {
  active: boolean;
}

export const MenuLink = styled.a`
  position: relative;

  color: ${theme.colors.snow};
  font-size: ${theme.font.sizes.font16};
  text-decoration: none;
  text-align: center;

  outline: none;

  ${({ active }: IMenuLinkProps) => css`
    font-weight: ${active
      ? theme.font.weight.semibold
      : theme.font.weight.light};
  `}

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;

    left: 50%;
    width: 0;
    height: 0.2rem;

    background-color: ${theme.colors.cyan};
    border-radius: 0.1rem;
    box-shadow: 0 0 0.6rem ${theme.colors.cyan};

    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
    transition-property: width left;

    ${({ active }: IMenuLinkProps) => css`
      left: ${active ? '0' : '50%'};
      width: ${active ? '100%' : '0'};
    `}
  }

  &:hover::after {
    left: 0%;
    width: 100%;
  }

  @media (max-width: 576px) {
    font-size: ${theme.font.sizes.font14};
  }
`

export const MenuBottom = styled.div`
  @media (max-width: 576px) {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: ${theme.layers.menu};

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6.8rem;
    padding: 1.6rem;

    background-color: ${theme.colors.darkPurple};
  }

  .button-mobile {
    width: fit-content;
    padding: 1.2rem 2.4rem;

    font-size: ${theme.font.sizes.font14};
    font-weight: 400;

    img {
      width: 1.6rem;
    }
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
      /* outline-color: ${theme.colors.snow}; */
      outline: none;
    }
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    min-width: 12.5rem;
    min-height: 3.8rem;
  }

  @media (max-width: 576px) {
    flex-direction: row-reverse;
    justify-content: space-between;

    width: 100%;
  }
`

export const ButtonOptions = styled.button`
  display: none;

  width: 3.2rem;
  height: 3.2rem;

  background-color: rgba(255, 255, 255, 0.1);
  border: 0.1rem solid rgba(255, 255, 255, 0);
  border-radius: 50%;

  transition: border 300ms ease-in-out;

  cursor: pointer;

  &:hover {
    border: 0.1rem solid rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 576px) {
    display: block;
  }
`

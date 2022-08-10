import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  margin-top: 3.2rem;
  max-width: 114rem;

  z-index: ${theme.layers.menu};
  padding-inline: 2.4rem;

  @media (max-width: 960px) {
    margin-top: 2.4rem;
  }

  @media (max-width: 576px) {
    padding-inline: 1.6rem;
  }
`

export const LogoWrapper = styled.div`
  .logo-desktop {
    @media (max-width: 960px) {
      display: none;
    }
  }

  .logo-ipad {
    @media (min-width: 961px) {
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
    gap: 2.4rem;
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

// export const MenuLinkDisable = styled.a`
//   position: relative;

//   margin-right: 4.2rem;
//   padding-top: 1.2rem;
//   padding-bottom: 1.3rem;

//   color: ${theme.colors.grayDisabled};
//   font-size: ${theme.font.sizes.font16};
//   font-weight: ${theme.font.weight.light};
//   text-decoration: none;
//   text-align: center;

//   cursor: not-allowed;

//   &::after {
//     content: '';
//     position: absolute;
//     bottom: 0;

//     left: 50%;
//     width: 0;
//     height: 0.3rem;

//     background-color: ${theme.colors.grayDisabled};
//     border-radius: 0.15rem;

//     transition-duration: 300ms;
//     transition-timing-function: ease-in-out;
//     transition-property: width left;
//   }

//   &:hover::after {
//     left: 0%;
//     width: 100%;
//   }

//   @media (max-width: 768px) {
//     margin-right: 3.2rem;
//   }

//   @media (max-width: 541px) {
//     margin-right: 2rem;
//     font-size: ${theme.font.sizes.font14};
//   }

//   @media (max-width: 360px) {
//     margin-right: 1.4rem;
//     font-size: ${theme.font.sizes.font12};
//   }

//   img {
//     position: absolute;
//     right: -2rem;
//     top: 1.8rem;

//     @media (max-width: 540px) {
//       right: -1.6rem;
//       top: 1.7rem;
//     }
//     @media (max-width: 360px) {
//       top: 1.6rem;
//     }
//   }
// `

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
    padding: 1.2rem;

    font-size: ${theme.font.sizes.font12};

    img {
      width: 1.6rem;
    }
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;

  a {
    min-width: 12.5rem;
    min-height: 3.8rem;
  }
`

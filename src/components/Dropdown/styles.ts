import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

export const Dropdown = styled.div`
  position: relative;

  display: inline-block;

  &:hover,
  &:focus-within {
    img {
      transform: rotate(180deg);
    }

    button::after {
      content: '';
      position: absolute;
      bottom: 0;

      height: 0.4rem;

      border-radius: 0.3rem;
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
`

export const DropButton = styled.button`
  position: relative;

  display: inline-block;
  margin-right: 4.2rem;
  padding-top: 1.2rem;
  padding-bottom: 1.3rem;

  font-family: 'Rubik', sans-serif;
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};
  color: ${theme.colors.snow};
  text-transform: capitalize;

  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  img {
    position: absolute;
    right: -2rem;
    top: 1.8rem;

    transition: transform 300ms ease;

    @media (max-width: 540px) {
      right: -1.6rem;
      top: 1.7rem;
    }
    @media (max-width: 360px) {
      top: 1.6rem;
    }
  }

  @media (max-width: 768px) {
    margin-right: 3.2rem;
  }
  @media (max-width: 541px) {
    font-size: ${theme.font.sizes.font14};
    margin-right: 2rem;
  }
  @media (max-width: 360px) {
    font-size: ${theme.font.sizes.font12};
    margin-right: 1.4rem;
  }
`

interface IDropdownContentProps {
  isDropdown: boolean;
  adaptToResponsiveSize?: boolean;
}

// prettier-ignore
export const DropdownContent = styled.div<IDropdownContentProps>`
  position: absolute;
  left: 0rem;
  z-index: 1;

  display: ${props => (props.isDropdown ? 'block' : 'none')};
  min-width: fit-content;

  box-shadow: 0 0.8rem 1.6rem 0 rgba(0,0,0,0.2);
  background-color: #15161C;

  a {
    display: block;
    padding: 1.2rem 1.6rem;

    color: ${theme.colors.snow};
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    text-decoration: none;

    transition-duration: 200ms;

    &:hover {
      background-color: #3F1A38;
    }

    @media (max-width: 540px) {
      font-size: ${theme.font.sizes.font14};
    }

    @media (max-width: 380px) {
      font-size: ${theme.font.sizes.font12};
    }
  }

  @media (max-width: 960px) {
    left: 0;
  }

  ${({ adaptToResponsiveSize }) => css`
    @media (max-width: 768px) {
      left: ${adaptToResponsiveSize ? 'auto' : ''};
      right: ${adaptToResponsiveSize ? '0' : ''};
    }
  `}

  /* @media (max-width: 490px) {
    min-width: 13rem;
  }

  @media (max-width: 380px) {
    min-width: 11rem;
  } */
`

export const MenuLinkDisable = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.2rem 1.6rem;

  color: ${theme.colors.grayDisabled};
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};
  cursor: not-allowed;

  div {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 540px) {
    font-size: ${theme.font.sizes.font14};

    div {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  @media (max-width: 380px) {
    font-size: ${theme.font.sizes.font12};
  }
`

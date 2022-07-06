import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

export const Dropdown = styled.div`
  position: relative;

  display: inline-block;

  &:hover {
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

  img {
    position: absolute;
    right: -20px;
    top: 18px;

    transition: transform 300ms ease;

    @media (max-width: 540px) {
      right: -16px;
      top: 17px;
    }
    @media (max-width: 360px) {
      top: 16px;
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

// eslint-disable-next-line prettier/prettier
export const DropdownContent = styled.div<IDropdownContentProps>`
  position: absolute;
  left: 0rem;
  z-index: 1;

  display: ${props => (props.isDropdown ? 'block' : 'none')};
  min-width: 16rem;

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

  @media (max-width: 490px) {
    min-width: 13rem;
  }

  @media (max-width: 380px) {
    min-width: 11rem;
  }
`

/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import theme from '../../styles/theme'

export const Dropdown = styled.div`
  position: relative;

  display: inline-block;

  &:hover {
    button::after {
      content: '';
      position: absolute;
      display: block;
      height: 0.3rem;
      border-radius: 0.3rem;
      background-color: ${theme.colors.cyan};
      animation: hoverAnimation 0.2s forwards;
      margin-top: 12px;
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
  margin: 0.3rem ${theme.spacings.space24} 0;
  padding-top: 12px;
  padding-bottom: 12px;

  font-size: 16px;
  text-transform: capitalize;

  background-color: transparent;
  border: none;
  color: ${theme.colors.snow};

  @media (max-width: 960px) {
    margin: 0;
  }
  @media (max-width: 540px) {
    font-size: ${theme.font.sizes.font14};
  }
`

interface IDropdownContentProps {
  isDropdown: boolean
}

export const DropdownContent = styled.div<IDropdownContentProps>`
  position: absolute;
  left: 24px;
  z-index: 1;

  display: ${props => props.isDropdown ? 'block': 'none'};
  margin-top: 0.3rem;
  min-width: 160px;

  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  background-color: #15161C;

  a {
    display: block;
    padding: 12px 16px;

    @media (max-width: 540px) {
      font-size: ${theme.font.sizes.font14};
    }

    color: ${theme.colors.snow};
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    text-decoration: none;

    transition-duration: 200ms;
    &:hover {
      background-color: #3F1A38;
    }
  }

  @media (max-width: 960px) {
    left: 0;
  }
`

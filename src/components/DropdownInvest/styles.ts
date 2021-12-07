/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import theme from '../../styles/theme'

export const Dropdown = styled.div`
  display: inline-block;
  position: relative;

  &:hover {
    button::after {
      content: '';
      position: absolute;
      display: block;
      height: 0.3rem;
      border-radius: 0.15rem;
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
  border: none;
  background-color: transparent;
  display: inline-block;
  color: ${theme.colors.snow};
  font-size: 16px;
  margin: 0.3rem ${theme.spacings.space24} 0;
  padding: 12px;
`

interface IDropdownContentProps {
  isDropdown: boolean
}

export const DropdownContent = styled.div<IDropdownContentProps>`
  display: ${props => props.isDropdown ? 'block': 'none'};

  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  background-color: #15161C;
  margin-top: 0.3rem;

  position: absolute;

  min-width: 160px;
  z-index: 1;
  a {
    color: ${theme.colors.snow};
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    text-decoration: none;

    display: block;

    padding: 12px 16px;
    transition-duration: 200ms;
    &:hover {
      background-color: #3F1A38;
    }
  }
`

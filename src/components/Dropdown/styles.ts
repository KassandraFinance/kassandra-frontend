import styled from 'styled-components'
import theme from '../../styles/theme'

export const Dropdown = styled.div`
  position: relative;

  display: inline-block;

  &:hover {
    button::after {
      content: '';
      position: absolute;
      height: 0.3rem;

      display: block;
      margin-top: 1.2rem;

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
  margin: 0.3rem ${theme.spacings.space24} 0;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;

  font-size: ${theme.font.sizes.font16};
  color: ${theme.colors.snow};
  text-transform: capitalize;

  background-color: transparent;
  border: none;

  @media (max-width: 960px) {
    margin: 0;
  }
  @media (max-width: 540px) {
    font-size: ${theme.font.sizes.font14};
  }
`

interface IDropdownContentProps {
  isDropdown: boolean;
}

// eslint-disable-next-line prettier/prettier
export const DropdownContent = styled.div<IDropdownContentProps>`
  position: absolute;
  left: 2.4rem;
  z-index: 1;

  display: ${props => (props.isDropdown ? 'block' : 'none')};
  margin-top: 0.3rem;
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

  @media (max-width: 768px) {
    left: auto;
    right: 0;
  }

  @media (max-width: 490px) {
    min-width: 13rem;
  }

  @media (max-width: 380px) {
    min-width: 11rem;
  }
`

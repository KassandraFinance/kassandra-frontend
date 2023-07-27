import styled, { css } from 'styled-components'

interface IDropdownProps {
  isActive: boolean
}

export const DropdownMenu = styled.div`
  position: relative;

  display: inline-block;

  &:hover,
  &:focus-within {
    img {
      transform: rotate(180deg);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

// prettier-ignore
export const DropButton = styled.button<IDropdownProps>`
  ${({ theme, isActive }) => css`
    position: relative;

    display: flex;
    align-items: center;
    gap: 1rem;

    width: fit-content;

    color: ${theme.colors.snow};
    font-family: 'Rubik', sans-serif;
    font-weight: ${isActive ? theme.font.weight.semibold : theme.font.weight.light};
    font-size: ${theme.font.sizes.font16};
    text-transform: capitalize;

    background-color: transparent;
    border: none;

    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      left: ${isActive ? '0' : '50%'};
      bottom: -1rem;

      width: ${isActive ? '100%' : '0'};
      height: 0.2rem;

      background-color: ${theme.colors.cyan};
      border-radius: 0.1rem;
      box-shadow: 0 0 0.6rem ${theme.colors.cyan};

      transition-duration: 300ms;
      transition-timing-function: ease-in-out;
      transition-property: width left;
    }

    img {
      transition: transform 300ms ease;
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 2rem 2.4rem;

      font-weight: ${theme.font.weight.normal};
      font-size: ${theme.font.sizes.font14};
      letter-spacing: 0.05em;

      border-bottom: 0.1rem solid rgba(255, 255, 255, 0.15);

      &:after {
        left: 1rem;
        bottom: 50%;

        transform: translateY(50%);

        width: ${isActive ? '0.6rem' : '0'};
        height: ${isActive ? '0.6rem' : '0'};

        border-radius: 50%;
      }
    }
  `}
`

interface IMenuWrapperProps {
  isDropdown: boolean
  adaptToResponsiveSize?: boolean
}

// prettier-ignore
export const MenuWrapper = styled.div<IMenuWrapperProps>`
  ${({ isDropdown }) => css`
    position: absolute;
    left: -0.2rem;
    top: 2rem;
    z-index: 2;
    visibility: ${isDropdown ? 'visible' : 'hidden'};

    max-height: ${isDropdown ? '500px' : '0'};
    padding-top: 1.7rem;


    opacity: ${isDropdown ? '1' : '0'};

    overflow: hidden;

    transition-duration: 700ms;
    transition-timing-function: ease-in-out;
    transition-property: max-height opacity;

    @media (max-width: 768px) {
      position: static;

      padding: 0;
    }
  `}

  ${({ adaptToResponsiveSize }) => adaptToResponsiveSize && css`
    @media (max-width: 992px) {
      left: auto;
      right: 0;
    }
  `}
`

export const DropdownContent = styled.div`
  ${() => css`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    min-width: fit-content;
    padding: 1.6rem 2.4rem;

    background-color: rgba(255, 255, 255, 0.15);
    border: 0.1rem solid rgba(255, 255, 255, 0.08);
    box-shadow: 0rem 0.4rem 1.6rem rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(0.4rem);
    border-radius: 0.4rem;

    @media (max-width: 768px) {
      gap: 2rem;

      background-color: #3d3f43;
      border: none;
      border-radius: 0;

      &::before {
        content: '';
        position: absolute;
        top: -0.1rem;
        left: 0;

        width: 100%;
        height: 0.3rem;

        background: #22252b;
        filter: blur(4px);
      }

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;

        width: 100%;
        height: 0.3rem;

        background: #22252b;
        filter: blur(4px);
      }
    }
  `}
`

export const DropDownLink = styled.a`
  ${({ theme }) => css`
    position: relative;

    display: block;

    width: 100%;

    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    text-decoration: none;

    &::before {
      content: '';

      position: absolute;
      top: 50%;
      left: -1.2rem;
      transform: translateY(-50%);

      width: 0.6rem;
      height: 0.6rem;

      opacity: 0;
      background-color: rgba(38, 219, 219, 1);
      border-radius: 50%;
      box-shadow: 0 0 0.6rem rgba(38, 219, 219, 1);

      transition-duration: 300ms;
      transition-timing-function: ease-in-out;
      transition-property: opacity;
    }

    &:hover::before {
      opacity: 1;
    }

    @media (max-width: 768px) {
      min-width: 24.9rem;

      font-weight: ${theme.font.weight.normal};
      font-size: ${theme.font.sizes.font14};
      line-height: 100%;
      letter-spacing: 0.05em;
    }
  `}
`

export const MenuLinkDisable = styled.div`
  ${({ theme }) => css`
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
  `}
`

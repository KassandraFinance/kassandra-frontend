import styled, { css } from 'styled-components'
import { Overlay } from '@/components/Overlay/styles'

export const InputListIcon = styled.div`
  ${() => css`
    width: fit-content;

    ${Overlay} {
      background-color: transparent;
      backdrop-filter: blur(0);
    }
  `}
`

interface IDataListProps {
  height: number
  isOpen: boolean
}

export const Datalist = styled.ul<IDataListProps>`
  ${() => css`
    display: flex;
    flex-direction: column;
    overflow: hidden;

    width: 12rem;
    max-height: 3.4rem;
    border: 1px solid rgb(255 255 255 / 0.15);
    border-radius: 2px;

    background: rgb(255 255 255 / 0.04);

    transition-timing-function: ease;
    transition-duration: 500ms;
    transition-property: max-height;
    backdrop-filter: blur(70px);
  `}

  ${({ height, isOpen }) =>
    isOpen &&
    css`
      position: relative;
      z-index: 1050;

      max-height: ${2.8 * height + 3.2}rem;
    `}
`

interface IOptionProps {
  disabled?: boolean
}

export const Option = styled.li<IOptionProps>`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.8rem;

    padding: 1.2rem;

    background-color: rgb(255 255 255 / 0);

    font-size: 1.4rem;
    font-style: normal;
    font-weight: 300;
    line-height: 100%; /* 1.4rem */

    cursor: pointer;

    transition-timing-function: ease;
    transition-duration: 300ms;
    transition-property: background-color;

    &:first-of-type {
      padding: 1.2rem;
    }

    &:last-of-type {
      padding-bottom: 1.2rem;
    }

    &:hover {
      background-color: rgb(255 255 255 / 0.15);
    }
  `}
  ${({ theme, disabled }) =>
    disabled &&
    css`
      background-color: ${theme.colors.grayDisabled};

      pointer-events: none;
    `}
`

export const IconSmall = styled.div`
  ${() => css`
    position: relative;

    overflow: 'hidden';

    width: 1.6rem;
    height: 1.3rem;

    svg {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;
    }
  `}
`

export const IconBig = styled.div`
  position: relative;

  overflow: 'hidden';

  width: 1.6rem;
  height: 1.3rem;

  border: none;

  svg {
    position: absolute;
    top: 0;
    left: 0;

    width: 1.6rem;
    height: 1.3rem;
  }
`

export const Text = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 300;
    line-height: 100%;
  `}
`

interface IIconWrapperProps {
  isOpen: boolean
}

// prettier-ignore
export const IconWrapper = styled.div<IIconWrapperProps>`
  ${() => css`
    margin-left: auto;

    transition-timing-function: ease;
    transition-duration: 700ms;
    transition-property: transform;
  `}
  ${({ isOpen }) => isOpen && css`
    transform: rotate(180deg);
  `}
`

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    gap: 0.8rem;
  `}
`

export const TextContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;

    width: 100%;
  `}
`

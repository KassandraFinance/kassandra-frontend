import { device } from '@/styles/theme'
import styled, { css } from 'styled-components'

export const ViewButtonGroup = styled.div`
  ${() => css`
    width: 250px;
    max-height: 4.4rem;
    border-radius: 8px;
  `}
`

export const Title = styled.div`
  ${() => css`
    display: flex;
    gap: 0.4rem;
    justify-content: flex-start;
    align-items: center;

    > span {
      display: flex;
      align-items: center;
    }
  `}
`

export const TippyContent = styled.div`
  ${({ theme }) => css`
    padding: 0.8rem;
    border-radius: 4px;

    font-weight: 300;
    font-size: ${theme.font.sizes.font14};

    background-color: ${theme.colors.darkGray};
  `}
`

export const H2 = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.sizes.font12};
    line-height: ${theme.font.sizes.font12};
    letter-spacing: 0.165rem;
    text-transform: uppercase;
  `}
`

export const RadiosContainer = styled.div`
  ${() => css`
    position: relative;

    display: flex;
    justify-content: center;

    width: 100%;
    max-height: 4.4rem;
  `}
`

type SwitchProps = { position: 'right' | 'left' }

export const Switch = styled.div<SwitchProps>`
  ${({ theme, position }) => css`
    position: absolute;
    z-index: -1;

    display: block;

    width: 50%;
    height: 100%;
    border: 1px solid ${theme.colors.snow};
    border-radius: 4px;

    transition: all 0.3s linear;
    ${position === 'right' ? 'left: 50%;' : 'left: 0;'};
  `}
`

type InputWrapProps = {
  checked: boolean
}

export const Label = styled.label<InputWrapProps>`
  ${({ theme, checked }) => css`
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding-block: 1.2rem;
    border: 1px solid rgb(252 252 252 / 0.3);
    border-radius: 4px;

    color: ${checked ? theme.colors.snow : theme.colors.grayDisabled};
    font-size: ${theme.font.sizes.font14};
    font-weight: 400;
    text-align: center;

    cursor: pointer;

    transition: color 0.3s ease;

    svg {
      path {
        fill: ${checked ? theme.colors.snow : theme.colors.grayDisabled};

        transition: fill 0.3s ease-in-out;
      }
    }

    &:hover {
      color: ${theme.colors.white};

      > svg {
        path {
          fill: ${theme.colors.white};
        }
      }
    }

    &:nth-child(2) {
      border-right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:nth-child(3) {
      border-left: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    @media ${device.tabletSmall} {
      span {
        span {
          display: none;
        }
      }
    }

    @media ${device.mobile} {
      span {
        display: none;
      }
    }
  `}
`

export const Input = styled.input`
  ${() => css`
    appearance: none;
  `}
`

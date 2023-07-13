import { ThemingHelper } from '@/types/themingHelper'
import styled, { css } from 'styled-components'
import { IconButtonSizes } from '.'

type SizeVariants = ThemingHelper<IconButtonSizes>

const sizes: SizeVariants = {
  small: css`
    width: 2.4rem;
    height: 2.4rem;

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }

    img {
      width: 0.8rem !important;
      height: 0.8rem !important;
    }
  `,
  medium: css`
    width: 3.2rem;
    height: 3.2rem;

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }

    img {
      width: 1.2rem !important;
      height: 1.2rem !important;
    }
  `,
  large: css`
    width: 4rem;
    height: 4rem;

    svg {
      width: 2rem;
      height: 2rem;
    }

    img {
      width: 2rem !important;
      height: 2rem !important;
    }
  `
}

interface IIconButtonProps {
  size: IconButtonSizes
  disabled?: boolean
}

export const IconButton = styled.button<IIconButtonProps>`
  ${({ theme, size, disabled }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid rgba(255, 255, 255, 0);
    border-radius: 99999999px;

    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0.2rem 0.5rem rgb(0 112 240 / 0.07);

    cursor: pointer;

    transition: ${theme.transition.default};
    transition-property: background-color, border;

    ${sizes[size]}

    svg {
      fill: ${theme.colors.neutral95};

      transition: ${theme.transition.default};
    }

    ${!disabled &&
    css`
      &:hover:not(:disabled) {
        border: 1px solid rgba(255, 255, 255, 0.3);
      }

      &:focus-visible:not(:disabled) {
        border: 1px solid rgba(255, 255, 255, 0.3);
      }

      &:active:not(:disabled) {
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
    `}

    ${disabled &&
    css`
      border: 1px solid ${theme.colors.neutral95};

      background-color: ${theme.colors.white};

      cursor: not-allowed;
      pointer-events: none;

      svg {
        fill: ${theme.colors.neutral80};
      }
    `}
  `}
`

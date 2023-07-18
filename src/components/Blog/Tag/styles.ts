import styled, { css } from 'styled-components'
import { ThemeType } from '@/styles/theme'
import { ThemingHelper } from '@/types/themingHelper'
import { TagShapes, TagVariants, TagSizes, TagCapitalizations } from './index'

interface ITagProps {
  variant: TagVariants
  shape: TagShapes
  size: TagSizes
  capitalization?: TagCapitalizations
  as: 'label' | 'button' | 'a'
}

type SizesProps = ThemingHelper<TagSizes, [ThemeType]>
type VariantProps = ThemingHelper<TagVariants, [ThemeType]>
type ShapeProps = ThemingHelper<TagShapes>

const sizes: SizesProps = {
  small: theme => css`
    gap: 0.4rem;

    padding: 0.2rem 1.6rem;

    font: ${theme.font.text.textXs500};
    letter-spacing: 0.036rem;
  `,
  medium: theme => css`
    gap: 0.4rem;

    padding: 0.4rem 1.6rem;

    font: ${theme.font.text.textSm500};
    letter-spacing: 0.036rem;
  `,
  large: theme => css`
    gap: 0.8rem;

    padding: 0.8rem 1.6rem;

    font: ${theme.font.text.textSm500};
    letter-spacing: 0.042rem;
  `
}

const variants: VariantProps = {
  purple: theme => css`
    color: ${theme.colors.magenta};

    border: 1px solid rgba(232, 67, 196, 0.7);
    background: rgba(232, 67, 196, 0.15);

    svg {
      fill: ${theme.colors.magenta};
    }
  `,
  yellow: theme => css`
    color: ${theme.colors.white};

    background: rgba(255, 191, 0, 0.15);
    border: 1px solid rgba(255, 191, 0, 0.7);

    svg {
      fill: rgba(255, 191, 0, 0.7);
    }
  `,
  blue: theme => css`
    color: ${theme.colors.cyan};

    background: rgba(38, 219, 219, 0.15);
    border: 1px solid rgba(38, 219, 219, 0.7);

    svg {
      fill: ${theme.colors.cyan};
    }
  `,
  red: () => css`
    color: #e8372c;

    background: rgba(232, 55, 44, 0.15);
    border: 1px solid rgba(232, 55, 44, 0.7);

    svg {
      fill: #e8372c;
    }
  `,
  green: () => css`
    color: #2ce878;

    background: rgba(44, 232, 120, 0.15);
    border: 1px solid rgba(44, 232, 120, 0.7);

    svg {
      fill: #2ce878;
    }
  `,
  purpleGradient: () => css`
    color: #2ce878;

    background: rgba(232, 67, 196, 0.15);
    border: 1px solid;
    border-image: linear-gradient(134deg, #0c3ddc 0%, #e843c4 100%);

    svg {
      fill: #2ce878;
    }
  `,
  rainbow: () => css`
    color: #2ce878;

    background: rgba(232, 67, 196, 0.15);
    border: 1px solid;
    border-image: linear-gradient(90deg, #e843c4 0%, #ffbf00 100%);

    svg {
      fill: #2ce878;
    }
  `,
  gray: theme => css`
    color: ${theme.colors.snow};

    background: rgba(143, 143, 143, 0.15);
    border: 1px solid rgba(189, 189, 189, 0.7);

    svg {
      fill: ${theme.colors.snow};
    }
  `
}

const shapes: ShapeProps = {
  square: css`
    border-radius: 4px;
  `,
  rounded: css`
    border-radius: 99999999px;
  `
}

const buttonStyles = css`
  outline: none;

  cursor: pointer;
`

const buttonVariantStyles: VariantProps = {
  purple: () => css`
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      color: #1b1d22;

      background-color: #e843c4;
      border: 1px solid #e843c4;

      svg {
        fill: #1b1d22;
      }
    }
  `,
  yellow: () => css`
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      color: #1b1d22;

      background-color: #ffbf00;
      border: 1px solid #ffbf00;

      svg {
        fill: #1b1d22;
      }
    }
  `,
  blue: () => css`
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      color: #1b1d22;

      background-color: #26dbdb;
      border: 1px solid #26dbdb;

      svg {
        fill: #1b1d22;
      }
    }
  `,
  red: () => css`
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      color: #1b1d22;

      background-color: #e8372c;
      border: 1px solid #e8372c;

      svg {
        fill: #1b1d22;
      }
    }
  `,
  green: () => css`
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      color: #1b1d22;

      background-color: #2ce878;
      border: 1px solid #e8372c;

      svg {
        fill: #1b1d22;
      }
    }
  `,
  purpleGradient: theme => css`
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      color: ${theme.colors.snow};

      background: linear-gradient(134deg, #0c3ddc 0%, #e843c4 100%);
      border: 1px solid;
      border-image: linear-gradient(134deg, #0c3ddc 0%, #e843c4 100%);

      svg {
        fill: ${theme.colors.snow};
      }
    }
  `,
  rainbow: theme => css`
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      color: ${theme.colors.magenta};

      background: linear-gradient(90deg, #e843c4 0%, #ffbf00 100%);
      border: 1px solid #e843c4;

      svg {
        fill: ${theme.colors.magenta};
      }
    }
  `,
  gray: theme => css`
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      color: #1b1d22;

      background: ${theme.colors.grayDisabled};
      border: 1px solid ${theme.colors.grayDisabled};

      svg {
        fill: #1b1d22;
      }
    }
  `
}

export const Tag = styled.button<ITagProps>`
  ${({ theme, variant, shape, size, capitalization, as }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 0;

    line-height: 1.6rem;
    text-transform: ${capitalization ?? 'none'};
    white-space: nowrap;
    ${sizes[size](theme)};
    ${variants[variant](theme)};
    ${shapes[shape]}
    ${as !== 'label' && buttonStyles}
    ${as !== 'label' && buttonVariantStyles[variant](theme)}

    transition: all ${theme.transition.default};

    svg {
      width: 1.6rem;
      height: 1.6rem;

      transition: all ${theme.transition.default};
    }
  `}
`

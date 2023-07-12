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
  primary: theme => css`
    color: ${theme.colors.white};

    background-color: ${theme.colors.primary50};

    svg {
      fill: ${theme.colors.white};
    }
  `,
  secondary: theme => css`
    color: ${theme.colors.white};

    background-color: ${theme.colors.dark10};

    svg {
      fill: ${theme.colors.white};
    }
  `,
  tertiary: theme => css`
    color: ${theme.colors.neutral50};

    background-color: ${theme.colors.neutral95};

    svg {
      fill: ${theme.colors.neutral50};
    }
  `,
  green: theme => css`
    color: ${theme.colors.green50};

    background-color: ${theme.colors.green95};

    svg {
      fill: ${theme.colors.green50};
    }
  `,
  purple: theme => css`
    color: ${theme.colors.purple60};

    background-color: ${theme.colors.purple95};

    svg {
      fill: ${theme.colors.purple60};
    }
  `,
  lightBlue: theme => css`
    color: ${theme.colors.primary30};

    background-color: ${theme.colors.primary95};

    svg {
      fill: ${theme.colors.primary30};
    }
  `,
  red: theme => css`
    color: ${theme.colors.red50};

    background-color: ${theme.colors.red95};

    svg {
      fill: ${theme.colors.red50};
    }
  `,
  orange: theme => css`
    color: ${theme.colors.orange50};

    background-color: ${theme.colors.orange95};

    svg {
      fill: ${theme.colors.orange50};
    }
  `,
  darkOrange: theme => css`
    color: ${theme.colors.orange95};

    background-color: ${theme.colors.orange50};

    svg {
      fill: ${theme.colors.orange95};
    }
  `
}

const shapes: ShapeProps = {
  square: css`
    border-radius: 8px;
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
  primary: theme => css`
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      color: ${theme.colors.primary30};

      background-color: ${theme.colors.primary95};

      svg {
        fill: ${theme.colors.primary30};
      }
    }
  `,
  secondary: theme => css`
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      color: ${theme.colors.neutral98};

      background-color: ${theme.colors.neutral50};

      svg {
        fill: ${theme.colors.neutral98};
      }
    }
  `,
  tertiary: theme => css`
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      color: ${theme.colors.neutral95};

      background-color: ${theme.colors.neutral30};

      svg {
        fill: ${theme.colors.neutral95};
      }
    }
  `,
  green: theme => css`
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      color: ${theme.colors.green95};

      background-color: ${theme.colors.green50};

      svg {
        fill: ${theme.colors.green95};
      }
    }
  `,
  purple: theme => css`
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      color: ${theme.colors.purple95};

      background-color: ${theme.colors.purple60};

      svg {
        fill: ${theme.colors.purple95};
      }
    }
  `,
  lightBlue: theme => css`
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      color: ${theme.colors.white};

      background-color: ${theme.colors.primary50};

      svg {
        fill: ${theme.colors.white};
      }
    }
  `,
  red: theme => css`
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      color: ${theme.colors.red95};

      background-color: ${theme.colors.red50};

      svg {
        fill: ${theme.colors.red95};
      }
    }
  `,
  orange: theme => css`
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      color: ${theme.colors.orange95};

      background-color: ${theme.colors.orange50};

      svg {
        fill: ${theme.colors.orange95};
      }
    }
  `,
  darkOrange: theme => css`
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      color: ${theme.colors.orange50};

      background-color: ${theme.colors.orange95};

      svg {
        fill: ${theme.colors.orange50};
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

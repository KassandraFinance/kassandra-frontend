import React from 'react'
import Link from 'next/link'

import * as S from './styles'

export type TagVariants =
  | 'yellow'
  | 'blue'
  | 'red'
  | 'green'
  | 'purple'
  | 'purpleGradient'
  | 'rainbow'
  | 'gray'
export type TagShapes = 'square' | 'rounded'
export type TagSizes = 'small' | 'medium' | 'large'
export type TagCapitalizations = 'uppercase' | 'lowercase' | 'capitalize'

// I don't know how to get dynamic props to work when passing some prop
// so for know I'm using any for us to have some kind of autocompletion,
// not the ideal solution but it works for now.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ITagProps extends React.HTMLAttributes<any> {
  variant?: TagVariants
  shape?: TagShapes
  size?: TagSizes
  asLabel?: boolean
  href?: string
  isExternalLink?: boolean
  capitalization?: TagCapitalizations
  leftIcon?: JSX.Element
  children?: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Tag = React.forwardRef<any, ITagProps>(
  (
    {
      variant = 'purple',
      shape = 'square',
      size = 'medium',
      asLabel,
      href,
      isExternalLink,
      capitalization,
      leftIcon,
      children,
      ...rest
    },
    ref
  ) => {
    if (href && !isExternalLink && !asLabel) {
      return (
        <Link href={href} passHref>
          <S.Tag
            ref={ref}
            variant={variant}
            size={size}
            shape={shape}
            capitalization={capitalization}
            as="a"
            {...rest}
          >
            {leftIcon}
            {children}
          </S.Tag>
        </Link>
      )
    }

    if (href && isExternalLink && !asLabel) {
      return (
        <S.Tag
          ref={ref}
          variant={variant}
          size={size}
          shape={shape}
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {leftIcon}
          {children}
        </S.Tag>
      )
    }

    return (
      <S.Tag
        ref={ref}
        variant={variant}
        size={size}
        shape={shape}
        capitalization={capitalization}
        as={asLabel ? 'label' : 'button'}
        {...rest}
      >
        {leftIcon}
        {children}
      </S.Tag>
    )
  }
)

Tag.displayName = 'Tag'

import React from 'react'
import Link from 'next/link'

import theme from '@/styles/theme'

import * as S from './styles'

export type ThemeColors = keyof typeof theme.colors
export type IconButtonSizes = 'small' | 'medium' | 'large'

// I don't know how to get dynamic props to work when passing some prop
// so for know I'm using any for us to have some kind of autocompletion,
// not the ideal solution but it works for now.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface IIconButtonProps extends React.HTMLAttributes<any> {
  icon: React.ReactNode
  size?: IconButtonSizes
  href?: string
  isExternalLink?: boolean
  disabled?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconButton = React.forwardRef<any, IIconButtonProps>(
  ({ icon, size = 'large', href, isExternalLink, disabled, ...rest }, ref) => {
    if (href && !isExternalLink) {
      return (
        <Link href={href} passHref>
          <S.IconButton
            ref={ref}
            size={size}
            as="a"
            href={href}
            disabled={disabled}
            aria-disabled={disabled}
            {...rest}
          >
            {icon}
          </S.IconButton>
        </Link>
      )
    }

    if (href && isExternalLink) {
      return (
        <S.IconButton
          ref={ref}
          size={size}
          as="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          disabled={disabled}
          aria-disabled={disabled}
          {...rest}
        >
          {icon}
        </S.IconButton>
      )
    }

    return (
      <S.IconButton ref={ref} size={size} disabled={disabled} {...rest}>
        {icon}
      </S.IconButton>
    )
  }
)

IconButton.displayName = 'IconButton'

export default IconButton

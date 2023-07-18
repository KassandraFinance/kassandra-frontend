import React from 'react'
import Link from 'next/link'

import { ChevronIcon } from '@/Icons'

import * as S from './styles'

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'ghost'
export type ButtonSizes = 'small' | 'medium' | 'large'

// I don't know how to get dynamic props to work when passing some prop
// so for know I'm using any for us to have some kind of autocompletion,
// not the ideal solution but it works for now.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface IButtonProps extends React.HTMLAttributes<any> {
  children?: React.ReactNode
  variant: ButtonVariants
  size: ButtonSizes
  href?: string
  isExternalLink?: boolean
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
  hasRightChevron?: boolean
  disabled?: boolean
  // this prop is used for ghost buttons that should be blue
  isBlue?: boolean
  type?: 'button' | 'submit' | 'reset'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button = React.forwardRef<any, IButtonProps>(
  (
    {
      children,
      href,
      isExternalLink,
      rightIcon,
      leftIcon,
      hasRightChevron,
      type,
      isBlue,
      ...rest
    },
    ref
  ) => {
    const isLink = !!href && rest.variant === 'ghost'

    if (href && !isExternalLink) {
      return (
        <Link href={href} passHref>
          <S.ButtonWrapper
            {...rest}
            aria-disabled={rest.disabled ?? false}
            isLink={isLink}
            isBlue={isBlue}
            ref={ref}
            as="a"
          >
            {leftIcon}
            {children}
            {rightIcon}
            {hasRightChevron && <ChevronIcon className="chevron" />}
          </S.ButtonWrapper>
        </Link>
      )
    }

    if (href && isExternalLink) {
      return (
        <S.ButtonWrapper
          {...rest}
          aria-disabled={rest.disabled ?? false}
          ref={ref}
          isLink={isLink}
          isBlue={isBlue}
          as="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {leftIcon}
          {children}
          {rightIcon}
          {hasRightChevron && <ChevronIcon className="chevron" />}
        </S.ButtonWrapper>
      )
    }

    return (
      <S.ButtonWrapper
        {...rest}
        aria-disabled={rest.disabled ?? false}
        isLink={isLink}
        isBlue={isBlue}
        ref={ref}
        type={type ?? 'button'}
      >
        {leftIcon}
        {children}
        {rightIcon}
        {hasRightChevron && <ChevronIcon className="chevron" />}
      </S.ButtonWrapper>
    )
  }
)

Button.displayName = 'Button'

export default Button

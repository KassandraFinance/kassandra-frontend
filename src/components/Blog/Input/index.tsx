import React from 'react'
import type { InputHTMLAttributes } from 'react'

import * as S from './styles'

export type InputSize = 'xSmall' | 'small' | 'medium' | 'large'
export type InputVariant = 'outlined' | 'filled' | 'underlined'
export type InputRoundness = 'sharp' | 'small' | 'medium' | 'large'

interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize
  variant?: InputVariant
  rounded?: InputRoundness
  error?: boolean
  disabled?: boolean
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      size = 'medium',
      variant = 'outlined',
      rounded = 'medium',
      disabled,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <S.Input
        variantSize={size}
        variant={variant}
        rounded={rounded}
        error={error}
        disabled={!!disabled}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export default Input

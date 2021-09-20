/* eslint-disable react/react-in-jsx-scope */
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large' | 'huge'
  fullWidth?: boolean
  backgroundPrimary?: boolean
  backgroundSecondary?: boolean
  backgroundBlack?: boolean
  disabledNoEvent?: boolean
  as?: React.ElementType
  text?: string
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    size = 'medium',
    fullWidth = false,
    backgroundPrimary = false,
    backgroundSecondary = false,
    backgroundBlack = false,
    disabledNoEvent = false,
    text,

    ...props
  }
) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    backgroundPrimary={backgroundPrimary}
    backgroundSecondary={backgroundSecondary}
    backgroundBlack={backgroundBlack}
    disabledNoEvent={disabledNoEvent}
    disabled={disabledNoEvent}

    {...props}
  >
    {text || children}
  </S.Wrapper>
)

export default Button

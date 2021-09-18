/* eslint-disable react/react-in-jsx-scope */
import {  ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large' | 'huge'
  fullWidth?: boolean;
  backgroundPrimary?: boolean;
  backgroundSecondary?: boolean;
  backgroundBlack?: boolean;
  disabledNoEvent?: boolean;
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    size = 'medium',
    fullWidth = false,
    backgroundPrimary = false,
    backgroundSecondary = false,
    backgroundBlack = false,
    disabledNoEvent=false,

    ...props
  },
) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    backgroundPrimary={backgroundPrimary}
    backgroundSecondary={backgroundSecondary}
    backgroundBlack={backgroundBlack}
    disabledNoEvent={disabledNoEvent}
    {...props}
  >
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button

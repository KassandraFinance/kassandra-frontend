/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'claim' | 'medium' | 'large' | 'huge'
  fullWidth?: boolean;
  backgroundPrimary?: boolean;
  backgroundSecondary?: boolean;
  backgroundBlack?: boolean;
  disabledNoEvent?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
  text?: string;
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    icon,
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
    hasIcon={!!icon}
    backgroundPrimary={backgroundPrimary}
    backgroundSecondary={backgroundSecondary}
    backgroundBlack={backgroundBlack}
    disabledNoEvent={disabledNoEvent}
    disabled={disabledNoEvent}
    {...props}
  >
    {icon}
    {text}
  </S.Wrapper>
)

export default Button

/* eslint-disable react/react-in-jsx-scope */
import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large' | 'huge'
  fullWidth?: boolean
  minimal?: boolean
  backgroundPrimary?: boolean
  backgroundSecondary?: boolean
  backgroundBlack?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    icon,
    size = 'medium',
    fullWidth = false,
    minimal = false,
    backgroundPrimary = false,
    backgroundSecondary = false,
    backgroundBlack = false,

    ...props
  },
  ref
) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    ref={ref}
    backgroundPrimary={backgroundPrimary}
    backgroundSecondary={backgroundSecondary}
    backgroundBlack={backgroundBlack}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)

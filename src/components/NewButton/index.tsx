import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ISizeProps = 'small' | 'claim' | 'medium' | 'large' | 'huge'
export type IBackgroudProps =
  | 'primary'
  | 'secondary'
  | 'black'
  | 'white'
  | 'transparent'

export type ButtonProps = {
  text?: string
  as?: React.ElementType
  size?: ISizeProps
  background?: IBackgroudProps
  disabled?: boolean
  fullWidth?: boolean
  icon?: JSX.Element
} & ButtonTypes

const ButtonBase: React.ForwardRefRenderFunction<
  S.IWrapperProps,
  ButtonProps
> = (
  {
    icon,
    size = 'medium',
    background = 'default',
    fullWidth = false,
    disabled = false,
    text,
    ...props
  },
  ref
) => {
  return (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      background={background}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {text}
      {icon}
    </S.Wrapper>
  )
}

const NewButton = forwardRef(ButtonBase)

export default NewButton

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-expressions */
import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: JSX.Element
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  disabledNoEvent?: boolean;
  error?: string

} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onInput'>

interface ITextFieldProps {
  value: any

}

const TextField = ({
  icon,
  iconPosition = 'left',
  label,
  name,
  initialValue = '',
  error,
  disabled = false,
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  if (props.hidden) {
    return <S.Input
      type="text"
      hidden={props.hidden}
      onChange={onChange}
      value={value}
      iconPosition={iconPosition}
      disabled={disabled}
      name={name}
      {...(label ? { id: name } : {})}
      {...props}
    />
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon type='submit' iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField

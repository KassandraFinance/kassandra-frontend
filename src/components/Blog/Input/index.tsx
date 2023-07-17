import * as S from './styles'

interface IInputTextProps {
  form?: string
  name: string
  type: string
  value: string
  required?: boolean
  placeholder: string
  minLength?: number
  maxLength?: number
  label?: string
  error?: string
  readonly?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputText = ({
  form = undefined,
  name,
  type,
  value,
  required = false,
  placeholder,
  minLength,
  maxLength,
  label,
  error,
  readonly = false,
  onChange
}: IInputTextProps) => {
  return (
    <S.InputText>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}

      <S.InputContainer>
        <S.Input
          form={form}
          id={name}
          name={name}
          type={type}
          value={value ? value : ''}
          required={required}
          onChange={onChange}
          minLength={minLength}
          maxLength={maxLength}
          min={minLength}
          max={maxLength}
          step={0.1}
          readOnly={readonly}
        />

        <S.PlaceholderWrapper>
          <S.Placeholder>{placeholder}</S.Placeholder>
        </S.PlaceholderWrapper>

        <S.Error>{error}</S.Error>
      </S.InputContainer>
    </S.InputText>
  )
}

export default InputText

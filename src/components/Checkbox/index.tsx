import * as S from './styles'

interface ICheckboxProps {
  form?: string
  name: string
  checked: boolean
  label: string
  showLabel?: boolean
  required?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({
  form = undefined,
  name,
  checked,
  label,
  showLabel = true,
  required = false,
  onChange
}: ICheckboxProps) => {
  return (
    <S.Checkbox>
      <S.InputWrapper>
        <S.Input
          form={form}
          type="checkbox"
          id={name}
          name={name}
          checked={checked}
          required={required}
          onChange={onChange}
        />

        <S.Checkmark />
      </S.InputWrapper>

      {showLabel && <S.Label htmlFor={name}>{label}</S.Label>}
    </S.Checkbox>
  )
}

export default Checkbox

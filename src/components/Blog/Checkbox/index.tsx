import * as S from './styles'

export type CheckBoxSize = 'small' | 'medium'
export type CheckboxVariant = 'primary' | 'secondary'

type CheckboxProps = {
  label?: string
  checked?: boolean
  defaultChecked?: boolean
  toggleChecked?: (checked: boolean) => void
  disabled?: boolean
  labelClassName?: string
  size?: CheckBoxSize
  variant?: CheckboxVariant
}

export const Checkbox = ({
  label,
  checked,
  defaultChecked,
  toggleChecked,
  disabled,
  size = 'medium',
  variant = 'primary'
}: CheckboxProps) => {
  return (
    <S.Checkbox
      id={label}
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={toggleChecked}
      disabled={disabled}
      name={label}
      size={size}
      variant={variant}
      className="checkbox"
    >
      <S.CheckboxIndicator></S.CheckboxIndicator>
    </S.Checkbox>
  )
}

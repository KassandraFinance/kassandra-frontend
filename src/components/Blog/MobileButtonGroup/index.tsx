import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import type { SVGFuncElement } from '@/types/svg'

import { ChevronIcon } from '@/Icons'
import * as S from './styles'

export type ButtonGroupVariant = 'primary' | 'secondary'
export type ButtonGroupSize = 'small' | 'medium' | 'large'

type Option = {
  text?: string
  value: string
  leftIcon?: SVGFuncElement
  disabled?: boolean
}

interface IMobileButtonGroupTest<T extends Option[]>
  extends React.HTMLAttributes<HTMLDivElement> {
  // this adds autocomplete for options based on the values from the objects in the array
  selectedOption: T[number]['value']
  options: T
  children?: React.ReactNode
  variant?: ButtonGroupVariant
  size?: ButtonGroupSize
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
  withDropdownIndicator?: boolean
}

const MobileButtonGroup = <T extends Option[]>({
  options,
  selectedOption,
  children,
  variant = 'primary',
  size = 'large',
  leftIcon,
  rightIcon,
  withDropdownIndicator,
  ...rest
}: IMobileButtonGroupTest<T>) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
  const buttonGroupContainerRef = React.useRef<HTMLDivElement>(null)

  const selectedOptionsValuesIndex = options.findIndex(
    option => option.value === selectedOption
  )

  const SelectedOptionIcon =
    options[selectedOptionsValuesIndex]?.leftIcon ?? null

  return (
    <DropdownMenu.Root
      modal={false}
      open={isDropdownOpen}
      onOpenChange={setIsDropdownOpen}
    >
      <S.MobileButtonGroupContainer ref={buttonGroupContainerRef}>
        <DropdownMenu.Trigger asChild>
          <S.MobileButtonGroupItem
            isDropdownOpen={isDropdownOpen}
            disabled={selectedOption === '' ? true : false}
            variant={variant}
            size={size}
            isSelected
          >
            {leftIcon}
            {SelectedOptionIcon && <SelectedOptionIcon />}
            <span>
              {options[selectedOptionsValuesIndex]?.text ?? options[0].text}
            </span>
            {withDropdownIndicator && (
              <ChevronIcon
                className="dropdown-indicator"
                style={{
                  transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0)'
                }}
              />
            )}
            {rightIcon}
          </S.MobileButtonGroupItem>
        </DropdownMenu.Trigger>
      </S.MobileButtonGroupContainer>
      <DropdownMenu.Portal container={buttonGroupContainerRef.current}>
        <S.DropdownMenuContent
          side="bottom"
          style={{ width: buttonGroupContainerRef.current?.offsetWidth }}
          {...rest}
        >
          {children}
        </S.DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

interface IMobileButtonGroupItemProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  isSelected?: boolean
  isDropdownOpen?: boolean
  disabled?: boolean
  variant?: ButtonGroupVariant
  size?: ButtonGroupSize
  leftIcon?: JSX.Element
}

const MobileButtonGroupItem = ({
  children,
  isSelected,
  isDropdownOpen,
  disabled,
  variant = 'primary',
  size = 'large',
  leftIcon,
  ...rest
}: IMobileButtonGroupItemProps) => {
  return (
    <S.DropdownMenuItem asChild>
      <S.MobileButtonGroupItem
        isDropdownOpen={isDropdownOpen}
        isSelected={isSelected}
        disabled={disabled}
        variant={variant}
        size={size}
        {...rest}
      >
        {leftIcon}
        {children}
      </S.MobileButtonGroupItem>
    </S.DropdownMenuItem>
  )
}

MobileButtonGroup.Item = MobileButtonGroupItem

export default MobileButtonGroup

import React from 'react'
import BigNumber from 'bn.js'

import { Input } from './styles'

interface IInputProps {
  max: string;
  decimals: BigNumber;
  inputRef: React.RefObject<HTMLInputElement>;
  setInputValue: React.Dispatch<React.SetStateAction<BigNumber>>;
}

const InputTokenValue = ({
  max,
  decimals,
  inputRef,
  setInputValue
}: IInputProps) => {
  return (
    <Input
      ref={inputRef}
      type="number"
      placeholder="0"
      step="any"
      min="0"
      max={max}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        // don't allow negative numbers
        if (e.key === '-') {
          e.preventDefault()
        }
        // Blink bug makes the value come empty if pressing the decimal symbol that is not that of the current locale
        else if (e.key === '.' || e.key === ',') {
          // first time value will be ok, if pressing twice it zeroes, we ignore those
          if (target.value.length > 0 && target.value.search(/[,.]/) === -1) {
            target.dataset.lastvalue = target.value
          }
        }
        else if (e.key === 'Backspace' || e.key === 'Delete') {
          target.dataset.lastvalue = '0'
        }
      }}
      onChange={
        (e: React.ChangeEvent<HTMLInputElement>) => {
          let { value } = e.target

          if (value.length === 0) {
            value = e.target.dataset.lastvalue as string
          }
          else if (value[0] === '0') {
            e.target.value = value.replace(/^0+/, '')
          }

          const decimalsNum = decimals.toNumber()
          const values = value.split('.')
          const paddedRight = `${values[0]}${
            `${values[1] || 0}${'0'.repeat(decimalsNum)}`.slice(0, decimalsNum)
          }`

console.log(paddedRight)
          setInputValue(new BigNumber(paddedRight))
        }
      }
    />
  )
}

export default InputTokenValue;

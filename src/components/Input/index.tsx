import React from 'react'
import * as S from './styles'

interface InputProps {
  type: React.InputHTMLAttributes<HTMLInputElement>['type']
  placeholder: string
}

export default function Input({ type, placeholder, ...rest }: InputProps) {
  return <S.Input type={type} placeholder={placeholder} {...rest} />
}

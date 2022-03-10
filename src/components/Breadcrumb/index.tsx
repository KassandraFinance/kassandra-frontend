import { ReactNode } from 'react'

import * as S from './styles'

import Image from 'next/image'

interface IBreadcrumbProps {
  children: ReactNode;
}

const Breadcrumb = ({ children }: IBreadcrumbProps) => {
  return (
    <S.Breadcrumb>
      <Image
        src="/assets/icons/arrow-left.svg"
        alt="Arrow Left Icon"
        width={12}
        height={12}
      />
      {children}
    </S.Breadcrumb>
  )
}

export default Breadcrumb

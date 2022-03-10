import Link from 'next/link'
import { ReactNode } from 'react'

import * as S from './styles'

interface IBreadcrumbItemProps {
  href: string;
  children: ReactNode;
  isLastPage?: boolean;
}

const BreadcrumbItem = ({
  href,
  children,
  isLastPage
}: IBreadcrumbItemProps) => {
  return (
    <S.BreadcrumbItem>
      <Link href={href} passHref>
        <a className={isLastPage ? 'active' : ''}>{children}</a>
      </Link>
      {isLastPage ? null : <span>/</span>}
    </S.BreadcrumbItem>
  )
}

export default BreadcrumbItem

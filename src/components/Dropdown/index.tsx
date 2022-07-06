import React from 'react'
import Link from 'next/link'

import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'

import * as S from './styles'

interface ILinkPage {
  name: string;
  href: string;
}

interface IDropdownProps {
  nameOnHeader: string;
  linkPage: Array<ILinkPage>;
  adaptToResponsiveSize?: boolean;
}

const Dropdown = ({
  nameOnHeader,
  linkPage,
  adaptToResponsiveSize
}: IDropdownProps) => {
  const [isDropdown, setIsDropdown] = React.useState<boolean>(false)
  const { trackEventFunction } = useMatomoEcommerce()

  return (
    <S.Dropdown>
      <S.DropButton
        onTouchStartCapture={() => setIsDropdown(true)}
        onMouseOver={() => setIsDropdown(true)}
        onMouseOut={() => setIsDropdown(false)}
      >
        {nameOnHeader}
      </S.DropButton>
      <S.DropdownContent
        onMouseOver={() => setIsDropdown(true)}
        onMouseOut={() => setIsDropdown(false)}
        isDropdown={isDropdown}
        adaptToResponsiveSize={adaptToResponsiveSize}
      >
        {linkPage.map((item, index) => (
          <Link key={index} href={item.href}>
            <a
              onClick={() =>
                trackEventFunction(
                  'click-on-link',
                  `${item.name}`,
                  `header-${nameOnHeader}`
                )
              }
            >
              {item.name}
            </a>
          </Link>
        ))}
      </S.DropdownContent>
    </S.Dropdown>
  )
}

export default Dropdown

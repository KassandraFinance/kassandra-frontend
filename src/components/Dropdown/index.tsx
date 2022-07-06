import React from 'react'
import Link from 'next/link'

import { useMatomo } from '@datapunt/matomo-tracker-react'

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
  const { trackEvent } = useMatomo()

  function clickMatomoEvent(action: string, name: string) {
    trackEvent({
      category: `header-${nameOnHeader}`,
      action,
      name
    })
  }

  return (
    <S.Dropdown>
      <S.DropButton
        onTouchStartCapture={() => setIsDropdown(true)}
        onMouseOver={() => setIsDropdown(true)}
        onMouseOut={() => setIsDropdown(false)}
      >
        {nameOnHeader}
        <img src="/assets/utilities/arrow-down-thin.svg" />
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
              onClick={() => clickMatomoEvent('click-on-link', `${item.name}`)}
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

import React from 'react'
import Link from 'next/link'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import * as S from './styles'

const DropdownInvest = () => {
  const [isDropdown, setIsDropdown] = React.useState<boolean>(false)
  const { trackEvent } = useMatomo()

  function clickMatomoEvent(action: string, name: string) {
    trackEvent({
      category: 'header-invest',
      action,
      name
    })
  }

  return (
    <S.Dropdown>
      <S.DropButton
        onMouseOver={() => setIsDropdown(true)}
        onMouseOut={() => setIsDropdown(false)}
      >
        Invest
      </S.DropButton>
      <S.DropdownContent
        onMouseOver={() => setIsDropdown(true)}
        onMouseOut={() => setIsDropdown(false)}
        isDropdown={isDropdown}
      >
        <Link href="/products/ahype">
          <a onClick={() => clickMatomoEvent('click-on-link', 'ahype')}>
            aHYPE
          </a>
        </Link>
      </S.DropdownContent>
    </S.Dropdown>
  )
}

export default DropdownInvest

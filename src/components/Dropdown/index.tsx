import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'

import pickaxe from '../../../public/assets/icons/pickaxe.svg'

import * as S from './styles'

interface ILinkPage {
  name: string;
  href: string;
  disabled?: boolean;
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
        onMouseOut={(event: any) => {
          setIsDropdown(false), event.target.blur()
        }}
        onKeyPress={event =>
          event.key === 'Enter' && setIsDropdown(!isDropdown)
        }
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
          <div key={index}>
            {!item.disabled ? (
              <Link href={item.href}>
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
            ) : (
              <S.MenuLinkDisable>
                <span>{item.name}</span>
                <div>
                  <Image src={pickaxe} />
                </div>
              </S.MenuLinkDisable>
            )}
          </div>
        ))}
      </S.DropdownContent>
    </S.Dropdown>
  )
}

export default Dropdown

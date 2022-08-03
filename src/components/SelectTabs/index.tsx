import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'

import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'

import * as S from './styles'

type tabs = {
  text: string,
  asPathText: string,
  icon: StaticImageData
}

interface ISelectTabsProps {
  tabs: tabs[];
  isSelect: string | string[] | undefined;
  setIsSelect: React.Dispatch<
    React.SetStateAction<string | string[] | undefined>
  >;
}

const SelectTabs = ({ tabs, isSelect, setIsSelect }: ISelectTabsProps) => {
  const router = useRouter()
  const { trackEventFunction } = useMatomoEcommerce()
  function handleClickTab(tabSelect: string) {
    setIsSelect(tabSelect)

    router.push(
      {
        pathname: `${router.pathname}`,
        query: { ...router.query, tab: `${tabSelect}` }
      },
      undefined,
      { scroll: false }
    )
  }

  return (
    <S.TabsContainer>
      {tabs.map(item => (
        <S.TabsButton
          type="button"
          key={item.text + 1}
          onClick={() => {
            trackEventFunction(
              'click-on-button',
              item.asPathText,
              'profile-tabs'
            )
            handleClickTab(item.asPathText)
          }}
          isActiveTab={item.asPathText === isSelect}
        >
          <span>
            <Image src={item.icon} width={16} height={16} layout="fixed" />
          </span>
          {item.text}
        </S.TabsButton>
      ))}
    </S.TabsContainer>
  )
}

export default SelectTabs

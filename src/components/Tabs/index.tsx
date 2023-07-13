import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'

import * as S from './styles'

type tabs = {
  text: string
  asPathText: string
  icon?: StaticImageData
  svg?: JSX.Element
}

interface ISelectTabsProps {
  tabs: tabs[]
}

export const Tabs = ({ tabs }: ISelectTabsProps) => {
  const router = useRouter()
  function handleClickTab(tabSelect: string) {
    router.push(
      {
        pathname: `${router.pathname}`,
        query: { ...router.query, tab: `${tabSelect}` }
      },
      undefined,
      { scroll: false, shallow: true }
    )
  }

  return (
    <S.TabsContainer>
      {tabs.map(item => (
        <S.TabsButton
          type="button"
          key={item.text + 1}
          onClick={() => {
            handleClickTab(item.asPathText)
          }}
          isActiveTab={item.asPathText === router.query?.tab}
        >
          <span>
            {item.svg ? (
              item.svg
            ) : (
              <Image
                src={item?.icon || ''}
                width={16}
                height={16}
                layout="fixed"
              />
            )}
          </span>
          {item.text}
        </S.TabsButton>
      ))}
    </S.TabsContainer>
  )
}
